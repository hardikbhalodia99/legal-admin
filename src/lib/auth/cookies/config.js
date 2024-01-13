
export const ONE_WEEK_IN_MS = 7 * 60 * 60 * 24 * 1000;
export const TWO_WEEKS_IN_MS = 14 * 60 * 60 * 24 * 1000;
export const ONE_YEAR_IN_MS = 365 * 60 * 60 * 24 * 1000;
export const COOKIE_NAME = process.env.REACT_APP_ENV === "prod" ? "legal-admin-dashboard" : "legal-admin-dashboard-staging";
export const KEYS = [ "viPM47Ocf1S9fxSPh34uKJ2E8Y5Xsi8T"]

console.log("%c 🍉 process.env.NODE_ENV", "color:#e41a6a", process.env.NODE_ENV);
export const cookieConfig = {
    keys: KEYS,
    httpOnly: true,
    domain: process.env.NODE_ENV === "development" ? "" : "",
    maxAge: ONE_YEAR_IN_MS, // one year
    overwrite: true,
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === "development" ? false : true,
    signed: true
};