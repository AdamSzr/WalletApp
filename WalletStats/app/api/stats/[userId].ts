import Basket from "app/basket/models/Basket"
import StatsCalc from "app/basket/models/StatsCalc"
import getBaskets from "app/basket/queries/getBaskets"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"
import Cors from "cors"

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET"],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  // console.log("inside runMIDDLEWARE")
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

// async function handler(req: BlitzApiRequest, res: BlitzApiResponse) {
//   // Run the middleware
//   await runMiddleware(req, res, cors)

//   // Rest of the API logic
//   res.json({ message: "Hello Everyone!" })
// }

// export default handler

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
  await runMiddleware(req, res, cors)

  const userId = Number(req.query.userId)

  const result = await db.basket.findMany({
    where: { userId: userId },
    include: { products: { include: { product: true } } },
  })

  const data = ParseQuery(result)
  // console.log(JSON.stringify(data, null, 2))

  res.status(200).json(new StatsCalc(data).Calc())
}
export default handler
