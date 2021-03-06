import Chance from "chance"

const chance = new Chance()

class Popularity {
  productId: number
  count: number

  public static create() {
    const x = new Popularity()
    x.count = chance.integer({ min: 3, max: 100 })
    x.productId = chance.integer({ min: 0, max: 100 })
    return x
  }

  public static default() {
    const x = new Popularity()
    x.count = 0
    x.productId = 0
    return x
  }
}

class Stats {
  mostPopular: Popularity
  avgPerDay: number
  prodCount: number
  mostExpensiveBasketId: number
  lastMonthBasketCount: number
  avgPerBasket: number
  cheapestBasketId: number
  mostExpensiveProdId: number
  cheapestProdId: number

  public validate() {}

  public static create() {
    const x = new Stats()
    x.mostPopular = Popularity.create()
    x.avgPerDay = chance.floating({ min: 10, max: 45 })
    x.prodCount = chance.integer({ min: 200, max: 2000 })
    x.mostExpensiveBasketId = chance.integer({ min: 0, max: 10_000 })
    x.lastMonthBasketCount = chance.integer({ min: 8, max: 60 })
    x.avgPerBasket = chance.floating({ min: 20, max: 300 })
    x.cheapestBasketId = chance.integer({ min: 0, max: 10_000 })
    x.mostExpensiveProdId = chance.integer({ min: 0, max: 10_000 })
    x.cheapestProdId = chance.integer({ min: 0, max: 10_000 })
    return x
  }

  public static default() {
    const x = new Stats()
    x.mostPopular = Popularity.default()
    x.avgPerDay = 0
    x.prodCount = 0
    x.mostExpensiveBasketId = 0
    x.lastMonthBasketCount = 0
    x.avgPerBasket = 0
    x.cheapestBasketId = 0
    x.mostExpensiveProdId = 0
    x.cheapestProdId = 0
    return x
  }
}

export default Stats
