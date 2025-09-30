export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = 'accounts/v1/';

export const LOGIN_ROUTE = `${AUTH_ROUTES}login/`;
export const REGISTER_ROUTE = `${AUTH_ROUTES}register/`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}logout/`;
export const PROFILE_ROUTE = `${AUTH_ROUTES}whoami/`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}update-profile/`;
export const ADD_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}add-profile-pic/`;
