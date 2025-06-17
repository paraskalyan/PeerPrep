import React from 'react';
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from 'react-router';
import PageLoader from './PageLoader';

const ProtectedRoute = ({ children }) => {
    const { isLoaded, isSignedIn } = useAuth();

    // Show nothing or a loader until Clerk finishes loading
    if (!isLoaded) return <PageLoader />;

    // Once loaded, check if signed in
    if (!isSignedIn) return <Navigate to="/signin" replace />;

    return children;
};

export default ProtectedRoute;
