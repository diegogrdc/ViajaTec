import './App.css';
import LoginForm from "./components/loginform";
import Home from "./pages/home";
import Gmap from './Map';
import FourOhFour from './pages/FourOhFour';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navigation/Navbar/navbar';
import "./components/navigation/Navbar/navbar.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/map' element={<Gmap/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<FourOhFour/>} />
        </Routes>
		  </Router>
    </div>
  );
}

export default App;
