import {
    getAuthUserFallbackCookie,
    getAuthUserTokensCookieName,
  } from '../cookies/authCookie'
import { cookieConfig} from "../cookies/config";
import { getCookie } from "../cookies";
import { getUserAccount } from "./server";

const withAuthUserTokenSSR =  () => (getServerSidePropsFunc) => async (ctx) => {
    const { req, res } = ctx
    let user = {}; 
    let token = "";
    let fallbackToken = "";
    let returnData = {
        props: {
            user: user,
            token: token,
            fallback: fallbackToken
        }
    }
    const cookieName = getAuthUserTokensCookieName();
    const fallbackCookieName = getAuthUserFallbackCookie();
    try{
        const reqConfig = {
            signed : cookieConfig.signed,
            
            keys: cookieConfig.keys,
            req: req,
            res: res,
            secure: cookieConfig.secure
        }
        let cookieVal = getCookie(cookieName,reqConfig);
        let fallbackCookieVal = getCookie(fallbackCookieName,reqConfig)
        token = cookieVal ? cookieVal : "";
        fallbackToken = fallbackCookieVal ? fallbackCookieVal : "";
        console.log("token was" , token);
        console.log("fallbackToken was" , fallbackToken);
        if(cookieVal || fallbackCookieVal){
            user = await getUserAccount(token, fallbackCookieVal, req,res);
            console.log("user was " , user);
             // Prepare return data
            returnData = { 
                    props: { 
                        user : user,
                        token : token,
                        fallback: fallbackToken
                    } 
            } 
        }
        else{
            console.log("no cookie found");
        }
    }
    catch(e){
        console.log(e);
    }
    // Evaluate the composed getServerSideProps().
    if (getServerSidePropsFunc) {
        ctx.user = user
        ctx.token = token
        ctx.fallback = fallbackToken
        ctx.headers 
        const composedProps = (await getServerSidePropsFunc(ctx)) || {}
        if (composedProps) {
            if (composedProps.props) {
                // If composedProps does have a valid props object, we inject AuthUser in there
                returnData = { ...composedProps }
                returnData.props.user = user
                returnData.props.token = token;
                returnData.props.fallback = fallbackToken;
            } else if (composedProps.notFound || composedProps.redirect) {
                // If composedProps returned a 'notFound' or 'redirect' key
                // (as per official doc: https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)
                // it means it contains a custom dynamic routing logic that should not be overwritten
                returnData = { ...composedProps }
            }
        }
    }
    return returnData;
}

export default withAuthUserTokenSSR;