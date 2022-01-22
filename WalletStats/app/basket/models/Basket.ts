import Chance from "chance"
import { RandomInt, Range } from "app/core/utils/base"

const chance = new Chance()

class Basket {
  id: number
  createdAt: string
  updatedAt: string
  userId: number
  name: string
  products: number[]
  totalPrice: number

  public validate() {}

  public static create() {
    const x = new Basket()
    x.id = chance.integer({ min: 0, max: 100_000_000 })
    x.createdAt = chance.date().toLocaleDateString()
    x.updatedAt = chance.date().toLocaleDateString()
    x.name = chance.word({ length: 10 })
    x.products = Range(0, 10).map((i) => RandomInt(0, 200))
    x.totalPrice = chance.floating({ min: 30, max: 1500, fixed: 2 })
    return x
  }
}

export default Basket
