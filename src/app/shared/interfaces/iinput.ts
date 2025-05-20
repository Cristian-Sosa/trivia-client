type InputType =
  | 'text'
  | 'tel'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'url';

export interface IInput {
  type?: InputType;
  name: string;

  label?: string;
  placeholder?: string;
  text: string;

  isDisabled: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;

  ariaLabel?: string;
  tabIndex?: number;
  formTarget?: string;

  helperText?: string;
  errorMessage?: string;
}
