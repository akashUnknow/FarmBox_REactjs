import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const navigate=useNavigate();
    const [user,SetUser]=useState(null);
    const [isSeller,SetIsSeller]=useState(false);
    const [showUserLogin,SetshowUserLogin]=useState(false);
    // const [user,SetUser]=useState(null);
    
    const value ={navigate,user,SetUser,isSeller,SetIsSeller,showUserLogin ,SetshowUserLogin}

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}