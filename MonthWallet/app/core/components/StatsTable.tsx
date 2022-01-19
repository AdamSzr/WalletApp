import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react"

type TableProp = {
  data: Stats
}

const StatsTable = (props: TableProp) => {
  function generateRow(left, right) {
    return (
      <Tr>
        <Td>{left}</Td>
        <Td>{right}</Td>
      </Tr>
    )
  }

  //   mostPopular: Popularity
  //   avgPerDay: number
  //   prodCount: number
  //   mostExpensiveBasketId: number
  //   lastMonthBasketCount: number
  //   avgPerBasket: number
  //   cheapestBasketId: number
  //   mostExpensiveProdId: number
  //   cheapestProdId: number

  return (
    <Table>
      <Tbody>
        {generateRow(
          "Najczęściej kupowany produkt",
          `ProduktId - ${props.data.mostPopular.productId}`
        )}
        {generateRow("Średnio wydano na dzień", `${props.data.avgPerDay} zł`)}
        {generateRow("Łączna ilość zakupionych produktów", `${props.data.prodCount} szt`)}
        {generateRow("Najdroższy koszyk", `BasketId ${props.data.mostExpensiveBasketId}`)}
        {generateRow(
          "W ostatnim miesiącu utworzono",
          `${props.data.lastMonthBasketCount} koszyków`
        )}
        {generateRow("Średnia kwota wydana na koszyk", `${props.data.avgPerBasket} zł`)}
        {generateRow("Najtańsze zakupy", `${props.data.cheapestBasketId}`)}
        {generateRow("Najdroższy produkt", `ProduktId - ${props.data.mostExpensiveProdId}`)}
        {generateRow("Najtańszy produkt", `ProduktId - ${props.data.cheapestProdId}`)}
      </Tbody>
    </Table>
  )
}

export default StatsTable
