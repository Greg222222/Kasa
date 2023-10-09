import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Header from './components/Header'
import Error from './pages/Error'


function App() {
  return (
    <div className="App">
      
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
