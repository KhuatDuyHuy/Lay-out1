

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route ,Link} from 'react-router-dom';

import Home from'./Pasge/Home';
import Gd1 from'./Pasge/Gd1';
import Gd2 from'./Pasge/Gd2';
import Gd3 from'./Pasge/Gd3';
import TraToken from './Pasge/TraToken';
function App() {
  return (
    <div>
        <div className="Main">
              <div className="sidebar col-2 ">
                <small className="text-muted"><b>GIAO DỊCH</b></small>
                    <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                      </li>
                      <li>
                        <Link to="/giao-dich-mua-IFC">Giao Dịch Mua IFC</Link>
                      </li>
                      <li>
                        <Link to="/giao-dich-rut-IFC">Giao Dịch Rút IFC</Link>
                      </li>
                      <li>
                        <Link to="/giao-dich-rut-USDT">Giao Dịch Rút USDT </Link>
                      </li>
                    </ul>
                <small className="text-muted "><b>Phân Bổ Token IFC</b></small>
                      <ul>
                        <li>
                          <Link to="/TraToken-Nha-Dau-Tu">Trả Token Nhà Đầu Tư</Link>
                        </li>
                        <li>
                          <Link to="#">Trả Token Dev</Link>
                        </li>
                        <li>
                          <Link to="#">Trả Token Nhà Kinh Doanh</Link>
                        </li>
                      </ul>
                <small className="text-muted "><b>Tài Khoản</b></small>
              </div>
              <div className="Body col-10 ">
                <Routes>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/giao-dich-mua-IFC" element={<Gd1/>}/>
                    <Route path="/giao-dich-rut-IFC" element={<Gd2/>}/>
                    <Route path="/giao-dich-rut-USDT" element={<Gd3/>}/>
                    <Route path="/TraToken-Nha-Dau-Tu" element={<TraToken/>}/>
                </Routes>
              </div>
      </div>
    </div>
  );
}

export default App;
