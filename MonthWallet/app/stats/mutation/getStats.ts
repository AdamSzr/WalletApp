// app/products/queries/getProduct.tsx
import Stats from "app/core/models/Stats"
import { Ctx } from "blitz"
import db from "db"
import * as z from "zod"

const UserId = z.object({
  id: z.number(),
})

export default async function getStats(userId: z.infer<typeof UserId>, ctx: Ctx) {
  const url = `http://localhost:3001/api/stats/` + userId

  let stats = (await fetch(url).then((raw) => raw.json())) as Stats

  return stats
}
