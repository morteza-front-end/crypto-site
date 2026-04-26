export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const limit = Number(query.limit) || 50
  const sort = (query.sort as string) || 'volume_24h'
  const sortDir = (query.sort_dir as string) || 'desc'

  try {
    const response = await $fetch<{ data: any[]; status: { error_code: number; error_message: string } }>(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        params: {
          limit: Math.min(limit, 100),
          sort,
          sort_dir: sortDir,
          convert: 'USD',
        },
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
      message: error.data?.status?.error_message || 'Failed to fetch market listings',
    })
  }
})
