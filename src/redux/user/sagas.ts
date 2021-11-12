import { takeLatest, put, call, select } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getUserInfo } from "../../api/user";
import { userInfoRequest, userInfoSuccess } from "./reducer";
import { getUserState } from "./selectors";
import { UserPayload, UserState } from "./types";

export function* userSaga(): SagaIterator {
  yield takeLatest(userInfoRequest, function* () {
    const user: UserState = yield select(getUserState);
    const userId = user.info.id;

    const userInfo: UserPayload = yield call(() => getUserInfo(userId));

    yield put(userInfoSuccess(userInfo));
  });
}
