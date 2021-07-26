import { updateFavicon } from './updateFavicon.js';

export const colorSettings = (_selectors ) => {
    const { accentColorSettings, footerSettingsButton, root, favicons, accentOverride } = _selectors;
    // make accent color settings available
    accentColorSettings.forEach(menu => menu.style.display = 'flex');
    footerSettingsButton.style.display = 'inline-flex';

    // the button in the footer will actually change text, based on wether the settings are visible or not
    footerSettingsButton.addEventListener('click', e => {
        e.preventDefault();
        const text = e.currentTarget.querySelector('.button__text');
        const href = e.currentTarget.href;
        const fragment = href.substring(href.indexOf('#'));
        const isOpen = () => window.location.hash === fragment


        if ( isOpen() ) {
            window.location.hash = 'site-copy';
            text.textContent = 'change color';
        } else {
            window.location.hash = fragment;
            text.textContent = 'close';
        }
    })

    // set the theme from session storage, if its set
    if ( accentOverride ) {
        root.style.setProperty('--accent-color', `var(--color-hs-${accentOverride})`);
        updateFavicon(favicons, accentOverride);
    }

    // for every occurance of the accent color settings menu
    accentColorSettings.forEach( menu => {
        const colorChoices = menu.querySelectorAll('input');

        // allow changing of the accent color
        colorChoices.forEach( choice => {
            // set the correct option as already checked, if a choice was already made and stored in the session
            if ( accentOverride ) {
                choice.checked = (choice.value === accentOverride);
            }
            
            choice.addEventListener('change', () => {
                // if the default is being clicked on, remove the inline style and clear the session as well
                if ( choice.value === 'illusion' ) {
                    root.style.removeProperty('--accent-color');
                    sessionStorage.clear();
                } else {
                    const newColor = `var(--color-hs-${choice.value})`;
                    root.style.setProperty('--accent-color', newColor);
                    sessionStorage['accent-color-override'] = choice.value;
                }

                updateFavicon(favicons, choice.value);
            });
        });
    });
};