`typescriptreact.json`
```json
{
	"Print to console": {
		"prefix": "loggg",
		"body": [
			"console.log('*** tsx $1');",
			"$2"
		],
		"description": "Log output to console"
	},
	"className": {
		"prefix": "clsnm",
		"body": [
			"className={$1} "
		],
		"description": "react tsx className"
	},
	"Typescript React Component With Import": {
    "prefix": [ "component-tsx", "fci", "import-react-functional-component"],
    "body": [
			"type Props = {",
			"\tprop:string",
			"}",
			"",
			"export function ${1:$TM_FILENAME_BASE} ({ prop }:Props) {",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t${1:$TM_FILENAME_BASE}",
			"\t\t</div>",
			"\t)",
			"}",
		],
    "description": "A React functional component with Typescript types for props."
	},
	"Typescript React Page With Import": {
    "prefix": [ "page-tsx", "fpi", "import-react-functional-component"],
    "body": [
			"type Props = {",
			"\tprop:string",
			"}",
			"",
			"export function $0Page ({ prop }:Props) {",
			"\treturn (<>",
			"\t\t\t$0Page",
			"\t</>)",
			"}",
		],
    "description": "A React functional Page with Typescript types for props."
	},
}
```

## Credits
- [vscode-snippets/typescriptreact.json at main · alessandrobardini/vscode-snippets (github.com)](https://github.com/alessandrobardini/vscode-snippets/blob/main/typescriptreact.json)