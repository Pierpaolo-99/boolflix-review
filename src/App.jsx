import { FetchProvider } from "./context/FetchContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./defaultLayout/DefaultLayout"
import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage"

export default function App() {
  return (
    <>
      <FetchProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/SearchPage" Component={SearchPage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FetchProvider>
    </>
  )
}
