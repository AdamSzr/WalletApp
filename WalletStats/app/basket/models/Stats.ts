export class Popularity {
  productId: number
  count: number

  public static default() {
    const c = new Popularity()
    c.count = 0
    c.productId = 0
    return c
  }
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

  public static default() {
    const stats = new Stats()
    stats.mostPopular = Popularity.default()
    stats.avgPerDay = 0
    stats.prodCount = 0
    stats.mostExpensiveBasketId = 0
    stats.lastMonthBasketCount = 0
    stats.avgPerBasket = 0
    stats.cheapestBasketId = 0
    stats.mostExpensiveProdId = 0
    stats.cheapestProdId = 0
    return stats
  }
}
