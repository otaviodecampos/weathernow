export interface WeatherDataModel {

  id: number

  dt: number;

  name: string;

  sys: {
    country: string;
  }

  main: {
    temp: number;
    humidity: number;
    pressure: number;
  }

}
