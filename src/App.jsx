import 'styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from 'components/Home';
import Admin from 'components/Admin';
import Benefit from 'components/Benefit';
import About from 'components/About';
import Nav from 'components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/benefit' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/' element={<Benefit />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
