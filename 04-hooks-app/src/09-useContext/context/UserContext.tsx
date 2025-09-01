import {  useEffect, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-mock.data";
import { createContext } from "react";

type AuthStatus = 'checking' | 'authenticated'|'not-autheticated';

interface UserContextProps{
    //state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated:boolean;
    //methods
    login:(userId:number)=>boolean;
    logout:()=>void;
}

export const UserContext=createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
const [authStatus,setAuthStatus] = useState<AuthStatus>('checking');
const [user,setUser]=useState<User|null>(null);

const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus('not-autheticated');
      return false;
    }

    setUser(user);
    setAuthStatus('authenticated');
    localStorage.setItem('userId', userId.toString());
    return true;
  };

const handlelogout =()=>{
    console.log('logout');
    setAuthStatus("not-autheticated");
    setUser(null);
    localStorage.removeItem('userId')
}
useEffect(()=>{
    const storeUserId = localStorage.getItem('userId');
    if(storeUserId){
        handleLogin(+storeUserId);
        return;
    }
    handlelogout();
},[])
  return <UserContext value={{
    authStatus: authStatus,
    user: user,
    isAuthenticated:authStatus==='authenticated',
    login: handleLogin,
    logout: handlelogout
  }}>{children}</UserContext>;
};
