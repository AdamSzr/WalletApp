import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Box, Center } from "@chakra-ui/react"
import CenterRect from "./CenterRect"

export const LoginForm = (props) => {
  return (
    <CenterRect>
      <form
        onSubmit={(e) => {
          console.log({ e })
        }}
      ></form>
    </CenterRect>
  )
}

export default LoginForm
