import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import { Box } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import LoginForm from "app/core/components/LoginForm"
import SignupForm from "app/core/components/SignupForm"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const HomeUI = (props) => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (!currentUser) {
    return <>not auth</>
  } else {
    return <>login</>
  }
}

const Home: BlitzPage = () => {
  return <HomeUI />
}

Home.suppressFirstRenderFlicker = true
Home.authenticate = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
