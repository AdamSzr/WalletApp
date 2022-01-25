// import { useRouter, BlitzPage } from "blitz"
// import Layout from "app/core/layouts/Layout"
// import { LoginForm } from "app/auth/components/LoginForm"

// const LoginPage: BlitzPage = () => {
//   const router = useRouter()

//   return (
//     <div>
//       <LoginForm
//         onSuccess={(_user) => {
//           const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
//           router.push(next)
//         }}
//       />
//     </div>
//   )
// }

// LoginPage.redirectAuthenticatedTo = "/"
// LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

// export default LoginPage

import { useRouter, BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { LoginForm } from "app/core/components/LoginForm"
import FullScreen from "app/core/components/FullScreen"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <LoginForm
      onSuccess={(_user) => {
        const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
        router.push(next)
      }}
    />
  )
}

LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>

export default LoginPage