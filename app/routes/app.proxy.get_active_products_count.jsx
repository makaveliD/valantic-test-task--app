import { authenticate } from '../shopify.server'
import { GET_ACTIVE_PRODUCTS_COUNT_QUERY } from '../../helpers/graphql-queries.js'

export const loader = async ({ request }) => {
  const { admin } = await authenticate.public.appProxy(request)
  try {
    const response = await admin.graphql(
      GET_ACTIVE_PRODUCTS_COUNT_QUERY,
    )
    const data = await response.json()
    const count = data?.data?.productsCount?.count || 0
    return {
      count,
    }
  } catch (e) {
    throw Response.json({
      message: 'Failed to fetch active products count',
    }, { status: 400 })
  }
}
