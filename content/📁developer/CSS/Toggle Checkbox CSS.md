```scss
input[type="checkbox"].toggle {
  opacity: .1;
  position: absolute;
  cursor: pointer;
  left: -9000px;
  top: -9000px;

  &:disabled + label {
    color: #68346873;

    &::before{
      color: #68346873;
      background-color: #68346873;
    }
    &::after{
      color: #68346873;
      background-color: #68346873;
    }
  }
}


input[type="checkbox"].toggle + label {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &::before{
    content: "";
    width: 4.5em;
    height: 1.2rem;
    background-color: #ffffff2b;
    border-radius: 1em;
    margin-right: .25rem;
  }

  &::after{
    content: "\2715";
    width: 2em;
    height: 2em;
    border-radius: 1em;
    background-color: grey;

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: 200ms ease-in-out;
  }
}

input[type="checkbox"].toggle:checked + label {

  color: var(--color-highlight);

  &::after{
    content: "\2713";
    color: black;
    transform: translateX(115%);
    background-color: var(--color-highlight);
  }
}
```

---

## Backlinks
- [Cascading Style Sheet Tips & Tricks](📁developer/CSS/Cascading%20Style%20Sheet%20Tips%20&%20Tricks.md)