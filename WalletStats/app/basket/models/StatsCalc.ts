import Basket from "app/basket/models/Basket"
import getBaskets from "app/basket/queries/getBaskets"
import { RandomInt } from "app/core/utils/base"
import { BlitzApiHandler, Middleware, useQuery } from "blitz"
import db from "db"
import { number, z } from "zod"
import Product from "./Product"
import { Stats, Popularity } from "./Stats"

export default class StatsCalc {
  private data: Basket[]

  constructor(data: Basket[]) {
    this.data = data
  }

  private cheapestProdId() {
    let mostExp = {} as Product
    mostExp.price = Infinity

    this.getAllProducts().forEach((p) => {
      if (p.price < mostExp.price) mostExp = p
    })
    // console.log({ mostExp })
    return mostExp.id
  }

  private getAllProducts() {
    let x = [] as Product[]
    this.GetLastMonthBaskets().forEach((basket) => x.push(...(basket.products as any)))
    return x
  }

  private mostExpensiveProdId() {
    let mostExp = {} as Product
    mostExp.price = 0

    this.getAllProducts().forEach((p) => {
      if (p.price > mostExp.price) mostExp = p
    })
    // console.log({ mostExp })
    return mostExp.id
  }

  private cheapestBasketId() {
    let basket = {} as Basket
    basket.totalPrice = Infinity

    this.GetLastMonthBaskets().forEach((element) => {
      if (element.totalPrice < basket.totalPrice) basket = element
    })

    return basket.id
  }

  private avgPerBasket() {
    return 1
  }

  private GetLastMonthBaskets() {
    const date_now = this.GetStartOfMonth(new Date())
    const lastMonthBaskets = this.data.filter((b) => this.ParseDate(b.createdAt) > date_now)
    return lastMonthBaskets
  }

  private lastMonthBasketCount() {
    return this.GetLastMonthBaskets().length
  }

  private mostExpensiveBasketId() {
    let basket = {} as Basket
    basket.totalPrice = 0

    this.GetLastMonthBaskets().forEach((element) => {
      if (element.totalPrice > basket.totalPrice) basket = element
    })

    return basket.id
  }

  private prodCount() {
    const d = this.GetLastMonthBaskets().map((item) => Number(item.totalPrice))
    return d.reduce((prev, acc) => prev + acc)
  }

  private avgPerDay() {
    return this.prodCount() / new Date().getDate()
  }
  private FindMax(arr: number[]) {
    let max = 0
    let idx = Infinity
    // console.log(arr)
    arr.forEach((element,index) => {
      // console.log(element)
      if (max < element) {
        max = element
        idx = index
        // console.log({ max, index })
      }
    })

    return { max, idx }
  }

  private MostPopular(): Popularity {
    const prod = this.getAllProducts()
    const sortArr = [] as number[]

    prod.forEach((p) => {
      if (!sortArr[p.id]) sortArr[p.id] = 1
      else sortArr[p.id]++
    })

    // console.log({ sortArr })
    const maximum = this.FindMax(sortArr)

    const pop = new Popularity()
    pop.count = maximum.max
    pop.productId = maximum.idx
    // console.log({pop})
    return pop
  }

  private ParseDate(date: string) {
    return new Date(date)
  }

  private GetStartOfMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 0)
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
}
