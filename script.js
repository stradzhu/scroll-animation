'use strict';

document.addEventListener('DOMContentLoaded', () => {

    window.animateSection1 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection1', isVisible)
    };

    window.animateSection2 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection2', isVisible)
    };

    window.animateSection3 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection3', isVisible)
    };

    window.animateSection4 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection4', isVisible)
    };

    window.animateSection5 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection5', isVisible)
    };

    window.animateSection6 = (block, isVisible) => {
        block.classList.toggle('is-visible', isVisible)
        console.log('animateSection6', isVisible)
    };

    const sections = document.querySelectorAll('.js-section');

    let lastScrollTime = Date.now();
    let currentSection = 0;
    window[sections[0].dataset.function](sections[currentSection], true);

    window.addEventListener('wheel', (event) => {
        if (Date.now() - lastScrollTime < 2000) {
            console.log(`Рано крутишь!, прошло только ${Date.now() - lastScrollTime} мс`);
            return false;
        }

        let move = 0;

        if (event.deltaY > 0 && (currentSection < sections.length - 1)) {
            move = 1;
        } else if (event.deltaY < 0 && currentSection > 0) {
            move = -1;
        }

        if (move) {
            let functionName = sections[currentSection].dataset.function;
            window[functionName](sections[currentSection], false);

            currentSection += move;

            functionName = sections[currentSection].dataset.function;
            window[functionName](sections[currentSection], true);

            lastScrollTime = Date.now();
        } else {
            console.log('А крутить уже больше нельзя')
        }
    })
});
