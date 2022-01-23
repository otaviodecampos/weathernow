import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import { WeatherService } from '@app/weather/service/weather.service';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { WeatherDataModel } from '@app/weather/model/weather-data.model';
import { of, throwError } from 'rxjs';
import { ButtonComponent } from '@app/common/component/button/button.component';
import { removeWhitespaces } from '@app/common/function/text';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getDataByCityName']);
    await TestBed.configureTestingModule({
      declarations: [WeatherCardComponent, ButtonComponent],
      providers: [
        {provide: WeatherService, useValue: weatherServiceSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get red color when temperature greater than 25', fakeAsync(() => {
    const weatherData = {main: {temp: 26}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    );
    const el: Element = de.nativeElement;
    expect(el.classList).toContain('color--red');

    discardPeriodicTasks();
  }));

  it('should get red color when temperature minor 5', fakeAsync(() => {
    const weatherData = {main: {temp: 4}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    );
    const el: Element = de.nativeElement;
    expect(el.classList).toContain('color--blue');

    discardPeriodicTasks();
  }));

  it('should get red color when temperature equal 5', fakeAsync(() => {
    const weatherData = {main: {temp: 5}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    );
    const el: Element = de.nativeElement;
    expect(el.classList).toContain('color--blue');

    discardPeriodicTasks();
  }));

  it('should get orange color when temperature greater 5', fakeAsync(() => {
    const weatherData = {main: {temp: 6}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    );
    const el: Element = de.nativeElement;
    expect(el.classList).toContain('color--orange');

    discardPeriodicTasks();
  }));

  it('should get orange color when temperature minor 25', fakeAsync(() => {
    const weatherData = {main: {temp: 24}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const de: DebugElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    );
    const el: Element = de.nativeElement;
    expect(el.classList).toContain('color--orange');

    discardPeriodicTasks();
  }));

  it('should show loading and than show temperature in celsius without decimal value', fakeAsync(() => {
    const weatherData = {main: {temp: 1.04}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    fixture.detectChanges();

    const loaderElement = fixture.debugElement.query(
      By.css('.weather-card-loader')
    ).nativeElement;
    expect(loaderElement).toBeDefined();

    tick();
    fixture.detectChanges();

    const cardContentElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    ).nativeElement;
    expect(removeWhitespaces(cardContentElement.textContent)).toEqual('1º');

    discardPeriodicTasks();
  }));

  it('should have title', fakeAsync(() => {
    const weatherData = {main: {temp: 1}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'Title, Test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('.weather-card__title')
    ).nativeElement;
    expect(titleElement.textContent.trim()).toEqual('Title, Test');

    discardPeriodicTasks();
  }));

  it('should show humidity when details is enabled', fakeAsync(() => {
    const weatherData = {main: {temp: 24, humidity: 30}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.showDetails = true;
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const humidityElement = fixture.debugElement.query(
      By.css('.weather-card-detail--humidity .weather-card-detail__content')
    ).nativeElement;
    expect(removeWhitespaces(humidityElement.textContent)).toEqual('30%');

    discardPeriodicTasks();
  }));

  it('should not show humidity when details is disabled', fakeAsync(() => {
    const weatherData = {main: {temp: 24, humidity: 30}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.showDetails = false;
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const humidityElement = fixture.debugElement.query(
      By.css('.weather-card-detail--humidity')
    )?.nativeElement;
    expect(humidityElement).toBeUndefined();

    discardPeriodicTasks();
  }));

  it('should show pressure when details is enabled', fakeAsync(() => {
    const weatherData = {main: {temp: 24, pressure: 1000}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.showDetails = true;
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const pressureElement = fixture.debugElement.query(
      By.css('.weather-card-detail--pressure .weather-card-detail__content')
    ).nativeElement;
    expect(removeWhitespaces(pressureElement.textContent)).toEqual('1000hPa');

    discardPeriodicTasks();
  }));

  it('should not show humidity when details is disabled', fakeAsync(() => {
    const weatherData = {main: {temp: 24, pressure: 1000}} as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.showDetails = false;
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const pressureElement = fixture.debugElement.query(
      By.css('.weather-card-detail--pressure')
    )?.nativeElement;
    expect(pressureElement).toBeUndefined();

    discardPeriodicTasks();
  }));

  it('should show message error', fakeAsync(() => {
    weatherServiceSpy.getDataByCityName.and.returnValue(throwError({error: 'error'}));
    component.cityName = 'test';
    component.ngOnChanges({
      name: new SimpleChange(null, component.cityName, true)
    });
    tick();
    fixture.detectChanges();

    const errorElement = fixture.debugElement.query(
      By.css('.weather-card__content--error .text')
    ).nativeElement;
    expect(errorElement.textContent.trim()).toEqual('Something went wrong');

    discardPeriodicTasks();

  }));

  it('should show weather data after try again button click', fakeAsync(() => {
    const weatherData = {
      main: {temp: 24, pressure: 1000}
    } as WeatherDataModel;

    weatherServiceSpy.getDataByCityName.and.returnValue(of(weatherData));
    component.cityName = 'test';
    component.error = true;
    fixture.detectChanges();

    const tryAgainButton = fixture.debugElement.query(
      By.css('.weather-card__content--error .try-again-button')
    );
    tryAgainButton.nativeElement.click();

    tick();
    fixture.detectChanges();

    const cardContentElement = fixture.debugElement.query(
      By.css('.weather-card__content')
    ).nativeElement;
    expect(removeWhitespaces(cardContentElement.textContent)).toEqual('24º');

    discardPeriodicTasks();
  }));

});
