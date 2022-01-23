import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '@app/app.config.json';
import { WeatherDataModel } from '@app/weather/model/weather-data.model';
import { Observable, of, tap } from 'rxjs';
import { LocalStorageService } from '@app/common/service/local-storage.service';

function cityStorageKey(cityName: string) {
  return `CityName-${cityName}`
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(
    protected http: HttpClient,
    protected storage: LocalStorageService
  ) {

  }

  getDataByCityName(cityName: string): Observable<WeatherDataModel> {
    const params = {
      q: cityName,
      appid: config.apiKey,
      units: config.apiUnits
    }
    const cachedData = this.storage.get(cityStorageKey(cityName), config.cacheTimeInMinutes);
    if (cachedData) {
      return of(cachedData);
    }
    return this.http.get<WeatherDataModel>(config.apiUrl, {params: params})
      .pipe(
        tap(value => this.storage.set(cityStorageKey(cityName), value))
      );
  }

}
