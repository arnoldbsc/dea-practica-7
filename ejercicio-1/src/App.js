import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Products from './pages/products/products';
import DetailProdcuts from './pages/detail-products/detailProducts';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='products'>
            <Route index element={<Products/>}/>
            <Route path=':productId' element={<DetailProdcuts/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
