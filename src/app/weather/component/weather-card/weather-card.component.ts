import { Component, HostBinding, Input, OnChanges, OnDestroy, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '@app/weather/service/weather.service';
import { WeatherDataModel } from '@app/weather/model/weather-data.model';
import { catchError, merge, Observable, of, Subject, takeUntil, tap, throwError, timer } from 'rxjs';
import { minutesToMilliseconds } from '@app/common/function/time';
import config from '@app/app.config.json';
import { TemperatureColorEnum } from '@app/weather/enum/temperature-color.enum';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {class: 'weather-card'}
})
export class WeatherCardComponent implements OnDestroy, OnChanges {

  private destroy$ = new Subject();

  private cancelTimer$ = new Subject();

  @Input()
  showDetails = false;

  @Input()
  @HostBinding('class.weather-card--selected')
  selected = false;

  @Input()
  cityName!: string;

  weatherData$!: Observable<WeatherDataModel | null>;

  error = false;

  constructor(
    protected weatherService: WeatherService
  ) {
  }

  getTemperatureColor(temperature: number): TemperatureColorEnum {
    switch (true) {
      case (temperature <= 5):
        return TemperatureColorEnum.Blue;
      case (temperature > 25):
        return TemperatureColorEnum.Red;
      default:
        return TemperatureColorEnum.Orange;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cityName) {
      this.updateWeatherData();
    }
  }

  updateWeatherData() {
    this.cancelTimer$.next('');

    timer(0, minutesToMilliseconds(config.refreshIntervalInMinutes))
      .pipe(
        takeUntil(merge(this.destroy$, this.cancelTimer$)),
        tap(() => {
            this.error = false
            this.weatherData$ = this.weatherService.getDataByCityName(this.cityName)
              .pipe(
                catchError((err) => {
                  console.error(err);
                  this.error = true;
                  return of(null);
                })
              );
          }
        )
      ).subscribe();
  }

}
