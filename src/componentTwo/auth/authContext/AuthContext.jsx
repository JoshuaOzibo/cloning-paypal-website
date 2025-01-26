import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

 const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    console.log(message);

    // signup
    const handleSignup =({username, password}) => {

        fetch("http://localhost:8000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === "Signup successful"){
                localStorage.setItem("authToken", data.token)
                setMessage(data.token);
            }
            navigate("/login");
        })
        .catch(err => console.error(err));

    };

    // signup
    const handleSignin = async() => {
        try {
            const response = await fetch("http://localhost:8000/login", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${message}`,
                },
            });
            if(response.ok){
                
                    setIsAuthenticated(true);
                    navigate("/home");
                
            }
        } catch (error) {
            console.error(error);
        }

    };

    const authContextValue = {
        handleSignup,
        handleSignin,
        isAuthenticated,
    };

    console.log(isAuthenticated)


    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;

