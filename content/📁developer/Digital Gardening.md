Digital gardening is my preferred way of 'blogging'. Writing, maintaining, and updating markdown files locally and having an automated app update and publish the collection of documents is *the* painless way to construct an online site of posts.

#### Including but not limited to 

- Documentation
- Tutorials
- Journal
- Step by Step
- Recipes

## Growing the Garden

[Obsidian.md](📁developer/Home%20Lab%20🏠/Obsidian.md.md) is my way of maintating my *vault* of markdown files


## Prepping vault for publishing

I like to keep one large vault that hosts all my notes. Anything from music, web development, video game emulation, etc. 

When it comes to publishing my vault, I'd like a to split my notes and dedicate each group to it's own site i.e. **Developers**: Coding, videogames, home lab.

I assume you've already grouped these in a sensible file structure in your notes already. We'll use that structure to create a ignore file that takes this into account. 

### .gitignore

Assuming you're pushing this to a github repo, you'll want to ensure your `.gitignore` ignores any files you do not want the world to see. Here is an example for a common files / obsidian vaults

```txt
.DS_Store
.gitignore
node_modules
public
prof
tsconfig.tsbuildinfo
.obsidian
.quartz-cache
private/
.replit
replit.nix
```

### Symbolic Linking

You could just copy and paste the desired vault over to the `/content` directory, but I think we can do this in a more elegant way. These **Soft Links** will do the same job, without taking up double the hard disk space. 


## Publishing Software

Now to share this garden with the world. I've tried my hand at a few publishing apps, even tried to write my own

1. [Welcome to Quartz 4 (jzhao.xyz)](https://quartz.jzhao.xyz/)
	1. This is the most mature, fully featured publishing app
2. DIY [Obsidian Publish with NextJS](📁developer/Projects📐/Obsidian%20Publish%20with%20NextJS.md) aka Pywriter Publisher
	1. Generating static sites with markdown files is a good first project for any #webdev, but like me you'll quickly find an ever growing ceiling of features that you'll want to add. 
3. [Flowershow](https://flowershow.app/)
	1. The new kid on the block. I'm really digging the integrated plugin right inside of [Obsidian.md](📁developer/Home%20Lab%20🏠/Obsidian.md.md). Still has a bit to go, but could be the most useful if you're willing to give it a try. 


---
## Credits
- [filesystem - How to create symbolic link to a directory excluding certain files? - Ask Ubuntu](https://askubuntu.com/questions/438883/how-to-create-symbolic-link-to-a-directory-excluding-certain-files)