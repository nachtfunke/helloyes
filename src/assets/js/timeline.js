{(() => {
    const timelineEvents = document.querySelectorAll('[data-timeline-event]');

    timelineEvents.forEach( event => {
        const button = event.querySelector('[data-timeline-event-expand-button]');
        
        if (button) {
            const details = event.querySelector('[data-timeline-event-details]');
            const newHeight = details.querySelector('[data-height-wrapper]').offsetHeight;
            const hideText = button.querySelector('[data-timeline-event-expand-button-close]');
            const showText = button.querySelector('[data-timeline-event-expand-button-open]');
            
            button.addEventListener('click', () => {
                if ( event.classList.contains('is-expanded') ) {
                    event.classList.remove('is-expanded');
                    button.setAttribute('aria-expanded', false);
                    details.style.height = 0;
                    details.style.opacity = 0;
                    hideText.style.display = 'none';
                    showText.style.display = 'flex';
                } else {
                    event.classList.add('is-expanded');
                    button.setAttribute('aria-expanded', true);
                    details.style.height = newHeight+'px';
                    details.style.opacity = 1;
                    hideText.style.display = 'flex';
                    showText.style.display = 'none';
                }
            });
        }
    })
})()}