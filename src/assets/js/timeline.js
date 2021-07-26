{(() => {
    const timelineEvents = document.querySelectorAll('[data-timeline-event]');

    timelineEvents.forEach( event => {
        const button = event.querySelector('[data-timeline-event-expand-button]');
        
        if (button) {
            const details = event.querySelector('[data-timeline-event-details]');
            const heightWrapper = details.querySelector('[data-height-wrapper]');
            const hideText = button.querySelector('[data-timeline-event-expand-button-close]');
            const showText = button.querySelector('[data-timeline-event-expand-button-open]');
            
            button.addEventListener('click', () => {
                button.disabled = true;
                
                const expandEntry = () => {
                    details.style.height = heightWrapper.offsetHeight+'px';
                    details.style.opacity = 1;
                    hideText.style.display = 'flex';
                    showText.style.display = 'none';
                    button.disabled = false;
                    event.removeEventListener('transitionend', expandEntry);
                }
                const collapseEntry = () => {
                    event.classList.remove('is-expanded');
                    button.setAttribute('aria-expanded', false);
                    hideText.style.display = 'none';
                    showText.style.display = 'flex';
                    button.disabled = false;
                    event.removeEventListener('transitionend', collapseEntry);
                };

                if ( event.classList.contains('is-expanded') ) {
                    details.style.height = 0;
                    details.style.opacity = 0;
                    event.addEventListener('transitionend', collapseEntry, false)
                } else {
                    event.classList.add('is-expanded');
                    button.setAttribute('aria-expanded', true);
                    event.addEventListener('transitionend', expandEntry, false);
                }
            });
        }
    })
})()}