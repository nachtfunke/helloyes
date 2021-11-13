---
layout: default
permalink: 'blog/archives/'
title: "Blog Archives"
metaDescription: "All blog posts published on helloyes.dev, chronologically listed."
excerpt: "All the blog post, listed chronogically - the most recent one is first."
illustration: "welcome-lined"
templateEngineOverride: md,njk
---

<ol class="archive-list" role="list" reversed>
    {%- for post in collections.post | reverse -%}
        <li class="archive-list__item">
            <article class="archive-list__item-article" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">
                <h2 class="archive-list__item-title" itemprop="name headline"><a href="{{ post.url | url }}">{{ post.data.title | safe }}</a></h2>
                <time class="archive-list__item-date">
                    {%- if post.data.draft -%}
                        <span class="draft">draft</span> scheduled for {{ post.date | dateReadable }}
                    {%- else -%}
                        posted on {{ post.date | dateReadable }}
                    {%- endif -%}
                </time>
            </article>
        </li>
    {%- endfor -%}
</ol>