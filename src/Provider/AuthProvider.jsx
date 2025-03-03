import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext= createContext(null)

const googleProvider = new GoogleAuthProvider();





const AuthProvider = ({children}) => {
            const [user,setUser] =useState(null)
            const [loading,setLoading]=useState(true)

            const createUser=(email,password)=>{
                          setLoading(true)
                           return createUserWithEmailAndPassword(auth,email,password)
                       }


                       const logOut=()=>{
                        setLoading(true)
                        return signOut(auth);
                      }

                       const signInUser=(email,password)=>{
                        setLoading(true)
                        return signInWithEmailAndPassword(auth,email,password)
                       }

                        
                       const googleLogin=()=>{
                        setLoading(true)
                        return signInWithPopup(auth, googleProvider)
          
                       }
                    



                       useEffect(()=>{
                        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
                             console.log('user in the on state chance',currentUser);
                             const userEmail=currentUser?.email||user?.email
                             const loggedUser={email:userEmail}
                             setUser(currentUser)
                             setLoading(false)
                             if(currentUser){
                              
                              axios.post('https://assignments-mark-distribution-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                              .then(res=>{
                                 console.log(res.data);
                              })
                             }

                             else{
                              axios.post('https://assignments-mark-distribution-server.vercel.app/logout',loggedUser,{withCredentials:true})
                              .then(res=>{
                                 console.log(res.data);
                              })
                             }

                          })
                          return()=>{
                             unSubscribe();
                          }
                         },[])

                        
          


            const authInfo={
                        user,
                        createUser,
                        signInUser,
                        googleLogin,
                       
                        logOut,
                       
                        loading,
  
            }
            return (
                       
                          <AuthContext.Provider value={authInfo}>
                           {children}
                          </AuthContext.Provider>     
                       
            );
};

export default AuthProvider;