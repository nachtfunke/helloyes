---
layout: default
title: "Development Log"
metaDescription: "All changes and updates made to this site, chronologically listed."
excerpt: "Updates & Changes made to this website are collected here."
illustration: "contracting-lined"
templateEngineOverride: md,njk
permalink: /about/log/
---

{% for entry in collections['log-entry'] | reverse %}
    {%- set title = entry.data.title or entry.date | dateReadable -%}
    <div class="main__heading-wrapper">
        <h2 id="{{ title | slug }}">{{ title }}</h2>
        <a class="main__heading-link" href="#{{ title | slug }}">
            <span aria-hidden="true">#</span>
            <span class="sr-only">Section titled {{ title }}</span>
        </a>
    </div>
    {{ entry.templateContent | safe }}
{% endfor %}