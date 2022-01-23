import { Component, HostBinding } from '@angular/core';
import { AppThemeEnum } from '@app/app.theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class')
  theme = AppThemeEnum.Day;

  switchTheme() {
    if (this.theme == AppThemeEnum.Day) {
      this.theme = AppThemeEnum.Dark;
    } else {
      this.theme = AppThemeEnum.Day;
    }
  }

}
