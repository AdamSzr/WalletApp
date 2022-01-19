import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Center } from "@chakra-ui/react"
import Product from "app/core/models/Product"

type ProductTableProps = {
  data: Product[]
}

const ProductTable = (props: ProductTableProps) => {
  function generateRow(product: Product) {
    return (
      <Tr>
        <Td>{product.name}</Td>
        <Td>{product.price} zł</Td>
      </Tr>
    )
  }

  return (
    <Center>
      <Table id="ProductTable">
        <Thead>
          <Tr>
            <Th>Nazwa produktu</Th>
            <Th>Cena za szt</Th>
          </Tr>
        </Thead>
        <Tbody>{props.data.map((product) => generateRow(product))}</Tbody>
      </Table>
    </Center>
  )
}

export default ProductTable
