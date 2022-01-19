import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProduct from "app/products/mutations/createProduct"
import WindowWithMenu from "app/core/components/MenuNav"
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import { Textarea } from "@chakra-ui/react"
import ProductForm from "app/core/components/ProductForm"

const NewProductPage: BlitzPage = () => {
  const router = useRouter()
  const [createProductMutation] = useMutation(createProduct)

  return (
    <WindowWithMenu>
      <ProductForm />
    </WindowWithMenu>
  )
}

NewProductPage.getLayout = (page) => <Layout title={"Create New Product"}>{page}</Layout>

export default NewProductPage
