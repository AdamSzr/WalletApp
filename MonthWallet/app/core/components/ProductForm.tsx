import { Link, useRouter, useMutation, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import createProduct from "app/products/mutations/createProduct"
import WindowWithMenu from "app/core/components/MenuNav"
import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import { Textarea } from "@chakra-ui/react"

const ProductForm = () => {
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
      <form id="LoginForm">
        <FormControl id="LoginFormInputContainer">
          <Box>
            <Input placeholder="nazwa produktu" type="text" className="TextColorBlack" />
            <Input placeholder="cena" type="number" className="TextColorBlack" step={0.01} />
            <Textarea placeholder="opis" type="textbox" className="TextColorBlack" />
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
