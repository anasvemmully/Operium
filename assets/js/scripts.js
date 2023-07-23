(() => {

    const basicScrollTop = function () {

        const btnTop = document.querySelector('#goTop');

        const btnReveal = function () {
            if (window.scrollY >= 300) {
                btnTop.classList.add('is-visible');
            } else {
                btnTop.classList.remove('is-visible');
            }
        }

        const TopscrollTo = function () {
            if (window.scrollY != 0) {
                setTimeout(function () {
                    window.scrollTo(0, window.scrollY - 30);
                    TopscrollTo();
                }, 5);
            }
        }

        window.addEventListener('scroll', btnReveal);
        btnTop.addEventListener('click', TopscrollTo);

    };
    basicScrollTop();

})();