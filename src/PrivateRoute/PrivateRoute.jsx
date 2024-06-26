import React, { useContext } from 'react';
import { AuthContext } from '../Context/ContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children;
    }
    return <Navigate to={'/Login'}></Navigate>
};

export default PrivateRoute;