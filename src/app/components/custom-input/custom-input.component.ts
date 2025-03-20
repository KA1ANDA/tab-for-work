import { Component, Input, forwardRef, OnInit, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  @Input() type: 'text' | 'dropdown' | 'textarea' | 'calendar' | 'checkbox' =
    'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() options: any[] = []; // For dropdown
  @Input() optionLabel: string = ''; // For dropdown
  @Input() optionValue: string = 'code'; // For dropdown
  @Input() formControl: FormControl = new FormControl();
  @Input() width: string = '483.67px';
  @Input() height: string = '54px';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = ''; // New input for icon HTML/SVG code
  @Input() iconPosition: 'left' | 'right' = 'left'; // Position for the icon
  @Input() errorMessage: string = 'This field is required'; // Custom error message
  @Input() showError: boolean = false; // Explicit error state toggle

  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  inputValue: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Initialize the component based on type
    if (this.formControl) {
      // Subscribe to form control changes if provided
      this.formControl.valueChanges.subscribe((value) => {
        this.value = value;
        this.onChange(value);
      });
    }

    if (this.disabled) {
      this.formControl.disable();
    }
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = !!target.value; // Update boolean based on input content
  }

  getSafeIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

  // Check if field has errors and should display them
  hasError(): boolean {
    return (
      (this.showError ||
        (this.formControl?.invalid && this.formControl?.touched)) &&
      !this.disabled
    );
  }

  // Get appropriate error message
  getErrorMessage(): string {
    if (this.formControl?.errors?.['required']) {
      return this.errorMessage || 'This field is required';
    } else if (this.formControl?.errors?.['email']) {
      return 'Please enter a valid email address';
    } else if (this.formControl?.errors?.['pattern']) {
      return 'Invalid format';
    } else if (this.formControl?.errors?.['minlength']) {
      return `Minimum length is ${this.formControl.errors['minlength'].requiredLength} characters`;
    } else if (this.formControl?.errors?.['maxlength']) {
      return `Maximum length is ${this.formControl.errors['maxlength'].requiredLength} characters`;
    }

    return this.errorMessage || 'Invalid input';
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(event: any) {
    let value: any;
  
    // Extract value based on event type
    if (this.type === 'checkbox') {
      value = event.checked;
    } else if (this.type === 'dropdown') {
      // For dropdown, the event structure is different
      value = event.value;
    } else if (event?.target) {
      value = event.target.value;
    } else {
      value = event;
    }
  
    this.value = value;
    this.onChange(value);
    this.onTouched();
  
    if (this.formControl) {
      this.formControl.setValue(value, { emitEvent: false });
    }
  }

  // Helper method to check if we have an icon
  hasIcon(): boolean {
    return !!this.icon;
  }
}
