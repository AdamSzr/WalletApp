import { BlitzApiHandler, BlitzApiRequest, BlitzApiResponse, Middleware, useQuery } from "blitz"
import db from "db"

const ping: Middleware = (req, res) => {
  return res.status(200).json({ ping: "pong" })
}
export default ping
