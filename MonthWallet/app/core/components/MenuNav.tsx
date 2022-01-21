import { AuthenticationError, Link, useMutation, Routes, PromiseReturnType } from "blitz"
import login from "app/auth/mutations/login"
import { Login } from "app/auth/validations"
import { Box, Button, Center, HStack, Spacer } from "@chakra-ui/react"
import FullScreen from "./FullScreen"
import { Router } from "blitz"
import logout from "app/auth/mutations/logout"

export const WindowWithMenu = (props) => {
  const [logoutMut] = useMutation(logout)

  function onShowBacketsClick(e) {
    console.log("ShowAllBaskets !!!")
    Router.push(Routes.BasketsPage())
  }

  function onNewBasketClick(e) {
    console.log("Create Basket !!!")

    Router.push(Routes.NewBasketPage())
  }

  function onShowProductsClick(e) {
    console.log("ShowAllProducts !!!")

    Router.push(Routes.ProductsPage())
  }

  function onNewProductClick(e) {
    console.log("Create product !!!")

    Router.push(Routes.NewProductPage())
  }

  async function onLogoutClick(e) {
    await logoutMut()
    Router.push(Routes.LoginPage())
  }

  function onShowHomePage(e) {
    Router.push(Routes.Home())
  }

  function onShowStats(e) {
    Router.push(Routes.StatsPage())
  }

  return (
    <FullScreen>
      <Box className="ContentPadding">
        <Box id="MenuNav">
          <HStack>
            <Button className="MenuItem" onClick={onShowHomePage}>
              Strona główna
            </Button>
            <Spacer />
            <Button className="MenuItem" onClick={onShowBacketsClick}>
              Moje listy zakupów
            </Button>
            <Spacer />
            <Button className="MenuItem" onClick={onNewBasketClick}>
              Stworz nowy koszyk
            </Button>
            <Spacer />
            <Button className="MenuItem" onClick={onShowProductsClick}>
              Moje produkty
            </Button>
            <Spacer />
            <Button className="MenuItem" onClick={onNewProductClick}>
              Dodaj nowy produkt
            </Button>
            <Spacer />
            <Button className="MenuItem" onClick={onShowStats}>
              Statystyki
            </Button>
            <Spacer />
            <Button className="MenuItem" colorScheme="purple" onClick={onLogoutClick}>
              Wyloguj
            </Button>
          </HStack>
        </Box>
        <Box id="MenuNavChildren">{props.children}</Box>
      </Box>
    </FullScreen>
  )
}

export default WindowWithMenu
