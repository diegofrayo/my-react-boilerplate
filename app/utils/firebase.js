// npm libs
import firebase from 'firebase';

// constants
import {
  FIREBASE_DATABASE_URL,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_API_KEY,
} from 'constants/index';

// utils
import {
  normalizeError,
} from 'utils/filters';

if (firebase.apps === undefined || (firebase.apps && firebase.apps.length === 0)) {
  firebase.initializeApp({
    databaseURL: FIREBASE_DATABASE_URL,
    authDomain: FIREBASE_AUTH_DOMAIN,
    apiKey: FIREBASE_API_KEY,
  });
}

export function logIn(email, password) {
  try {
    return firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => result)
      .catch(error => Promise.reject(normalizeError(error.message)));
  } catch (e) {
    return Promise.reject(e.message);
  }
}

export function logOut() {
  firebase.auth().signOut();
}

export function onAuthHandler(handler) {
  return firebase.auth().onAuthStateChanged(handler);
}
