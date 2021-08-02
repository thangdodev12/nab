import { AnyAction } from "redux";
import { TYPES } from "./constant";

interface IAppState {
  data: any
  locations: any,
  loading: boolean
  error: boolean
}

export const initialState = {
  loading: false,
  data: [],
  locations: [],
  error: false,
};

const reducers = (state: IAppState = initialState,  actions: AnyAction) => {
  switch (actions.type) {
    case TYPES.LOAD_DATA_START:
      return { ...state, loading: true, error: false };
    case TYPES.LOAD_DATA_COMPLETE:
      return { ...state, data: actions.payload, loading: false };
    case TYPES.LOAD_DATA_FAILED:
      return { ...state, error: true, loading: false };
    case TYPES.GET_LOCATION_START:
      return { ...state, loading: true, error: false };
    case TYPES.GET_LOCATION_COMPLETE:
      return { ...state, locations: actions.payload, loading: false };
    default: {
      return state;
    }
  }
}

export default reducers;