import moment from 'moment';
import { WEATHER_STATE } from '../../config';
import { IWeatherInfo } from '../../constant/interface';
import './styles.css';

const Weather = ({ info }: { info: IWeatherInfo }) => (
  <div className="weather">
    <h3 className="weather__title">{info.title || moment(info.date).format('DD/MM/YYYY')}</h3>
    <img src={WEATHER_STATE[info.weatherState]} alt="info.label" className="weather__img" />
    <p><strong>Max: </strong>{Math.round(info.maxTemp)}°C</p>
    <p><strong>Min: </strong>{Math.round(info.minTemp)}°C</p>
  </div>
);

export default Weather;