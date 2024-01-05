import { COOKIE_NAME } from './config'

export const getAuthUserCookieName = () => {
  const baseAuthCookieName = COOKIE_NAME;
  return `${baseAuthCookieName}.AuthUser`
}

export const getAuthUserTokensCookieName = () => {
  const baseAuthCookieName = COOKIE_NAME;
  return `${baseAuthCookieName}.AuthUserTokens`
}

export const getAuthUserFallbackCookie = () => {
  const baseAuthCookieName = COOKIE_NAME;
  return `${baseAuthCookieName}.AuthUserFallback`
}