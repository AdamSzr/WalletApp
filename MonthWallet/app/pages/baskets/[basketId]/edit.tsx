import { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useMutation, useParam, BlitzPage, Routes } from "blitz"
import Layout from "app/core/layouts/Layout"
import getBasket from "app/baskets/queries/getBasket"
import updateBasket from "app/baskets/mutations/updateBasket"
import { BasketForm, FORM_ERROR } from "app/baskets/components/BasketForm"

export const EditBasket = () => {
  const router = useRouter()
  const basketId = useParam("basketId", "number")
  const [basket, { setQueryData }] = useQuery(
    getBasket,
    { id: basketId },
    {
      // This ensures the query never refreshes and overwrites the form data while the user is editing.
      staleTime: Infinity,
    }
  )
  const [updateBasketMutation] = useMutation(updateBasket)

  return (
    <>
      <Head>
        <title>Edit Basket {basket.id}</title>
      </Head>

      <div>
        <h1>Edit Basket {basket.id}</h1>
        <pre>{JSON.stringify(basket, null, 2)}</pre>

        <BasketForm
          submitText="Update Basket"
          // TODO use a zod schema for form validation
          //  - Tip: extract mutation's schema into a shared `validations.ts` file and
          //         then import and use it here
          // schema={UpdateBasket}
          initialValues={basket}
          onSubmit={async (values) => {
            try {
              const updated = await updateBasketMutation({
                id: basket.id,
                ...values,
              })
              await setQueryData(updated)
              router.push(Routes.ShowBasketPage({ basketId: updated.id }))
            } catch (error: any) {
              console.error(error)
              return {
                [FORM_ERROR]: error.toString(),
              }
            }
          }}
        />
      </div>
    </>
  )
}

const EditBasketPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <EditBasket />
      </Suspense>

      <p>
        <Link href={Routes.BasketsPage()}>
          <a>Baskets</a>
        </Link>
      </p>
    </div>
  )
}

EditBasketPage.authenticate = true
EditBasketPage.getLayout = (page) => <Layout>{page}</Layout>

export default EditBasketPage
