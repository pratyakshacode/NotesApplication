import "./App.css"
import { 
  BrowserRouter as Router, 
  Routes, 
  Route  
} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CreateNote from "./pages/CreateNote"
import AllNotes from "./pages/AllNotes"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    // npm i react-router-dom
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/note/create" element={<CreateNote/>} />
          <Route path="/note/all" element={<AllNotes/>} />
      </Routes>
    </Router>
  )
}

export default App