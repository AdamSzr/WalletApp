import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProduct from "app/products/mutations/createProduct"
import WindowWithMenu from "app/core/components/MenuNav"
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import { Textarea } from "@chakra-ui/react"
import { useState } from "react"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

type ProductFormProps = {
  onSubmitCb: ({ name, price, desc, userId }) => void
}
const ProductForm = (props: ProductFormProps) => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0.0)

  const [createProductMutation] = useMutation(createProduct)
  const currentUser = useCurrentUser()

  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleDescChange(e) {
    setDesc(e.target.value)
  }
  function handlePriceChange(e) {
    setPrice(Number(e.target.value))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const product = await createProductMutation({
      name: name,
      price: price,
      userId: currentUser?.id as any,
      description: desc,
    })
    console.log({ product })
  }

  return (
    <CenterRect>
      <Text
        fontSize="xl"
        textAlign="center"
        textDecoration="underline"
        marginBottom="10px"
        color={"white"}
      >
        Stworz nowy produkt
      </Text>
      <form id="LoginForm" onSubmit={onSubmit}>
        <FormControl id="LoginFormInputContainer">
          <Box>
            <Input
              placeholder="nazwa produktu"
              type="text"
              className="TextColorBlack"
              onChange={handleNameChange}
            />
            <Input
              placeholder="cena"
              type="number"
              className="TextColorBlack"
              step={0.01}
              onChange={handlePriceChange}
            />
            <Textarea
              placeholder="opis"
              type="textbox"
              className="TextColorBlack"
              onChange={handleDescChange}
            />
            <Box>
              <Button type="submit" colorScheme="blue" className="TextColorBlack">
                Dodaj Produkt
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </CenterRect>
  )
}

export default ProductForm
