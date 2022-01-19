import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetBasketsInput
  extends Pick<Prisma.BasketFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(resolver.authorize(), async ({ where }: GetBasketsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const result = db.basket.findMany({ where })
  return result
})
