import { TYPES } from '../constant';
import homeReducer, { initialState } from '../reducers';

describe('homeReducer', () => {
  it(TYPES.LOAD_DATA_START, () => {
    const actions = {
      type: TYPES.LOAD_DATA_START,
    };
    const rsl = homeReducer(initialState, actions);
    expect(rsl).toEqual({ ...initialState, loading: true, error: false });
  })
  it(TYPES.LOAD_DATA_COMPLETE, () => {
    const actions = {
      type: TYPES.LOAD_DATA_COMPLETE,
      payload: {
        title: 'HHo Chi Minh',
        time: '2021-01-01',
        consolidatedWeather: [],
      }
    };
    const rsl = homeReducer(initialState, actions);
    expect(rsl).toEqual({ ...initialState, loading: false, data: actions.payload });
  })
  it(TYPES.LOAD_DATA_FAILED, () => {
    const actions = {
      type: TYPES.LOAD_DATA_FAILED,
    };
    const rsl = homeReducer(initialState, actions);
    expect(rsl).toEqual({ ...initialState, loading: false, error: true });
  })
  it(TYPES.GET_LOCATION_START, () => {
    const actions = {
      type: TYPES.GET_LOCATION_START,
    };
    const rsl = homeReducer(initialState, actions);
    expect(rsl).toEqual({ ...initialState, loading: true, error: false });
  })
  it(TYPES.GET_LOCATION_COMPLETE, () => {
    const actions = {
      type: TYPES.GET_LOCATION_COMPLETE,
      payload: [
        {
          title: 'Ho Chi Minh'
        }
      ]
    };
    const rsl = homeReducer(initialState, actions);
    expect(rsl).toEqual({ ...initialState, loading: false, locations: actions.payload });
  })
})