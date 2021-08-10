---
layout: post
date: 2021-08-10
title: 'Using parameters in your eleventy includes with nunjucks macros'
metaDescription: "Includes are great. But for actual reusability of code, parameters are always needed. Luckily, nunjucks makes this possible with macros!"
excerpt: 'DRY out your code with parameterized includes, powered by nunjucks macros'
syntaxHighlighting: true
---

<small>Heads up: I know this is much longer than it needs to be. Sorry. It's just how I am with text. But you can easily navigate to the parts that interest you by using the outline - just click on the headline!</small>

One of the reasons I ever felt the desire (and _needed_) to learn PHP was because I wanted to not repeat myself. I wanted to be able to use complex markup structures without having to copy & paste it, increasing the risk of making mistakes _and_ most of all not being able to update the structure without significant expense. The current zeitgeist very much pulls us into handling all of this with javascript, because it is currently the only way to give us the _feeling_ of working with encapsulated, self-contained pieces of code. Markup, Style and even a bit of self-contained functionality make up components that allow us to have a lego-like experience. What's not to love?

## It's about DX.

But not everybody wants to (or is _able_ to, for that matter) hand over all of the control needed to create this DX to JavaScript. To me, SSG's always brought much of the value to _my_ table that I originally got from working with PHP (which is ironically also the purpose it was intended to serve originally, as the Hypertext Preprocessor). Now obviously PHP does much more than that and it exceeded its original intentions and capabilities _by far_ - but needs of developers can vary greatly. I mainly just wanted to be able to reuse markup.

### Why markup reusability is important

I believe most people reading this just wanna get to code examples - but bare with me, because I have a _hot take_ on encapsulation and reusability. Many of the challenges that utility CSS approaches and to a certain degree even css-in-js solutions partly want to solve is a DX where you feel more in control over how the styling of your markup looks. As a CSS developer, this is not a challenge I face.

I very much follow the BIOS approach: BEM, ITCSS, OOCSS & SMACSS. I combine parts of all of these methodologies together because I believe they all go together really well. But what this does is create long and verbose classnames. This is not an issue that I face on the CSS part of things, or on the JS part of things for that matter (data-attributes ftw) but instead I need to tackle it on the Markup side.

#### An example

Look at this monster:

```html
<li class="experience-timeline__events-item">
   <article class="experience-timeline__entry vers--major is-expanded" data-timeline-event="">
      <div class="experience-timeline__entry-type vers--job" aria-hidden="true">
         <svg height="28">
            <use xlink:href="#icon-event-type-job"></use>
         </svg>
      </div>
      <div class="experience-timeline__entry-text">
         <small class="experience-timeline__entry-meta">
         <time>2016 - 2021</time>
         </small>
         <h2 class="experience-timeline__entry-title">Sr. Frontend Dev. &amp; UI/UX Designer</h2>
         <small class="experience-timeline__entry-meta">
            <svg height="13" width="12" aria-hidden="true">
               <use xlink:href="#icon-organisation-marker"></use>
            </svg>
            easyname GmbH
         </small>
         <small class="experience-timeline__entry-meta">
            <svg height="13" width="12" aria-hidden="true">
               <use xlink:href="#icon-location-marker"></use>
            </svg>
            Vienna, Austria
         </small>
         <ul class="experience-timeline__entry-tags">
            <li class="tag">HTML</li>
            <li class="tag">(S)CSS</li>
            <li class="tag">Brand</li>
            <li class="tag">JavaScript</li>
            <li class="tag">Performance</li>
            <li class="tag">React</li>
         </ul>
         <div class="experience-timeline__entry-action"><button class="button" type="button" aria-expanded="true" aria-controls="timeline-event-2-details" data-timeline-event-expand-button="">
            <span class="button__text" data-timeline-event-expand-button-open="" style="display: none;">Show more</span>
            <span class="button__text" data-timeline-event-expand-button-close="" style="display: flex;">Show less</span>
            </button>
         </div>
         <div class="experience-timeline__entry-details" id="timeline-event-2-details" data-timeline-event-details="" style="height: 299px; opacity: 1;">
            <div data-height-wrapper="">
               <p>Working with the people at easyname was pivotal for me. I entered the company at a time where neither frontend development, nor design was considered an integral part. I was brought in also with the intention to improve on this. I had the great privilege of joining a diverse team handpicked by Stephanie Anderson. The team kept growing and kept being expanded by extraordinary individuals.</p>
               <p>I had the great privilege of joining a diverse team handpicked by Stephanie Anderson. The team kept growing and kept being expanded by extraordinary individuals.</p>
               <div class="main__heading-wrapper">
                  <h3 id="some-highlights">Some Highlights</h3>
                  <a class="main__heading-link" href="#some-highlights"><span aria-hidden="true">#</span><span class="sr-only">Section titled Some Highlights</span></a>
               </div>
               <ul class="list--horizontal">
                  <li class="list__item">
                     <span class="tag theme--dark vers--large">
                        <svg aria-hidden="true">
                           <use xlink:href="#icon-shine-marker"></use>
                        </svg>
                        Created VPS Product Landingage
                     </span>
                  </li>
                  <li class="list__item">
                     <span class="tag theme--dark vers--large">
                        <svg aria-hidden="true">
                           <use xlink:href="#icon-shine-marker"></use>
                        </svg>
                        Engineered the UX of new Products &amp; Features
                     </span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </article>
</li>
```

