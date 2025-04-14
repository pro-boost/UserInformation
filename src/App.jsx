import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import NavBar from './Components/NavBar'
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
