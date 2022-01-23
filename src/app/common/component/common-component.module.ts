import { NgModule } from '@angular/core';
import { ButtonComponent } from '@app/common/component/button/button.component';

const components = [
  ButtonComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [],
  exports: [
    ...components
  ]
})
export class CommonComponentModule {
}
