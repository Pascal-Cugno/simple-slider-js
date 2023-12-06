// 1er etape - recuperer les elements dans le DOM
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide')
const sliderBnts = slider.querySelectorAll('.btn');

// 2eme etape - creer l'index des slides
let index = 0;

// 6eme etape - les boutons de pagination crees n'etant pas le DOM, JS ne les connais pas. On les mettra donc dans un tableau
const viewBtns = [];

// 4eme etape - le click sur les boutons de l'etape 3 appelle cette fonction
const displaySlide = (n) => {
    // 1- on eleve la class active a toutes les slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    viewBtns.forEach(btn => {
        btn.classList.remove('active');
    })

    index = n;

    if (index >= slides.length) index = 0;
    else if (index < 0) index = slides.length - 1;

    slides[index].classList.add('active');
    // Vérifie si le bouton à l'index spécifié existe avant d'ajouter la classe 'active'
    viewBtns[index]?.classList.add('active');
    // Voici une version alternative et plus simple a comprendre de l'operateur d'accession conditionnelle
    // if (viewBtns[index]) {
    //     viewBtns[index].classList.add('active');
    // }

};

// 3eme etape - creer l'eventlistener au click sur les boutons next et pre
sliderBnts.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataSlide = parseInt(btn.dataset.slide);

        displaySlide(index + dataSlide);
    })
})

// 5eme etape - on cree les boutons de pagination
const createBtnsView = () => {
    const sliderBtnsView = document.createElement('div');
    sliderBtnsView.classList.add('slider-btn-view');

    slides.forEach((slide, index) => {
        const btnView = document.createElement('button');

        if (index === 0) btnView.classList.add('active');
        btnView.dataset.slide = index;
        sliderBtnsView.appendChild(btnView);

        // 7eme etape - on pousse les boutons de pagination dans le tableau
        viewBtns.push(btnView);
    });

    slider.appendChild(sliderBtnsView);
};

createBtnsView();

// 8eme etape - on cree un eventlistener sur chaque bouton de pagination pour interagir avec les slides
viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataSlide = parseInt(btn.dataset.slide);

        displaySlide(dataSlide);
    });
})
