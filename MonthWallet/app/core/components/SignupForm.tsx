import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import signup from "app/auth/mutations/signup"
import { Box, Button, Center, Input } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"

import { useState } from "react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"

export const SignupForm = (props) => {
  const [signupMutation] = useMutation(signup)

  const onSubmitFunc = async (e) => {
    e.preventDefault()
    console.log("Submited ")
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
      <form onSubmit={onSubmitFunc} id="SignUpForm">
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
                Zarejestruj
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </CenterRect>
  )
}

export default SignupForm
