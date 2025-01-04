import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

export const reducers = combineReducers({
  repositories: repositoriesReducer,
});

// using ReturnType helper function to give back the type of function inside <>
export type RootState = ReturnType<typeof reducers>;
