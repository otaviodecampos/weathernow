import { WeatherService } from '@app/weather/service/weather.service';
import { HttpClient } from '@angular/common/http';
import { WeatherDataModel } from '@app/weather/model/weather-data.model';
import { LocalStorageService } from '@app/common/service/local-storage.service';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let localStorageSpy: jasmine.SpyObj<LocalStorageService>;
  let weatherService: WeatherService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    localStorageSpy = jasmine.createSpyObj('LocalStorageService', ['get', 'set']);
    weatherService = new WeatherService(httpClientSpy, localStorageSpy);
  });

  it('should return remote weather data', (done: DoneFn) => {
    const weatherData = {} as WeatherDataModel;

    httpClientSpy.get.and.returnValue(of(weatherData));

    weatherService.getDataByCityName('test').subscribe(
      data => {
        expect(data).toEqual(weatherData, 'expected weather data');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return cached weather data', (done: DoneFn) => {
    const weatherData = {main: {temp: 10}} as WeatherDataModel;

    localStorageSpy.get.and.returnValue(weatherData);

    weatherService.getDataByCityName('test').subscribe(
      data => {
        expect(data).toEqual(weatherData, 'expected weather data');
        done();
      },
      done.fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(0, 'no call');
  });

});
