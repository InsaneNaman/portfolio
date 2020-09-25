module.exports = {

    author: "@InsaneNaman",
    siteTitle: "Gatsby Starter Portfolio Minimal",
    siteShortTitle: "<WebNinja/>", // Used as logo text in header, footer, and splash screen
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://insanenaman.com",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Finsanenaman",
    shownArticles: 4,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/InsaneNaman/"
        },
        {
            name: "Medium",
            url: "https://medium.com/@InsaneNaman"
        },
        {
            name: "Github",
            url: "https://github.com/InsaneNaman"
        },
        {
            name: "Twitter",
            url: "https://www.twitter.com/InsaneNaman"
        },
        {
            name: "Dev",
            url:"https://www.dev.to/InsaneNaman"
        }
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    // footerLinks: [
    //     {
    //         name: "Privacy",
    //         url: "/privacy"
    //     },
    //     {
    //         name: "Imprint",
    //         url: "/imprint"
    //     }
    // ]
}