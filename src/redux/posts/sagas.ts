import { takeLatest, put, call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  userPostsRequest,
  userPostsSuccess,
  homePostsRequest,
  homePostsSuccess,
} from "./reducer";
import { UserPostPayload, HomePostPayload } from "./types";
import { getUserPosts } from "../../api/user";
import { getAllPosts } from "../../api/posts";
import { UserState, getUserState } from "../user";

export function* postsSaga(): SagaIterator {
  yield takeLatest(userPostsRequest, function* () {
    const user: UserState = yield select(getUserState);
    const userId = user.info.id;
    const userPosts: UserPostPayload[] = yield call(() => getUserPosts(userId));

    yield put(userPostsSuccess(userPosts));
  });

  yield takeLatest(homePostsRequest, function* () {
    const user: UserState = yield select(getUserState);
    const userId = user.info.id;
    const homePosts: HomePostPayload[] = yield call(() => getAllPosts(userId));

    yield put(homePostsSuccess(homePosts));
  });
}
