import { Suspense, useEffect, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import StatsTable from "app/core/components/StatsTable"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const StatsPage: BlitzPage = () => {
  const [stats, setStats] = useState(null)

  const user = useCurrentUser()
  const url = `http://localhost:3001/api/stats/` + user?.id
  console.log({ procesENV: process.env })

  async function fetchStats() {
    const statObject = await fetch(url).then((raw) => raw.json())
    // console.log(statObject)
    setStats(statObject)
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (stats == null) return <></>

  return (
    <WindowWithMenu>
      <StatsTable stats={stats} />
    </WindowWithMenu>
  )
}

StatsPage.getLayout = (page) => <Layout>{page}</Layout>
StatsPage.authenticate = true

export default StatsPage
