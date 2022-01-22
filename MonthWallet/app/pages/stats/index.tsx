import { Suspense, useState } from "react"
import { Head, Link, usePaginatedQuery, useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import WindowWithMenu from "app/core/components/MenuNav"
import Stats from "app/core/models/Stats"
import StatsTable from "app/core/components/StatsTable"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const StatsPage: BlitzPage = () => {
  // console.log(112341234)
  return (
    <WindowWithMenu>
      <StatsTable />
    </WindowWithMenu>
  )
}

StatsPage.getLayout = (page) => <Layout>{page}</Layout>
StatsPage.authenticate = true

export default StatsPage
