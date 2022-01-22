import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import StatsTable from "app/core/components/StatsTable"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const StatsPage: BlitzPage = () => {
  const [stats, setStats] = useState({} as Stats)

  const user = useCurrentUser()

  loadData()

  function loadData() {
    const url = `http://localhost:3001/api/stats/` + user?.id
    console.log({ url })

    fetch(url).then((d) => console.log(d))
    // fetch(url).then((res) => res.json())ss
    // .then((d) => {
    //   setStats(d)
    //   console.log(d)
    // })
  }

  // console.log(112341234)
  return <WindowWithMenu>{/* <StatsTable data={Stats.create()} /> */}</WindowWithMenu>
}

StatsPage.getLayout = (page) => <Layout>{page}</Layout>
StatsPage.authenticate = true

export default StatsPage
