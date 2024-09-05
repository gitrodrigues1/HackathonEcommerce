import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Auth from "./pages/Auth.tsx"


const AppRoutes = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element = { <Home/> } ></Route>
              <Route path="/login" element = { <Auth /> } />
          </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes
