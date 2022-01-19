import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"

const GetBasket = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetBasket), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const basket = await db.basket.findFirst({ where: { id } })

  if (!basket) throw new NotFoundError()

  return basket
})
