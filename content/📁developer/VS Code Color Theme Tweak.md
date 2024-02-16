A fresh new coat of paint is sometimes what's needed to get you back and motivated to use your editor. Except, completely departing from the code syntax highlighting your use to just to have a different foreground / background color can be hard on the eyes. 

That's why I switch to a different theme, but keep a lot of the same syntax highlighting along with me.

1. hit the ⚙️ settings in **VS Code**
2. search for `Workbench: Color Customizations` > `Edit in settings.json`
3. in my case i was editing the `solarized dark` theme

```json
...
"workbench.colorCustomizations": {

	"[Solarized Dark]": {
		"editor.background": "#162a2d",
		"editor.foreground": "#376f64",
	}
	
	"comments": "#3f4845",
	"functions": "#18a6ff",
	"types": "#cabe13",
}
...
```

4. You can also colorize agnostic of theme
6. It helps to dig into the theme's original `.json` file. on **MacOS** i found it here
	1. `VS Code/Contents/Resources/app/extensions/theme-solarized-dark/themes/solarized-dark-color-theme.json`

---
## Credit
- [Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)
- [VS Code : Change Any Tag Color. Edit Custom Syntax Colors (No extension) - YouTube](https://www.youtube.com/watch?v=Su-cNLe0dgw&t=409s)
- [VS Code tips — The editor.tokenColorCustomizations setting - YouTube](https://www.youtube.com/watch?v=x940v7snKoc&t=1s)