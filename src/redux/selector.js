export const getContacts = state => state.contacts.contacts;
export const getContactsFilter = state => state.contacts.filter;
export const getContactsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;

export const selectAuthName = state => state.auth.name;
export const selectAuthEmail = state => state.auth.email;
export const selectToken = state => state.auth.token;
export const selectIsAuth = state => state.auth.isauth;
export const selectIsLoadingAuth = state => state.auth.isLoading;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
