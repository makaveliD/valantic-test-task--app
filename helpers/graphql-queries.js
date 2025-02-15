export const GET_ACTIVE_PRODUCTS_COUNT_QUERY = `#graphql
  query {
    productsCount(query: "status:'active'") {
      count
    }
  }`
