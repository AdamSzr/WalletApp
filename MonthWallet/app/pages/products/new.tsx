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

  return (
    <WindowWithMenu>
      <ProductForm
        onSubmitCb={(product) => {
          console.log({ product })
        }}
      />
    </WindowWithMenu>
  )
}

NewProductPage.getLayout = (page) => <Layout title={"Create New Product"}>{page}</Layout>
NewProductPage.authenticate = true

export default NewProductPage
