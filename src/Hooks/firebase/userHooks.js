import React, { useContext, useEffect, useState } from 'react'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext(); 

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    const registerUser = ({email, password}) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = ({email, password}) => {
        console.log(email,password)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth)
    }
    // the create user function also calls the set user

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false);
    })
    return unsubscribe;
    }, [])

    const value = { currentUser, registerUser, loginUser, logoutUser }

    return (

        <AuthContext.Provider value={value}>
            { !loading && children}
        </AuthContext.Provider>
    )
}