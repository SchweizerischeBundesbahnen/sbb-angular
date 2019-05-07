# Badge Overview

Import button module into your application

```ts
import {
  BadgeModule
} from '@sbb-esta/angular-public';
```

and then you can use the badge component as seen below

```html
<div class="badge-example">
  Hi, I'm a badge
  <sbb-badge>123</sbb-badge>
</div>
```

Tha badge supports a property called ```active```: it is a boolean (true is default). When ```active``` is set to "false", the badge will be grey colored.  

## Accessibility

In order to make this component accessible, you must use the ```aria-label``` attribute on the ```<sbb-badge>``` itself:

```html
<div class="badge-example">
  Billion people in the world
  <sbb-badge aria-label="7 billion people">7</sbb-badge>
</div>
```