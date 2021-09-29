---
date: 2021-09-22
title: 'Make Eleventy the next thing you learn'
metaDescription: "Why looking at the Eleventy Static Site Generator is the logical next step when learning how to make websites"
excerpt: 'You know some HTML, some CSS and some JavaScript - but where do you go from here? I think you should look at the Eleventy Static Site Generator!'
templateEngineOverride: 'md,njk'
---
{% from 'pull-link.macro.njk' import pullLink %}

This post is specifically for you - the person who has just started to learn how to turn your designs into code. Or you have heard from someone that you need to learn HTML and CSS in order to make websites and now you know just enough but you also want to make an _actual_ website. Not that we wanna gate-keep terms here. The web community would _never_ do that... But what I mean, is that maybe you want to add an imprint to your website, a contact page, a page dedicated to your work.

These multiple HTML documents will most likely share elements, such as the contents of your `<head>`, or visible Elements such as the Header or the Footer. It's rather easy to share your CSS or JS, because multiple documents can just point to the same file. But you can't _extract_ parts of your document and point several documents to them. Well, at least not _from_ the browser.

Turns out, this is a problem that we already know how to solve, with something called "Hypertext Preprocessing", in where the hypertext, which our Documents consists of, is getting processed _before_ it actually turns into a fully fledged HTML document. What a great idea!

## Hypertext Preprocessing... I've heard that before.

Well, that is kinda the _reason d'être_ for PHP. Obviously PHP has since evolved, but the acronym still means "Hypertext Preprocessing" because that was its initial purpose. Most websites will not converge all of their content on one page, they'll have multiple HTML Documents and dedicate a shared collection of links to conveniently access those documents. We call them "Pages", because the correspond to pages, just like in a book or in a newspaper, in where we also don't have all content on one sheet of paper.

Of course you could style every document individually. But this has some drawbacks. Obviously visitors might not understand that one document is connected with the other one. Or they might not be reachable at all via links, because they are not shown. So naturally, you are gonna have some elements that are shared across those pages. But if a link changes, you are gonna have to change it everywhere. With the number of pages naturally increasing, this becomes quickly an insurmountable task. So naturally, the need to extract and repeat markup arose. And that was one of the many things, that PHP solved.

### Dynamic Websites

When a HTML document gets built on the server, dynamically, based on certain requests sent to it, we speak of "dynamic websites". A term that is often thrown into conversations to mean a variety of things. But historically, and in the context of how websites are sent from the server to the client, this is what this term means.

But a webserver needs to support this! And we need (mostly) a programming language, that runs on the webserver. There are more programming languages that support this type of website making, not just PHP. And the numbers game still will present this way of website making as the dominant way. And there is nothing wrong with it! But there are drawbacks.

{{ pullLink({
    href: 'https://css-tricks.com/static-or-not/',
    text: 'When to go static, and when not',
    caption: 'from Chris Coyier at css-sticks.com'
}) }}

### Servers & Programming

Making dynamic websites will need you to understand much more than just the writing of HTML. There is an entire realm of computing involved that will feel extremely foreign to you, if all your experience in programming is HTML & CSS. And yes, HTML & CSS are programming languages. I don't wanna hear any arguments against this. We have settled this debate.

The point is - this is an almost radical shift. But it was necessary, until not too long ago. But now we have more opportunities. Now instead of of rendering documents dynamically on the server, we are able to shift this work to the place where we are making our websites: our very own computers that we design and develop our websites on!

## Enter SSG'ing

This is called "Static Site Generation". It's called that because we are _generating_ our entire _site_ as a _static website_. Static websites are the opposite of dynamic websites, in a way. Because the server will not take a request and _build_ a document that then gets sent back to the client, instead it sends whole html documents to the client.

