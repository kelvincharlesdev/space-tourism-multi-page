import { HTMLAttributes } from 'react';

export interface MainLayoutProps extends HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  image?: string;
  imageMobile?: string;
  imageTablet?: string;
}

export interface MainLayoutWrapperProps
  extends HTMLAttributes<HTMLAnchorElement> {
  image?: string;
  imageMobile?: string;
  imageTablet?: string;
}
