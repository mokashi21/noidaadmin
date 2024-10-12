import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard'
import Property from './components/Property/Property'
import Setting from './components/Setting/Setting'
import Support from './components/Support/Support'
import Financial from './components/Financial/Financial'
import Createproperty from './components/Create/Createproperty'
import CreateFinan from './components/Create/CreateFinan'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <Dashboard /> }/>
        <Route path="/create-new-property-data" element={ <Createproperty /> }/>
        <Route path="/create-new-financial-data" element={ <CreateFinan /> }/>
        <Route path="/property" element={ <Property />}/>
        <Route path="/setting" element={ <Setting /> }/>
        <Route path="/Support" element={ <Support /> }/>
        <Route path="/financial" element={  <Financial /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App