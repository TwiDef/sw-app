import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"
import { useAppDispatch } from "./redux/hooks"
import { setScreens } from "./redux/slices/mediaSlice"
import { Grid } from "antd"

import AppLayout from "./AppLayout"
import HomePage from "./pages/home-page"
import CharactersPage from "./pages/characters-page"

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  React.useEffect(() => {
    dispatch(setScreens(screens))
  }, [screens])

  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/characters",
          element: <CharactersPage />
        },
      ]
    }
  ],
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      }
    }
  )

  return (<RouterProvider router={router} future={{ v7_startTransition: true }} />)
}

export default App