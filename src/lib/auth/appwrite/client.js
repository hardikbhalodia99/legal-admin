import { Client, Account } from 'appwrite';
import axios from 'axios';
import {endpoint, project} from "./config";
//create client
const client = new Client();
client.setEndpoint(endpoint).setProject(project);

//create account
const account = new Account(client)

export const getCurrentUser = async () => {
  try{
    const user = await account.get();
    return user;
  }
  catch(err){
    return null;
  }
}

export const getCurrentUserToken = async () => {
  try{
    // const token = await account.createJWT();
    // return token;
    const cookie = await axios.get('/api/get-cookies')

    const jwt = cookie.data.cookies
    return {jwt}
  }
  catch(err){
    return { 
      jwt : ""
    };
  }
}

export const getCurrentUserTokenOnLogin = async () => {
  try{
    const token = await account.createJWT();
    return token;

  }
  catch(err){
    return { 
      jwt : ""
    };
  }
}

//authenticate user with phone number
export const emailAuth = async (email, password) => {
  const res = await axios.post("/api/email-auth", { email: email, password: password});
  const {user,fallback} = res.data;
  console.log("res was" , user);
 
  if(window && window.localStorage && fallback){
    window.localStorage.setItem("cookieFallback",fallback);
  }


  return user;
 
};

export const logout = async () => {
  try{
    await account.deleteSession('current');
    await axios.post("/api/logout");
    return true
  }
  catch(err){
    console.log("error", err);
    return false
  }
}

export const createPasswordRecovery = async (email) => {
  let url
  if(process.env.REACT_APP_ENV === "prod"){
    url = ""
  }else{
    url = ""
  }
  const promise = await account.createRecovery(email, url);
  console.log("%c 🥖 promise", "color:#ffdd4d", promise);
  return promise
}

export const createPasswordRecoveryConfirmation = async (userId,secret,password,confirmPassword) => {
  
  const promise = await account.updateRecovery(userId, secret, password, confirmPassword);
  console.log("%c 🥖 promise", "color:#4fff4B", promise);
  return promise
}