import axios from "axios";
import { API } from '../../constant';

export  const getWeatherData = async (id?: string) => {
  const { data } = await axios.get(`${API}/weather/${id || 1252431}`);
  return data;
}

export  const getLocationService = async (value: string) => {
  const { data } = await axios.get(`${API}/location?query=${value}`);
  return data;
} 