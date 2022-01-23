// app/products/queries/getProduct.tsx
import Stats from "app/core/models/Stats"
import { Ctx } from "blitz"
import db from "db"
import * as z from "zod"

const UserId = z.object({
  id: z.number(),
})

export default async function getStats(userId: z.infer<typeof UserId>, ctx: Ctx) {
  if (process.env.SERVICE == undefined)
    throw new Error("Uzyj zmiennej srodowiskowej SERVICE aby wykonać fetch")

  const url = process.env.SERVICE || "" + userId

  let stats = (await fetch(url).then((raw) => raw.json())) as Stats

  return stats
}
