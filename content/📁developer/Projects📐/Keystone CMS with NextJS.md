I gave [WPGraphQL – WordPress plugin | WordPress.org](https://wordpress.org/plugins/wp-graphql/) a good collage try and just kept running into many pitfalls. then I found [Strapi](https://strapi.io/pricing-self-hosted).  A *Headless First* CMS that seems like a lot less hoops to jump through when hooking it up with a [[NextJS]] frontend app.

## Using PartyVibeOnline as my inspiration
I built out a website for 

## Stack - KYPN
- Keystone (prisma) - CMS
- PostgreSQL - database
- NextJS - Frontend
- Apollo v4 - State Management
- Typescript - language
- Docker - Deployment

## What does it need to do?

**Essential**
- blog / news posts (rich text editor)
	- auto post to facebook, instagram, tiktok, etc
		- [TikTok for Developers | TikTok](https://developers.tiktok.com/doc/web-video-kit-with-web/)
		- [Publish Content - Facebook Pages API](https://developers.facebook.com/docs/pages/publishing)
		- [Content Publishing - Instagram Platform (facebook.com)](https://developers.facebook.com/docs/instagram-api/guides/content-publishing/)
		- [POST /2/tweets | Docs | Twitter Developer Platform](https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets)
	- [How to run a cron job using NextJs Framework | by Bhavya Dhiman | Medium](https://bhavyadhiman7.medium.com/how-to-run-a-cron-job-using-nextjs-framework-b88d0e696aa2)
	
- users permissions (locked content)
- ecommerce
- members page (with ordered products reciptes)
- DJ Mix Posts (with local video)
- Booking Calendar 
- email marketing
- page builder for client (front, about, contact, services, faq)
	- [Advanced Features: Using MDX | Next.js (nextjs.org)](https://nextjs.org/docs/advanced-features/using-mdx)
- media organizer (for videos, pictures)
- upcoming events (w calendar, email reminders)
- link tree building
- gallery - lightbox

**Bonus**
- page builder for client (front, about, contact, services, faq) (.mdx))

**Bonus**
- banner (for when Mix is live) (automated to date)
- analytics
- calendar of past present posts
- announcements marquee banner
	- message
	- link
	- date range if active

## themes
- music artist 
	- merch
	- album
	- song
	- singles
	- link trees
- restaurant 
- puppy adoption 
- dj buisness 
- photographer



#todo 
- [ ] fix search (add fuzzy search?)
- [ ] privacy policy cookies accept
- [ ] add 'postponed' to status for booking schema
- [ ] add **Location** schema to link with 'Service' schema
- [ ] automated SEO with NextJS
- [ ] Umami config


## Troubleshooting
uploading images with the **Keystone 6**, **NextJS 13**, & **Apollo v4** was quite the undertaking thanks to [Richard Vargas Answer](https://stackoverflow.com/a/75088696/15579591 ) that helped me get through it


## Schema

### Booking

> [!warning] when updating the price, it might not take into account a sale price or upsale price

**Fields**
- Date (Calander Day)
- Time (24 hour)
- Location (address)
- service - connect -> Service(single)
- employee - connect -> User(single)
- customer - connect -> User(single)
- addons - connect -> BookingAddon (many)
```json
date: "2023-03-10",
StartTime: "02:23",
location: "234 west east st, Chicago IL 60606"
service: {
	connect: { name: 'Fruit Basket Service'}
}
employee: {
	connect: { email: 'adam@m.lan'}
}
customer: {
	connect: { email: 'cindy@m.lan'}
}
```




### Addon
**Fields**
```json
name: 'Scratch and Sniff Stickers',
    description: 'An assortment of scratch and stiff stickers with various fruity scents',
    price: 1,
    services: {
      connect: [
        { name: 'Fruit Basket Service'},
        { name: 'Citrus Platter Service'},
        { name: 'Open Smoothie Bar'},
      ]
    }
```

Events
- isFinished (upcoming / post)

CalDev integration (gmail?)

### Service
**Fields**
- name (unique)
- description
- price
- duration
- ~~buisnessHours: ~~
- employees: connect -> User (many)

```json
{
    name: 'Open Bar',
    price: 3045,
    durationInHours: '3.25,
    employees: {
	    connect: [
		    { email: 'nancy@m.lan'},
		    { email: 'chad@m.lan'},
	    ]
		},
		locations: {
			connect: [
				{ address: ''},
				{ address: ''}
			]
		}
	}
},
```

### Location
```json
{
	name: '',
	address: '',
	rooms: '', 
	buisnessDays: ?,
	
}
```

- 'On Site' - for gig type services
- 'Virtual' - for any consultation type services

### Availability
**Fields**
- dateTime: timestamp
- duration: in hours
- employee: connect User
- type
	- Vacation
	- Available
	- Sick
- state
	- requested
	- approved
	- denied
	- postponed

```json
{
	dateTime: '2023-03-01T...',
	duration: 4.5,
	employee: {
		connect: { email: 'adam@m.lan'},   
	},
	type: 'VACATION',
	state: 'APPROVED',
}
```


### Event
```json
{
	summary: 'cool event',
	start: '2023-05-19T21:00:00.000Z',
	end: '2023-05-19T23:00:00.000Z', 
	seats: 20, 
	price: 100,
}
```

#### Tickets
```json
{
	value: 100,
	qr: '1234567', // generated qrcode
	user: ,// connect ticket holder
	
}
```

## WARNINGS


> [!warning] Booking Schema 
> when updating the price, it might not take into account a sale price or upsale price. Or if there has been price updates in **Addons** or **Services** since booking


## Privacy Policy
- This app does not handle payments, all forms of payment (credit card / venmo / paypal) are not saved and are directly pushed to [Stripe.com](stripe.com) (or appropriate app)
- information listed bellow that is submitted onto this app's platform will be saved and used to help better service future requests
	- name
	- email
	- address (venu)

---

### Q: What would be the difference between booking and events schema?
> Both Bookings and Events schemas would likely have some similarities in terms of the basic information they store, such as the date and time of the booking or event, the location, and possibly the number of attendees or participants. However, there are also some important differences between the two schemas:
> 
>1.  Purpose: The purpose of a **Booking** schema is to track **reservations** made by customers or users for a particular service or resource, such as a hotel room, restaurant table, or rental car. In contrast, the purpose of an **Event** schema is to track information related to events, such as conferences, concerts, or sporting events.
>2.  Timeframe: **Bookings** are typically shorter-term and involve specific **start and end times or dates**. Events, on the other hand, can **span multiple days** or even weeks, and may have **multiple sessions** or **activities** taking place within them.
>3.  **Attendees**: While both schemas may include information about attendees, the way this information is captured can differ. In a Booking schema, the focus may be on **capturing the details of the individual** making the reservation, such as their name, contact information, and payment details. In an Event schema, the focus may be more on tracking the **overall number of attendees**, and possibly collecting **demographic** information or other data to help plan and market future events.
>4.  Relationships: Bookings may be related to other entities in the database, such as **customers** or specific resources being reserved. Events may be related to other entities such as **venues, performers or speakers**.
>5.  Cancellation: Cancellation is an important feature for the Booking schema. However, Events may not have cancellation option and is generally used to manage guests, vendors and other data for organizing events.

---
## Credits
- [User Richard Vargas - Stack Overflow](https://stackoverflow.com/users/16652024/richard-vargas) https://stackoverflow.com/a/75088696/15579591 
- [Advanced React & GraphQL — Build Full Stack Applications with React and GraphQL](https://advancedreact.com/)