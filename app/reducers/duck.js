// npm libs
import { createDuck } from 'redux-duck';

// utils
import http from './../../utils/http';

const duck = createDuck('jobs', 'jobs-app');

// types
const FETCH_JOBS_SUCCESS = duck.defineType('FETCH_JOBS_SUCCESS');
const FETCH_JOBS_FAIL = duck.defineType('FETCH_JOBS_FAIL');

// actions
const fetchJobsSuccess = duck.createAction(FETCH_JOBS_SUCCESS);
const fetchJobsFail = duck.createAction(FETCH_JOBS_FAIL);
export const fetchJobs = query => async dispatch => {
  try {
    const jobs = await http.post('/jobs', { query });
    dispatch(fetchJobsSuccess(jobs));
  } catch (error) {
    dispatch(fetchJobsFail(error));
  }
};

// reducer
const initialState = {
  message: '',
  results: [],
};

export default duck.createReducer(
  {
    [FETCH_JOBS_SUCCESS]: (state, { payload }) => ({ message: '', results: payload }),
    [FETCH_JOBS_FAIL]: (state, { payload }) => ({ message: payload, results: [] }),
  },
  initialState,
);
