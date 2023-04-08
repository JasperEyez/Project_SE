import React from 'react'
import './Order.css'
import Axios from 'axios'
import { useState } from 'react'

function OrderMerchandise() {

  const [menuList,setMenuList] = useState([]);

  const getMenu = () => {
    Axios.get('http://localhost:3001/menu').then((response) => {
      setMenuList(response.data);
    });
  }

  return (
    <div className='py-3'>
      <button onClick={getMenu}>Show menu</button>
      <br/>
      <div className="showorder">
          {menuList.map((val, key) => {
              return (
                <div className="menu card">
                  <div className="card-body">
                    <p className="card-text">Name: {val.order_name}</p>
                    <p className="card-text">Details: {val.order_details}</p>
                    <p className="card-text">Price: {val.order_price} ฿</p>
                    <p className="card-text">Type: {val.order_type}</p>
                    <p className="card-text">Image: {val.order_pic}</p>
                  </div>
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default OrderMerchandise