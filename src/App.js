import './App.css';
import LoginForm from "./components/loginform";
import Home from "./pages/home";
import Gmap from './Map';
import FourOhFour from './pages/FourOhFour';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/map' element={<Gmap/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='*' element={<FourOhFour/>} />
        </Routes>
		  </Router>
    </div>
  );
}

export default App;
