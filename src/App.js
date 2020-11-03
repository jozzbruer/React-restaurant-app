
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import Products from './components/products/Products';
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading='Choose your favorite' />
    </Router>
  );
}

export default App;
