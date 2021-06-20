---
layout: default
title: "Work"
metaDescription: "Comprehensive and chronological view of all my work experience over the years."
excerpt: "I’ve been working in the industry since 2010. This is a chronological summary of my experiences."
illustration: "work-lined"
templateEngineOverride: md,njk
---
{% from 'experience-timeline-entry.macro.njk' import experienceTimelineEntry %}
{% from 'intermezzo.macro.njk' import intermezzo %}
{% from 'work-diagram.macro.njk' import workDiagram %}

<div class="wrap-as--full-column  experience-timeline">
    <section class="experience-timeline__line experience-timeline__era">
        <time class="experience-timeline__date">1996 - 2010</time>
        <div class="experience-timeline__group">
            {{ experienceTimelineEntry({
                title: 'Basic Education & Civil Service',
                location: 'Carinthia, Austria',
                description: '<p>My very rough journey through the austrian school system eventually ended by droping out two years before Matura. I eventually got an interest in using my “GFX” skills and Interest in Photography, so I decided to learn Webdesign, HTML & CSS.</p>'
            }) }}
            <div class="experience-timeline__line  vers--subline">
                <time class="experience-timeline__date">Oct. - Nov. 2010</time>
                {{ experienceTimelineEntry({
                    major: true,
                    title: 'Apprenticeship Mediadesigner',
                    organisation: 'siemax webREALISATION',
                    location: 'Carinthia, Austria',
                    description: '<p>In a few months I had developed an immense appetite to learn more and more about making websites. So I decided to search for ways to support myself financially with this skillset and started an apprenticeship. I quickly came to the realization that an apprenticeship would take me ~ 3 years to teach me things that I already knew, so I decided to look for alternative career paths and decided to quit after just shy of two months.</p>'
                }) }}
            </div>
        </div>
    </section>
    <section class="experience-timeline__line experience-timeline__era">
        <time class="experience-timeline__date">since 2011</time>
        <div class="experience-timeline__group">
            {{ experienceTimelineEntry({ title: 'January 2011: Move to Vienna, Austria'}) }}
            {{ experienceTimelineEntry({
                title: '2011: Webdesign Certification',
                organisation: 'WIFI Wien',
                location: 'Vienna, Austria',
                description: '<p>I knew that I needed to some how proof that I had the knowledge that I claimed to have. For that reason I decided to do a 4 Month training programm from WIFI in Vienna. I completed this training and was given a "Diploma", a Certification that allowed me to land my first job as a junior Web Developer.</p>'
            }) }}
            <div class="experience-timeline__line  vers--subline" style="--event-color: #00AEEF">
                <time class="experience-timeline__date">Oct. - Nov. 2010</time>
                {{ experienceTimelineEntry({
                    major: true,
                    title: 'Junior Web Developer',
                    organisation: 'ip-systems informationssysteme e.U.',
                    location: 'Vienna, Austria',
                    description: '<p>I consider my time at ip-systems to be my very first job, in spirit. They are a full-service agency, which for every day work meant communicating with clients, as well as conceptualising, planning and actually developing website projects. From updating existing legacy systems with new content or planning new website projects from scratch to finish, with small or medium-sized companies as clients. My desk neighbour, Daniel Mikesch (@alayron) turned out to not only be a great person to work with but also in a way a mentor, introducing me to jquery, constantly answering my questions and in general be very supportive of someone enterying the industry.</p>' + intermezzo({ title: 'From Webdesign to Webdevelopment', content: '<p>Even though I originally got into the web via design, I quickly noticed that development was giving me a very unique kick that I never stopped pursuing. Work at a full-service-provider meant learning to work with basic PHP and also JavaScript. My work from this time can be considered rather evenly distrubuted, with design taking up just a bit more than development and UX being the smallest portion.</p>', image: workDiagram({ company: 'ip-systems', domains: ['UX', 'Design', 'Frontend', 'Backend'] }) })
                }) }}
            </div>
            <div class="experience-timeline__line  vers--subline" style="--event-color: #FF6900">
                <time class="experience-timeline__date">2016 - 2017</time>
                {{ experienceTimelineEntry({
                    title: 'Freelance Lecturer',
                    organisation: 'SAE Austria GmbH',
                    location: 'Vienna, Austria',
                    description: '<p>I consider myself very fortunate for being able to teach people at SAE Vienna. Teaching their meant introducing people to the very first concepts of making websites. I was able to structure my course and even finetune it to a given groups specific needs. I maintained a slack channel for students and provided them with an online skriptum. Teaching people did turn out to be one of the most rewarding things I had ever done to this point.</p>'
                }) }}
            </div>
            {{ experienceTimelineEntry({ 
                title: '2017: Meditation- & Mindfulness-Teaching Certificate',
                organisation: 'WIFI Wien',
                location: 'Vienna, Austria'
            }) }}
            <div class="experience-timeline__line  vers--subline" style="--event-color: #489abf">
                <time class="experience-timeline__date">Oct. - Nov. 2010</time>
                {{ experienceTimelineEntry({
                    major: true,
                    title: 'Senior Software Developer, UI/UX-Designer',
                    organisation: 'easyname GmbH',
                    location: 'Vienna, Austria',
                    description: '<p>Working with the people at easyname was pivotal for me. I entered the country at a time where neither frontend development, nor design was considered an integral part. I was brought in also with the intention to improve on this. I had the great privilege of joining a diverse team handpicked by Stephanie Anderson. The team kept growing and kept being expanded by extraordinary individuals.</p>' + intermezzo({ title: 'Establishing design through sustainable integration', content: '<p>At the point of joining the company, I had the unique opportunity of taking an inventory of previous design decisions and their potential. Instead of suggesting waves of redesigns, I opted for small, concise and sustainable changes to brand, frontend and UX.</p><p>My understanding about the role of design not just in the processes, but also as a contributing perspective in product development and how it serves individuals, teams and organisations grew massively thanks to the opportunities that were given to me there.</p>', image: workDiagram({ company: 'easyname', domains: ['UX', 'Design', 'Brand', 'Frontend', 'Backend'] }) })
                }) }}
            </div>
            {{ experienceTimelineEntry({ 
                title: 'since 2020: Counselling Sciences & Management of Social Systems, University Course',
                organisation: 'ARGE Bildungsmanagement / SFU Vienna',
                location: 'Vienna, Austria'
            }) }}
            <div class="experience-timeline__line  vers--subline" style="--event-color: #F7ABBE">
                <time class="experience-timeline__date">2021 - ...?</time>
                {{ experienceTimelineEntry({
                    title: 'your entry could go here',
                    organisation: 'your company',
                    location: 'almost anywhere in the world',
                    description: '<p>In an unexpected turn of events, this timeline is crowdsourced! Yes, you have the opportunity to influence what this next entry on my timeline will be. I might be a great fit for your team and you should hire me!</p>'
                }) }}
            </div>
        </div>
    </section>
</div>