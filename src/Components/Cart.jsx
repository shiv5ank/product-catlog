import React from 'react';
import { useProduct } from '../Context/Context';
import "./Cart.css";


function Cart() {
  const {cartProducts,setCartProducts} = useProduct()
 ;
  const deleteCart = (id)=>{
    const deleteItem = cartProducts.filter((it)=>{
      console.log(it)
      return it.id!==id
      
    })
    setCartProducts(deleteItem)

  }
  return (
    <div>
      {cartProducts.map((item,i)=>{
        return (
            <div className="product_card" key={i}>
               
                <img src={item[0].image} width={200} height={200} alt="pro"/>
                <h3>$ Price : {item[0].price}</h3>
                <p> <b>Category : </b>{item[0].category}</p>
                <button className='del_btn' onClick={()=>deleteCart(item[0].id)}> Delete from Cart</button>
            </div>
        )
    })}
    </div>
  )
}

export default Cart;