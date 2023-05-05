
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        return signOut(auth);
    }
     const googleSignIn =()=>{
       return signInWithPopup(auth,provider)

     }

     const githubSignIn = () => {
        return signInWithPopup(auth,githubProvider);
     }

    useEffect(() => {
      const unsubscribe=  onAuthStateChanged(auth,loggedUser => {
            console.log('auth state change', loggedUser);
            setUser(loggedUser);
        });
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;