import { getCurrentUser, getCurrentUserToken } from "./client"
import { createContext, useEffect, useState } from "react"
import hoistNonReactStatics from 'hoist-non-react-statics'
import axios from "axios"
import { useRouter } from "next/router"
import { AuthProvider } from "./AuthProvider"

const withAuthUser =
  () =>
  (ChildComponent) => {
    const WithAuthUserHOC = (props) => {
        const router = useRouter();
        const [userData, setUserData] = useState(null)
        const [userToken, setUserToken] = useState("");
        const getUser = async () => {
            try{
                console.log("before get user");
                const user = await getCurrentUser();
                console.log("user" , user);
                setUserData(user);
            }
            catch(err){
                console.log("pushing to login here?")
                console.log(err);
                router.push('/login');
            }
        }

        const getUserToken = async () => {
            // const {jwt} = await getCurrentUserToken();
            const cookie = await axios.get('/api/get-cookies')
            console.log("%c 🍺 cookie", "color:#f5ce50", cookie);
    
            const jwt = cookie.data.cookies;
            console.log("user token was" , jwt);
            setUserToken(jwt);

            
            const cookieFallback = window.localStorage.getItem("cookieFallback");
            console.log("fallback val" , cookieFallback);
            try {           
                if(jwt !== null && jwt !== undefined && jwt !== "" ){
                    console.log("calling login here ? ");
                    const res = await axios.post("/api/login", {} , {
                        headers: {
                            "Authorization" : jwt,
                            "X-Fallback-Cookies" : cookieFallback
                        }
                    })
                    console.log("res was ", res);
                }
            } catch (error) {
                console.log("%c 🍎 error", "color:#465975", error);
                
            }
        }

        useEffect(() => {
            getUser();
            getUserToken();
        }, []);
        console.log("in with auther");
        const userProps = {
            ...props, AuthUser: userData,AuthUserToken: userToken
        }
        const comps = (
            <AuthProvider>
              <ChildComponent {...userProps} />
            </AuthProvider>
        );
        return comps
    }

    WithAuthUserHOC.displayName = 'WithAuthUserHOC'
    hoistNonReactStatics(WithAuthUserHOC, ChildComponent)
    return WithAuthUserHOC
}

export default withAuthUser;