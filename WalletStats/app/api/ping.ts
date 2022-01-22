import Basket from "app/basket/models/Basket"
import StatsCalc from "app/basket/models/StatsCalc"
import getBaskets from "app/basket/queries/getBaskets"
import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"
import Cors from "cors"

const ping: Middleware = (req, res) => {
  return res.status(200).json({ ping: "pong" })
}
export default ping
