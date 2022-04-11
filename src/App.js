import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import REquireAuth from './components/RequireAuth/REquireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/Shop' element={<Shop></Shop>}></Route>
        <Route path='/Orders' element={<Order></Order>}></Route>
        <Route path='/Inventory' element={
          <REquireAuth>
            <Inventory></Inventory>
          </REquireAuth>
        }></Route>
        <Route path='/shipment' element={
          <REquireAuth>
            <Shipment></Shipment>
          </REquireAuth>
        }></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
