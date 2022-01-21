import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetProductsInput
  extends Pick<Prisma.ProductFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(resolver.authorize(), async ({ where }: GetProductsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const x = await db.product.findMany({ where })

  return x
})
