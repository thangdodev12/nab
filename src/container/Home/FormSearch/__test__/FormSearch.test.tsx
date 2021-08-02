import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import FormSearch from '../';

const mockStore = configureStore([]);

describe('FormSearch', () => {
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
    }
  });

  it('should render match  snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <FormSearch {...props} />
      </Provider>,
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  })
})
