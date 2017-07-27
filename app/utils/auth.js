export default {

  saveUserSession: (userProfile) => {
    try {
      window.localStorage.setItem('user', JSON.stringify(userProfile));
    } catch (e) {
      console.log(e);
    }
  },

  getUserSession: () => {
    try {
      return JSON.parse(window.localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  },

  clearUserSession: () => window.localStorage.removeItem('user'),

};
