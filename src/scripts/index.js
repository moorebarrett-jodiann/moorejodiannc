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
    'A Full-Stack developer and student based in Winnipeg',
    'I have 9 Certifications across the fields of DevOps, UX/UI and HCI',
    'I am originally from Jamaica',
    'I have a 7 year career in IT'
]
const bioParagraph = select('.biography p.intro-2');
const bioButton = select('.biography button');
let n = 0;

// load hello world text after page load
window.addEventListener('load', () => {

    bioParagraph.classList.add('is-visible');
    setTimeout(() => {
        bioButton.classList.add('is-visible');
    }, 1000);

    onEvent('click', bioButton, function() {
        bioButton.innerText = (n === 2) ? 'Restart' : 'View More';

        if(n === 3) {
            bioParagraph.innerText = content[n=0];
            return;
        }

        bioParagraph.innerText = content[++n];
    });
});


// function to add scroll to top button when at the bottom of the web page
const scrollTop = function () {

    // create HTML button element
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&uarr;";
    scrollBtn.setAttribute("id", "scroll-btn");
    document.body.appendChild(scrollBtn);

    // hide/show button based on scroll distance
    const scrollBtnDisplay = function () {
      window.scrollY > window.innerHeight
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    // scroll to top when button clicked
    const scrollWindow = function () {
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 300);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
};

// call scrollTop function
scrollTop();