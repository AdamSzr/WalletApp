import { paginate, resolver, SESSION_TYPE_OPAQUE_TOKEN_SIMPLE } from "blitz"
import db, { Prisma } from "db"
import { Item } from "framer-motion/types/components/Reorder/Item"
import { map } from "lodash"

interface GetBasketsInput
  extends Pick<Prisma.BasketFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(resolver.authorize(), async ({ where }: GetBasketsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  // db.basket.findMany({ where, include: { User: true } })
  // let result = db.basket.findMany({ where, include: { User: true, products: {where:  }} } })
  where = { userId: 4 }
  const result = db.basket.findMany({
    where,
    include: { products: { include: { product: true } } },
  })
  return result
})
