import { colorSettings } from "./modules/colorSettings.js";

const root = document.documentElement;
const openMenuButton = document.querySelector('[data-open-site-menu]');
const closeMenuButton = document.querySelector('[data-close-site-menu]');
const menu = document.querySelector('[data-site-menu]');
const accentColorSettings = document.querySelectorAll('[data-accent-color-settings]');
const accentOverride = sessionStorage['accent-color-override'];
const footerSettingsButton = document.querySelector('[data-toggle-footer-settings]');
const favicons = document.querySelectorAll('[data-favicon]');

// adding a Paint Worklett allowing corner smoothing with CSS border-radius
(CSS.paintWorklet || paintWorklet).addModule('/assets/js/vendor/smooth-corners.js')

// open the menu
openMenuButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    if ( !menu.classList.contains('is-open') ) {
        menu.classList.add('is-open');
        e.currentTarget.setAttribute('aria-expanded', true);
    }
});

// close the menu
closeMenuButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    menu.classList.add('moveout'); // visually move the menu out
    menu.addEventListener('transitionend', function moveout(e) {
        e.stopPropagation;
        e.currentTarget.classList.remove('is-open');
        e.currentTarget.classList.remove('moveout'); // remove the class for animation

        openMenuButton.setAttribute('aria-expanded', false);
        //menu.classList.remove('is-open');
        // this is important, otherwise the menu will keep "closing" itself if its being opened again, ebcause the transitionend event triggers again
        menu.removeEventListener('transitionend', moveout);
    })
})

// allow overriding the accent color
colorSettings({ root, accentColorSettings, accentOverride, footerSettingsButton, favicons });