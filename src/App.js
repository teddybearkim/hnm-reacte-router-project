import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './Page/ProductAll';
import Login from './Page/Login';
import ProductDetail from './Page/ProductDetail';
import Navbar from './component/Navbar';


//1. 전체상품페이지, 로그인페이지, 상품상세페이지
//2. 전체상품페이지 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 되지 않을 경우 로그인 페이지가 먼저 나온다.
//5. 로그인이 되어있을 경우, 상품 디테일이 보인다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
//7. 로그아웃이 되면 상품디테일 페이지를 볼 수 없다. 다시 로그인페이지가 보여진다.
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
