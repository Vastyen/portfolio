import Home from './pages/home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import {Contact} from './pages/Contact'
import NavBar from './components/NavBar'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <NavBar/>
      <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/proyectos" element={<Projects></Projects>} />
          <Route path="/contacto" element={<Contact></Contact>} />
    </Routes>
    </>

  )
}

export default App
