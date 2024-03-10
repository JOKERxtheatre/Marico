// svg.d.ts

import { SVGProps } from 'react';

declare module 'react' {
  interface SVGProps<T> {
    'xmlns:xlink'?: string;
  }
}
