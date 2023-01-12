import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import NavBar from './components/nav-bar'
import Rates from './components/rates'
import Register from './components/register'
import { Download, Home, ServerInfo } from './pages'
import Login from './pages/auth'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/download' element={<Download />} />
        <Route path='/server-info' element={<ServerInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/rates' element={<Rates />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
