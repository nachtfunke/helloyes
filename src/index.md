---
layout: index
title: "Hello yes."
---

<div class="welcome">
    <div class="welcome__illustration" aria-hidden="true">{{ '/src/assets/svg/illustrations/welcome-lined.svg' | svgContents | safe }}</div>
    <h1 class="welcome__title">Design Engineering, Accessibility, Frontend Design & CSS</h1>
    <p class="welcome__desc">I’m a <a href="{{ '/work' | url }}">Designer & Developer</a> with <a href="{{ '/blog' | url }}">strong opinions</a> and a lot of passion for the web plattform.<sup><a href="#footnote">1</a></sup></p>
    <div class="welcome__actions">
        <a class="c2a  vers--bold" href="{{ '/hire' | url }}">Hire me</a>
        <a class="c2a  vers--ghost" href="{{ '/about' | url }}">More about me</a>
    </div>
    <small class="welcome__footnote" id="footnote"><sup>1)</sup> I'm also a Counsellor in Training and a Meditation & Mindfulness Teacher.</small>
</div>