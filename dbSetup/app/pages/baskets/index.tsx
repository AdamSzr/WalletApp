import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import getBaskets from "app/baskets/queries/getBaskets"
import WindowWithMenu from "app/core/components/MenuNav"
import BasketTable from "app/core/components/BasketTable"
import { Range } from "app/core/utils/base"
import Basket from "app/core/models/Basket"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Product from "app/core/models/Product"

export const BasketsList = () => {
  const user = useCurrentUser()
  console.log(user)
  function getBasketProductsList(basket: Basket) {
    return basket.products.map((itemsInBasket) => (itemsInBasket as any).product)
  }

  function ParseQuery(rawData): Basket[] {
    const edited = rawData.map((shopBasket) => {
      let newOne = Object.assign({}, shopBasket)
      newOne.products = getBasketProductsList(shopBasket)
      return newOne
    })
    console.log(edited)

    return edited
  }

  const [baskets, status] = useQuery(getBaskets, { where: { userId: user?.id } } as any)
  console.log({ where: { userId: user?.id } })
  return <BasketTable data={ParseQuery(baskets)} />
}

const BasketsPage: BlitzPage = () => {
  return (
    <WindowWithMenu>
      <BasketsList />
    </WindowWithMenu>
  )
}

BasketsPage.getLayout = (page) => <Layout>{page}</Layout>
BasketsPage.authenticate = true
export default BasketsPage
