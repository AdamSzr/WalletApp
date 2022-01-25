import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Box, Center } from "@chakra-ui/react"

export const CenterRect = (props) => {
  return (
    <Box id="CenterOutline">
      <Center id="CenterFlex">
        <Box id="CenterRectContent">{props.children}</Box>
      </Center>
    </Box>
  )
}

export default CenterRect
