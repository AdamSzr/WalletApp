import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateBasket = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateBasket),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const basket = await db.basket.update({ where: { id }, data })

    return basket
  }
)
