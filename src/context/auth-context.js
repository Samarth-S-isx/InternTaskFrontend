import {createContext} from 'react'


export const  AuthContext =  createContext(
    {isLoggedIn:false,name:null, email:null, login:()=>{},logout:()=>{}}
    );
    