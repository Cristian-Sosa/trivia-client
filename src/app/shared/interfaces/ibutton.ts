type ButtonType = 'button' | 'submit' | 'reset';
type ButtonStyle = 'primary' | 'secondary' | 'ghost' | 'danger' | 'link' | 'text';

export interface IButton {
  type: ButtonType;
  text: string;
  style: ButtonStyle;

  isDisabled?: boolean;
  isLoading?: boolean;

  icon?: string;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';

  ariaLabel?: string;
  tabIndex?: number;
}
