const today = new Date();
const currentYear = today.getFullYear();

module.exports = {
    site: { 
        copyright: `${currentYear} Thomas Michael Semmler`,
        domain: process.env.URL || "http://localhost:8888",
        feeds: {
            blog: {
                title: "Thomas Michael Semmler - helloyes.dev",
                description: "Personal Blog of Thomas Michael Semmler: Web Development, Design, and Website Making.",
                xml: {
                    path: "/feeds/blog/feed.xml",
                    url: "https://helloyes.dev/feeds/blog/feed.xml"
                },
                json: {
                    path: "/feeds/blog/feed.json",
                    url: "https://helloyes.dev/feeds/blog/feed.json"
                }
            }
        }
     },
    personal: {
        name: "Thomas Michael Semmler",
        email: "contact@thomassemmler.com",
        about: "https://helloyes.dev/about"
    },
    social: {
        dribbble: "https://dribbble.com/thomassemmler",
        twitter: "https://twitter.com/nachtfunke",
        polywork: "https://www.polywork.com/pfeffer",
        mastodon: "https://indieweb.social/@nachtfunke"
    }
}