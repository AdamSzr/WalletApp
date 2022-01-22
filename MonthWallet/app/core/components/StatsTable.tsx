import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption } from "@chakra-ui/react"
import { useCurrentUser } from "../hooks/useCurrentUser"

const StatsTable = () => {
  const [stats, setStats] = useState({} as Stats)
  const user = useCurrentUser()

  // loadData()

  // function loadData() {
  //   const url = `http://localhost:3001/api/stats/` + user?.id

  //   if (!stats) {
  //     fetch(url)
  //       .then((raw) => raw.json())
  //       .then((obj) => setStats(() => obj))
  //   }
  // }

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
        {generateRow("Najczęściej kupowany produkt", `ProduktId - ${stats.mostPopular.productId}`)}
        {generateRow("Średnio wydano na dzień", `${stats.avgPerDay} zł`)}
        {generateRow("Łączna ilość zakupionych produktów", `${stats.prodCount} szt`)}
        {generateRow("Najdroższy koszyk", `BasketId ${stats.mostExpensiveBasketId}`)}
        {generateRow("W ostatnim miesiącu utworzono", `${stats.lastMonthBasketCount} koszyków`)}
        {generateRow("Średnia kwota wydana na koszyk", `${stats.avgPerBasket} zł`)}
        {generateRow("Najtańsze zakupy", `${stats.cheapestBasketId}`)}
        {generateRow("Najdroższy produkt", `ProduktId - ${stats.mostExpensiveProdId}`)}
        {generateRow("Najtańszy produkt", `ProduktId - ${stats.cheapestProdId}`)}
      </Tbody>
    </Table>
  )
}

// export async function getStaticProps() {
//   const stats = {}
//   const url = `http://localhost:3001/api/stats/` + user?.id

//   if (!stats) {
//     fetch(url)
//       .then((raw) => raw.json())
//       .then((obj) => setStats(() => obj))
//   }

//   return { props: { stats } }
// }

export default StatsTable
