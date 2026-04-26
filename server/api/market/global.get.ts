export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch<{
      data: {
        total_cryptocurrencies: number
        total_market_cap: { [key: string]: number }
        total_volume_24h: { [key: string]: number }
        btc_dominance: number
        eth_dominance: number
        active_market_pairs: number
      }
      status: { error_code: number; error_message: string }
    }>(
      'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest',
      {
        params: { convert: 'USD' },
        headers: {
          'X-CMC_PRO_API_KEY': config.coinmarketcapApiKey,
          'Accept': 'application/json',
        },
      }
    )

    if (response.status.error_code !== 0) {
      throw createError({
        statusCode: response.status.error_code,
        message: response.status.error_message,
      })
    }

    return response.data
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.status?.error_message || 'Failed to fetch global metrics',
    })
  }
})
