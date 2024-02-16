There is an extra step that needs to be made when clearing out an `<input type='file'/>` input in a [[📁developer/ReactJS/ReactJS]] app. The easy way is to use the `useRef` hook.

```javascript
function ExampleFileInput() {
  const ref = React.useRef();
  function handleClick() {
    ref.current.value = ""
  }
  return (
    <div className="App">
      <input type="file" ref={ref}/><br />
      <button type="button" onClick={handleClick}>Clear file</button>
    </div>
  );
}
```

---
## Credits
- [reactjs - React: How to clear file input and data input fields after submitting form? - Stack Overflow](https://stackoverflow.com/questions/60986168/react-how-to-clear-file-input-and-data-input-fields-after-submitting-form#:~:text=Here%27s%20an%20example%20functional%20component%20that%20does%20this%3A,%2F%3E%20%3Cbutton%20type%3D%22button%22%20onClick%3D%20%7BhandleClick%7D%3EClear%20file%3C%2Fbutton%3E%20%3C%2Fdiv%3E%29%3B%20%7D)