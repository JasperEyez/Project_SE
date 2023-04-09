import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Home from './page/Home';
import Gift from './page/Gift';
import Order from './page/Order';
import Pay from './page/Pay';
import Profile from './page/Profile';
import Welcome from './page/Welcome';
import Login from './page/Login';
import GiftFeature from './component/GiftFeature';
import GiftAnytime from './component/GiftAnytime';
import GiftCong from './component/GiftCong';
import GiftThank from './component/GiftThank';
import OrderFood from './component/OrderFood';
import OrderBestseller from './component/OrderBestseller';
import OrderDrinks from './component/OrderDrinks';
import Registration from './page/Registration';
import Blogs from './page/Blogs';
import Blogs1 from './page/Blogs1';
import GenerateQRCode from './page/GenerateQRCode';



const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<App/>}>
    <Route path='/' element ={<Home/>}/>
    <Route path='/giftcards' element={<Gift/>} >
        <Route path='' element={<GiftFeature/>}/>
        <Route path='anytime' element={<GiftAnytime/>}/>
        <Route path='Congratulations' element={<GiftCong/>}/>
        <Route path='thank' element={<GiftThank/>}/>
      </Route>
    <Route path='/ordering' element ={<Order/>}>
      <Route path='' element = {<OrderBestseller/>}/>
      <Route path='drinks' element = {<OrderDrinks/>}/>
      <Route path='food' element = {<OrderFood/>}/>
    </Route>
    <Route path='/pay' element ={<Pay/>}/>
    <Route path='/profile' element ={<Profile/>}/>
    <Route path='/welcome' element ={<Welcome/>}/>
    <Route path='/login' element ={<Login/>}/>
    <Route path='/registration' element ={<Registration/>}/>
    <Route path='/blogs' element ={<Blogs/>}/>
    <Route path='/blogs1' element ={<Blogs1/>}/>
    <Route path='/generateQRCode' element ={<GenerateQRCode/>}/>
  </Route>

  
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router = {router}/>

    

);


reportWebVitals();
