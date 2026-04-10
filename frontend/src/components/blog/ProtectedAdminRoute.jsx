import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getStoredAdminToken } from '../../lib/api';

export const ProtectedAdminRoute = ({ children }) => {
  const location = useLocation();
  const token = getStoredAdminToken();

  if (!token) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};
