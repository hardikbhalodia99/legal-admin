
import { useAuth } from "./useAuth"
import { AuthContext } from "./useAuthUser"

import { useEffect, useState } from "react"

export const AuthProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [authToken, setAuthToken] = useState(null);

	const { getUser, getToken } = useAuth();

	useEffect(() => {
		loadUser();
	}, []);

	const loadUser = async () => {
		try{
			const user = await getUser();
			const {jwt} = await getToken();
			setAuthUser(user);
			setAuthToken(jwt);
		}
		catch(err){
			console.log("err - no logged in user");
		}
	};

	const value = {
		authUser,
		authToken,
		loadUser
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
