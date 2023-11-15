import { put, takeLatest, call } from 'redux-saga/effects';
import * as authAction from '../../actions/auth';
import * as api from '../../../api/auth'

function* loginSaga(action) {
  try {
    // Gọi hàm API để lấy dữ liệu
    const token = yield call(api.fetchLogin, action.payload);
    localStorage.setItem('auth_token', token.data.token)
    localStorage.setItem('auth_user', token.data.user)
    yield put(authAction.login.loginSuccess(token.data.token));
  } catch (error) {
    yield put(authAction.login.loginFailure(error));

  }
}

function* authSaga() {
  yield takeLatest(authAction.login.loginRequest, loginSaga);
}

export default authSaga;