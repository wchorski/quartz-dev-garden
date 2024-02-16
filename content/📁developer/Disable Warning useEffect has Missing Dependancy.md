sometimes this warning suggests to put a variable into the `depenancy array`, but that causes an infinite loop. Disable the warning with the following

```jsx
import React, {useEffect, useState} from 'react';

export default function App() {
  const [address, setAddress] = useState({country: '', city: ''});

  const obj = {country: 'Chile', city: 'Santiago'};

  useEffect(() => {
    setAddress(obj);
    console.log('useEffect called');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Country: {address.country}</h1>
      <h1>City: {address.city}</h1>
    </div>
  );
}
```

---
## Citations
- [React Hook useEffect has a missing dependency error | bobbyhadz](https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency#:~:text=The%20warning%20%22React%20Hook%20useEffect%20has%20a%20missing,example%20of%20how%20the%20warning%20is%20caused.%20App.js)