import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateBasket = z.object({
  name: z.string(),
  description: z.string(),
  totalPrice: z.number(),
  userId: z.number(),
  products: z.array(z.number()),
})

export default resolver.pipe(resolver.zod(CreateBasket), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenants
  const data = {} as any
  data.name = input.name
  data.description = input.description
  data.totalPrice = input.totalPrice
  data.userId = input.userId

  const ObjToCreate = input.products.map((p) => ({ productId: p }))

  data.products = { create: ObjToCreate }
  const basket = await db.basket.create({ data: data })

  return basket
})
