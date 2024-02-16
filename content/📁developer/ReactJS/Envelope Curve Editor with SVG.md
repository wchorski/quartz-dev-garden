---
tags:
  - reactjs
  - nodejs
---

```tsx
import { Draggable } from "gsap/dist/Draggable"
```

```tsx
useGSAP((context) => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 100px)", () => {

      gsap.to('.line_path_reveal', {
        width: '500',
        duration: 5,
        repeat: -1,
        ease: 'none'
      })
  
    });
    gsap.registerPlugin(Draggable)
    Draggable.create(".point_1",)

    // console.log(context);
    // return () => {}
    
  }, { scope: container })
```

> [!warning] FireFox
> Not sure if this is a bug or me, but development in Firefox did not update the UI correctly. The `width` value would only update on user interaction (clicking, dragging, inspector tweaking). I've moved to Chrome to work on this as normal


- [d - SVG: Scalable Vector Graphics | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands)
- [Draggable - Get current object postion and save it - GSAP - GreenSock](https://gsap.com/community/forums/topic/12649-draggable-get-current-object-postion-and-save-it/)
- [cubic-bezier(.37,.46,.91,.41) ✿ cubic-bezier.com](https://cubic-bezier.com/#.37,.46,.91,.41)
- [Building draggable Component with React and TypeScript - YouTube](https://www.youtube.com/watch?v=ZcDWyVj6-uU)
- [React & GSAP | GSAP | Docs & Learning](https://gsap.com/resources/React/)
- [GSAP & React Simple Starter - StackBlitz](https://stackblitz.com/edit/gsap-react-basic-f48716?file=src%2FApp.js)
- [html - How to make a grid (like graph paper grid) with just CSS? - Stack Overflow](https://stackoverflow.com/questions/3540194/how-to-make-a-grid-like-graph-paper-grid-with-just-css)
- [GSAP Draggable & React - CodeSandbox](https://codesandbox.io/p/sandbox/gsap-draggable-react-zfiun?file=%2Fsrc%2FBox.jsx%3A3%2C1-3%2C44)
- [Errors when trying to use Draggable plugin with Next.js / React - GSAP - GreenSock](https://gsap.com/community/forums/topic/34893-errors-when-trying-to-use-draggable-plugin-with-nextjs-react/)
- [Getting error `Cannot use import statement outside a module` when importing Flip - GSAP - GreenSock](https://gsap.com/community/forums/topic/29801-getting-error-cannot-use-import-statement-outside-a-module-when-importing-flip/)
- [SVG Path: Drawing Quadratic Curves - YouTube](https://www.youtube.com/watch?v=qwI_cVs8yy0)
- [SVG Path: Drawing Quadratic Curves (codepen.io)](https://codepen.io/joemaddalone/pen/dLJWbX)

- [ReactJS](📁developer/ReactJS/ReactJS.md)