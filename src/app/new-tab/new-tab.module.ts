import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { NewTabComponent } from './new-tab/new-tab.component';
import { ButtonModule } from 'primeng/button';
import { AditionalInfoNewComponent } from './new-tab/aditional-info-new/aditional-info-new.component';
import { CbcReportsNewComponent } from './new-tab/cbc-reports-new/cbc-reports-new.component';
import { ReportingEntityNewComponent } from './new-tab/reporting-entity-new/reporting-entity-new.component';

@NgModule({
  declarations: [
    NewTabComponent,
    AditionalInfoNewComponent,
    CbcReportsNewComponent,
    ReportingEntityNewComponent
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
