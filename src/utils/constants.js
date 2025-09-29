export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = 'accounts/v1/';

export const LOGIN_ROUTE = `${AUTH_ROUTES}login/`;
export const REGISTER_ROUTE = `${AUTH_ROUTES}register/`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}logout/`;
export const PROFILE_ROUTE = `${AUTH_ROUTES}whoami/`;
