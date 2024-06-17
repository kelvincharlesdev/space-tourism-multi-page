import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: 'primary' | 'secondary' | 'tertiary';
  text?: string;
}
