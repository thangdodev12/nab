import { call, put, takeLatest } from 'redux-saga/effects';
import { updateDataFailed } from '../actions';
import { TYPES } from '../constant';
import { initHomeSaga, loadDataStartSaga, getLocationStartSaga } from '../saga';
import { getWeatherData } from '../service';

jest.mock('../service', () => ({
  getWeatherData: () => ({
    data: {
      title: 'Ho Chi Minh',
      time: '2021-01-01',
    }
  }),
  getLocationService: () => ({
    data: [
      {
        title: 'Ho Chi Minh',
      }
    ]
  })
}));

describe('Home.saga', () => {
  it('initHomeSaga watcher', () => {
    const genObject = initHomeSaga();
    let generator = genObject.next();
    expect(generator.value).toEqual(
      takeLatest(TYPES.LOAD_DATA_START, loadDataStartSaga),
    );
    generator = genObject.next();
    expect(generator.value).toEqual(
      takeLatest(TYPES.GET_LOCATION_START, getLocationStartSaga),
    );
  });
  it('loadDataStartSaga', async () => {
    const actions = {
      type: TYPES.LOAD_DATA_COMPLETE,
      payload: '1252431',
    };
    const genObject = loadDataStartSaga(actions);
    let generator = genObject.next();
    expect(generator.value).toEqual(
      call(await getWeatherData, actions.payload)
    )
    generator = genObject.next();
    expect(generator.value).toEqual(
      put(updateDataFailed())
    )
  })
});