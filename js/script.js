document.addEventListener('DOMContentLoaded', () => {
    const iconMenu = document.querySelector('.header__menu__icon');
    if (iconMenu) {
        const menuBody = document.querySelector('.header__nav');
        const menuButton = document.querySelector('.header__button')
        iconMenu.addEventListener('click', (e) => {
            document.body.classList.toggle('_lock')
            iconMenu.classList.toggle('_active')
            menuBody.classList.toggle('_active')
            menuButton.classList.toggle('_active')
        })
    }

    new Swiper('.swiper-container', {
        breakpoints: {
            769: {
                enabled: false,
            },
            280: {
                enabled: true,
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        },
    })
});
