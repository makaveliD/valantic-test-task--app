(async function () {
  try {
    const response = await fetch('/apps/valantic_task_task_app/get_active_products_count', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    const parsedResponse = await response.json()
    if (!response.ok) {
      throw Error(parsedResponse.message)
    }
    const productCount = parsedResponse.count;
    console.log(`Active products: ${productCount}`)
  } catch (e) {
    console.error(`Error during fetch of active products count: ${e}`)
  }
})();

