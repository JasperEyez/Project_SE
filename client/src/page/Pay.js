import React from 'react'
import './css/Pay.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

function Pay () {

  const [cartList,setCartList] = useState([]);
  const [menuList,setMenuList] = useState([]);



  useEffect(() => {
    fetchCart();
    fetchMenu();
  }, []);

  const fetchCart = () => {
    Axios.get('http://localhost:3001/menu').then((res) => {
      setCartList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const fetchMenu = () => {
    Axios.get('http://localhost:3001/menu').then((res) => {
      setMenuList(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    if(count<100){
      setCount(count + 1);
    }
  };
  const decrementCount = () => {
    if(count>0){
      setCount(count - 1);
    }
  };
  
  /***********************************************/
  const total = 0;
  /***********************************************/

  return (
    <div className='py-3'>
      <div className="showcart">
          {menuList.map((val, key) => {
            return (
              <div className="cart card">
                <div className="card-body">
                  <div className="card-img">
                    <img src={val.order_pic} alt=''/>
                  </div>
                  <div className="card-box">
                    <div className="card-info">
                      <p className="card-name">{val.order_name}</p>
                      <p className="card-details">{val.order_details}</p>
                    </div>
                  </div>
                  <div className="card-box1">
                    <div className="card-footer">
                      <p className="card-price">{val.order_price} Bath</p>
                    </div>
                  </div>
                  <div className="card-edit">
                    <div className="x">
                      <button>x</button>
                    </div>
                    <div className="input-box">
                      <button id='down' onClick={decrementCount}>-</button>
                      <input type="number" min='0' max='100' value={count}/>
                      <button id='up' onClick={incrementCount}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="total-box">
            <p className="total">{total} Bath</p>
            <button className='checkout'>Checkout</button>
          </div>
          
      </div>
    </div>
  )

}

export default Pay