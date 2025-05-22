import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../shared/ui/dummy';
import { InputCheckboxComponent, InputComponent } from '../shared/ui/smart';

@Component({
  selector: 'app-explanation',
  imports: [
    ButtonComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    InputCheckboxComponent
],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.sass',
})
export class ExplanationComponent {
  private formBuilder = inject(FormBuilder);

  public explanationForm: FormGroup = this.formBuilder.group({
    phoneNumberToValidate: ['', Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  validatePhoneNumber = ($event?: Event) => {
    if ($event) {
      $event.preventDefault();
    }

    console.log({
      phoneNumber: this.explanationForm.get('phoneNumberToValidate')?.value,
      check: this.explanationForm.get('termsAndConditions')?.value
    })
  }
}
