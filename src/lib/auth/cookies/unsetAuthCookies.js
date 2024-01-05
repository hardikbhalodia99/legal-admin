import { deleteCookie } from './index'
import {
  getAuthUserCookieName,
  getAuthUserTokensCookieName,
  getAuthUserFallbackCookie
} from './authCookie'
import { cookieConfig } from './config'

export const unsetAuthCookies = async (req, res) => {
    try{
      deleteCookie(getAuthUserTokensCookieName(),req,res,cookieConfig)
    }
    catch(err){
      console.log("error", err);
    }
    try{
      deleteCookie(getAuthUserCookieName(),req,res,cookieConfig)
    }
    catch(err){
      console.log("error", err);
    }
    try{
      deleteCookie(getAuthUserFallbackCookie(),req,res,cookieConfig)
    }
    catch(err){
      console
    }
}