import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Box, Button, Center, Input } from "@chakra-ui/react"
import CenterRect from "./CenterRect"
import { useState } from "react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)

  const onSubmitFunc = async (e) => {
    e.preventDefault()
    console.log("Submited ")
    // try {
    //   const user = await loginMutation(values)
    //   props.onSuccess?.(user)
    // } catch (error: any) {
    //   if (error instanceof AuthenticationError) {
    //     console.error(error.message)
    //   }
    // }
  }

  function handleEmailChange(e) {
    console.log("EmailChanged")
  }
  function handlePasswChange(e) {
    console.log("PasswdChanged")
  }
  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")

  return (
    <CenterRect>
      <form onSubmit={onSubmitFunc} id="LoginForm">
        <FormControl id="LoginFormInputContainer">
          <Box>
            <Input
              placeholder="E-mail"
              type="email"
              onChange={handleEmailChange}
              className="TextColorBlack"
            />
            <Input
              placeholder="Hasło"
              type="password"
              onChange={handlePasswChange}
              className="TextColorBlack"
            />
            <Box>
              <Button type="submit" colorScheme="blue" className="TextColorBlack">
                Zaloguj
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </CenterRect>
  )
}

export default LoginForm
