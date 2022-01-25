import { Link, useRouter, useMutation, BlitzPage, Routes, useQuery } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import BasketForm from "app/core/components/BasketForm"
import Product from "app/core/models/Product"
import { Range } from "app/core/utils/base"
import getProducts from "app/products/queries/getProducts"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import createBasket from "app/baskets/mutations/createBasket"

const NewBasketPage: BlitzPage = () => {
  const user = useCurrentUser()
  const [productList, status] = useQuery(getProducts, { where: { userId: user?.id } } as any)

  const [createBasketMut] = useMutation(createBasket)

  return (
    <WindowWithMenu>
      <BasketForm
        products={productList as any}
        onClickCreate={async (nazwa, prodIds, opis, totalPrice) => {
          const basket = await createBasketMut({
            userId: user?.id as any,
            name: nazwa,
            description: opis,
            products: prodIds,
            totalPrice: totalPrice,
          })
          console.log({ nazwa, prodIds, opis, totalPrice })
          console.log({ basket })
        }}
      />
    </WindowWithMenu>
  )
}


NewBasketPage.authenticate = true
NewBasketPage.getLayout = (page) => <Layout title={"Create New Basket"}>{page}</Layout>

export default NewBasketPage
