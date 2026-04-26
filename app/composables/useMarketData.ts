import { useQuery } from '@tanstack/vue-query'
import type { CMCCoin, CoinDisplay, CoinTopDisplay, GlobalMetrics } from '~/types/market'
import { formatPrice, formatCompactVolume, formatChange } from '~/utils/format'
import { useBinanceWebSocket } from './useBinanceWebSocket'

function getIconUrl(id: number): string {
  return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`
}

export function useMarketListings(limit: number = 20) {
  const config = useRuntimeConfig()
  const wsEnabled = config.public.enableWebSocket

  return useQuery<CMCCoin[]>({
    queryKey: ['market-listings', limit],
    queryFn: () => $fetch<CMCCoin[]>('/api/market/listings', {
      params: { limit, sort: 'volume_24h', sort_dir: 'desc' },
    }),
    refetchInterval: wsEnabled ? 300000 : 30000,
    staleTime: wsEnabled ? 240000 : 20000,
  })
}

export function useGlobalMetrics() {
  const config = useRuntimeConfig()
  const wsEnabled = config.public.enableWebSocket

  return useQuery<GlobalMetrics>({
    queryKey: ['global-metrics'],
    queryFn: () => $fetch<GlobalMetrics>('/api/market/global'),
    refetchInterval: wsEnabled ? 300000 : 60000,
    staleTime: wsEnabled ? 240000 : 50000,
  })
}

export function useCoinDisplayData(limit: number = 8) {
  const { data, isLoading, error } = useMarketListings(limit)
  const { getPrice, isEnabled } = useBinanceWebSocket()

  function buildCoinDisplay(coin: CMCCoin, hot?: boolean): CoinDisplay {
    const ws = getPrice(coin.symbol)
    const price = ws?.price ?? coin.quote.USD.price
    const change = ws?.change24h ?? coin.quote.USD.percent_change_24h
    const volume = ws?.quoteVolume ?? coin.quote.USD.volume_24h

    return {
      id: coin.id,
      name: coin.name,
      symbol: `${coin.symbol}/USDT`,
      iconUrl: getIconUrl(coin.id),
      price: formatPrice(price),
      volume: formatCompactVolume(volume),
      change: formatChange(change),
      changeRaw: change,
      rank: coin.cmc_rank,
      hot,
    }
  }

  function buildCoinTopDisplay(coin: CMCCoin): CoinTopDisplay {
    const ws = getPrice(coin.symbol)
    const price = ws?.price ?? coin.quote.USD.price
    const change = ws?.change24h ?? coin.quote.USD.percent_change_24h

    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      iconUrl: getIconUrl(coin.id),
      price: formatPrice(price),
      change: formatChange(change),
      changeRaw: change,
    }
  }

  const topVolumeCoins = computed<CoinDisplay[]>(() => {
    if (!data.value) return []
    return data.value.slice(0, limit).map((c, i) =>
      buildCoinDisplay(c, i < 3)
    )
  })

  const hotCoins = computed<CoinDisplay[]>(() => {
    if (!data.value) return []
    return [...data.value]
      .filter(c => c.quote.USD.percent_change_24h > 0)
      .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
      .slice(0, limit)
      .map(c => buildCoinDisplay(c))
  })

  const topGainers = computed<CoinTopDisplay[]>(() => {
    if (!data.value) return []
    return [...data.value]
      .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
      .slice(0, 3)
      .map(c => buildCoinTopDisplay(c))
  })

  const topLosers = computed<CoinTopDisplay[]>(() => {
    if (!data.value) return []
    return [...data.value]
      .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
      .slice(0, 3)
      .map(c => buildCoinTopDisplay(c))
  })

  const headerCoins = computed<CoinDisplay[]>(() => {
    if (!data.value) return []
    return data.value.slice(0, 5).map((c, i) =>
      buildCoinDisplay(c, i < 3)
    )
  })

  return {
    data,
    isLoading,
    error,
    topVolumeCoins,
    hotCoins,
    topGainers,
    topLosers,
    headerCoins,
    wsEnabled: isEnabled,
  }
}
