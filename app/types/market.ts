export interface CMCCoin {
  id: number
  name: string
  symbol: string
  slug: string
  cmc_rank: number
  num_market_pairs: number
  quote: {
    USD: {
      price: number
      volume_24h: number
      volume_change_24h: number
      percent_change_1h: number
      percent_change_24h: number
      percent_change_7d: number
      market_cap: number
      market_cap_dominance: number
      fully_diluted_market_cap: number
      last_updated: string
    }
  }
}

export interface CoinDisplay {
  id: number
  name: string
  symbol: string
  iconUrl: string
  price: string
  volume: string
  change: string
  changeRaw: number
  rank: number
  hot?: boolean
}

export interface CoinTopDisplay {
  id: number
  name: string
  symbol: string
  iconUrl: string
  price: string
  change: string
  changeRaw: number
}

export interface GlobalMetrics {
  total_cryptocurrencies: number
  total_market_cap: { [key: string]: number }
  total_volume_24h: { [key: string]: number }
  btc_dominance: number
  eth_dominance: number
  active_market_pairs: number
}
