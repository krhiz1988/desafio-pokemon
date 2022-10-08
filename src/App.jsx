import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import SelectPoke from "./components/SelectPoke"
import ViewPoke from "./components/ViewPoke"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select' element={<SelectPoke />} />
        <Route path='/pokemon/:id' element={<ViewPoke />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
