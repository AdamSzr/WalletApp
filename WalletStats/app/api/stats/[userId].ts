import { getSession, BlitzApiRequest, BlitzApiResponse, BlitzApiHandler, Middleware } from "blitz"

const getStats: Middleware = (req, res, next) => {
  if (req.method != "GET") res.status(404).send("Available Methods: [GET]")

  const userId = Number(req.query.userId)
  if (isNaN(userId)) return res.status(400).send("userId should be number")

  console.log(JSON.stringify({ userId }))

  return res.status(200).json({ message: `your id is -> ${userId}` })
}
export default getStats
