import React from 'react';
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from 'react-router';
import PageLoader from './PageLoader';

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) return <PageLoader />;

    if (!isSignedIn) return <Navigate to="/signin" replace />;

    return children;
};

export default ProtectedRoute;
