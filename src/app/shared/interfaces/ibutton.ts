export interface IButton {
  type: 'button' | 'reset' | 'submit' | 'menu';
  text: string;
  style: 'primary' | 'secondary' | 'ghost';
  isDisabled: boolean;
  tabIndex?: number;
}
