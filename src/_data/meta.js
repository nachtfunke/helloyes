module.exports = {
    site: { 
        copyright: "2021 Thomas Michael Semmler",
        domain: process.env.URL || "http://localhost:8888",
        feeds: {
            blog: {
                title: "Thomas Michael Semmler - helloyes.dev",
                description: "Articles about design, accessibility, design engineering, design ops, eleventy and CSS from Thomas Michael Semmler",
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
        linkedin: "https://www.linkedin.com/in/thomas-michael-semmler-8a8018207/",
        polywork: "https://www.polywork.com/pfeffer"
    }
}