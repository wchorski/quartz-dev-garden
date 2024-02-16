describe_the_problem

```javascript
function Draw () {
	var e, surface;
	e = document.getElementById ("surface");
	
	/* Begin size adjusting. */
	e.width = e.offsetWidth;
	e.height = e.offsetHeight;
	
	/* End size adjusting. */
	surface = e.getContext ("2d");
	surface.strokeRect (10, 10, 20, 20);
}
window.onload = Draw ()
```

```xml
<!DOCTYPE html>
<html>

	<head>
		<title>Canvas size adjusting demo</title>
	</head>
	
	<body>
		<canvas id="surface"></canvas>
	</body>
	
</html>
```

---
## Credits
- [html - Canvas drawings, like lines, are blurry - Stack Overflow](https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry)

## Backlinks
- [HTML, Back to Basics](📁developer/HTML/HTML,%20Back%20to%20Basics.md)
