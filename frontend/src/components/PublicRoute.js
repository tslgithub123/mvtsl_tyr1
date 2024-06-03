// import React from "react";
// import { Navigate } from "react-router-dom";

// export default function PublicRoute({ children }) {
//     if (localStorage.getItem("token")) {
//         return <Navigate to="/" />;
//     } else {
//         return children;
//     }
// }
import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    // Check if token is available in localStorage
    const token = localStorage.getItem("token");
    
    // Get user ID from session storage if available
    const userId = sessionStorage.getItem("userId");

    // If token is available, set user ID in session storage
    if (token && userId) {
        sessionStorage.setItem("userId", userId);
    }

    // If token is available, redirect to home page, otherwise render children
    return token ? <Navigate to="/" /> : children;
}
