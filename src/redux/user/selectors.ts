import {createSelector} from '@reduxjs/toolkit';
import {AppState} from '../types';

import {UserState} from './types';

export const getUserState = (state: AppState) => state.user;

const userSelector = ({user}: {user: UserState}): UserState => user;

export const isLoadingSelector = createSelector(userSelector, ({isLoading}) => {
  return isLoading;
});

export const userInfoSelector = createSelector(userSelector, ({info}) => {
  return info;
});
