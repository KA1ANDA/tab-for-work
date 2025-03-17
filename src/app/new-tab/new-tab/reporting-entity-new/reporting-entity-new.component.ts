import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormStateService } from '../../../services/form-state.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-reporting-entity-new',
  templateUrl: './reporting-entity-new.component.html',
  styleUrl: './reporting-entity-new.component.scss'
})
export class ReportingEntityNewComponent {


  formGroup!:FormGroup;


  
  userIcon: string = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none"><path d="M13 14.75C13 13.7033 13 13.18 12.8708 12.7541C12.58 11.7953 11.8297 11.045 10.8709 10.7542C10.445 10.625 9.92167 10.625 8.875 10.625H5.125C4.07833 10.625 3.55499 10.625 3.12914 10.7542C2.17034 11.045 1.42003 11.7953 1.12918 12.7541C1 13.18 1 13.7033 1 14.75M10.375 4.625C10.375 6.48896 8.86396 8 7 8C5.13604 8 3.625 6.48896 3.625 4.625C3.625 2.76104 5.13604 1.25 7 1.25C8.86396 1.25 10.375 2.76104 10.375 4.625Z" stroke="#A5B2C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  calendarIcon:string = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M14.5 7H1M10.75 1V4M4.75 1V4M4.6 16H10.9C12.1601 16 12.7902 16 13.2715 15.7548C13.6948 15.539 14.039 15.1948 14.2548 14.7715C14.5 14.2902 14.5 13.6601 14.5 12.4V6.1C14.5 4.83988 14.5 4.20982 14.2548 3.72852C14.039 3.30516 13.6948 2.96095 13.2715 2.74524C12.7902 2.5 12.1601 2.5 10.9 2.5H4.6C3.33988 2.5 2.70982 2.5 2.22852 2.74524C1.80516 2.96095 1.46095 3.30516 1.24524 3.72852C1 4.20982 1 4.83988 1 6.1V12.4C1 13.6601 1 14.2902 1.24524 14.7715C1.46095 15.1948 1.80516 15.539 2.22852 15.7548C2.70982 16 3.33988 16 4.6 16Z" stroke="#A5B2C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  caseIcon: string = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1.83456 15.4154C2.15622 15.7371 2.5474 15.9 3 15.9H15C15.4526 15.9 15.8438 15.7371 16.1654 15.4154C16.4871 15.0938 16.65 14.7026 16.65 14.25V6C16.65 5.5474 16.4871 5.15621 16.1654 4.83456C15.8438 4.5129 15.4526 4.35 15 4.35H12.15V3C12.15 2.5474 11.9871 2.15622 11.6654 1.83456C11.3438 1.5129 10.9526 1.35 10.5 1.35H7.5C7.0474 1.35 6.65622 1.5129 6.33456 1.83456C6.0129 2.15621 5.85 2.5474 5.85 3V4.35H3C2.5474 4.35 2.15622 4.5129 1.83456 4.83456C1.5129 5.15621 1.35 5.5474 1.35 6V14.25C1.35 14.7026 1.5129 15.0938 1.83456 15.4154ZM14.85 6.15V14.1H3.15V6.15H14.85ZM10.35 3.15V4.35H7.65V3.15H10.35Z" fill="#A5B2C0" stroke="#A5B2C0" stroke-width="0.3"/></svg>';
    options: any[] = [
        { name: 'კვლევა და განვითარება' },
        { name: 'ინტელექტუალური საკუთრებისფლობა ან მართვა' },
        { name: 'შესყიდვები' },
        { name: 'დამზადება ან წარმოება'},
        { name: 'გაყიდვები, მარკეტინგი ან დისტრიბუცია'},
        { name: 'ადმინისტრაციული, მენეჯმენტთან დაკავშირებული ან დამხმარე მომსახურება'},
        { name: 'მომსახურების გაწევა დამოუკიდებელი მხარეებისთვის'},
        { name: 'შიდაჯგუფური დაფინანსება'},
        { name: 'რეგულირებულიფინანსური მომსახურებები'},
        { name: 'დაზღვევა'},
        { name: 'აქციების ან სხვა წილობრივი ინსტრუმენტების ფლობა'},
        { name: 'უმოქმედო'},
    
    ];

    constructor(private sanitizer: DomSanitizer,private formStateService:FormStateService) {
   
    }

    ngOnInit(){

      this.formGroup = this.formStateService.getFormGroup('reportingEntity');

    }

    onSubmit() {
      if (this.formGroup.valid) {
        console.log('Reporting entity form data:', this.formGroup.value);
        // You can add specific processing for this tab if needed
      } else {
        // Mark all fields as touched to trigger validation
        Object.keys(this.formGroup.controls).forEach(key => {
          this.formGroup.get(key)?.markAsTouched();
        });
      }
    }

}
