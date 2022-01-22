import Chance from "chance"

const chance = new Chance()

class Product {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  description: string
  price: number

  public validate() {}

  public static create() {
    const x = new Product()
    x.id = chance.integer({ min: 0, max: 100_000_000 })
    x.createdAt = chance.date().toLocaleDateString()
    x.updatedAt = chance.date().toLocaleDateString()
    x.name = chance.word({ length: 10 })
    x.description = chance.paragraph().slice(0, 20)
    x.price = chance.floating({ min: 0, max: 1000, fixed: 2 })
    return x
  }
}

export default Product
