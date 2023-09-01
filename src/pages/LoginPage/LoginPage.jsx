import React from "react";
import "../../App.css";
import "./LoginPage.css";

export const LoginPage = () => {
    return (
        <>
            <div id="loginpage-entry" className="center-content" style={{marginTop: "50px"}}>
                <div id="loginform-content" className="loginForm">
                    <h1 className="loginLoginText">Log in</h1>
                    <div className="flex-row googleLoginButton">
                        <img className="googleIcon" src={require("./google-icon.avif")} alt="G"/>
                        <h3 className="googleLoginButtonText">Login with Google</h3>
                    </div>
                </div>
            </div>
        </>
    )
}