There is a lot going on. This is not such an abnormal thing. It contains all sorts of stuff: Nested BEM components, state-classes and versioning-classes, Code intended for Screenreaders only, SVG and `data-`-Attributes to allow interfacing with JavaScript. Things are getting pretty wild and complex. I cannot tell you without looking at the CSS what elements and modifier this block is accounting for. Making just the HTML readable enough so that it is easily reusable with some classes would negatively affect other parts of the DX.

I believe that markup is the most important driver in the need for encapsulation. Because CSS already is able to do it - if not with classes, then with Methodologies. That doesn't mean that we don't need scoped styles, we do. But I personally believe that the highest level of complexity ultimately comes from the markup and this is also where abstraction can serve as a valuable reducer of said complexity.

Now let's get to the actual stuff.

***

## What are Nunjucks macros?

Why great question. Here's what the [docs](https://mozilla.github.io/nunjucks/templating.html#macro) have to say:

> `macro` allows you to define reusable chunks of content. It is similar to a function in a programming language.

Now I love nunjucks but I do feel like the docs are a big reason for why it hasn't risen to the popularity it could rise to. The example in the docs for macros looks like this:

```twig
{%- raw %}
{% macro field(name, value='', type='text') %}
<div class="field">
  <input type="{{ type }}" name="{{ name }}"
         value="{{ value | escape }}" />
</div>
{% endmacro %}
{{ field('user') }}
{{ field('pass', type='password') }}
{% endraw %}
```

