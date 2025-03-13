import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private formGroup!: FormGroup;
  
  private formStatusSubject = new BehaviorSubject<boolean>(false);
  
  constructor(private fb: FormBuilder) {
    this.initForm();
  }
  
  private initForm(): void {
    // Initialize the main form group with sub-groups for each tab
    this.formGroup = this.fb.group({
      // Tab 1: CBC Reports Form
      cbcReports: this.fb.group({
        field1: ['', Validators.required],
        field2: ['', Validators.required],
        field3: [''],
        // Add all fields from CbcReportsNewComponent
        revenueFields: this.fb.group({
          // Add revenue-related fields
          field1: ['', Validators.required],
          field2: [''],
          // Add more fields as needed
        })
      }),
      
      // Tab 2: Reporting Entity Form
      reportingEntity: this.fb.group({
        field1: ['', Validators.required],
        field2: [''],
        address: this.fb.group({
          field1: ['', Validators.required],
          field2: ['']
        }),
        activities: this.fb.array([]),
        otherActivity: ['']
        // Add all fields from ReportingEntityNewComponent
      }),
      
      // Tab 3: Additional Info Form
      additionalInfo: this.fb.group({
        field1: [''],
        field2: [''],
        notes: ['']
        // Add all fields from AditionalInfoNewComponent
      })
    });
    
    // Subscribe to form status changes to update the status subject
    this.formGroup.statusChanges.subscribe(() => {
      this.updateFormStatus();
    });
  }
  
  // Get specific form group for a tab
  getFormGroup(tab: 'cbcReports' | 'reportingEntity' | 'additionalInfo'): FormGroup {
    return this.formGroup.get(tab) as FormGroup;
  }
  
  // Get the entire form
  getCompleteForm(): FormGroup {
    return this.formGroup;
  }
  
  // Update form status
  private updateFormStatus(): void {
    const isValid = this.formGroup.valid;
    this.formStatusSubject.next(isValid);
  }
  
  // Observable for form completion status
  getFormStatus(): Observable<boolean> {
    return this.formStatusSubject.asObservable();
  }
  
  // Submit the form
  submitForm(): void {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      // Implement form submission logic
      console.log('Form submitted:', formData);
      
      // For example, you might call an API service here
      // this.apiService.submitForm(formData).subscribe(...)
    } else {
      // Mark all fields as touched to trigger validation errors
      this.markFormGroupTouched(this.formGroup);
    }
  }
  
  // Helper method to mark all controls as touched
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // Reset the form
  resetForm(): void {
    this.formGroup.reset();
  }
}