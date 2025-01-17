import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';  // Your App component
import './index.css';
import {AuthProvider} from "./Components/ProtectedRoutes/AuthContext.jsx";  // Your global CSS

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>

);
