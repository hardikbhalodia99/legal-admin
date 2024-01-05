// https://github.com/pillarjs/cookies
import Cookies from 'cookies'
import { encodeBase64, decodeBase64 } from './encoding'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const createCookieMgr = (CookieManagerRequest) => {
  // https://github.com/pillarjs/cookies
  
  const cookies = Cookies(CookieManagerRequest.req,CookieManagerRequest.res,
    {
    keys: CookieManagerRequest.keys,
    secure: CookieManagerRequest.secure,
  })
  return cookies
}

export const getCookie = (name ,CookieManagerRequest) => {
  if (CookieManagerRequest.signed && !CookieManagerRequest.keys) {
    throw new Error(
      'The "keys" value must be provided when using signed cookies.'
    )
  }
  const cookies = createCookieMgr(CookieManagerRequest)

  // https://github.com/pillarjs/cookies#cookiesget-name--options--
  const cookieVal = cookies.get(name, { signed: CookieManagerRequest.signed })
  return cookieVal ? decodeBase64(cookieVal).toString() : undefined;
  
}

export const setCookie = (SetCookieRequest) => {
  const {Options, req,res,cookieVal,name} = SetCookieRequest;
  if (Options.signed && !Options.keys) {
    throw new Error(
      'The "keys" value must be provided when using signed cookies.'
    )
  }

  const cookies = createCookieMgr({
    req: req,
    res: res,
    keys: Options.keys,
    secure: Options.secure!==undefined ? Options.secure : false
  })

  // If the value is not defined, set the value to undefined
  // so that the cookie will be deleted.
  const valToSet = cookieVal == null ? undefined : encodeBase64(cookieVal)

  // https://github.com/pillarjs/cookies#cookiesset-name--value---options--
  cookies.set(name, valToSet, {
    domain: Options.domain,
    httpOnly : Options.httpOnly,
    maxAge: Options.maxAge,
    overwrite: Options.overwrite,
    path : Options.path,
    sameSite: Options.sameSite,
    secure: Options.secure,
    signed: Options.signed,
  })
}

// Some options, like path and domain, must match those used when setting
// the cookie.
export const deleteCookie = (name,req,res,Options) => {
  // "If the value is omitted, an outbound header with an expired
  // date is used to delete the cookie."
  // https://github.com/pillarjs/cookies#cookiesset-name--value---options--
  setCookie({ 
    name: name, 
    cookieVal: undefined, 
    req, 
    res, 
    Options
  })
}