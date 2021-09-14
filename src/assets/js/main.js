import { colorSettings } from "./modules/colorSettings.js";
import { focusFirstIn } from "./util/getFocusable.js";

const openMenuButton = document.querySelector('[data-open-site-menu]');
const closeMenuButton = document.querySelector('[data-close-site-menu]');
const toggleSubmenuButton = document.querySelectorAll('[data-show-submenu]')
const menu = document.querySelector('[data-site-menu]');

// showing & hiding the submenus for main navigaton items
toggleSubmenuButton.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        let link = button.previousElementSibling;
        let submenu = button.nextElementSibling;

        if ( button.getAttribute('aria-expanded') === 'true' ) {
            button.setAttribute('aria-expanded', false);
            link.setAttribute('aria-expanded', false);
            button.focus();
            submenu.addEventListener('transitionend', function hide(e) {
                e.stopPropagation;
                submenu.hidden = true;
                submenu.removeEventListener('transitionend', hide);
            })
        } else {
            submenu.hidden = false;
            setTimeout(() => {
                button.setAttribute('aria-expanded', true);
                link.setAttribute('aria-expanded', true);
                focusFirstIn(submenu);
            }, 1);
        }
    })
})

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