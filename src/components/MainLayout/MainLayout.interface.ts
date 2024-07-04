import { HTMLAttributes } from 'react';

export interface MainLayoutProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bgImage?: string;
  bgImageMobile?: string;
  bgImageTablet?: string;
}
export interface MainLayoutStyleProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  $bgImage?: string;
  $bgImageMobile?: string;
  $bgImageTablet?: string;
}
