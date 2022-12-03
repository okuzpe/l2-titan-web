import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/nav-bar'
import { Download, Home, ServerInfo } from './pages'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/download' element={<Download />} />
        <Route path='/server-info' element={<ServerInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
