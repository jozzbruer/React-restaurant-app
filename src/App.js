
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { GlobalStyles } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
