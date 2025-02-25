import './App.css';
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Page from './component/Page';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
