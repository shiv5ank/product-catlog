import React from "react";
import { useEffect } from "react";
import { useProduct } from "../Context/Context.js";
import './Product.css';

function Product() {
  // const [products, setProducts] = useState([]);
  const {products,setProducts,setCartProducts,cartProducts} = useProduct()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
      //eslint-disable-next-line
  }, []);

  const addCart =(id)=>{
    const addedProducts = products.filter((product)=>{
      return product.id===id
    })
    // const newItems = {...cartProducts,addedProducts}
    setCartProducts([...cartProducts,addedProducts])
  }
  return <div>
    {products.map((item,i)=>{
      console.log(item)
        return (
            <div className="product_card" key={item.id}>
               
                <img src={item.image} width={200} height={200} alt="product"/>
                <h3>$ Price : {item.price}</h3>
                <p> <b>Category : </b>{item.category}</p>
                <button className="btn" onClick={()=>addCart(item.id)}>Add to Cart</button>
            </div>
        )
    })}
  </div>;
}

export default Product;