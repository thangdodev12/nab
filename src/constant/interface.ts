export interface IWeatherInfo {
  airPressure: number
  id: number
  date: Date | string
  title?: string,
  maxTemp: number
  minTemp: number
  weatherState: string
  weatherStateName: string
  windSpeed: number
}

export interface IWeather {
  title: string
  time: string
  consolidatedWeather: IWeatherInfo[]
}