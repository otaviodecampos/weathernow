import { NgModule } from '@angular/core';
import { WeatherPageComponent } from './page/weather-page.component';
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonComponentModule } from '@app/common/component/common-component.module';

const components = [
  WeatherPageComponent,
  WeatherCardComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonComponentModule,
    WeatherRoutingModule,
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class WeatherModule {
}
