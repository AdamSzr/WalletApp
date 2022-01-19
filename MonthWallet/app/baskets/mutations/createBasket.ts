import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateBasket = z.object({
  name: z.string(),
})

export default resolver.pipe(resolver.zod(CreateBasket), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const basket = await db.basket.create({ data: input })

  return basket
})
