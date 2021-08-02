import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { updateData, loadData, updateDataFailed } from "./actions";
import { TYPES } from "./constant";
import { getWeatherData, getLocationService } from './service';

export function* loadDataStartSaga(action: any): SagaIterator {
  try {
    const { data } = yield call(getWeatherData, action.payload);
    yield put(updateData(data));
  } catch (error) {
    yield put(updateDataFailed());
  }
};

export function* getLocationStartSaga(action: any): SagaIterator {
  try {
    const { data } = yield call(getLocationService, action.payload);
    const location = data[0];
    yield put(loadData(location.woeid));
  } catch (error) {
    yield put(updateDataFailed());
  }
  
};

export function* initHomeSaga() {
  yield takeLatest(TYPES.LOAD_DATA_START, loadDataStartSaga);
  yield takeLatest(TYPES.GET_LOCATION_START, getLocationStartSaga);
}