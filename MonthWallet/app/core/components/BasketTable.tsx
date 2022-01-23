import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, Center } from "@chakra-ui/react"
import Product from "app/core/models/Product"
import Basket from "app/core/models/Basket"
import { RandomInt } from "../utils/base"

type BasketTableProps = {
  data: Basket[]
}

const BasketTable = (props: BasketTableProps) => {
  console.log(props)
  function generateRow(basket: Basket) {
    return (
      <Tr key={RandomInt(0, 100_000_000)}>
        <Td>{basket.name}</Td>
        <Td>{basket.totalPrice} zł</Td>
      </Tr>
    )
  }

  return (
    <Center>
      <Table id="ProductTable">
        <Thead>
          <Tr>
            <Th>Nazwa Koszyka</Th>
            <Th>Cena za szt</Th>
          </Tr>
        </Thead>
        <Tbody>{props.data.map((product) => generateRow(product))}</Tbody>
      </Table>
    </Center>
  )
}

export default BasketTable
