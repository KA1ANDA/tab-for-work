import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor, OnInit {
  @Input() type: 'text' | 'dropdown' | 'textarea' | 'calendar' | 'checkbox' = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() options: any[] = []; // For dropdown
  @Input() optionLabel: string = 'name'; // For dropdown
  @Input() formControl: FormControl = new FormControl();
  @Input() width: string = '483.67px';
  @Input() height: string = '54px';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon: string = ''; // New input for icon HTML/SVG code
  @Input() iconPosition: 'left' | 'right' = 'left'; // Position for the icon

  value: any;
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private sanitizer:DomSanitizer){}

  ngOnInit() {
    // Initialize the component based on type
    if (this.formControl) {
      // Subscribe to form control changes if provided
      this.formControl.valueChanges.subscribe(value => {
        this.value = value;
        this.onChange(value);
      });
    }
  }
  getSafeIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon);
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