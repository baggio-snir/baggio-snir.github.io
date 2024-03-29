
let sections = {
    'presentation': 'smart-aside-coords',
    'baggio': 'smart-aside-coords',
    'techs': 'smart-aside-techs',
    'plateaux': 'smart-aside-summary',
    'apprentissage': 'smart-aside-ufa',
    'temoignages': 'smart-aside-stats',
};

let options = {
    root: document.querySelector(null),
    rootMargin: '0px',
    threshold: 0.1
}

const displayOrNot = function(r) {
    const currentTarget = r[0].target.id;
    let linkedAside = document.querySelector('#'+sections[currentTarget]);
    if(linkedAside) {
        let isLinkedAsideVisible = ('none' !== window.getComputedStyle(linkedAside).display);
        if(r[0].isIntersecting) {
            if(!isLinkedAsideVisible) {
                console.info('showing '+sections[currentTarget]);
                linkedAside.classList.replace('d-none', 'd-block');
            }
        } else {
            if(isLinkedAsideVisible) {
                console.info('hiding '+sections[currentTarget]);
                linkedAside.classList.replace('d-block', 'd-none');
            }
        }
    } else {
        console.error('Unable to find #'+sections[currentTarget]+' : no linked aside content will be shown');
    }
}

let sectionsObserver = new IntersectionObserver(displayOrNot, options);
for(const x in sections) {
    sectionsObserver.observe(document.querySelector('#'+x));
    //displayOrNot(x);
}

let scrollSpyContentEl = document.getElementById('main-menu');
let scrollSpy = bootstrap.ScrollSpy.getInstance(scrollSpyContentEl);
console.log(scrollSpy);
