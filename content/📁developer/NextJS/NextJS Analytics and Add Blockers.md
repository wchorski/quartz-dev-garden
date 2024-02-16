I want to make sure I get session data from my users even if they have an add blocker. To do this I just need to create a proxy in the `next.config.js` that routes my analytics data as if it's from the same domain

## next.config.js
```js
/** @type {import('next').NextConfig} */

const ANALYTICS_URL = process.env.NEXT_PUBLIC_UMAMI_URL + '/:match*'
console.log('ANALYTICS_URL', ANALYTICS_URL);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/stats/:match*',
        destination: ANALYTICS_URL,
      },
    ]
  },
}

module.exports = nextConfig
```

I first tried this out on my [Make-a-Gram](📁developer/Projects📐/Make-a-Gram.md) project

---
## Credits
- [next.config.js: Rewrites | Next.js (nextjs.org)](https://nextjs.org/docs/api-reference/next.config.js/rewrites)
- [How to use a proxy in Next.js - LogRocket Blog](https://blog.logrocket.com/how-to-use-proxy-next-js/)
- [Running on Vercel | umami](https://umami.is/docs/running-on-vercel)

## Backlinks
- [NextJS](📁developer/Home%20Lab%20🏠/NextJS.md)