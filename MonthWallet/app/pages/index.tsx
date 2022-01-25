import { Suspense } from "react"
import { Image, Link, BlitzPage, useMutation, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import logo from "public/logo.png"
import { Box, Text } from "@chakra-ui/react"
import { CenterRect } from "app/core/components/CenterRect"
import LoginForm from "app/core/components/LoginForm"
import SignupForm from "app/core/components/SignupForm"
import WindowWithMenu from "app/core/components/MenuNav"
import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const AppDescription = (props) => {
  return (
    <Box id="AppDescriptionContainer">
      <Text fontSize={"3xl"} id="AppDescriptionContainerHeader">
        Opis Aplikacji
      </Text>
      <UnorderedList>
        <ListItem>
          Q.1. Kto ma być użytkownikiem aplikacji, jaki problem/potrzebę użytkownika aplikacji
          zamierzasz rozwiązać
        </ListItem>
        <Text>
          Osoby chcące kontrolować swoje wydatki. Aplikacja pomoże użytkownikom zliczać swoje
          miesięczne wydatki, natomiast statystyki dostarcza kluczowych danych do analizy i poprawy
          budżetu.
        </Text>
        <ListItem>
          Q.2. Scenariusze użytkowania aplikacji - kto i po co będzie do niej sięgał, jak będzie
          wyglądała praca z oprogramowaniem
        </ListItem>
        <Text>
          Osoby chcące poznać dokładniej na co wydają swoje pieniądze. Aplikacja będzie posiadała
          szereg intuicyjnych widoków do korzystania z aplikacji. Aby móc korzystać funkcji
          aplikacji użytkownik musi się zarejestrować podając e-mail oraz hasło. Następnie
          przechodzi do widoku dodanych produktów, w której otrzyma listę z dodanymi produktami wraz
          z ich ceną. W tym widoku również będzie można przejść do formularza tworzenia nowych
          produktów. Kolejnym widokiem będzie lista koszyków. Lista ta będzie w formie tabeli. Każdy
          koszyk będzie miał przycisk przenoszący do podstrony – szczegóły, w którym otrzymamy
          dokładną listę zakupionych produktów, ilość i wydaną kwotę. Widok listy z zakupami będzie
          również opatrzony w przycisk przenoszący do kreatora nowych zakupów. Tworząc nowe zakupy
          musimy wprowadzić nazwę zakupów, a następnie z listy dodanych produktów wybrać te które
          mają zostać oddane do tworzonego koszyka. Dostępne będzie przeszukiwanie produktów w celu
          ułatwienia dodawania. Widok statystyki z ostatniego miesiąca – będzie to podstrona która
          wyświetli w tabeli istotne informacje na temat zakupów zrealizowanych w ostatnim miesiącu.
          Aby pobrać dane będziemy potrzebowali wykonać zapytanie GET do mikroserwisy „StatService”
          który w ramach swojej funkcjonalności pobierze dane z bazy danych i przetworzy je w
          odpowiedni sposób. Efektem wynikowym będzie zwrócenie obiektu JSON który będzie zawierał
          pola wymagane do wyświetlania tabeli.
        </Text>
      </UnorderedList>
    </Box>
  )
}

const HomeUI = (props) => {
  return (
    <WindowWithMenu>
      <AppDescription />
    </WindowWithMenu>
  )
}

const Home: BlitzPage = () => {
  return <HomeUI />
}

Home.suppressFirstRenderFlicker = true

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
