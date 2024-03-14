// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUserAccount } from "@/src/lib/auth/appwrite/server"
import { getJWT, getUser } from "@/src/lib/auth/appwrite/server"
import { setCookieValues } from "@/src/lib/auth/cookies/setAuthCookies"
import { unsetAuthCookies } from "@/src/lib/auth/cookies/unsetAuthCookies"
import axios from "axios"

//DONE
export default async function handler(req, res) {
  try {
    const domain = process.env.APPWRITE_ENDPOINT
    const path = "/account/sessions/email"
    const { email, password } = req.body
    const projectId = process.env.APPWRITE_PROJECT_ID
    const headers = {
      "X-Appwrite-Project": projectId,
      "Content-Type": "application/json",
    }
    const url = `${domain}${path}`
    const appwriteResponse = await axios.post(url, { email, password }, { headers: headers })
    const fallbackToken = appwriteResponse.headers["x-fallback-cookies"]
    console.log("fallback token was ", fallbackToken)
    const jwt = await getJWT(fallbackToken)
    console.log("jwt was", jwt)
    const userData = await getUserAccount(jwt, fallbackToken, req, res)
    console.log("%c 🍧 userData", "color:#42b983", userData);
    if(userData && userData.prefs && userData.prefs.role === "ADMIN"){
      await setCookieValues(jwt, fallbackToken, req, res)
    }else{
      await unsetAuthCookies(req, res) 
    }
    return res.status(200).json({
      user: appwriteResponse.data,
      fallback: fallbackToken,
    })
  } catch (e) {
    console.log(e)
    return res.status(500).json(e)
  }
}