Alright, this does give us parameters. But it looks kinda weird. That is because you also need to take a look at nunjucks `import`, if you wanna get the full experience. What does it say about [imports](https://mozilla.github.io/nunjucks/templating.html#import)?

> `import` loads a different template and allows you to access its exported values. **Macros** and top-level assignments (done with `set`) are exported from templates, allowing you to access them in a different template.

What this means, is that we can extract and edit chunks of nunjucks code, markup in our case, in separate files and then import them wherever we want to use it!

## Making a simple macro in eleventy

I have these tags everywhere on my page. But I designed them to be available in two sizes and in a dark variety. For this I proved my `.tag` class with two theme/state classes (however you'd like to think about it).

I often use prefixes to indicate what the additional class is doing to the class, so `.ctx--` for marking a context and `.vers--` to indicate that this is supposed to be a different version of the same thing, often implying that maybe even the markup structure is slightly different. And of course `.theme--` to signal that this will just have a different visual variety but be the same in all other ways.

In the case of my tag, the two classes that I need to be able to add to the `.tag` are `.theme--dark` and `.vers--large`. In my `_includes` (depending on your configuration) I added a new file called `tag.macro.njk`. I personally like making sure somehow that I immediately understand that something is a macro, so I add this to the filename. But you could of course put them in a subfolder or go about it however you like, this is just how I like to do it. This is what the markup looks like:

```html
<span class="tag">Tag</span>
```

Great. Now, let's turn this into a fully featured component that I can reuse however I want. First of all, I need to make sure that I can change the text here, the most basal usecase. In order to do this, need the `macro` tag from nunjucks:

### Defining a macro

```twig
{%- raw %}
{%- macro tag(params) -%}
    <span class="tag">Tag</span>
{%- endmacro -%}
{% endraw %}
```

Note the safe syntax here. The little minus strips the leading and trailing whitespace. When working with eleventy and when mixing markdown and nunjucks, this is sometimes just needed to produce any output at all. I have run into some strange issues with stray `</p>` tags. But these issues can often be resolved with the minus.

As soon as we have this, we can import it anywhere we want and pass something to it, like this:

#### Importing and using a macro

```twig
{%- raw %}
{%- from 'tag.macro.njk' import tag %}
{{ tag({ text: "Banana" }) }}
{% endraw %}
```

Yes, imports are also relative to your configured includes folder in eleventy, which makes this extra super nice to use, even in extra-super-deep nested collection items.

Whatever you pass into the parameter is gonna be available inside the macro. I personally like this way of doing it but you can do it differently too. This just feels rather clean to me. Your content becomes available in your macro and you can use it like this:

#### using the passed content

```twig
{%- raw %}
{%- macro tag(params) -%}
    <span class="tag">{{ params.text }}</span>
{%- endmacro -%}
{% endraw %}
```

With this as our starting point, let's add all the other stuff there too. In my case, sometimes the tags need to be able to show an SVG icon (all of which I have included on the page and are available to be `<use>`'d.) and I also need to be able to set the classes I need. This is how my final macro looks like:

### the final result

```twig
{%- raw %}
{%- macro tag(params) -%}
    <span class="tag {{ 'theme--dark' if params.dark }} {{ 'vers--large' if params.large }}">
        {%- if params.icon -%}
            <svg aria-hidden="true"><use xlink:href="#{{ params.icon }}" /></svg>
        {%- endif -%}
        {{ params.text }}
    </span>
{%- endmacro -%}
{% endraw %}
```

I can use the full power of nunjucks within macros, including ifs, loops, etc. Macros can do much more, for example you could encapsulate variable values and import them as well.

## A different approach!

Stephanie Eckles uses a different approach with which you can achieve the same thing, by setting variables before the include. This is taken from her example:

```twig
{%- raw %}
{% set html %}
<div class="centering">
  <span>Feeling Centered</span>
</div>
{% endset %}
{% include "demo.njk" %}
{% endraw %}
```

This doesn't _pass_ the `html` variable to the include, but because it was defined before, it is still available at the time when the code of the include gets evaluated, so working with it inside this code is still available. This is a fantastic approach - it depends on what you want!

## This is a big deal.

The moment I realized that this was possible, I felt like a big block was finally lifted. A big reason for why, even as someone who just writes presentational, vanilla JavaScript, frameworks like React or Vue look appealing to me is the idea of the Encapsulated piece of Markup that can be abstracted and reused. Nunjucks macros in eleventy are giving me this experience.

## A more complex, eleventy-ish example

On my work-experience page I list all sorts of entries. Every single entry is just a singular nujucks macro. In eleventy, I have set up each entry to be a collection item with no permalink. This allows me to edit them individually. Their contents eventually get passed to the macro that renders them accordingly. Here's how that code looks:

```twig
{%- raw %}
<ol class="wrap-as--full-column  experience-timeline">
    {%- for era, events in collections.orderedTimelineEvents | groupby('data.era') -%}
        <li class="experience-timeline__era">
            <time class="experience-timeline__date">{{ era }}</time>
                <ol class="experience-timeline__events">
                {%- for event in events -%}
                    <li class="experience-timeline__events-item">
                        {{ experienceTimelineEntry({
                            class: event.data.class,
                            id: event.data.order,
                            major: event.data.major,
                            type: event.data.type,
                            title: event.data.title,
                            organisation: event.data.organisation,
                            time: event.data.time,
                            location: event.data.location,
                            tags: event.data.eventTags,
                            details: event.templateContent | markdown
                        })}}
                    </li>
                {%- endfor -%}
            </ol>
        </li>
    {%- endfor -%}
</ol>
{% endraw %}
```

This feels great to look at lol. I am not sure why but this feels really satisfying to me. Some things noteworthy here is nunjucks `groupby('data.era')` which sorts my collection based on this front-matter value and the `| markdown` filter.

## Be a bit cautious

If you are like me, then you are are in love with eleventy's capability to mix markdown with templating languages. This just makes all the difference to me. And with macros, even more complex situations are easily solvable. But there is a bit of a caveat - I believe because of the order of how the rendering is handled, nunjucks renders first and then markdown renders. This can make for some weird things, like your code being escaped because it treats it as four spaces code syntax. If that happens to you, you can disable it in your `.eleventy.js`:

```javascript
const markdownConfigured = markdownIt({ html: true }).disable('code');
eleventyConfig.setLibrary('md', markdownConfigured);
```

This will fix that issue. But, I still encountered some other strange behaviour that I couldn't fully debug: Stray `<p>` and `</p>`'s. In the DOM inspector this looks just like additional paragraph tags, but looking into the source code reveals that there were actual stray paragraphs opening and closing tags flying around. At that time, I was using this complex nunjucks component in a `.md` file with `templateEngineOverride: njk,md`. I could fix it by turning the file into a `.njk` file and applied a `| markdown` filter to its contents. This might not work for all situations, but it worked in this one.

A big thanks to [Shiv](https://shivjm.blog/) for helping me debug this issue and eventually supplying me with the idea of using the `| markdown` filter on the eleventy discord! And a big thanks for [Stephanie Eckles](https://thinkdobecreate.com/) for inspiring me to write this article.

## Conclusion

Write macros. Lol.