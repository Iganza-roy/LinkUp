import { colors, getColors } from '../lib/utils';
export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = 'accounts/v1/';

export const LOGIN_ROUTE = `${AUTH_ROUTES}login/`;
export const REGISTER_ROUTE = `${AUTH_ROUTES}register/`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}logout/`;
export const PROFILE_ROUTE = `${AUTH_ROUTES}whoami/`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}update-profile/`;
export const ADD_PROFILE_PIC_ROUTE = `${AUTH_ROUTES}add-profile-pic/`;

const availableColors = getColors();

export const DUMMY_CHATS = [
  {
    id: 1,
    name: 'Belam Muia',
    initials: 'BM',
    lastMessage: 'Are we still on for today?',
    unread: true,
    colorIndex: 1,
    colorClass: availableColors[1],
  },
  {
    id: 2,
    name: 'Chloe Kim',
    initials: 'CK',
    lastMessage: 'Sent you the files.',
    unread: false,
    colorIndex: 2,
    colorClass: availableColors[2],
  },
  {
    id: 3,
    name: 'James Baker',
    initials: 'JB',
    lastMessage: 'Let me know when free.',
    unread: false,
    colorIndex: 0,
    colorClass: availableColors[0],
  },
  {
    id: 4,
    name: 'Norman Mccoy',
    initials: 'NM',
    lastMessage: 'Great work yesterday!',
    unread: false,
    colorIndex: 3,
    colorClass: availableColors[3],
  },
];
