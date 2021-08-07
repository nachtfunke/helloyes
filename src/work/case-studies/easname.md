---
order: 1
id: 'easyname'
title: 'easyname'
excerpt: 'My work at easyname was complex and included a lot of different things - from refactoring the large CSS (and HTML in PHP) Codebase, to upgrading the easyname brand and designing and building landing & content pages as well as planning for content, product features and long-term refactorings with a bigger architectural picture in mind.'
caseStudyTags: ['Refactoring', 'HTML', 'Large Scale (S)CSS', 'Accessibility', 'UI Design', 'UX Design', 'PHP', 'Content Strategy', 'Vanilla JavaScript', 'React', 'TypeScript', 'Design Engineering', 'Design Ops']
color: '#489abf'
coverLogo: 'logo-shape'
logo: 'logo'
templateEngineOverride: "md,njk"
---
{% from 'caseStudyGallery.macro.njk' import caseStudyGallery %}
{% set contentImages = (imagePath+id+'/content' | url) %}

## Evolving the Brand

Over the span of a few years I made sure that the easyname brand could grow and evolve. This was not a process confined to just visuals but also to voice & tone and especially the internal understanding of the function of branding in an organisation, that goes beyond logo, color and typography.

{{ caseStudyGallery({
    pathPrefix: contentImages,
    images: [
        {src: 'brand-logo-example', alt: 'The easyname Logo in different color variations and its 4 brand colors'},
        {src: 'typography-example', alt: 'Example of the Typographical System, showing a headline, a paragraph and a list with icons'}
    ]
}) }}

## Patterns in UI & UX

I created a large number of lower level Patterns and Components, that gradually started to power the entirety of the easyname UI and UX. Here are two of the most important elements.

{{ caseStudyGallery({
    pathPrefix: contentImages,
    maxItems: 3,
    images: [
        {src: 'ui-patterns-1', alt: 'example of visual components, showing cards and buttons'},
        {src: 'ui-patterns-2', alt: 'example of a visual component, showing a domain category as a card'},
        {src: 'ui-patterns-3', alt: 'example of a visual component, showing a stack of cards highlighting features of a product'}
    ]
}) }}

## Content Landingpages

Design and content always goes hand in hand. As the content matured, so did the organisations understanding of how to strategize with it. Here is a collection of some of the content & landingpages.

{{ caseStudyGallery({
    pathPrefix: contentImages,
    images: [
        {
            src: 'solutions-page-thumbnail',
            fullsize: 'solutions-page-fullsize',
            alt: 'preview showing a screenshot of the easyname solutions content page'
        }, {
            src: 'vps-page-thumbnail',
            fullsize: 'vps-landingpage-fullsize',
            alt: 'preview showing a screenshot of the easyname vps product landing page'
        }
    ]
}) }}

## Domaincheck

The Domaincheck was a major component in the easyname product experience. It's where users buy domains and get all kinds of information about the availability of their desired domains.

{{ caseStudyGallery({
    pathPrefix: contentImages,
    maxItems: 2,
    images: [
        {
            src: 'domaincheck-complete-example',
            fullsize: 'domaincheck-fullsize',
            alt: 'example of visual components, showing cards and buttons'
        }, {src: 'domaincheck-result-example-1', alt: 'example of a visual component, showing a domain category as a card'},
        {src: 'domaincheck-result-example-2', alt: 'example of a visual component, showing a stack of cards highlighting features of a product'},
        {src: 'domaincheck-result-example-3', alt: 'example of a visual component, showing a stack of cards highlighting features of a product'}
    ]
}) }}