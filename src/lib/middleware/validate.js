import { getUserAccount } from '../auth/appwrite/server';

export const validateAuth = async (req, res) => {
  const data = await getUserAccount(req.headers.authorization, undefined, req, res);
  console.log('%c 🍡 data', 'color:#33a5ff', data);
  if (!data) {
    return { isValid : false }
  }else{
    return {
      isValid: true,
      data: decodedIdToken,
    }
  }
};
