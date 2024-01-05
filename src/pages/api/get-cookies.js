import { getCookie } from "@/src/lib/auth/cookies"
import { getAuthUserTokensCookieName } from "@/src/lib/auth/cookies/authCookie"
import { cookieConfig } from "@/src/lib/auth/cookies/config"

export default async function handler(req, res) {
  const reqConfig = {
    signed: cookieConfig.signed,
    keys: cookieConfig.keys,
    req: req,
    res: res,
    secure: cookieConfig.secure,
  }
  const cookieName = getAuthUserTokensCookieName()
  const cookies = getCookie(cookieName, reqConfig)
  console.log("cookies", cookies)

  return res.status(200).json({ cookies: cookies })
}
