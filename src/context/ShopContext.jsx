import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = 'đ';
    const delivery_fee = 30000;

    const [search, setSearch] = useState('');
    const [cartItem, setCartItem] = useState(() => {
        const storedCart = localStorage.getItem('cartItem');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return {};
    });

    const [showCartSidebar, setShowCartSidebar] = useState(false);



    const navigate = useNavigate();

    const addToCart = (itemId,size,quantity) =>{
        const cartData = {...cartItem};
        if (!cartData[itemId]) {
            cartData[itemId] = {}

        }
        if (cartData[itemId][size]){
            cartData[itemId][size] = cartData[itemId][size] + quantity;
        }else{
            cartData[itemId][size] = quantity;
        }
        setCartItem(cartData);
        localStorage.setItem('cartItem', JSON.stringify(cartData))

    }

    const getCartCount = () =>{
        let totalCount = 0;
        for (const itemId in cartItem){
            for(const size in cartItem[itemId]){
                totalCount += cartItem[itemId][size]
                
            }
        }
        return totalCount
    }
  

    const updateQuantity =(itemId,size,quantity) =>{
        const cartData = {...cartItem};
        if (cartData[itemId]) {
            cartData[itemId][size] = quantity;
            
        }
        setCartItem(cartData);
        localStorage.setItem('cartItem',JSON.stringify(cartData));
    }

    const getCartAmount =() =>{
        let totalAmount =0;
        for(const itemId in cartItem){
            let product = products.find(p => p.id === itemId);
            if (product) {
                for(const size in cartItem[itemId]){
                    totalAmount += product.price * cartItem[itemId][size];
                }
                
            }
        }
        return totalAmount;
    }
    const value = {
        products, currency, delivery_fee,
        search,setSearch,
        cartItem,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,
        navigate,
        showCartSidebar, setShowCartSidebar


    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;