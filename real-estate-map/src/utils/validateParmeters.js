function getParamsTypes(params) {
  if (!params) return []
  return params.split(',')
}

function getParamsPrices(price) {
  if (!price) return [0, 15000]

  const prices = price.split(',')

  if (prices.length !== 2) return [0, 15000]

  return prices.map((el) => {
    return parseIntParams(el)
  })
}

function getParamsNumber(number) {
  if (!number) return null
  return parseIntParams(number)
}

function parseIntParams(number) {
  const parsed = Number.parseInt(number)
  return Number.isNaN(parsed) ? 0 : parsed
}

export { getParamsNumber, getParamsPrices, getParamsTypes }
