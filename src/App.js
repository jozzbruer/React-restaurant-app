
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Features from './components/features/Features';
import Hero from './components/Hero/Hero';
import Products from './components/products/Products';
import { productData, productDataTwo } from './components/products/data'
import { GlobalStyles } from './globalStyles';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Features />
      <Products heading='Choose your sweet' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
