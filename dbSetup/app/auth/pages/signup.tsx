import { useRouter, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { SignupForm } from "app/auth/components/SignupForm"
import WindowWithMenu from "app/core/components/MenuNav"
import FullScreen from "app/core/components/FullScreen"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <FullScreen>
      <SignupForm onSuccess={(u) => router.push(Routes.LoginPage())} />
    </FullScreen>
  )
}

SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>

export default SignupPage
