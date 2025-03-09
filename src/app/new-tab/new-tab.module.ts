import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { NewTabComponent } from './new-tab/new-tab.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NewTabComponent
  ],
  exports:[
    NewTabComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule
  ]
})
export class NewTabModule { }
