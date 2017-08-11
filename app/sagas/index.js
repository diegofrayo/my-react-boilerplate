// npm libs
import {
  fork,
} from 'redux-saga/effects';

// sagas
import myEntity from 'sagas/myEntity';

export default function* root() {
  yield fork(myEntity);
}
