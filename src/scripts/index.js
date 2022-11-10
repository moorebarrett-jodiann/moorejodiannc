'use strict';

// Utility Functions 
function onEvent(event, selector, callback) {
return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

const content = [
    'Hello, World. I\'m Jodi-Ann Barrett, a Full-Stack developer and student based in Winnipeg',
    'I have 9 Certifications across the fields of DevOps, UX/UI and HCI',
    'I am originally from Jamaica',
    'I have a 7 year career in IT'
]
const bioParagraph = select('.biography p');
const bioButton = select('.biography button');
let n = 0;

window.addEventListener('load', () => {

    bioParagraph.classList.add('is-visible');
    setTimeout(() => {
        bioButton.classList.add('is-visible');
    }, 1000);

    onEvent('click', bioButton, function() {
        bioButton.innerText = (n === 2) ? 'Again' : 'More';

        if(n === 3) {
            bioParagraph.innerText = content[n=0];
            return;
        }

        bioParagraph.innerText = content[++n];
    });
});