

```jsx
// App.js

import React from 'react';

const box = {
    color: "green",
    fontSize: '23px'
}

const shadow = {
    background: "orange",
    boxShadow: "1px 1px 1px 1px #cccd"
}

export default function App(){
    return (
      <div style={{...box, ...shadow}}>         <h1>Hello react</h1>
      </div>
      <div style={{...box, color: 'blue'}}>         <h1>Hello react</h1>
      </div>
    )
}
```

---
## Credits
-  [How to combine multiple inline style objects in React | Reactgo](https://reactgo.com/react-multiple-inline-styles/#:~:text=In%20React%2C%20we%20can%20add%20a%20inline%20styles,a%20single%20style%20object%20using%20the%20spread%20operator.)