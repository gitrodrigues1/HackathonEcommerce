import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Auth from "./pages/Auth.tsx"
import Menu from "./pages/Menu.tsx"


const AppRoutes = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element = { <Home/> } />
              <Route path="/login" element = { <Auth /> } />
              <Route path="/menu" element = { <Menu/> } />
          </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes
