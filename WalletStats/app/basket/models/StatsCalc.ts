import Basket from "app/basket/models/Basket"
import getBaskets from "app/basket/queries/getBaskets"
import { RandomInt } from "app/core/utils/base"
import { BlitzApiHandler, Middleware, useQuery } from "blitz"
import db from "db"
import { Stats, Popularity } from "./Stats"

export default class StatsCalc {
  private data: Basket[]

  constructor(data: Basket[]) {
    this.data = data
  }

  Calc(): Stats {
    const result = new Stats()
    result.mostPopular = this.MostPopular()

    result.avgPerDay = this.avgPerDay()
    result.prodCount = this.prodCount()
    result.mostExpensiveBasketId = this.mostExpensiveBasketId()
    result.lastMonthBasketCount = this.lastMonthBasketCount()
    result.avgPerBasket = this.avgPerBasket()
    result.cheapestBasketId = this.cheapestBasketId()
    result.mostExpensiveProdId = this.mostExpensiveProdId()
    result.cheapestProdId = this.cheapestProdId()
    // mostPopular: Popularity
    // avgPerDay: number
    // prodCount: number
    // mostExpensiveBasketId: number
    // lastMonthBasketCount: number
    // avgPerBasket: number
    // cheapestBasketId: number
    // mostExpensiveProdId: number
    // cheapestProdId: number

    return result
  }

  private cheapestProdId() {
    return this.rand()
  }

  private mostExpensiveProdId() {
    return this.rand()
  }

  private cheapestBasketId() {
    return this.rand()
  }

  private avgPerBasket() {
    return this.rand()
  }

  private lastMonthBasketCount() {
    return this.rand()
  }

  private mostExpensiveBasketId() {
    return this.rand()
  }

  private prodCount() {
    return this.rand()
  }

  private avgPerDay() {
    return this.rand()
  }

  private rand() {
    return RandomInt(0, 1000)
  }

  private MostPopular(): Popularity {
    const pop = new Popularity()
    pop.count = this.rand()
    pop.productId = this.rand()
    return pop
  }
}
