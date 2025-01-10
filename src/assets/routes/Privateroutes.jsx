import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';  // Adjust path as needed
import { Navigate } from 'react-router-dom';

const Privateroutes = ({ children }) => {  // 'children' should be lowercase
  const { user } = useContext(AuthContext); // Make sure 'user' is being set correctly in AuthContext
  console.log(user)
  if (user) {
    console.log('user exist')
    return children;  // Return the children if the user is logged in
  } else {
    return <Navigate to="/login" />;  // Redirect to login if user is not logged in
  
}
};

export default Privateroutes;
