Wanted to sort and display the most future dates in a list / table (using [CouchDB](📁developer/Home%20Lab%20🏠/CouchDB.md) , so don't forget the info is in the `doc` object)

```js
	data = [
	{id: 1, doc: {dateOf: "2030-10-1"}}
	{id: 2, doc: {dateOf: "2023-12-5"}}
	{id: 3, doc: {dateOf: "2023-2-25"}}
	]
	data.sort((prev, curr) =>{
		return new Date(prev.doc.dateOf) - new Date(curr.doc.dateOf)
	}).reverse()
```

---
## Credits
- [Sort array by date JavaScript | Example code (eyehunts.com)](https://tutorial.eyehunts.com/js/sort-array-by-date-javascript-example-code/#:~:text=To%20sort%20an%20array%20by%20date%20first%20convert,get%20Date%20objects%2C%20then%20sort%20by%20compare%20function.)

#javascript 