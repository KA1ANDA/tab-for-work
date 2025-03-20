import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { FormStateService } from '../../../services/form-state.service';

interface CbcRecord{

  jurisdiction:any;
  currency:string;
  independentParty:string;
  dependantParty:string;
  total:string;
  profitBeforeTax:string;
  paidTax:string;
  currentYearTax:string;
  capital:string;
  accumulatedProfit:string;
  employeeCount:string;
  tangibleAssets:string;

}

interface JurisdictionOptions{
  name:string;
  code:string;
}

@Component({
  selector: 'app-cbc-reports-new',
  templateUrl: './cbc-reports-new.component.html',
  styleUrl: './cbc-reports-new.component.scss'
})
export class CbcReportsNewComponent {

  reportForm:FormGroup;
  records: CbcRecord[] = [];
  editingIndex:number= -1;
  
  jurisdictionOptions : JurisdictionOptions[] =[];

  userIcon: string = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13 14.75C13 13.7033 13 13.18 12.8708 12.7541C12.58 11.7953 11.8297 11.045 10.8709 10.7542C10.445 10.625 9.92167 10.625 8.875 10.625H5.125C4.07833 10.625 3.55499 10.625 3.12914 10.7542C2.17034 11.045 1.42003 11.7953 1.12918 12.7541C1 13.18 1 13.7033 1 14.75M10.375 4.625C10.375 6.48896 8.86396 8 7 8C5.13604 8 3.625 6.48896 3.625 4.625C3.625 2.76104 5.13604 1.25 7 1.25C8.86396 1.25 10.375 2.76104 10.375 4.625Z" stroke="#A5B2C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  calendarIcon:string = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M14.5 7H1M10.75 1V4M4.75 1V4M4.6 16H10.9C12.1601 16 12.7902 16 13.2715 15.7548C13.6948 15.539 14.039 15.1948 14.2548 14.7715C14.5 14.2902 14.5 13.6601 14.5 12.4V6.1C14.5 4.83988 14.5 4.20982 14.2548 3.72852C14.039 3.30516 13.6948 2.96095 13.2715 2.74524C12.7902 2.5 12.1601 2.5 10.9 2.5H4.6C3.33988 2.5 2.70982 2.5 2.22852 2.74524C1.80516 2.96095 1.46095 3.30516 1.24524 3.72852C1 4.20982 1 4.83988 1 6.1V12.4C1 13.6601 1 14.2902 1.24524 14.7715C1.46095 15.1948 1.80516 15.539 2.22852 15.7548C2.70982 16 3.33988 16 4.6 16Z" stroke="#A5B2C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  curencyIcon: string = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 7.5V10.5M13.5 7.5V10.5M1.5 6.15L1.5 11.85C1.5 12.6901 1.5 13.1101 1.66349 13.431C1.8073 13.7132 2.03677 13.9427 2.31901 14.0865C2.63988 14.25 3.05992 14.25 3.9 14.25L14.1 14.25C14.9401 14.25 15.3601 14.25 15.681 14.0865C15.9632 13.9427 16.1927 13.7132 16.3365 13.431C16.5 13.1101 16.5 12.6901 16.5 11.85V6.15C16.5 5.30992 16.5 4.88988 16.3365 4.56902C16.1927 4.28677 15.9632 4.0573 15.681 3.91349C15.3601 3.75 14.9401 3.75 14.1 3.75L3.9 3.75C3.05992 3.75 2.63988 3.75 2.31901 3.91349C2.03677 4.0573 1.8073 4.28677 1.66349 4.56901C1.5 4.88988 1.5 5.30992 1.5 6.15ZM10.875 9C10.875 10.0355 10.0355 10.875 9 10.875C7.96447 10.875 7.125 10.0355 7.125 9C7.125 7.96447 7.96447 7.125 9 7.125C10.0355 7.125 10.875 7.96447 10.875 9Z" stroke="#A5B2C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  caseIcon: string = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1.83456 15.4154C2.15622 15.7371 2.5474 15.9 3 15.9H15C15.4526 15.9 15.8438 15.7371 16.1654 15.4154C16.4871 15.0938 16.65 14.7026 16.65 14.25V6C16.65 5.5474 16.4871 5.15621 16.1654 4.83456C15.8438 4.5129 15.4526 4.35 15 4.35H12.15V3C12.15 2.5474 11.9871 2.15622 11.6654 1.83456C11.3438 1.5129 10.9526 1.35 10.5 1.35H7.5C7.0474 1.35 6.65622 1.5129 6.33456 1.83456C6.0129 2.15621 5.85 2.5474 5.85 3V4.35H3C2.5474 4.35 2.15622 4.5129 1.83456 4.83456C1.5129 5.15621 1.35 5.5474 1.35 6V14.25C1.35 14.7026 1.5129 15.0938 1.83456 15.4154ZM14.85 6.15V14.1H3.15V6.15H14.85ZM10.35 3.15V4.35H7.65V3.15H10.35Z" fill="#A5B2C0" stroke="#A5B2C0" stroke-width="0.3"/></svg>';

  hasError:boolean = false;

  constructor(private fb:FormBuilder, private formStateService:FormStateService){
    console.log('Initializing jurisdiction options');

    this.jurisdictionOptions =[
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    console.log('Options initialized:', this.jurisdictionOptions);


    this.reportForm = this.fb.group({
      jurisdiction:[null,Validators.required],
      currency:['',Validators.required],
      independentParty:['',Validators.required],
      dependantParty:['',Validators.required],
      total:['',Validators.required],
      profitBeforeTax:['',Validators.required],
      paidTax:['',Validators.required],
      currentYearTax:['',Validators.required],
      capital:['',Validators.required],
      accumulatedProfit:['',Validators.required],
      employeeCount:['',Validators.required],
      tangibleAssets:['',Validators.required]
    })
  }

  ngOnInit():void{


  }

  addRecord():void{
    Object.keys(this.reportForm.controls).forEach(key=>{
      this.reportForm.get(key)?.markAsTouched();
    });
    if(this.reportForm.valid){
      const formValue = this.reportForm.value;
      this.records.push(formValue);
      this.reportForm.reset();

      this.formStateService.setCbcRecords(this.records);
      this.reportForm.reset();
      this.hasError = false;
    }else{
      this.hasError = true;
    }
  }

}
