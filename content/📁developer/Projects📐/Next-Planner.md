📃📃📃 Next-Planner 📃📃📃

Custom online planner form

🖱 Live website  @ ___link___

## 📸 Screenshots 


## 👁‍🗨 Features
-  Offline first database with PouchDB
- Role based authentication with Next-Auth

---

## ⚙ Development Env

0. install NodeJS & CouchDB on development machine
1.  `git clone` this repo & `cd` into new directory
2.  `cp ./.env.dev` to `./.env.local`
3. edit  `./js/defaultUsers.json` to taste
4.  `npm i`
5.  `npm run dev`
6. visit `http://localhost:3000/api/users/default` to initialize users

  
## 🏭 Production Env

0.  install Docker on production machine
1.  `git clone` this repo
2.  `cp ./.compose-prod.yml` to `./.compose.yml` (add environment variables to suite your project)
3.  `docker compose up -d --build` or use my shell command `sh ./prod.sh`
4.  visit `http://<YOUR_DOMAIN>/api/users/default` to initialize users


## 🌠 Wishlist

-   list

---
## Credits

## inspo
- https://admitonedjs.com
- [DJ Intelligence® | Online Event Booking, Planning, Management Software for Event Professionals](https://www.djintelligence.com/)

## 2023-02-02 Video Call w Bill
- [ ] left hand column - make it static? not changeable by client
- [x] bock header smaller font
	- [x] make it right on top of the block
- [ ] likes floating save button (double confirm works. still want to fix)
- [ ] make the blocks wrapped in a border. make it obvious 
- [ ] likes the re order when time is edited
	- [ ] time clock symbol more obvious to click
- [ ] make a 'print' button
	- [ ] fix page breaks when printing
	- [ ] make a sticky sidebar that leads to a "song suggestions, etc page"
- [ ] light mode nav menu items have dark text
- [ ] fonts - use partyvibe fonts - Proxima Nova, Lulu clean
- [x] ==register new user==: took to login screen for some reason. GO BACK TO USER TABLE 
	- [x] or even better, goes to 'user single page'
	- [x] even even better, throw a pop up that says 'create new planner for new user?'
- [x] **ADD PLANNER FOR THIS USER**  `button` when on a single user's page
- [x] make `bill@partyvibeonline.com` & `susan@partyvibeonline.com` as default owners of each planner
- [ ] revision - date last edited as well
- [ ] ditch color tab?
- [x] sometimes `/mypage` says not authorized fix `/mypage/user:asdfasdfasdfasdf` in navbar button ==this is wrong==
- [x] logo branding
- [ ] photobooth should have a planner block
- [ ] need stuff for other than wedding
	- [ ] company party package
	- [ ] mitvah package
	- [ ] premium mitvah package
- [x] default table default to show `100`
  - [x] planner time block should have a `start` time
  - [ ] move block toolbar to bottom
  - [x] ==make block toolbar only for admin==
  - [x] limit number of must-plays 
- [x] the planner's table cells need to be smaller
- [ ] unique 'dance request' block
	- [ ] maybe make a separate `must play`, `do not play`,  `play if possible`, 

font for time input. match others 
'start time' capitalize 'Start Time'
remove table header on 'introductions'
capitalize all header words 
font page put large branded image as a background behind 'anytime anywhere'

#todo 
- [x] btn-med - remove `max-width`
- [x] Overhall **Planner Blocks** fetching
	- [x] create db CRUD
	- [x] link with ID instead of section 'header'
	- [x] block editor - 'save as new' or 'overwrite' options
	- [x] 'type' variable. "tiptap" or "music_playlist"
	- [ ] ==ditched pouchdb because of network error==  `::ERR_BLOCKED_BY_CLIENT`something about the `<iframe>` in the help data being scrapped by add blocker
- [ ] ==BUGS==
	- [ ] after `plannercreate` the table doesn't update without refresh
	- [ ] after planner save update `timeStart` sort doesn't kick in unless page refreshes
	- [ ] help `?` button goes over nav. fix `z-index`
	- [x] planner patch: add or removing owners doesn't work
	- [x] if no planners, the admin page bugs out
		- [x] something happening to all GET req on first page load ==net::ERR_INSUFFICIENT_RESOURCES==
		- [x] `planners_blocks/getall` is firing off a ton
	- [x] admin planner patch is broken
	- [x] after admin planner patch updates are not reflected once routed back. must refresh the page
	- [x] ==why is `planners/` constantly firing off?==
	- [x] need an error message if login creds are wrong
	- [ ] formik more client side validation
	- [x] production - auto build 'users', & 'planners' if none exist
	- [ ] ==broken app on safari==
- [ ] templates
	- [ ] Delete templates via frontend
	- [ ] ignore `/public/templates/*` in repo
	- [x] create / delete package names for frontend
	- [x] create / delete extras options for frontend
	- [ ] switch between different settings?
- [x] go through planner step by step
	- [x] register new user
	- [x] sign in as new user
	- [x] admin create new planner for new user
	- [x] admin can edit patch planner
	- [x] new user can edit planner
	- [x] new user sees owned planners
	- [x] newley registered user starts off as `client`
- [ ] admin panel
	- [x] CRUD of all users ==== now actually
	- [x] CRUD of all planners -- now actualy can delete
	- [x] add / remove sections from planner 
	- [x] start new planner with default sections
	- [x] template creator
	- [x] refresh page when new planner is created
	- [x] order "all planners" table by date by default
	- [ ] link template with "package" # 
	- [x] paginate users
	- [x] paginate planners
	- [ ] selective fetch from db for pagination
	- [ ] search bar filter for planners
	- [ ] search bar filter for users
	- [ ] navbar admin tab drop down for all  options (register, template playground, create planner)
	- [ ] **BETTER DEFAULT Template TIME** - 'planner sections' could have a time input that can be updated in settings?
	- [ ] default 'create new planner' date to today's date. 
- [ ] member page
	- [x] list of current planners for logged in user (employee or client, (admin should be owner of all))
	- [ ] can users edit themselves?
	- [x] ==`pages/user/[id]` shows all planners of logged in user, not the the planners owned by the page's `id` ==
- [ ] the planner
	- [x] set planner templates for **Tiptap.js** 
	- [x] dynamic  sections
	- [x] pretty menu bar
	- [x] modular form creator
	- [x] set initial `height` in notes `<textarea>`
	- [x] pretty animation when saving (almost there)
	- [ ] timeline widget
	- [ ] upload or copy / paste for custom 
	- [ ] printable version (almost there)
	- [x] **Super obvious save button**
	- [ ] auto saving after ~10min
	- [x] cache client data in case of accidental page refresh
	- [x] organize sections by `timeStart`
	- [x] simple form creates new planners
	- [x] convert **TIPTAP TEMPLATES** to json to easily manage
	- [x] if section is empty grab from .json template
	- [x] notes section
	- [x] must be an owner to view planner
	- [ ] 'EMPLOYEE_TYPE' variable.
	- [ ] show employee assigned in 'planner' table
 - [ ] database
	- [x] try using CouchDB (MongoDB maybe) [Building an offline-first app with React and CouchDB - DEV Community 👩‍💻👨‍💻](https://dev.to/savoir/building-an-offline-first-app-with-react-and-couchdb-2ggh)
	- [x] local first with pouchdb
	- [ ] lock out client updates day of or after event 
	- [ ] stamp of approval "FINAL REVISION"
	- [x] ==bug== - owner and employee are not saving to db
	- [x] ==bug== - saving section whipes over section
	- [x] handle duplicate registration of user,
- [ ] pages
	- [ ] register - creating user animation

---
## Citations
- [spacecowb0y/nextjs-pouchdb-guestbook: Simple React.js application using Next.js, and PouchDB as a local database that syncs to a remote CouchDB. That means that works offline! (github.com)](https://github.com/spacecowb0y/nextjs-pouchdb-guestbook)
- [Building an offline-first app with React and CouchDB - DEV Community 👩‍💻👨‍💻](https://dev.to/savoir/building-an-offline-first-app-with-react-and-couchdb-2ggh)
- [SavoirBot/definitely-not-a-todo-list: Not-a-todo-list built to be offline first using CouchCB, React, and PouchDB (github.com)](https://github.com/SavoirBot/definitely-not-a-todo-list)

## Backlinks
- [Software Dev Projects](📁developer/Projects📐/Software%20Dev%20Projects.md)