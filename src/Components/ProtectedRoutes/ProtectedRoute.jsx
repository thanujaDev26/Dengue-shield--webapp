import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 
    return isLoggedIn ? children : <Navigate to="/sign-in" replace />;
};

export default ProtectedRoute;