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

type ProductListProps = {
  productList: Product[]
}

const ProductsList = (props: ProductListProps) => {
  const router = useRouter()

  // const productList = useQuery(getProducts, { where: { userId: 1 } } as any)
  // const productList = Product.create()
  const products = Range(0, 10).map((i) => Product.create())

  const page = Number(router.query.page) || 0

  return (
    <div>
      <ProductTable data={products} />
    </div>
  )
}

const ProductsPage: BlitzPage = () => {
  return (
    <WindowWithMenu>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsList productList={undefined as any} />
      </Suspense>
    </WindowWithMenu>
  )
}

ProductsPage.getLayout = (page) => <Layout>{page}</Layout>

export default ProductsPage
