export class Popularity {
  productId: number
  count: number
}

export class Stats {
  mostPopular: Popularity
  avgPerDay: number
  prodCount: number
  mostExpensiveBasketId: number
  lastMonthBasketCount: number
  avgPerBasket: number
  cheapestBasketId: number
  mostExpensiveProdId: number
  cheapestProdId: number
}
