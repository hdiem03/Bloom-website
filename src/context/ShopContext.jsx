import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { getProductPrice } from "../utils/utils";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

  const currency = 'đ';
  const delivery_fee = 30000;
  const [cartItem, setCartItem] = useState(()=> JSON.parse(localStorage.getItem('cartItem')) || []);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
    
  const addToCart = (id, size, color, quantity) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const {productPrice} = getProductPrice(product.price,product.bestSeller);
    const image = product.color.find(c => c.name === color).image[0];
    const cartData = [...cartItem];
    const existingItem = cartData.find(item => item.id === id && item.size === size && item.color === color);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartData.push({id, name: product.name,productPrice,size,color,image,quantity});
    }

    localStorage.setItem('cartItem', JSON.stringify(cartData));
    setCartItem(cartData);
  };

  
  
  const getCartCount = () =>{
    let totalCount = 0;
    for (const item of cartItem) {
      totalCount += item.quantity;
    }
    return totalCount;
  }

  const updateQuantity= (id,size,color,quantity) =>{
    const cartData = cartItem.map(item =>{
      if (item.id === id && item.size === size && item.color === color) {
        return {...item, quantity};
        
      }
      return item;
    })
    .filter(item => item.quantity >0);
    localStorage.setItem('cartItem',JSON.stringify(cartData));
    setCartItem(cartData);

  }
  
  const getCartAmount= () =>{
    let totalAmount = 0;
    for (const item of cartItem) {
      const product = products.find(p => p.id === item.id);
      if (product) {
        const {productPrice} = getProductPrice(product.price,product.bestSeller);
        totalAmount += productPrice * item.quantity;
        
      }
    }
    return totalAmount;
  }

  const getTotalPayment= () => getCartAmount() +delivery_fee;

  const value = {
    products, currency, delivery_fee,
    cartItem,setCartItem,
    addToCart, getCartCount,
    updateQuantity, getCartAmount,
    getTotalPayment,
    showCartSidebar,setShowCartSidebar,
    search,setSearch,
    navigate

  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )

}

export default ShopContextProvider;
