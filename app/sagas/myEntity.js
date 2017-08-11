// npm libs
import {
  // delay,
  takeEvery,
} from 'redux-saga';
import {
  // call,
  fork,
  put,
  // select,
} from 'redux-saga/effects';

export function* myEntitySaga() {

  try {

    // let state = yield select((state) => state.app);
    // const data = yield call(api.callApiFunction, functionParams);

    yield put({
      type: 'MY_FUNCTION_SUCCESS',
    });

  } catch (err) {
    yield put({
      type: 'MY_FUNCTION_FAILURE',
    });
  }
}

function* watchMyEntity() {
  yield* takeEvery('MY_FUNCTION', myEntitySaga);
}

export default function* mySaga() {
  yield fork(watchMyEntity);
}
