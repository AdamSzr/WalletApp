import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getBaskets from "app/baskets/queries/getBaskets"
import WindowWithMenu from "app/core/components/MenuNav"
import BasketTable from "app/core/components/BasketTable"
import { Range } from "app/core/utils/base"
import Basket from "app/core/models/Basket"

export const BasketsList = () => {
  return <BasketTable data={Range(0, 12).map(() => Basket.create())} />
}

const BasketsPage: BlitzPage = () => {
  return (
    <WindowWithMenu>
      <BasketsList />
    </WindowWithMenu>
  )
}

BasketsPage.getLayout = (page) => <Layout>{page}</Layout>

export default BasketsPage
