import axios from 'axios';
import {Client, Account} from 'node-appwrite';
import { setCookie } from '../cookies';
import { getAuthUserTokensCookieName } from '../cookies/authCookie';
import {endpoint, project} from "./config";
import { cookieConfig } from '../cookies/config';

const getHeaders = (fallback) => {
    return {
        'content-type': 'application/json',
        'x-sdk-name': 'Node.js',
        'x-sdk-platform': 'server',
        'x-sdk-language': 'nodejs',
        'x-sdk-version': '8.2.0',
        'X-Appwrite-Response-Format' : '1.0.0',
        'X-Fallback-Cookies' : fallback,
        'X-Appwrite-Project' : process.env.APPWRITE_PROJECT_ID
    };
}

export const getJWT = async (fallback) => {
    const headers = getHeaders(fallback);
    const jwtRes = await axios.post(`${endpoint}/account/jwt`,{},{headers: headers});
    const refreshedJwt = jwtRes.data.jwt;
    return refreshedJwt;
}

export const getUser =  async (fallback) => {
    const headers = getHeaders(fallback);
    const userRes = await axios.get(`${endpoint}/account`,{headers: headers});
    const user = userRes.data;
    return user;
}

export const getUserAccount = async (jwt, fallback,req, res) => {
    const client = new Client();   
    const account = new Account(client);
    client.setEndpoint(endpoint).setProject(project);
    client.setJWT(jwt) ;
    try{
        const user = await account.get();
        console.log("returning user here");
        return user;
        
    }
    catch(e){
        console.log(e);
        console.log("fetching with fallback : getUserAccount: " , fallback);
        const user = await getUser(fallback);
        const jwt = await getJWT(fallback)
        console.log("resetting cookie", jwt,new Error().stack );
        setCookie({
            name: getAuthUserTokensCookieName(),
            // Note: any change to cookie data structure needs to be
            // backwards-compatible.
            cookieVal: jwt,
            req: req,
            res: res,
            Options: cookieConfig
          }
        );
        return user;
    }
}