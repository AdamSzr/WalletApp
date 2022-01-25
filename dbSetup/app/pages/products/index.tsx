import { Suspense } from "react"
import {
  Head,
  Link,
  usePaginatedQuery,
  useRouter,
  BlitzPage,
  Routes,
  useQuery,
  useParam,
} from "blitz"
import Layout from "app/core/layouts/Layout"
import getProducts from "app/products/queries/getProducts"
import WindowWithMenu from "app/core/components/MenuNav"
import Product from "app/core/models/Product"
import ProductTable from "app/core/components/ProductTable"
import { Range } from "app/core/utils/base"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const ProductsList = () => {
  const router = useRouter()
  const user = useCurrentUser()

  const [productList, status] = useQuery(getProducts, { where: { userId: user?.id } } as any)

  return <ProductTable data={productList as any} />
}

const ProductsPage: BlitzPage = () => {
  return (
    <WindowWithMenu>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsList />
      </Suspense>
    </WindowWithMenu>
  )
}

ProductsPage.getLayout = (page) => <Layout>{page}</Layout>
ProductsPage.authenticate = true

export default ProductsPage
