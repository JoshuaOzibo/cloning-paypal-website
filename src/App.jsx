import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CheckOutSection from "./components/checkOutSection";
import PayNow from "./components/PayNow";
import HooksLearning from "./componentTwo/HooksLearning";
import { AppContext } from "./componentTwo/contextContainer/context";
import Signup from "./componentTwo/auth//Signup";
import Login from "./componentTwo/auth/Login";
import { AuthContext } from "./componentTwo/auth/authContext/AuthContext";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (isAuthenticated === false) {
      return <Navigate to="/signup" replace />;
    }else{
      return children;
    }
  };

  const { darkMood } = useContext(AppContext);
  return (
    <div
      className={
        !darkMood ? "max-h-screen" : "bg-black min-h-screen text-white"
      }
    >
      <>
        {/* <div>
      <Navbar />
      <HeroSection />
      <CheckOutSection />
      <PayNow />
      </div> */}

        <Routes>

          {/* Redirect from root based on auth status */}
          <Route 
            path="/" 
            element={
              isAuthenticated === true ? 
                <Navigate to="/home" replace /> : 
                <Navigate to="/signup" replace />
            } 
          />


          {/* public route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* protected route */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HooksLearning />
              </ProtectedRoute>
            }
          />
        </Routes>
      </>
    </div>
  );
};

export default App;
