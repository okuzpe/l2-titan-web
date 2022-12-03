import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/nav-bar'
import { Home } from './pages'
function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={Home} />
        <Route path='/home' element={Home}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
