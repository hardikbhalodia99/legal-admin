import { emailAuth, getCurrentUser, getCurrentUserToken, logout,createPasswordRecoveryConfirmation,createPasswordRecovery } from "./client";

export const useAuth = () => {
    const emailLogin = async (email, password) => {
      return await emailAuth(email,password)
    }

    const getUser = async () => {
		return await getCurrentUser();
	};

    const getToken = async () => {
		  return await getCurrentUserToken();
	  };

    const logoutUser = async () => {
      return await logout();
    }

    const createForgotPasswordRecovery = async (email) => {
      return await createPasswordRecovery(email)
    }

    const createForgotPasswordRecoveryConfirmation = async (userId,secret,password,confirmPassword) => {
      return await createPasswordRecoveryConfirmation(userId,secret,password,confirmPassword)
    }

  
    return {
      emailLogin,
      getUser,
      getToken,
      logoutUser,
      createForgotPasswordRecovery,
      createForgotPasswordRecoveryConfirmation
	};
}