import Basket from "app/basket/models/Basket"
import getBaskets from "app/basket/queries/getBaskets"
import { RandomInt } from "app/core/utils/base"
import { BlitzApiHandler, Middleware, useQuery } from "blitz"
import db from "db"
import { z } from "zod"
import Product from "./Product"
import { Stats, Popularity } from "./Stats"

export default class StatsCalc {
  private data: Basket[]

  constructor(data: Basket[]) {
    this.data = data
    // console.log(JSON.stringify(data, null, 2))
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
    // console.log(result)
    return result
  }

  private cheapestProdId() {
    return this.rand()
  }

  private getAllProducts() {
    let x = [] as Product[]
    this.data.forEach((basket) => x.push(...(basket.products as any)))
    return x
  }

  private mostExpensiveProdId() {
    let mostExp = {} as Product
    mostExp.price = 0

    this.getAllProducts().forEach((p) => {
      if (p.price > mostExp.price) mostExp = p
    })

    return mostExp.id
  }

  private cheapestBasketId() {
    // console.log({ prod: this.getAllProducts() })
    return this.rand()
  }

  private avgPerBasket() {
    return this.rand()
  }

  private lastMonthBasketCount() {
    return this.data.length
  }

  private mostExpensiveBasketId() {
    let basket = {} as Basket
    basket.totalPrice = 0

    this.data.forEach((element) => {
      if (element.totalPrice > basket.totalPrice) basket = element
    })

    return basket.id
  }

  private prodCount() {
    const d = this.data.map((item) => item.totalPrice)
    return d.reduce((prev, acc) => Number(prev) + Number(acc))
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
