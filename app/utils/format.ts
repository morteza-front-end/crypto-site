export function formatPrice(price: number): string {
  if (price >= 1) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(price)
}

export function formatVolume(volume: number): string {
  if (volume >= 1_000_000_000_000) {
    return `$${(volume / 1_000_000_000_000).toFixed(2)}T`
  }
  if (volume >= 1_000_000_000) {
    return `$${(volume / 1_000_000_000).toFixed(2)}B`
  }
  if (volume >= 1_000_000) {
    return `$${(volume / 1_000_000).toFixed(2)}M`
  }
  if (volume >= 1_000) {
    return `$${(volume / 1_000).toFixed(2)}K`
  }
  return `$${volume.toFixed(2)}`
}

export function formatCompactVolume(volume: number): string {
  if (volume >= 1_000_000_000) {
    return `${(volume / 1_000_000_000).toFixed(2)}B`
  }
  if (volume >= 1_000_000) {
    return `${(volume / 1_000_000).toFixed(2)}M`
  }
  if (volume >= 1_000) {
    return `${(volume / 1_000).toFixed(2)}K`
  }
  return volume.toFixed(2)
}

export function formatChange(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(2)}%`
}

export function formatMarketCap(cap: number): string {
  if (cap >= 1_000_000_000_000) {
    return `$${(cap / 1_000_000_000_000).toFixed(2)}T`
  }
  if (cap >= 1_000_000_000) {
    return `$${(cap / 1_000_000_000).toFixed(2)}B`
  }
  if (cap >= 1_000_000) {
    return `$${(cap / 1_000_000).toFixed(2)}M`
  }
  return `$${cap.toLocaleString()}`
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}
