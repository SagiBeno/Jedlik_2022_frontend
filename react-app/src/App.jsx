import {Routes, Route} from 'react-router-dom'
import './App.css'
import './bootstrap.min.css'
import OpenPage from './Components/OpenPage/OpenPage'
import Offers from './Components/Offers/Offers'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<OpenPage />} />
      <Route path='/offers' element={<Offers />} />
    </Routes>
  )
}

export default App
