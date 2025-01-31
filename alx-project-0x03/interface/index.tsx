import { ReactNode } from "react";
import { PageRouteProps } from  "./PageRouteProps";

export interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
  }

  export interface LayoutProps {
    children: ReactNode;
  }