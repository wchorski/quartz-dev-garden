
## Scroll horizontal ticker

```html

<!-- Styles -->	
<style>
.example1 {
	 height: 50px;	
	 overflow: hidden;
	 position: relative;
}

.example1 h3 {
	 font-size: 3em;
	 color: limegreen;
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 margin: 0;
	 line-height: 50px;
	 text-align: center;
	
	 transform:translateX(100%);
	
	 animation: example1 15s linear infinite;
}

@keyframes example1 {
	 0%   { 
	
		 transform: translateX(100%); 		
	 }
	 100% { 
	
		 transform: translateX(-100%); 
	 }
}
</style>

<!-- HTML -->	
<div class="example1">
<h3>Scrolling text... </h3>
</div>
```

## Scroll Down

```html
<style>
.example3 {
	 height: 200px;	
	 overflow: hidden;
	 position: relative;
}

.example3 h3 {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 margin: 0;
	 line-height: 50px;
	 text-align: center;
	
	 transform:translateY(-100%);
	
	 animation: example3 15s linear infinite;
}



@keyframes example3 {
	 0%   { 
		 transform: translateY(-100%); 		
	 }
	 
	 100% { 
		 transform: translateY(100%); 
	 }
}
</style>

<!-- HTML -->
<div class="example3">
	<h3>Scrolling down... </h3>
</div>
```

---
## Credits
- [CSS Marquees (quackit.com)](https://www.quackit.com/css/codes/marquees/#:~:text=CSS%20marquees%20are%20replacing%20HTML%20marquees%20as%20the,creating%20scrolling%2C%20bouncing%2C%20or%20slide-in%20text%20and%20images.)

## Backlinks
[[CSS]]