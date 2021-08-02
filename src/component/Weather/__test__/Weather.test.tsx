import { shallow } from 'enzyme';
import Weather from '../';

describe('Weather', () => {
  let props;
  beforeEach(() => {
    props = {
      info: {
        title: 'Today',
        date: '2021-08-02',
        weatherState: 'hr',
        maxTemp: 31,
        minTemp: 28
      }
    };
  });

  it('should render to match snapshot', () => {
    const component = shallow(<Weather  {...props} />);
    expect(component).toMatchSnapshot();
  })
})