Tools that do this for us are called often just abbreviated as SSG, for "Static Site Generator" and there are [many different ones](https://staticsitegenerators.net/) out there. We won't dive into the history of SSG's. But let's just say that there is a great variety out there. And thus also many different approaches. They all usually help with certain things that we need when making websites, especially around reusing and recycling markup as well as creating markup based on some type of data.

## Eleventy to bridge the gap

If you know HTML and CSS and maybe a bit of JavaScript, entering the world of SSG's is a wise move. It will empower you to make websites that are much more complex, without requiring you to adopt a mindset that is _radically_ different. In fact, for the most part you might be able to do exactly what you have already been doing but you'll also be able opt into concepts that will carry over to more complex ways of making websites, without overwhelming you.

I believe that for this task, Eleventy is the right tool especially if you are entering this craft. It is very fast, easy to install and _unopinionatedly opinionated_, with the ability to become the backbone of more complex projects.

### Good at... static site generation.

It feels odd to say this, but Eleventy is really good at static site generation. This deserves a specific mention because competing projects are not focused too much on. Projects like gatsby do much more than that and are much closer to a framework or a "developer experience". This comes at an expense that is either specifically monetary or in most cases it is opinionated abstraction. Meaning, that in order to provide a certain experience, it will take control over certain aspects of the development process without giving you much control over it, limiting your choice, for effectivity. This is obviously fine, but it requires you to be congruent with its opinions, or understand them in the first place. For someone entering the craft of website making, this is probably not the case.

Eleventy's opinion seems to be that it _shouldn't_ have opinions on your DX. Instead it focuses primarily on the _generation_ part. And it leaves you with much freedom!

### Opt in to a HTML Templating language - or don't!

Eleventy will allow you to not just stay with HTML, but you can also _decide_ to use and slowly learn to use HTML templating languages. One of the USP's of Eleventy is that [it comes with many different languages](https://www.11ty.dev/docs/languages/) that could be used alongside of each other. Nunjucks, Pug, Markdown, Liquid, Handlebars, Mustache, HAML, Pug, etc. And they can even be used simultaneously! At the very first official [Eleventy Meetup](https://11tymeetup.dev/) (Of which I am one of the coorganizers!) Mike Aparicio highlighted this unique feature of Eleventy. [Check it out here](https://www.youtube.com/watch?v=rZyNBd1WgVM)!

This is a _crucial_ point, because this allows you to move at your own pace. You can use Eleventy to just extract and include your `<head>` or to make a navigation. That is up to you, at your own pace. And when you do that, there won't be one way that you will have to go in order to make it work nicely for you. That freedom is something valuable to retain when you are just starting to engage with the craft of making websites.

Many tools and SSG's out there nowadays cater not to individuals but to big organizations. This is fine of course but the challenges that an individual faces are not the same that a small team or a big corporation faces. Many current gen SSG's are mostly designed to make you productive. They do that by making working with it as [frictionless](https://www.youtube.com/watch?v=4qw3eAa1Hpk&t=14s) as possible. As organizations trying to sell a product, this is an important factor to consider. But as an individual learning how to make websites, friction in learning is a good thing. The result is important, but will fade. The process is sustainable and will reap many results. The more productive the process, the better the sustainable outcome.

### Not a JavaScript Framework

People starting to learn this craft nowadays are often redirected to learning not just JavaScript but go directly to a Framework that employs a very specific idea, the SPA. And there are good reasons for why that is happening. You'll be _productive_ quickly. Setup is minimal, boilerplate code is reduced, _economy_ exists (as in, supporting plugins and people working with it to engage with), etc. These are valid arguments when it comes to finding a job in this industry. But not all people learn to make websites just in order to get a job. The heavy focus on tools surrounding the SPA flavoured outcome easily obfuscate access to knowledge of the subject, in this case the fabric of websites: HTML, CSS and a bit of JavaScript.

I am arguing that this focus on outcome allows people to rarely engage with the edges of the technology, in short, to make less breaking changes. Yet it is so important to engage these edges and to make mistakes, because it allows people to build a more meaningful and complete relationship with it. This is not about deliberately frustrating people. In fact I am arguing that this way will actually decrease moments of frustration. Because Eleventy in essence is concerned with a one important outcome, to generate a static website, mistakes that lead to actual failure will be much easier to solve. This is a very different experience for errors in SSG's that are providing a more complete Developer Experience, because even simple errors might trigger something in several layers. Debugging this might require deep understanding of these layers.

{{ pullLink({
    href: 'https://www.zachleat.com/web/introducing-eleventy/#eleventy-is-not-a-javascript-framework',
    text: 'The creator of Eleventy on why Eleventy is not a JavaScript Framework',
    caption: 'from Zach Leatherman at zachleat.com'
}) }}

### You don't need a dedicated build tool

SSG's that extend into the SPA world might need you to run and understand a dedicated build tool such as Vite, Snowpack or Webpack. These tools are _very_ complex because they are doing complex things. In order to make it still easy to use, they abstract away certain things. Which will force you into a way of working that might not be suited for you. There is nothing wrong with this in general - but it, again, will restrict your freedom.

In Eleventy, you _can_ of course use these tools if you want to. But they are not coming with Eleventy, because it is not something that Eleventy does. If you decide do include it in your process, it will be on your own terms.

### Benefiting from the industrialized Jamstack economy

Another Reason for why Eleventy is a great next step when coming from learning HTML & CSS and maybe a bit of JavaScript, is that it profits from the current state of the Jamstack economy. SSG's fit nicely into this mindset of the Jamstack (JavaScript, API's & Markup). Often an SSG is powering much of Jamstack sites so tool surrounding it where developed (undoubtedly to profit from it) and we can use these tools.

Previously, one of the reasons for why it might not have been a viable idea to work with an SSG is because it might be difficult to bring it from the local machine to the server in an automated way. Nowadays web-hosting services often will build your site _for you_ on their infrastructure. In some cases like netlify, it will even do that for free up to a certain degree. In a sector where traditional web-hosting companies argument their pricing with services like php, mysql, etc., having very fast free web-hosting is a game changer for many.

{{ pullLink({
    href: 'https://www.mikestreety.co.uk/blog/get-eleventy-up-and-running-on-netlify-or-cloudflare-pages/',
    text: 'Comparing several hosting options for eleventy projects',
    caption: 'from Mike Street at mikestreety.co.uk'
}) }}

This is a relevant argument for Eleventy, because it is really _fast_. And whether or not you may require a paid tier of a web-hosting service like Netlify often will depend on how _long_ your build is running, meaning how long it takes the generator to generate your site. Eleventy is really fast and is very likely to cost you less _build minutes_ than another SSG.

{{ pullLink({
    href: 'https://docs.netlify.com/configure-builds/common-configurations/eleventy/',
    text: 'Eleventy Sites on Netlify',
    caption: 'from the netlify docs, docs.netlify.com'
}) }}

## Conclusion & Getting Started

If Eleventy had existed when I was starting out, things would have been very different in terms of my professional career. I was dependent on someone being good at writing PHP - there was just no way around it. I learned it a bit, but it soon would have required me to go into databases, etc. This is a very different world, when all I wanted to do was make websites.

I believe that Eleventy specifically closes this gap that lies between just tinkering around with HTML, CSS & JS and launching full on projects. This is the right tool for you, if you are at this stage. Now, to get started - luckily, I am not the only person who is in love with this. So here is a list of Ressources that should help you getting started:

+ Stephanie Eckles shares in this wonderful tiny video, [how to get started with eleventy in just 3 Minutes](https://www.youtube.com/watch?v=BKdQEXqfFA0&ab_channel=11tyRocks%21)!
+ She also made a [course on egghead.io](https://egghead.io/courses/build-an-eleventy-11ty-site-from-scratch-bfd3) that is entirely free!
+ Sia Karamalegos made the "[Itsiest, Bitsiest Eleventy Tutorial](https://sia.codes/posts/itsiest-bitsiest-eleventy-tutorial/)", featuring the best header image that in the world.
+ Tatiana Mac has a multi-parted [Beginner's Guide to Eleventy](https://tatianamac.com/posts/beginner-eleventy-tutorial-parti/), in which she also introduces the economic landscape of SSG's & the Jamstack.
+ Now if you wanna get an in-depth understanding of _many_ aspects of Eleventy, treat yourself to Andy Bell's "[Learn Eleventy From Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/)".
+ Watch Ben Myers (Some Antics Web) teach Alex Trost (Frontend Horse) Eleventy in this [vod of a live stream](https://www.youtube.com/watch?v=PPZGdolA_ns&ab_channel=AlexTrost). This is great because questions are asked and answered!

Also, join the [Eleventy Discord](https://discord.gg/VN2r3f6p)! The people there come to learn and help each other with eleventy. I promise, it is _not_ stack overflow-esque! People join everyday and it has quickly turned into the focal point of the eleventy community.

{{ pullLink({
    href: 'https://discord.gg/VN2r3f6p',
    text: 'Join the Eleventy Discord',
    caption: 'we are really super nice!'
}) }}

***

<small>Edited on the 30th Sept. to fix some typos</small>