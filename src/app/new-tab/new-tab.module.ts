import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { NewTabComponent } from './new-tab/new-tab.component';
import { ButtonModule } from 'primeng/button';
import { AditionalInfoNewComponent } from './new-tab/aditional-info-new/aditional-info-new.component';
import { CbcReportsNewComponent } from './new-tab/cbc-reports-new/cbc-reports-new.component';
import { ReportingEntityNewComponent } from './new-tab/reporting-entity-new/reporting-entity-new.component';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CustomInputComponent } from '../components/custom-input/custom-input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewTabComponent,
    AditionalInfoNewComponent,
    CbcReportsNewComponent,
    ReportingEntityNewComponent,
    CustomInputComponent
    
  ],
  exports:[
    NewTabComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    CheckboxModule,
    InputTextareaModule,
    DropdownModule,
    CalendarModule
    FormsModule
  ]
})
export class NewTabModule { }
