"use client";
import React, { useState } from "react";
import Login from "./Login";
import ForgetPassword from "./ForgetPassword";

const SignInComponent = ({email,password}) => {
	const [showForgotPassword, setShowForgotPassword] = useState(false);

	return (
		<div className="container">
			{showForgotPassword ? <ForgetPassword /> : <Login setShowForgotPassword={setShowForgotPassword} prefillEmail={email} prefillPassword={password}/>}
		</div>
	);
};

export default SignInComponent;
