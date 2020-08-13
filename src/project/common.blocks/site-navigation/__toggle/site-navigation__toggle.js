const siteNavigationToggle = () => {

    console.log('site-navigation__toggle working...');

    // Нашли тогл
    const $toggle = document.querySelector('[data-type="site-navigation__toggle"]');
    const $siteNavigation = document.querySelector('[data-type="site-navigation"');
    const $iconMenu = $toggle.querySelector('[data-type="icon_menu"]');

    const cls = {
        mobileActive: 'site-navigation_mobile_active',
        iconMenuActive: 'icon_menu_open',
        iconMenuClosed: 'icon_menu_closed'
    };

    const toSwitch = ( el, cls ) => el.classList.toggle(cls);
    const togleIcon = ( el, clsActive, clsClosed ) => {
        if (el.classList.contains(clsActive)) {
            el.classList.remove(clsActive);
            el.classList.add(clsClosed);
        } else {
            el.classList.remove(clsClosed);
            el.classList.add(clsActive);
        };
    };

    $toggle.onclick = () => {
        toSwitch($siteNavigation, cls.mobileActive);
        togleIcon($iconMenu, cls.iconMenuActive, cls.iconMenuClosed);
    };

}

export { siteNavigationToggle };


