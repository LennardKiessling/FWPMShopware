if (navigationOnScroll){
    Header = document.querySelector('.header-main');
    Navigation = document.querySelector('.nav-main');
    ContentMain = document.querySelector('.content-main');

    // Variable zur Speicherung der letzten Scroll-Position
    let letzteScrollPosition = scrollY;

    // Event Listener für das Scroll-Event
    window.addEventListener('scroll', function() {
    // Aktuelle Scroll-Position
    let aktuelleScrollPosition = scrollY;

        if (stickyNavigation){
            if (aktuelleScrollPosition > letzteScrollPosition) {
                // Nach unten gescrollt
                if (Header.classList.contains('header-hidden')){
                    //do nothing
                } else {
                    Header.classList.add('header-hidden');
                    Navigation.classList.add('header-hidden');
                    ContentMain.classList.add('header-hidden');
                }

            } 
            else if (aktuelleScrollPosition < letzteScrollPosition) {
                // Nach oben gescrollt
                    if (Header.classList.contains('header-hidden')){
                        Header.classList.remove('header-hidden');
                        Navigation.classList.remove('header-hidden');
                        ContentMain.classList.remove('header-hidden');
                    }
            }
        } else {
            if (aktuelleScrollPosition > letzteScrollPosition) {
                // Nach unten gescrollt
                if (Header.classList.contains('sticky-header')){
                    Header.classList.remove('sticky-header');
                    Navigation.classList.remove('sticky-header');
                    ContentMain.classList.remove('sticky-header');
                }
            } 
            else if (aktuelleScrollPosition < letzteScrollPosition) {
                    Header.classList.add('sticky-header');
                    Navigation.classList.add('sticky-header');
                    ContentMain.classList.add('sticky-header');
            }
        }

    // Aktualisierung der letzten Scroll-Position für den nächsten Event
    letzteScrollPosition = aktuelleScrollPosition;
    });
}