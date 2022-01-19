import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteBasket = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteBasket), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const basket = await db.basket.deleteMany({ where: { id } })

  return basket
})
