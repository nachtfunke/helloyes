---
layout: default
permalink: 'blog/archives/'
title: "Blog Archives"
excerpt: "All the blog post, listed chronogically - the most recent one is first."
illustration: "welcome-lined"
templateEngineOverride: md,njk
---

<ol class="archive-list" reversed>
    {%- for post in collections.post | reverse -%}
        <li class="archive-list__item">
            <article class="archive-list__item-article" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
                <h2 class="archive-list__item-title" itemprop="name headline"><a href="{{ post.url | url }}">{{ post.data.title | safe }}</a></h2>
                <time class="archive-list__item-date">posted on {{ post.date | dateReadable }}</time>
            </article>
        </li>
    {%- endfor -%}
</ol>