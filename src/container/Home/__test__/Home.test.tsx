import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Home from '..';

const mockStore = configureStore([]);

describe('Home', () => {
  let props, store;
  beforeEach(() => {
    store = mockStore({
      home: {
        data: {
          title: 'Ho Chi Minh',
          consolidatedWeather: [],
          time: '2021-01-01'
        }
      },
    });
    props = {
      loading: false,
      data: {
        title: 'Ho Chi Minh',
        consolidatedWeather: [],
        time: '2021-01-01'
      }
    }
  });

  it('should render match  snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home {...props} />
      </Provider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  })
})
