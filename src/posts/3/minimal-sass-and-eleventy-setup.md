---
layout: post
date: 2021-06-21
title: 'Minimal SASS & eleventy Setup'
metaDescription: "A post about setting up SASS with eleventy without additional tools"
excerpt: 'Use SASS in eleventy without additional build tools'
templateEngineOverride: njk,md
syntaxHighlighting: true
---
{% from 'pull-link.macro.njk' import pullLink %}

I'm a big fan of sass and until native nesting is available to us I will keep using it. Now sass offers _much_ more than just nesting. I also use it to manage media queries and settings. So naturally for this site I also wanted to use it.

{{ pullLink({
    href: 'https://drafts.csswg.org/css-nesting-1',
    text: 'CSS Nesting Module',
    caption: 'fresh from the w3c\'s CSS Working Group'
}) }}

In this small little article I want to share how I set up my SASS compiling. Now this follows an established way of using CSS, which is via `<link>`. There are more options of course but here, everything will be setup to end up with actual CSS files.

## Gulp is awesome.

Usually I go for something like Gulp to do this type of job for me. I am a big fan of Gulp and unless your development flow involves around JavaScript Files and you do need something, _whatever it is_ done, Gulp is probably the right thing for you. But for this project, I wanted to find out how far I could go before I needed to expand my toolchain beyond what was already available to me with eleventy and npm.

<small>I once opened an issue in the gulp repo on github and I phrased it _horribly_. I love gulp. Pls don't come for me, gulp people.</small>

## The SASS Compiler

Sass has come a very long way since it gained popularity. From my own subjective timeline I would deduct that it probably gained the majority of its popularity in 2013, but it got actually started in 2006 already. As a preprocessor, it compiles `.sass`/`.scss` files into CSS files. This means that we'll still write regular CSS, plus some additional awesomeness.

***

There are many compilers available nowadays, but it's recommended to use the Dart Compiler, as both the Ruby and the Node Compiler are deprecated. Here, we'll be using the dart-sass compiler as well.

I don't want to spend too much time on how to install sass and what watching/compiling exactly does. There is plenty of information on the sass website available.

***

## Compiling your stylesheet

With the sass compiler installed, running commands in your terminal will allow you to compile your files into css files. For continuous work we'll probably want the files to recompile whenever you change them:

{{ pullLink({
    href: 'https://sass-lang.com/documentation/cli/dart-sass',
    text: 'More about the Dart Sass CLI',
    caption: 'sass-lang.com'
}) }}

```bash
sass --watch src/_scss/style.scss src/css/styles.css
```

This does exactly what you think it might. All the sass lives inside `_sass` and it will all go to `css`.

The prefixing of the sass folder with the `_` underscore is for my personal sake only. That way I can easily identify folders that won't exist in the final output. Also, my `input` directory is `src` and my `output` directory is `dist`. Replace with your own settings accordingly, or set it to eleventy's defaults, if you haven't overwritten them in `.eleventy.js`.

Now with the compiled file we just need to make sure that we include it in the final output.

### Include the compiled CSS with .addPassthroughCopy

The eleventy approach is very simple and gets the job done:

```javascript
eleventyConfig.addPassthroughCopy('src/css');
```
Now eleventy will include this folder and its contents in its final output. Everytime something changes in this location, eleventy will rebuild.

But this can lead up to some undesired side-effects. You may see a message like: `You saved while Eleventy was running, let's run again. (1 remain)`. So I opted for something else.

### Include the compiled CSS manually

Instead of going for gulp immediately, I wondered if I could achieve what I wanted to achieve with npm scripts alone. So I made two scripts (is that the correct terminology?) in my `package.json`:

```json
"scripts": {
    "sass:watch": "sass src/_scss:dist/css --watch --update --color",
    "sass:build": "sass src/_scss:dist/css --no-source-map --style=compressed"
}
```
The sass compiler now saves the compiled files directly into into the output folder (again, in my case that folder is `dist` - your might be `site` or whatever you have specified), plus some flags that are appropriate for watch and build tasks respectively.

{{ pullLink({
    href: 'https://jkc.codes/blog/using-sass-with-eleventy/',
    text: 'Another article on how to use Sass with eleventy',
    caption: 'jkc.codes'
}) }}

### Tell browsersync to inject your changes

Before we get to the actual automation, which will tie everything together nicely, one thing needs to be said about your dev experience. If you keep it like this, any changes in your css/scss will not trigger a rebuild, when your site is running. You'd have to manually reload your page every time. But luckily Browsersync (which eleventy uses for this) options are easily accessible from within `.eleventy.js`.

```javascript
eleventyConfig.setBrowserSyncConfig({
    files: './dist/css/**/*.css'
});

```

This [tells Browsersync](https://browsersync.io/docs/options#option-files) to watch for changes to be injected (or to cause a full reload) - great, this is exactly what we want. That way, browsersync will inject changes from your compiled css files.

## Add some Automation

Now to tie it all together, we need some additional help. Here is how all my scripts (again, is that the real term? It feels wrong.) look like in my `package.json`:

```json
"scripts": {
    "eleventy:serve": "eleventy --serve",
    "eleventy:build": "eleventy",
    "sass:watch": "sass src/_scss:dist/css --watch --update --color",
    "sass:build": "sass src/_scss:dist/css --no-source-map --style=compressed",
    "clean": "del dist",
    "start": "run-p -l clean sass:build sass:watch eleventy:serve",
    "build": "run-s -l eleventy:build sass:build"
}
```

Note that I have also added a clean task. For this I use the npm package `del`, which... deletes stuff 🥁.

I use the package `npm-run-all` all here, after some help I got from [Sam Richard](https://twitter.com/Snugug) on the eleventy discord. You can run things sequentially (one after another) without it. For example, for the `build`, you could instead write `npm run eleventy:build && npm run sass:build`. But the repetition of the `npm run` felt so super counter-intuitive to me that I went for `npm-run-all` instead.

`run-p` will run your scripts in parallel, where as `run-s` will run them sequentially.

Now when I want to work on my site, I just run `npm run start` from the terminal and it all works as expected!

***

I am not an automation wizard. I got to this point with some help from people at the eleventy discord. But I thought that the final result and the lessons learned to get there were worth sharing.