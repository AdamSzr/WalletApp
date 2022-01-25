import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getBasket from "app/baskets/queries/getBasket"
import deleteBasket from "app/baskets/mutations/deleteBasket"

export const Basket = () => {
  const router = useRouter()
  const basketId = useParam("basketId", "number")
  const [deleteBasketMutation] = useMutation(deleteBasket)
  const [basket] = useQuery(getBasket, { id: basketId })

  return <></>
}

const ShowBasketPage: BlitzPage = () => {
  return <div></div>
}

ShowBasketPage.authenticate = true
ShowBasketPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowBasketPage
