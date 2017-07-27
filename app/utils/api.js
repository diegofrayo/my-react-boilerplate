// utils
import HTTP from 'utils/http';
import {
  logIn as firebaseLogIn,
} from 'utils/firebase';

export const MyEntityProfileAPI = {
  create: myEntityProfile => HTTP.post('/myEntity-profile', myEntityProfile),
  edit: myEntityProfile => HTTP.put(`/myEntity-profile/${myEntityProfile.id}`, myEntityProfile),
  delete: id => () => HTTP.delete(`/myEntity-profile/${id}`),
  list: () => HTTP.get('/myEntity-profile'),
  getById: id => () => HTTP.get(`/myEntity-profile/${id}`),
};

export const MyEntityAPI = {
  create: myEntity => HTTP.post('/myEntity', myEntity),
  edit: myEntity => HTTP.put(`/myEntity/${myEntity.id}`, myEntity),
  delete: id => () => HTTP.delete(`/myEntity/${id}`),
  list: () => HTTP.get('/myEntity'),
  getById: id => () => HTTP.get(`/myEntity/${id}`),
};

export const UserAPI = {
  create: user => HTTP.post('/user', user),
  edit: user => HTTP.put(`/user/${user.id}`, user),
  delete: id => () => HTTP.delete(`/user/${id}`),
  list: () => HTTP.get('/user'),
  getById: id => () => HTTP.get(`/user/${id}`),
};

export const LogInAPI = {
  firebaseLogIn: (email, password) => firebaseLogIn(email, password),
  backendLogIn: uid => HTTP.post('/auth/email-and-password', {
    uid,
  }),
};
