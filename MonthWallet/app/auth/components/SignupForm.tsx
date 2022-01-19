// import { useMutation } from "blitz"
// import { LabeledTextField } from "app/core/components/LabeledTextField"
// import { Form, FORM_ERROR } from "app/core/components/Form"
// import signup from "app/auth/mutations/signup"
// import { Signup } from "app/auth/validations"

// type SignupFormProps = {
//   onSuccess?: () => void
// }

// export const SignupForm = (props: SignupFormProps) => {
//   const [signupMutation] = useMutation(signup)

//   return (
//     <div>
//       <h1>Create an Account</h1>

//       <Form
//         submitText="Create Account"
//         schema={Signup}
//         initialValues={{ email: "", password: "" }}
//         onSubmit={async (values) => {
//           try {
//             await signupMutation(values)
//             props.onSuccess?.()
//           } catch (error: any) {
//             if (error.code === "P2002" && error.meta?.target?.includes("email")) {
//               // This error comes from Prisma
//               return { email: "This email is already being used" }
//             } else {
//               return { [FORM_ERROR]: error.toString() }
//             }
//           }
//         }}
//       >
//         <LabeledTextField name="email" label="Email" placeholder="Email" />
//         <LabeledTextField name="password" label="Password" placeholder="Password" type="password" />
//       </Form>
//     </div>
//   )
// }

// export default SignupForm

import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import signup from "app/auth/mutations/signup"
import { Box, Button, Center, Input } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"

import { useState } from "react"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"

type SignUpProps = {
  onSuccess: Action
}
type Action = (user: object) => void

export const SignupForm = (props: SignUpProps) => {
  const [signupMutation] = useMutation(signup)

  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")

  const onSubmitFunc = async (e) => {
    console.log({ email, passw })
    e.preventDefault()
    const user = await signupMutation({ email, password: passw })
    console.log({ user })
    props.onSuccess(user)
  }

  function handleEmailChange(e) {
    console.log(e.target.value)
    setEmail(() => e.target.value)
    console.log("EmailChanged")
  }
  function handlePasswChange(e) {
    console.log(e.target.value)
    setPassw(() => e.target.value)
    console.log("PasswdChanged")
  }
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
