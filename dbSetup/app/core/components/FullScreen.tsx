import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Box } from "@chakra-ui/react"

export const FullScreen = (props) => {
  return <Box className="FullScreen">{props.children}</Box>
}

export default FullScreen
