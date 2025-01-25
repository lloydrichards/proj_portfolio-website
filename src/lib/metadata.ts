export const siteMetadata = {
  title: "lloydrichards.dev",
  author: "Lloyd Richards",
  description:
    "Digital playground of Lloyd Richards, a designer and developer.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://lloydrichards.dev",
  siteRepo: "https://github.com/lloydrichards/proj_portfolio-website",
  siteLogo: `${process.env.BASE_PATH || ""}/images/logo.png`,
  locale: "en-US",
  icon: `/favicon.svg`,
  social: {
    email: "lloyd.d.richards@gmail.com",
    socialBanner: `${process.env.BASE_PATH || ""}/images/twitter-card.png`,
    // mastodon: "https://mastodon.social/@mastodonuser",
    github: "https://github.com/lloydrichards",
    // x: "https://twitter.com/x",
    // facebook: "https://facebook.com",
    // youtube: "https://youtube.com",
    linkedin: "https://www.linkedin.com/in/lloyddrichards/",
    // threads: "https://www.threads.net",
    instagram: "https://www.instagram.com/lloyd_bydesign/",
    // medium: "https://medium.com",
    // bluesky: "https://bsky.app/",
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
};
