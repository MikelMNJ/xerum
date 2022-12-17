import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { tokenValid } from '../../helpers';

const AuthRoute = props => {
  const { token, redirect, from } = props;
  const pathname = redirect || '/login';
  const state = { from };

  return tokenValid(token)
    ? <Outlet />
    : <Navigate to={pathname} state={state} />;
};

export { AuthRoute };