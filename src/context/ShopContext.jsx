import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { getProductPrice } from "../utils/utils";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{
  const currency = 'đ';
  const delivery_fee = 30000;
  const [search, setSearch] = useState('');
  const [cartItem, setCartItem] = useState(()=>JSON.parse(localStorage.getItem('cartItem')) || []);
  const navigate = useNavigate();
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  
  const addToCart = (id, size, color, quantity) =>{
    const cartData = [...cartItem];
    const product = cartData.find(item => item.id === id && item.size === size && item.color === color);
    if (product) {
      product.quantity += quantity;
      
    }else {
      cartData.push({id,size,color,quantity})
    }
    localStorage.setItem('cartItem', JSON.stringify(cartData));
    setCartItem(cartData);
  }

  const getCartCount = () =>{
    let totalCount = 0;
    for (const item of cartItem) {
      totalCount += item.quantity;
    }
    return totalCount;
  }

  const updateQuantity = (id,size,color,quantity) =>{
    const cartData = [];
    for (const item of cartItem) {
      if (item.id === id && item.size === size && item.color === color) {
        if (quantity> 0) {
          cartData.push({...item,quantity})
          
        }
        
      }else{
        cartData.push(item)
      }
    }
    localStorage.setItem('cartItem',JSON.stringify(cartData));
    setCartItem(cartData);
  }

  const getCartAmount = () =>{
    let totalAmount =0;
    for (const item of cartItem) {
      const product = products.find(p => p.id === item.id);
      if (product) {
        const {productPrice} = getProductPrice(product.price,product.bestSeller);
        totalAmount += productPrice * item.quantity;
        
      }
    }
    return totalAmount;
  }

  const getTotalPayment = () => getCartAmount() + delivery_fee;



  const value ={
    products,currency,delivery_fee,
    search,setSearch,
    cartItem,setCartItem,
    navigate,
    showCartSidebar,setShowCartSidebar,
    addToCart,getCartCount,
    updateQuantity,getCartAmount,
    getTotalPayment




  }
  return (
    <ShopContext.Provider value={value}>
      {props.children}

    </ShopContext.Provider>
  )

}

export default ShopContextProvider;