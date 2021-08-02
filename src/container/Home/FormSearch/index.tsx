import { useCallback } from 'react';
import { connect } from 'react-redux';
import { getLocationWeather as getLocationWeatherAction } from '../actions';
import './styles.css';

const FormSearch = ({ loading, getLocationWeather }: any) => {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    getLocationWeather(e.target.search.value);
  }, [getLocationWeather]);
  return (
    <form className="search" onSubmit={onSubmit}>
      <input type="search" className="search__input" name="search" placeholder="ex: Ho Chi Minh" />
      <button type="submit" className="search__button" disabled={loading}>Search</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  getLocationWeather: (query: string) => dispatch(getLocationWeatherAction(query)),
});

export default connect(null, mapDispatchToProps)(FormSearch);
