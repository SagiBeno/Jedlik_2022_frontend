import {Routes, Route} from 'react-router-dom'
//import './App.css'
import './bootstrap.min.css'
import OpenPage from './Components/OpenPage/OpenPage'
import Offers from './Components/Offers/Offers'
import NewAd from './Components/NewAd/NewAd'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<OpenPage />} />
      <Route path='/offers' element={<Offers />} />
      <Route path='/newad' element={<NewAd />} />
    </Routes>
  )
}

export default App
