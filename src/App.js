import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Appartments from './pages/Appartments'
import Error from './pages/Error'




function App(props) {
  return (
    <div className="App">
      
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appartments/:id" element={<Appartments/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;
