 
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const user =null;

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;