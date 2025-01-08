import { createContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider  } from './firebase.config'; // Import the correctly initialized auth from firebase.config.js

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    // Function to create a new user
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to log out
    const logOut = () => {
        return signOut(auth);
    };


     // Log in with Google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user); // Set the user after successful login
        //  console.log(user.photoURL)
      })
      .catch((error) => {
        console.error(error);
      });
  };


    // Function to log in
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        // Cleanup subscription on component unmount
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        setUser,
        registerUser,
        logOut,
        userLogin,
        googleLogin,
    };
// console.log(user)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
