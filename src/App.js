import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import ProductDetail from './productDetail';
import Profile from './profile';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/product/:id' element={<ProductDetail  />}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
