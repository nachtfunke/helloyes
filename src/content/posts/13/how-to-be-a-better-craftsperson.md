---
date: 2023-03-10
title: "Craft vs Industry: How to be a better Craftsperson"
metaDescription: "We have long referred to our niche of the web as the web industry but never has the term been more congruent than it is right now. I believe this throws us into some conflicts, that we are left deal with alone."
excerpt: "Reconciling the differences between the craft of making websites and the industry that has grown around it."
draft: true
---

### Take responsibility: Your Words matter

In this additional section I'd like to jot down some things I believe are important changes for us to make, as a community. I believe it is important for us to adapt our language to adhere to a world in which we can coexists as employees and as craftspeople:

**We should not postulate skills required for jobs as integer to the craft**. This is especially important when it comes to people new to making websites. A person learning to make a website should never be told to learn how to make an SPA at all. In fact, they shouldn't be told to learn JavaScript at all, unless they require it for what they are doing.

But for the goddess' sake, please **do not tell new people to use React, Vue or Svelte**! Just teach them HTML & CSS. All of these tools are valuable and solve real problems, but they are not solving problems for people who are making websites for people. They are solving problems for people who write software for companies.

**We shouldn't tell people who would like to use jQuery to learn webpack or vite** or whatever other bundling tool is the tool of the season. These tools require a world view that is entirely incongruent with how people will think about the web when they start learning about it. Vite for example _requires_ a single index.html file, because it is made for JavaScript rendered SPA's. It is an important ant amazing tool for this use case, but it has no place and no value to someone who just wants to make a website.

***

This is one of the reasons for why I am firmly adhering to my position that bower was never replaced. On their website, they are saying:

> ...psst! While Bower is maintained, we recommend using Yarn and Vite for front-end projects. Read how to migrate!

But yarn and vite are an inappropriate replacement for bower. Bower is used for packages that land directly in the client, because that is what we used to do. Nowadays, as an industry practice, we've accumulated so much JavaScript bullshit that we needed to invent all sorts of esoteric practices to reduce our website weight, so a bundling practice became normality.

But if you just wanna use alpine.js, don't bother with this crap. Luckily we can still use bower, as long as a library is primed for it...

***

**Do not tell people that separation of concerns is outdated**. It is more appropriate than ever. It serves us when we make websites, in so many ways. And it informs the way that the web platform keeps getting improved. It is an important Leitdifferenz for everything web and people should most definitely know about it.

**We should stop referring to ourselves as the web industry**. I believe this has habituated us way too much to its premisses. We are a community of people who make websites, of craftspeople.