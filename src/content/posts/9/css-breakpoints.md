---
date: 2022-07-21
title: "RE: CSS Breakpoints every Developer needs to know"
metaDescription: "There was this tweet. You know which one. Well, this post is an attempt to bring structure to what went through my mind when I saw it."
excerpt: 'There was this tweet. You know which one. Well, this post is an attempt to bring structure to what went through my mind when I saw it.'
templateEngineOverride: 'md,njk'
---


There was this tweet. You know which one. Well, this post is an attempt to bring structure to what went through my mind when I saw it. First I'd like to dissect a bit more what irks me about the original premise of the tweet, and I'm ending with a suggestion for an alternative mindset - but in the same frame of the original tweet.

_Obviously this is not meant to insult. But I do believe that we need to talk about things that are not working. I believe that this is one of those things where the phrasing infers that parts of the community is already relying on a mindset that is incongruent with the underlying concepts of the platform they develop with and on. And I think that is a problem that we need to address. So this is what I am attempting here._

## There are no "CSS Breakpoints"

What this idiom refers to is media queries, usually querying the size of the screen. Most people where annoyed by the nowadays really antiquated, to a degree even inappropriate idea of treating media queries for specific sizes (such as 320px, 480px, etc.) as substitutes for specific devices. But that is not what made me upset, instead it is the usage of the term "CSS Breakpoint" itself.

It demonstrates the severe lack of basic understanding of the web platform and how the languages that allow us to build on it interact with it. There are no "CSS Breakpoints", because not only is it not CSS that is _breaking_, but they are also not exclusive to CSS.

Even in the earliest drafts of the media query spec, querying media properties from the `media=""` attribute in a `<link>` element was possible. Though that argument is a bit of a stretch, I get that. So let's focus on the other one:

## What is breaking

We write our styles and develop our sites and as we test it by subjecting it to all sorts of environmental hazards, such as making the screen smaller and wider, we may encounter moments from which on our styles seem to not work any longer, they seem to _break_. We're testing a bit further and pretty soon, we may be able to pinpoint the exact threshold, from which on we need to adjust our styles. This point is called a "breakpoint", because at this **point**, the styles our code results in, **break**.

It is important to understand that it's not CSS that is breaking, or its properties. In fact, it all does exactly what we programmed it to do. But we've decided that what we've programmed should only apply to a certain point. And from that point on, we want different code to run so that the styling adjusts to be more appropriate for the given screen estate.

