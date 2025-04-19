import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const currency=import.meta.VITE_CURRENCY
    const navigate=useNavigate();
    const [user,SetUser]=useState(null);
    const [isSeller,SetIsSeller]=useState(false);
    const [showUserLogin,SetshowUserLogin]=useState(false);
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState({});
    // fetch all product
    const fetchProducts=async ()=>{
        setProducts(dummyProducts)
    }

    // add product to cart
    const addToCart= async (itemId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]+=1
        }else{
            cartData[itemId]=1
        }
        setCartItems(cartData)
        toast.success("Added to cart")
    }

    // update card iteam quantity
    const updateCartItems=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems)
        cartData[itemId]=quantity;
        setCartItems(cartData)
        toast.success("cart updated")
    }

    //remove from cart

    const removeFromCart=(itemId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]-=1
            if(cartData[itemId]===0){
                delete cartData[itemId]

            }
        }
        setCartItems(cartData)
        toast.success("Remove from cart")
    }

    useEffect(()=>{
        fetchProducts();
        console.log(products)
    },[])

    
    const value ={navigate,user,SetUser,isSeller,SetIsSeller,showUserLogin ,
        SetshowUserLogin,currency,addToCart,updateCartItems,products,
        removeFromCart,cartItems}

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}