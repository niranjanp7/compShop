import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
