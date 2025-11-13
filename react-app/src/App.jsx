import {Routes, Route} from 'react-router-dom'
import './bootstrap.min.css'
import OpenPage from './Components/OpenPage/OpenPage'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<OpenPage />} />
      <Route path='/offers' element={<OpenPage />} />
    </Routes>
  )
}

export default App
