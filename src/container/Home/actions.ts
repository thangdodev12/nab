import { TYPES } from "./constant";

export const loadData = (id?: string) => {
  return {
    type: TYPES.LOAD_DATA_START,
    payload: id,
  };
};

export const updateData = (payload: any) => {
  return {
    type: TYPES.LOAD_DATA_COMPLETE,
    payload,
  };
};

export const updateDataFailed = () => {
  return {
    type: TYPES.LOAD_DATA_FAILED,
  };
};

export const getLocationWeather = (payload: string) => {
  return {
    type: TYPES.GET_LOCATION_START,
    payload,
  };
}