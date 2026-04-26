import { ref, reactive, onUnmounted } from 'vue'

export interface WsTickerData {
  price: number
  change24h: number
  volume24h: number
  quoteVolume: number
  high24h: number
  low24h: number
}

const tickerMap = reactive(new Map<string, WsTickerData>())
const connected = ref(false)
let ws: WebSocket | null = null
let reconnectTimer: ReturnType<typeof setTimeout> | null = null
let reconnectAttempts = 0
let consumers = 0
let enabled = false

function connect() {
  if (ws && ws.readyState <= WebSocket.OPEN) return

  ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr')

  ws.onopen = () => {
    connected.value = true
    reconnectAttempts = 0
  }

  ws.onmessage = (event) => {
    try {
      const tickers: any[] = JSON.parse(event.data)
      for (const t of tickers) {
        if (t.s && t.s.endsWith('USDT')) {
          const symbol = t.s.replace('USDT', '')
          tickerMap.set(symbol, {
            price: parseFloat(t.c),
            change24h: parseFloat(t.P),
            volume24h: parseFloat(t.v),
            quoteVolume: parseFloat(t.q),
            high24h: parseFloat(t.h),
            low24h: parseFloat(t.l),
          })
        }
      }
    } catch {
      // ignore parse errors
    }
  }

  ws.onclose = () => {
    connected.value = false
    if (consumers > 0 && enabled) {
      const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000)
      reconnectAttempts++
      reconnectTimer = setTimeout(connect, delay)
    }
  }

  ws.onerror = () => {
    ws?.close()
  }
}

function disconnect() {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer)
    reconnectTimer = null
  }
  ws?.close()
  ws = null
  connected.value = false
  tickerMap.clear()
}

export function useBinanceWebSocket() {
  const config = useRuntimeConfig()
  const wsEnabled = config.public.enableWebSocket

  consumers++

  if (import.meta.client && wsEnabled && consumers === 1 && !enabled) {
    enabled = true
    connect()
  }

  onUnmounted(() => {
    consumers--
    if (consumers <= 0) {
      consumers = 0
      disconnect()
      enabled = false
    }
  })

  function getPrice(symbol: string): WsTickerData | undefined {
    if (!wsEnabled) return undefined
    return tickerMap.get(symbol)
  }

  return {
    prices: tickerMap,
    isConnected: connected,
    getPrice,
    isEnabled: wsEnabled,
  }
}
