import { Suspense } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import StatsTable from "app/core/components/StatsTable"

const StatsPage: BlitzPage = () => {
  return (
    <WindowWithMenu>
      <StatsTable data={Stats.create()} />
    </WindowWithMenu>
  )
}

StatsPage.getLayout = (page) => <Layout>{page}</Layout>

export default StatsPage
