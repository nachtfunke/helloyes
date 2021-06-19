---
layout: default
title: "Imprint"
metaDescription: "Legally required imprint, in accordance with Austrian law (as far as I know)."
excerpt: false
illustration: "welcome-lined"
templateEngineOverride: njk,md
---
{% from 'pull-link.macro.njk' import pullLink %}

<div class="wrap-as--main-column">
    <p>
        Thomas Michael Semmler<br>
        Auhofstraße 221/1/8<br>
        1130 Wien<br>
        contact@thomassemmler.com
    </p>
    <small>This website will not track you. Changing the accent color the website will save it to the session storage which will be cleared once you close the browser.</small>
</div>

<div class="aside">
    {{ pullLink({
        href: 'https://twitter.com/nachtfunke',
        external: true,
        me: true,
        text: 'I also tweet about all kinds of website-making related stuff!',
        caption: 'follow at your own risk!'
    }) }}
    {{ pullLink({
        href: 'https://www.linkedin.com/in/thomas-michael-semmler-8a8018207/',
        external: true,
        text: 'I\'m also on LinkedIn',
        caption: 'But I don\'t really care about it'
    }) }}
</div>

***

## Report an Issue

This website probably has some issues and I would profit from it greatly if you let me know about it! That way I can improve it.

<div class="aside">
    {%- include 'report-a11y-issue.njk' -%}
</div>
