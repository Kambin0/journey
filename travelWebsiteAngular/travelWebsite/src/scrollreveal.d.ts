declare module 'scrollreveal' {
    export interface ScrollRevealObjectOptions {
      distance?: string;
      origin?: string;
      duration?: number;
      delay?: number;
      interval?: number;
      opacity?: number;
      scale?: number;
      easing?: string;
      reset?: boolean;
      desktop?: boolean;
      mobile?: boolean;
      cleanup?: boolean;
      container?: string | HTMLElement;
      viewFactor?: number;
      viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
      afterReveal?(el: HTMLElement): void;
      afterReset?(el: HTMLElement): void;
      beforeReveal?(el: HTMLElement): void;
      beforeReset?(el: HTMLElement): void;
    }
  
    interface ScrollRevealObject {
      reveal: (selector: string | HTMLElement | NodeList | Array<HTMLElement>, options?: ScrollRevealObjectOptions) => ScrollRevealObject;
    }
  
    function ScrollReveal(options?: ScrollRevealObjectOptions): ScrollRevealObject;
  
    export default ScrollReveal;
  }
  