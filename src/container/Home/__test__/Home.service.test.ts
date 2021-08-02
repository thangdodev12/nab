import { getWeatherData, getLocationService } from '../service';

jest.mock('axios', () => ({
  get: async (url: string) => {
    return Promise.resolve({ data: { key: url.split('/').reverse()[0] } });
  }
}));

describe('Home.service', () => {
  it('getWeatherData', async () => {
    const rsl = await getWeatherData('1252431');
    expect(rsl).toEqual({ key: '1252431' });
  })
  it('getLocationService', async () => {
    const rsl = await getLocationService('San Francisco');
    expect(rsl).toEqual({ key: 'location?query=San Francisco' });
  })
})