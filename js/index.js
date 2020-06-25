// form

let formStatus = false;

function changeFormStatus() {
    formStatus = !formStatus;

    const form = document.querySelector('.form');
    form.style.display = !formStatus ? 'block' : 'none';
}

// nav

const section = document.querySelectorAll("section");

const sectionsPosition = [];
section.forEach( (item, i) => {
    sectionsPosition.push( i * document.documentElement.clientHeight + 0.6 * document.documentElement.clientHeight );
})

window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = (sectionsPosition.length - 1); i >= 0; i--) {
        if (scrollPosition > 0.9 * document.documentElement.clientHeight) {
            document.querySelector('.nav').style.display = 'block';
        } else {
            document.querySelector('.nav').style.display = 'none';
        }

        if (scrollPosition > sectionsPosition[i]) {
            for (let j = 0; j < sectionsPosition.length; j++) {
                document.querySelector('.nav__indicators').children[j].className = 'nav__indicator';
            }
            document.querySelector('.nav__indicators').children[i + 1].className = 'nav__indicator active';

            break
        }
    }
});

// block-1

const projects = [
    {
        projectNumber: '1',
        projectTitle: 'КЛАБ РЕЗИДЕНС',
        projectText: 
`Квартиры уже
в продаже`,
        address: 'киев, переулок радистов, 14а'
    },
    {
        projectNumber: '2',
        projectTitle: 'КЛУБНЫЙ ДОМ',
        projectText: 
`Это две строчки
текста на семь слов`,
        address: 'киев, переулок радистов, 40'
    }
]

let index1 = 0;
showProject(index1);

function controlProjects(n) {
    showProject(index1 += n);		
}

function showCurrentProject(n) {
    showProject(index1 = n);
}

function showProject(n) {
    if (n > projects.length - 1) {
        index1 = 0;
    }
    if (n < 0) {
        index1 = projects.length - 1;
    }

    const projectLogo = document.querySelector('.block-1__project-logo').children[0];
    projectLogo.src = `./img/block-1/project-logo-${projects[index1].projectNumber}.svg`;

    const projectTitle = document.querySelector('.block-1__project-title');
    projectTitle.textContent = projects[index1].projectTitle;

    const projectText = document.querySelector('.block-1__project-text');
    projectText.textContent = projects[index1].projectText;

    const address = document.querySelector('.block-1__location').children[1];
    address.textContent = projects[index1].address;

    const img = document.querySelector('.block-1__bg').children[0];
    img.src = `./img/block-1/bg-${projects[index1].projectNumber}.jpg`;

    const carouselIndicators = document.querySelector('.block-1__carousel-indicators').children;
    for (let i = 0; i < projects.length; i++) {
        carouselIndicators[i].className = 'block-1__carousel-indicator';
    }
    carouselIndicators[index1].className = `${carouselIndicators[index1].className} active`;

    const currentProjectNumber = document.querySelector('.block-1__current-project');
    currentProjectNumber.textContent = +projects[index1].projectNumber < 10 ?
        `0${projects[index1].projectNumber}` : projects[index1].projectNumber;

    const nextProjectNumber = document.querySelector('.block-1__next-project');
    nextProjectNumber.textContent = 
        index1 + 1 < projects.length ? ( 
            +projects[index1 + 1].projectNumber < 10 ?
            `0${projects[index1 + 1].projectNumber}` : projects[index1 + 1].projectNumber 
        ) : '01';
}

// block-2

const imgNumber = 5;

let index2 = 0;
showPhotos(index2);

function controlPhotos(n) {
    showPhotos(index2 += n);		
}

function showCurrentPhoto(n) {
    showPhotos(index2 = n);
}

function showPhotos(n) {
    if (n >= imgNumber) {
        index2 = 0;
    }
    if (n < 0) {
        index2 = imgNumber - 1;
    }

    const carouselItems = document.querySelector('.block-2__carousel-items');
    if (carouselItems.children.length) {
        for (let i = 0; i < imgNumber; i++) {
            carouselItems.children[0].remove()
        }

    }
    const imgs = [];
    const createImg = i => {
        let img = document.createElement('img');
        img.src = `./img/block-2/img-${i + 1}-s.jpg`;
        img.alt = `img-${i + 1}-s`;
        img.onclick = () => {
            showPhotos(index2 = i)
        };

        return img
    }
    for (let i = index2; i < imgNumber; i++) {
        let img = createImg(i);
        
        imgs.push(img);
    }
    if (imgs.length < imgNumber) {
        for (let i = 0; i < index2; i++) {
            let img = createImg(i);
            
            imgs.push(img);
        }
    }
    imgs.forEach(img => {
        carouselItems.appendChild(img);
    })

    const carouselIndicators = document.querySelector('.block-2__carousel-indicators').children;
    for (let i = 0; i < imgNumber; i++) {
        carouselIndicators[i].className = 'block-2__carousel-indicator';
    }
    carouselIndicators[index2].className = `${carouselIndicators[index2].className} active`;
}

function projectsNav(n) {
    const projects = document.querySelectorAll('.block-2__project');

    for (let i = 0; i < projects.length; i++) {
        if ( projects[i].className.includes('active') ) {
            projects[i].className = 'block-2__project';
        }
    }

    projects[n].className = 'block-2__project active';
}

//block-3

const apartments = 6;

let index3 = 0;
showApartment(index3);

function controlApartments(n) {
    showApartment(index3 += n);
    apartmentParamsNav(index3);	
}

function showCurrentApartment(n) {
    showApartment(index3 = n);
    apartmentParamsNav(index3);
}

function showApartment(n) {
    if (n >= apartments) {
        index3 = 0;
    }
    if (n < 0) {
        index3 = apartments - 1;
    }

    const carouselIndicators = document.querySelector('.block-3__carousel-indicators').children;
    for (let i = 0; i < apartments; i++) {
        carouselIndicators[i].className = 'block-3__carousel-indicator';
    }
    carouselIndicators[index3].className = `${carouselIndicators[index3].className} active`;
}

function apartmentsNav(n) {
    const apartments = document.querySelectorAll('.block-3__apartment');

    for (let i = 0; i < apartments.length; i++) {
        if ( apartments[i].className.includes('active') ) {
            apartments[i].className = 'block-3__apartment';
        }
    }

    apartments[n].className = 'block-3__apartment active';
}

function apartmentParamsNav(n) {
    const apartmentParams = document.querySelectorAll('.block-3__apartment-param');

    for (let i = 0; i < apartmentParams.length; i++) {
        if ( apartmentParams[i].className.includes('active') ) {
            apartmentParams[i].className = 'block-3__apartment-param';
        }
    }

    apartmentParams[n].className = 'block-3__apartment-param active';

    showCurrentApartment(n)
}

//block-4

const docs = 7;
const portion = 3;
const portionsNumber = Math.ceil(docs / portion);

let index4 = 0;
showDocs(index4);

function controlDocs(n) {
    showDocs(index4 += n);		
}

function showCurrentDocs(n) {
    showDocs(index4 = n);
}

function showDocs(n) {
    if (n >= portionsNumber) {
        index4 = 0;
    }
    if (n < 0) {
        index4 = portionsNumber - 1;
    }

    const carouselIndicators = document.querySelector('.block-4__carousel-indicators').children;
    for (let i = 0; i < portionsNumber; i++) {
        carouselIndicators[i].className = 'block-4__carousel-indicator';
    }
    carouselIndicators[index4].className = `${carouselIndicators[index4].className} active`;
}