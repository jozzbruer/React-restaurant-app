
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* <Navbar /> */}
      <Hero />
    </Router>
  );
}

export default App;
