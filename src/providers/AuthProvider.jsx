
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
      const unsubscribe=  onAuthStateChanged(auth,currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;