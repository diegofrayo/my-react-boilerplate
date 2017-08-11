// utils
import HTTP from 'utils/http';
import {
  logIn as firebaseLogIn,
} from 'utils/firebase';

export const MyEntityAPI = {
  create: myEntity => HTTP.post('/my-entity', myEntity),
  update: myEntity => HTTP.put(`/my-entity/${myEntity.id}`, myEntity),
  delete: id => () => HTTP.delete(`/my-entity/${id}`),
  list: () => HTTP.get('/my-entity'),
  getById: id => () => HTTP.get(`/my-entity/${id}`),
};

export const LogInAPI = {
  firebaseLogIn: (email, password) => firebaseLogIn(email, password),
  backendLogIn: uid => HTTP.post('/auth/email-and-password', {
    uid,
  }),
};
