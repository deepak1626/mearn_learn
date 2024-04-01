import { createContext, useState } from "react";
const AuthContext = createContext()


const AuthProvider =  ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem('token'))

    const storageTokenls = (serverToken) => {
         localStorage.setItem('token', serverToken);
        setToken(serverToken)

    }

   

     const LogoutUser = () =>{
        setToken("")
         return localStorage.removeItem('token')
     }
     let isLoggedIn = !!token
     console.log('Login', isLoggedIn)
     


    return <AuthContext.Provider value={{storageTokenls, LogoutUser, isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}
export {AuthContext, AuthProvider}