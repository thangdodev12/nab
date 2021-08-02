/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { IWeather } from '../../constant/interface';
import Weather from '../../component/Weather';
import Loading from '../../component/Loading';
import { loadData } from './actions';
import FormSearch from './FormSearch';
import './styles.css';

interface IProps {
  loading?: boolean,
  data?: IWeather,
}

export const Home: FC<IProps> = ({ loading, data }: IProps) => {
  const { consolidatedWeather = [], title, time } = data as IWeather
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadData());
  }, []);
  const [currentWeahter, ...weather] = consolidatedWeather;
  return (
    <div className="app">
      <FormSearch loading={loading} />
        {loading ? (
          <Loading />
        ) : (
          <div className="content">
            <div className="content__header">
              <h1 className="content__header__title">{title}</h1>
              <p className="content__header__date"><strong>Date: </strong>{moment(time).format('DD/MM/YYYY')}</p>
            </div>
            <Weather info={{...currentWeahter, title: 'Today'}} />
            <div className="content__body">
              {weather.map((info: any) => (
                <Weather info={info} key={info.id} />
              ))}
            </div>
          </div>
        )}
    </div>
  );
}

const mapStateToProps = ({ home }: any) => {
  return {
    loading: home.loading,
    data: home.data,
  };
};

export default connect(mapStateToProps, null)(Home);
