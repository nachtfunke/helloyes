import { colorSettings } from "./modules/colorSettings.js";

const root = document.documentElement;
const closeMenuButton = document.querySelector('[data-close-site-menu]');
const menu = document.querySelector('[data-menu]');
const accentColorSettings = document.querySelectorAll('[data-accent-color-settings]');
const accentOverride = sessionStorage['accent-color-override'];
const footerSettingsButton = document.querySelector('[data-toggle-footer-settings]');
const favicons = document.querySelectorAll('[data-favicon]');

// adding a Paint Worklett allowing corner smoothing with CSS border-radius
(CSS.paintWorklet || paintWorklet).addModule('/assets/js/vendor/smooth-corners.js')

// make the closing of the menu nicer
closeMenuButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    const href = e.currentTarget.href; // makes sure that it uses the target of the element firing the event, not its children
    const fragment = href.substring(href.indexOf('#')); // wherever the link leads to...

    menu.classList.add('moveout'); // visually move the menu out
    menu.addEventListener('transitionend', function moveout(e) {
        e.stopPropagation;
        e.currentTarget.classList.remove('moveout'); // remove the class for animation
        window.location.hash = fragment; // set the new target
        // this is important, otherwise the menu will keep "closing" itself if its being opened again, ebcause the transitionend event triggers again
        setTimeout(() => window.scrollTo(0,0)); // to prevent the jumping to the target
        menu.removeEventListener('transitionend', moveout);
    })
});

// allow overriding the accent color
colorSettings({ root, accentColorSettings, accentOverride, footerSettingsButton, favicons });