import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard'
import Create from './components/Create/Create'
import Property from './components/Property/Property'
import Setting from './components/Setting/Setting'
import Support from './components/Support/Support'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <Dashboard /> } />
        <Route path="/create" element={ <Create /> } />
        <Route path="/property" element={ <Property /> } />
        <Route path="/setting" element={ <Setting /> } />
        <Route path="/Support" element={ <Support /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App