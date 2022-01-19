import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProduct from "app/products/mutations/createProduct"
import WindowWithMenu from "app/core/components/MenuNav"
import { Box, Button, FormControl, Input, Select, Text } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import { Textarea } from "@chakra-ui/react"
import { useState } from "react"
import Product from "../models/Product"
import { RandomInt } from "../utils/base"

type BasketFormProps = {
  products: Product[]
}

type Order = {
  productId: number
  count: number
}

const BasketForm = (props: BasketFormProps) => {
  const [name, setName] = useState("")
  const [selectedProducts, seteSelProd] = useState([] as Product[])
  const [description, setDescription] = useState("")

  const products = props.products

  console.log({ prods: props.products })

  return (
    <CenterRect>
      <Text
        fontSize="xl"
        textAlign="center"
        textDecoration="underline"
        marginBottom="10px"
        color={"white"}
      >
        Stworz koszyk
      </Text>
      <form id="LoginForm" onSubmit={() => console.log({ name, selectedProducts, description })}>
        <FormControl id="LoginFormInputContainer">
          <Box>
            <Input
              placeholder="nazwa koszyku"
              type="text"
              className="TextColorBlack"
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              placeholder="Select option"
              onChange={(e) => {
                const data = {
                  item: e.target.value,
                  index: products.find((p, idx) => p.name == e.target.value),
                }
                seteSelProd((acc) => [...acc, data.index] as any)

                console.log([...selectedProducts, data.index])
              }}
            >
              {products.map((p) => (
                <option value={p.name} key={RandomInt(0, 1_000_000)}>
                  {p.name}
                </option>
              ))}
            </Select>

            <Textarea
              placeholder="opis"
              type="textbox"
              className="TextColorBlack"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Box>
              <Button type="submit" colorScheme="blue" className="TextColorBlack">
                Dodaj Koszyk
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </CenterRect>
  )
}

export default BasketForm
