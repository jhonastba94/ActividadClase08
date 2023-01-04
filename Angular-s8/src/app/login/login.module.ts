import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ContentComponent } from './content/content.component';
import { ButtonComponent } from './button/button.component';
import { CorrectoComponent } from './correcto/correcto.component';



@NgModule({
  declarations: [
    TitleComponent,
    ContentComponent,
    ButtonComponent, 
    CorrectoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    ContentComponent,
    ButtonComponent,
    CorrectoComponent
  ]
})
export class LoginModule { }
