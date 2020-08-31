import { ɵɵdefineComponent,  ɵɵelementStart,  ɵɵtext, ɵɵelementEnd, ɵrenderComponent } from '@angular/core';
import './style.css';

export class MyComponent {
  name = 'Sidd 👨🏼‍💻';

  static ngComponentDef = ɵɵdefineComponent({
    type: MyComponent,
    selectors: [['my-component']],
    factory: () => new MyComponent(),
    template: (rf, ctx) => {
      if (rf === 1) {
        ɵɵelementStart(0, 'h1');
        ɵɵtext(1, `👋🏼 there, I'm ${ ctx.name }`);
        ɵɵelementEnd();
      }
    },
    consts: 1,
    vars: 1,
  });
}

ɵrenderComponent(MyComponent);