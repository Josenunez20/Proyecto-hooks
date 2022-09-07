import React from 'react'
import Hooks from './components/Hooks'
import { Routes, Route } from 'react-router-dom'
import Hooks1 from './components/Hooks1'
import Hooks2 from './components/Hooks2'
import Hooks3 from './components/Hooks3'
import Hooks4 from './components/Hooks4'
import Hooks5 from './components/Hooks5'
import Hooks6 from './components/Hooks6'
import Hooks7 from './components/Hooks7'
import Hooks8 from './components/Hooks8'
import Hooks9 from './components/Hooks9'
import Hooks10 from './components/Hooks10'
import Hooks11 from './components/Hooks11'
import Hooks12 from './components/Hooks12'
import Child from './components/Child'

function App() {
return (
  
    <>
      <Hooks/>
      <Routes>
      <Route path="Hooks" element={<Hooks/>}/>
        <Route path="Hooks1" element={<Hooks1/>}/>
        <Route path="Hooks2" element={<Hooks2/>}/>
        <Route path="Hooks3" element={<Hooks3/>}/>
        <Route path="Hooks4" element={<Hooks4/>}/>
        <Route path="Hooks5" element={<Hooks5/>}/>
        <Route path="Hooks6" element={<Hooks6/>}/>
        <Route path="Hooks7" element={<Hooks7/>}/>
        <Route path="Hooks8" element={<Hooks8/>}/>
        <Route path="Hooks9" element={<Hooks9/>}/>
        <Route path="Hooks10" element={<Hooks10/>}/>
        <Route path="Hooks11" element={<Hooks11/>}/>
        <Route path="Hooks12" element={<Hooks12/>}/>
        <Route path="Child" element={<Child/>}/>
      </Routes>
    </>
  )
  
}

export default App;