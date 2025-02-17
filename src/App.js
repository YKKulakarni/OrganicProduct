import './App.css';
import Home from './component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
