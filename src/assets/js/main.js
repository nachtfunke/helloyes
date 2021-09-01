import { colorSettings } from "./modules/colorSettings.js";
import { focusFirstIn } from "./util/getFocusable.js";

const openMenuButton = document.querySelector('[data-open-site-menu]');
const closeMenuButton = document.querySelector('[data-close-site-menu]');
const menu = document.querySelector('[data-site-menu]');

// adding a Paint Worklett allowing corner smoothing with CSS border-radius
(CSS.paintWorklet || paintWorklet).addModule('/assets/js/vendor/smooth-corners.js')

// open the menu
openMenuButton.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();

    if ( !menu.classList.contains('is-open') ) {
        menu.classList.add('is-open');
        e.currentTarget.setAttribute('aria-expanded', true);
        focusFirstIn(menu);
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
        openMenuButton.focus();
        //menu.classList.remove('is-open');
        // this is important, otherwise the menu will keep "closing" itself if its being opened again, ebcause the transitionend event triggers again
        menu.removeEventListener('transitionend', moveout);
    })
})

// allow overriding the accent color
colorSettings();