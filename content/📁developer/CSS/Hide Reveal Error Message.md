clever way to animate an error message in and out. The error element is hidden when there is no inner text or html present, but once filled with content it will be revealed to the UI

```scss
.error{
    background-color: red;
    color: white;
    padding: .3em;
    margin-bottom: 1em;
    transition: .7s;
    
    &:empty{
      background-color: green;
      z-index: -500;
      height: 0;
      padding: 0;

    }
  }
```


---

## Backlinks
- [Cascading Style Sheet Tips & Tricks](📁developer/CSS/Cascading%20Style%20Sheet%20Tips%20&%20Tricks.md)