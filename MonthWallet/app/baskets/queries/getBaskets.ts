import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetBasketsInput
  extends Pick<Prisma.BasketFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetBasketsInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: baskets,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.basket.count({ where }),
      query: (paginateArgs) => db.basket.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      baskets,
      nextPage,
      hasMore,
      count,
    }
  }
)
