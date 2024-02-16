#reactjs #javascript 

wanted to update a single object inside an array of 

```jsx
import {useState} from 'react';

const App = () => {
  const initialState = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Belgium'},
    {id: 3, country: 'Canada'},
  ];

  const [data, setData] = useState(initialState);

  const updateState = () => {
    // 👇️ passing function to setData method
    setData(prevState => {
      const newState = prevState.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.id === 2) {
          return {...obj, country: 'Denmark'};
        }

        // 👇️ otherwise return object as is
        return obj;
      });

      return newState;
    });
  };

  return (
    <div>
      <button onClick={updateState}>Update state</button>

      {data.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App;
```

---
## Credits
- [Update an Object in an Array in React State | bobbyhadz](https://bobbyhadz.com/blog/react-update-object-in-array#:~:text=To%20update%20an%20object%20in%20an%20array%20in,condition%20and%20return%20all%20other%20objects%20as%20is.)

## Backlinks
- [ReactJS](📁developer/ReactJS/ReactJS.md)