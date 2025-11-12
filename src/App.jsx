import Home from "./pages/home"
import Header from "./componentes/header"
import Create from "./pages/create"
import Catalog from "./pages/catalog" 
import PricingCard from "./pages/pricingCard"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/pricing" element={<PricingCard/>}/>
    </Routes>



    </>
  )
}

export default App
