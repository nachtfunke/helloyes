import { updateFavicon } from './updateFavicon.js';
import { focusFirstIn } from "../util/getFocusable.js";

const root = document.documentElement;
const accentColorSettings = document.querySelectorAll('[data-accent-color-settings]');
const accentOverride = sessionStorage['accent-color-override'];
const footerSettingsButton = document.querySelector('[data-toggle-footer-color-settings]');
const footerSettings = document.querySelector('[data-footer-color-settings]');
const favicons = document.querySelectorAll('[data-favicon]');

export const colorSettings = () => {
    // make accent color settings available
    accentColorSettings.forEach(menu => menu.style.display = 'flex');
    footerSettingsButton.style.display = 'inline-flex';

    // the button in the footer will actually change text, based on wether the settings are visible or not
    footerSettingsButton.addEventListener('click', e => {
        e.preventDefault();
        const text = e.currentTarget.querySelector('.button__text');

        if ( footerSettings.classList.contains('is-open') ) {
            e.currentTarget.setAttribute('aria-expanded', false);
            footerSettings.classList.remove('is-open');
            text.textContent = 'change color';
            focusFirstIn(footerSettings);
        } else {
            e.currentTarget.setAttribute('aria-expanded', true);
            footerSettings.classList.add('is-open');
            text.textContent = 'close';
            e.currentTarget.focus();
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