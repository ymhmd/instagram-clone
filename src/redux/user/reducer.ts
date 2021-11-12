import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {UserState, UserPayload, UserIdPayload} from './types';

export const initialState = {
  isLoading: false,
  error: false,
  info: {
    name: '',
    id: '',
    handle: '',
    profilePictureId: undefined,
    profilePictureUri: undefined,
    numberOfPosts: undefined,
    numberOfFollowers: undefined,
    numberOfFollowing: undefined,
    about: undefined,
  },
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfoRequest(state) {
      state.isLoading = true;
    },
    setUserId(state, payloadData: PayloadAction<UserIdPayload>) {
      state.info.id = payloadData.payload.id;
    },
    userInfoSuccess(state, payloadData: PayloadAction<UserPayload>) {
      state.isLoading = false;
      state.error = false;
      state.info.about = payloadData.payload.about;
      state.info.name = payloadData.payload.name;
      state.info.numberOfFollowers = payloadData.payload.numberOfFollowers;
      state.info.numberOfFollowing = payloadData.payload.numberOfFollowing;
      state.info.handle = payloadData.payload.handle;
      state.info.id = payloadData.payload.id;
      state.info.numberOfPosts = payloadData.payload.numberOfPosts;
      state.info.profilePictureId = payloadData.payload.profilePictureId;
      state.info.profilePictureUri = payloadData.payload.profilePictureUri;
    },

    userInfoFailure(state) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {userInfoRequest, userInfoSuccess, userInfoFailure, setUserId} =
  userSlice.actions;

export const userReducer = userSlice.reducer;
