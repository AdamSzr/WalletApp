import Basket from "app/basket/models/Basket"
import StatsCalc from "app/basket/models/StatsCalc"
import getBaskets from "app/basket/queries/getBaskets"
import { BlitzApiHandler, Middleware, useQuery } from "blitz"
import db from "db"

function getBasketProductsList(basket: Basket) {
  return basket.products.map((itemsInBasket) => (itemsInBasket as any).product)
}

function ParseQuery(rawData): Basket[] {
  const edited = rawData.map((shopBasket) => {
    let newOne = Object.assign({}, shopBasket)

    newOne.products = getBasketProductsList(shopBasket)
    return newOne
  })
  // console.log(edited)

  return edited
}

const handler: Middleware = async (req, res) => {
  const userId = Number(req.query.userId)

  const result = await db.basket.findMany({
    where: { userId: userId },
    include: { products: { include: { product: true } } },
  })

  const data = ParseQuery(result)
  console.log(JSON.stringify(data, null, 2))

  res.status(200).json(new StatsCalc(data).Calc())
}
export default handler
