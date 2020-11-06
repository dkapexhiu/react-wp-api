export const config = {
  siteMetadata: {
    title: `React WordPress REST API Demo`,
    description: `Create a single page web app with ReactJS using WordPress as a headless CMS.`,
    author: `@gregrickaby`,
    siteUrl: `https://react-wordpress-api-demo.netlify.app/`
  },
  options: {
    wordPressUrl: "https://albrecovery.al/wp-json/wp/v2/posts?_embed",
    wordPressPageUrl: "https://albrecovery.al/wp-json/wp/v2/pages"
  }
};
