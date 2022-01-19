import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createBasket from "app/baskets/mutations/createBasket"
import WindowWithMenu from "app/core/components/MenuNav"
import BasketForm from "app/core/components/BasketForm"
import Product from "app/core/models/Product"
import { Range } from "app/core/utils/base"

type NewBasketProps = {
  products: Product[]
}

const NewBasketPage: BlitzPage = () => {
  const products = Range(0, 25).map((i) => Product.create())

  return (
    <WindowWithMenu>
      <BasketForm products={products} />
    </WindowWithMenu>
  )
}

NewBasketPage.getLayout = (page) => <Layout title={"Create New Basket"}>{page}</Layout>

export default NewBasketPage