***
It is interesting to point out, that I just couldn't find the origin of the term "breakpoint". In my mind, it was part of Ethan Marcotte's Article / Book "Responsive Webdesign". But it isn't! I unintentionally nerd-sniped Ethan with a tweet and he himself couldn't pinpoint its origins. But he did some valuable research in this little [journal entry](https://ethanmarcotte.com/wrote/points-break/). Read that too! And thank you for the mention :)
***

## The breakpoints you need to know

Your CSS is not breaking. It's the style that stops working under certain conditions.

Don't name your SASS variables "phone" or "tablet". Yes we did that for a while, because the ideas of responsive Webdesign where almost a remedy for dedicated device-focused sites, which were often a sad excuse of their desktop-mother-site.

But we've since long moved on. The truth is that there is no set of salvatory collection of pixels that you need to memorise. You need to write your styles, test it and see at which point it breaks. There. That is a a breakpoint in your layout from now on.

## Holding Complexity

The argument against this is that _when you work in a team_ you'll want a shared set of predefined points that you can refer to. A valid concern, but it has little to do with the nature of the web platform or the reality of device sizes. The only reason we find this effective is because we are trained to spot potentials for reducing complexity in programming. And sure we should do it - but we better remember that we ourselves _constructed_ these breakpoints and that they have little connection to the reality of the platform or our users. We do it for the business.

The Web as a platform is as flexible as a programmable environment will get. It mirrors many qualities of social systems and so it is capable of holding ambivalence and an extraordinary amount of complexity _with ease_.

Not everyone makes websites for a business. If you are working on a website on your own, ask yourself if the doctrine you are following in order to please the desires of the industrial exploitation of the web platform is still serving you and the people you are making the site for.

***

## Layout is a fading concern - meet your new breakpoints

[Stephanie Eckles]() has [countlessly](https://moderncss.dev/3-popular-website-heroes-created-with-css-grid-layout/), [beautifully](https://www.youtube.com/watch?v=8slZJrTK3nE) [demonstrated](https://smolcss.dev/) that [modern](https://smolcss.dev/#smol-container) CSS that you can safely use _right now_ in your projects often reduces the need for screen estate based interventions in form of media queries. Meaning, that the CSS we write becomes more and more resilient to its environment and truly _responsive_ to it.

This is mainly experienced in the way we are programming layout, but not exclusively. But as we are more inclusively approaching the way we design and develop our sites, and as we write less media queries to adapt our layout-based styles, we realise that nowadays, there is a whole new dimension of circumstances, that can make our styles break. These are our new breakpoints, which actually, _every Developer needs to know_:

### Motion Preferences

If your site heavily relies on motion then it will break for some people. They will have a very bad experience or may even be unable to use your site at all.

Luckily we have the tools to adapt to it, with the `prefers-reduced-motion` media feature.

#### More about this

+ MDN - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
+ Una Cravats, for web.dev - https://www.youtube.com/watch?v=_ZdZh-ESOHY
+ Michelle Barker, for smashingmagazine.com - https://www.smashingmagazine.com/2021/10/respecting-users-motion-preferences/
+ Thomas Steiner, for web.dev - https://web.dev/prefers-reduced-motion/

### Pointer Variety

People using your site may not click, like, ever. Because they may not traverse it with a pointer device at all. Maybe they are using their finger, or they are using a keyboard, or something entirely different. If your site relies on exact pointing, or if it relies on clicking at all, it will break for some people. And some people may not be able to use it at all.

This is another feature, we can query, with: `pointer`, and we also have the `hover` media feature, to specifically query conditions in which `:hover` is possible. Besides just CSS, making sure that your site is keyboard accessible will make sure that people relying on a keyboard are included.

#### More about this

+ Christian Diaz, for smashingmagazine.com - https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/
+ David Walsh - https://davidwalsh.name/pointer-media-query

### Color Scheme Preferences

Often trivialised as "Dark Mode", for a variety of reasons, people visiting your website may require your site to be either on the brighter or on the darker side.

We can respect this preference with `prefers-color-scheme`.

### Contrast Preferences

Not only may people in general prefer and rely on websites that are high in contrast to _see_ what is on it, but they may even bring their own colors with them, by way of forced colors.

The media features `prefers-contrast`, `forced-colors` and `inverted-colors` allow us to consider this context.

#### More about this

+ Ben Myers - https://benmyers.dev/blog/fix-low-contrast-text/
+ Eric Bailey for smashingmagazine.com - https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/
+ 

### Reading Direction Variety

People visiting your website may have very different understandings text flow.

In order to be inclusive with this context, we can rely on plenty of things. One of the most important paradigm shifts is the switch to logical properties, which are relative to reading directions of the settings of the people browsing the website. The other one is making use of pseudo-elements such as the `:lang` and `:dir` selectors, to intervene, when something is breaking.

***

Una Kravets postulates the new responsive to be respecting user preferences. Maybe that is not just a result of increasing capabilities of the platform, but also of our increasing capacity to accept the complexities of the human realities it has to respond to in order to serve the people on.

As the platform becomes even more capable of holding complexity, the contexts in which our programming will result in something _breaking_ for someone will just increase. And so will our capacity to adapt to it.

Unfollow people that give you listicles of arbitrary pixel values to satisfy your desire to have it _easy_. The web is easy. But it is also very complex. You better get into it!