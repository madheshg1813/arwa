interface IonIconProps extends React.HTMLAttributes<HTMLElement> {
  name?: string;
  src?: string;
  size?: string;
  color?: string;
  class?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': IonIconProps;
  }
}

// Support for React.JSX (React 18+)
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': IonIconProps;
    }
  }
}
