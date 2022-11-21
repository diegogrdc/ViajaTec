//import './App.css';
import LoginForm from "./pages/loginform";
import Home from "./pages/home";
import Gmap from './pages/map';
import FourOhFour from './pages/FourOhFour';
import About from './pages/about';
import Rules from './pages/rules';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from './components/navbar';

function App() {

  return (
    <div>
      <ResponsiveAppBar/>
      <Router>
        <Routes>
          <Route path='/' element={<FourOhFour/>} exact/>
          <Route path='/map' element={<Gmap/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<FourOhFour/>} />
        </Routes>
		  </Router>
      
    </div>
  );
}

export default App;
