a stack built with 

| tech           | location              |
| -------------- | --------------------- |
| [[NextJS]]     | Frontend / automation |
| [[KeystoneJS]] | backend / ORM         |
| [[PostGres]]       | Database              |

This has been my most ambitious stack to learn. It is perfect for those medium to large size business that want a 

- modern responsive website
- strict data input
- ecommerce
- booking
- interactive events calendar 
- event ticket sales
- blog

#todo 
- [x] clean up login / register / forgot password page
- [x] ticket system **Stripe** integration
- [ ] add 'employeesRequested' field to **Booking** schema
- [x] how to share session across sub domains --> [examples/solutions/subdomain-auth at main · vercel/examples (github.com)](https://github.com/vercel/examples/tree/main/solutions/subdomain-auth)
- [x] AUTH - if no `password` is set then do not log in user with blank password
- [ ] file upload with **Yoga** - [jaydenseric/graphql-multipart-request-spec: A spec for GraphQL multipart form requests (file uploads). (github.com)](https://github.com/jaydenseric/graphql-multipart-request-spec)
- [ ] Ticket Query Permissions - make it so only the user can query the ticket
- [ ] use useReducer for ticket form. super easy when using buttons and number input field
- [x] emailContact email mutation
	- [x] contact
	- [x] booking
	- [x] User
	- [x] Ticket
	- [x] Order
	- [x] SubscriptionItem (order might be enough idk)
	- [x] password reset token
- [x] announcement schema...
- [x] metadata for all pages
- [ ] go over all blocks (backend and frontend)
- [ ] Rental Schema
	- [ ] product: rental price field
- [x] DO NOT ALLOW NEW TICKETS TO BE CREATED WHEN EVENT IS PAST START/OR MAYBY 2 hours before start?
- [x] Register users must verify email account w magic link. Then updates role to 'client' or some 'registered' default user
- [x] can register blackhat use `role: { connect: { name: admin } }` ?  No, Role access permissions prevent connection
- [x] client side validation
	- [x] password
	- [x] phone
	- [x] email
- [ ] BookingForm - add `terms of service` acknowledgement checkbox that disables submit buton
- [ ] Announcment - update is broken
- [ ] block SubscriptionItem if account is not verified
- [x] Addons for SubscriptionPlans
- [ ] custom site fonts
- [ ] backend keystone custom navigation. `.env` with on/off of each schema (pertaining to tawtaw subscription package or addon)
- [ ] Addon & SubItem Schemas - add query filters
- [x] Product - make it also rentable
- [ ] Product - ==NEEDS PERMISSONS==
- [ ] Rentals - don't take away from stock - but work like gigs with bookings to check if available (happens in `OrderItem` creation)
- [ ] add Rental details in Order Email confirmation
- [ ] `bookAService.ts line 129` grabs all gigs 'Bookings' ever made. How about only query gigs that end before NOW date
- [ ] a Toast notification system for all types of user interaction feedback. probably a global `useContext`
	- [ ] `isSelfClosing` for toasts that come and go
	- [ ] stackable notifications that float to corner as they are removed
- [ ] Services/id/page - add `document` description field so user can add image gallery + other explinations.

#### Check to see if product stock is avail for Rental date
```ts
// data i would need
Rental - start / end
Rental -> Order -> items - quantity
Rental -> Order -> items -> product -> stockcount
```
#### bookAService don't query all gigs ever made fix
got this set up in Apollo editor, but how do i make this work with `contextSudo.query.User.findMany({...`?
```ts
query Query($where: UserWhereInput!, $gigsWhere: BookingWhereInput!) {
  users(where: $where) {
    name
    gigs(where: $gigsWhere) {
      summary
      start
      end
    }
  }
}

{
  "where": {
    "id": {
      "in": ["clrgrhupn0000mgwnylcvbrko"]
    }
  },
  "gigsWhere": {
    "end": {
      "gt": "2024-01-18T22:38:32.638Z"
    },
    "status": {
      "in": [
        "ACTIVE",
        "DOWNPAYMENT",
        "HOLD"
      ]
    },
  }
}
```
## Conversion to NextJS 13 App Router

Between [Apollo Client](https://www.apollographql.com/docs/react/) and [NextJS App Router](https://nextjs.org/docs/app) there is some butting of heads to how data is fetched and cached. Following the guide [Apollo Client support for the Next.js App Router (github.com)](https://github.com/apollographql/apollo-client-nextjs) helped me get up and running with [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md)'s new router paradigm with the benefits of **Apollo** data fetching.

> [!warning] Auth with Server components
> using the 'experimental' library, it isn't clear how to properly validate the cookie token in the header. Following this issue that hopefully will be resolved [Add a defaultContext property on ApolloClient by phryneas · Pull Request #11275 · apollographql/apollo-client (github.com)](https://github.com/apollographql/apollo-client/pull/11275)
> 
> [keystone/examples/framework-nextjs-app-directory at main · keystonejs/keystone (github.com)](https://github.com/keystonejs/keystone/tree/main/examples/framework-nextjs-app-directory)

#### Pages
#todo 
- [ ] admin
- [ ] auth
- [x] blog
- [ ] bookings
- [ ] categories
- [ ] events
- [ ] locations
- [ ] myaccount
- [ ] shop
- [ ] subscriptions
- [ ] tags
- [ ] tickets
- [x] users
- [ ] orders

## Credits
- https://medium.com/@rezahedi/using-nextauth-authentication-provider-in-next-js-by-app-router-f50cb23282c9
