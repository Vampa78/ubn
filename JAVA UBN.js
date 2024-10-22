// script.js

// Récupère les éléments du DOM (Document Object Model)
const FitLink = document.getElementById("Fit-link");  // Lien "Visiter le Nova Fit"
const XLink = document.getElementById("X-link");  // Lien "Visiter le Nova Fit"
const StreetLink = document.getElementById("Street-link");  // Lien "Visiter le Nova Fit"
const FitContainer = document.getElementById("Fit-container");  // Conteneur de la page d'accueil
const PfitContainer = document.getElementById("Pfit-container");  // Conteneur de la page Nova Fit
const XContainer = document.getElementById("X-container");  // Conteneur de la page d'accueil
const PxContainer = document.getElementById("Px-container");  // Conteneur de la page Nova Fit
const StreetContainer = document.getElementById("Street-container");  // Conteneur de la page d'accueil
const PstreetContainer = document.getElementById("Pstreet-container");  // Conteneur de la page Nova Fit
const backToHomeBtn = document.getElementById("back-to-home-btn");  // Bouton "Revenir à l'accueil"
const backToHomeBtn2 = document.getElementById("back-to-home-btn2");  // Bouton "Revenir à l'accueil"
const backToHomeBtn3 = document.getElementById("back-to-home-btn3");  // Bouton "Revenir à l'accueil"
const images = [
    'https://www.footkorner.com/cdn/shop/products/footkorner-veste-capuche-nike-tech-fleece-beige-blanc-bleu-DV0537-252_2_1152x1440_crop_center.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Cigv5cYW3jP6kFkJkU6b0Bg_8y7OGiL-Xg&s',  // Remplace par tes propres chemins d'images
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjROEMWXQz9abSWISEgnCK2FLKKrucRQ76Lg&s',
];
const imagesNovaX = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUkhfRYOpfudm7FyhHtPp2eAtGftCE0k4qQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pjRRlwVg2vBeejoChlCiFvhYgSxEchSwzw&s',  // Remplace par tes propres chemins d'images
    'https://i8.amplience.net/t/jpl/jdfr_product_list?plu=jd_700474_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto'
];

// Tableau avec les chemins des images pour Nova Street
const imagesNovaStreet = [
    'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ac588224-0b81-41fa-b150-a736e79fb6a4/M+NK+IMP+LGHT+WINDRNNER+JKT.png',
    'https://mistertee.fr/sites/default/files/styles/mistertee_product_display_medium/public/pa360_2017.jpg',  // Remplace par tes propres chemins d'images
    'https://images.asos-media.com/products/nike-windrunner-veste-coupe-vent-bleu-marine/206060425-1-navy?$n_750w$&wid=750&hei=750&fit=crop'
];
// Ajoute un événement au clic sur le lien "Visiter le Nova Fit"
FitLink.addEventListener("click", function(event) {
    // Empêche le comportement par défaut du lien (la redirection)
    event.preventDefault();
    
    // Masque la section de démarrage (page d'accueil)
    FitContainer.classList.add("hide");
    XContainer.classList.add("hide");
    StreetContainer.classList.add("hide");
    
    // Affiche la section "Nova Fit"
    PfitContainer.classList.remove("hide");
    // Ajoute un événement au clic sur le bouton "Revenir à l'accueil"
backToHomeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Masque la section Nova Fit (quiz)
    PfitContainer.classList.add("hide");
    // Réaffiche la page d'accueil
    FitContainer.classList.remove("hide");
    XContainer.classList.remove("hide");
    StreetContainer.classList.remove("hide");
    });
});
// Ajoute un événement au clic sur le lien "Visiter le Nova X"
XLink.addEventListener("click", function(event) {
    // Empêche le comportement par défaut du lien (la redirection)
    event.preventDefault();
    
    // Masque la section de démarrage (page d'accueil)
    FitContainer.classList.add("hide");
    XContainer.classList.add("hide");
    StreetContainer.classList.add("hide");
    
    // Affiche la section "Nova X"
    PxContainer.classList.remove("hide");
    // Ajoute un événement au clic sur le bouton "Revenir à l'accueil"
backToHomeBtn2.addEventListener("click", function(event) {
    event.preventDefault();
    // Masque la section Nova X
    PxContainer.classList.add("hide");
    // Réaffiche la page d'accueil
    FitContainer.classList.remove("hide");
    XContainer.classList.remove("hide");
    StreetContainer.classList.remove("hide");
    });
});
// Ajoute un événement au clic sur le lien "Visiter le Nova Street"
StreetLink.addEventListener("click", function(event) {
    // Empêche le comportement par défaut du lien (la redirection)
    event.preventDefault();
    
    // Masque la section de démarrage (page d'accueil)
    FitContainer.classList.add("hide");
    XContainer.classList.add("hide");
    StreetContainer.classList.add("hide");
    
    // Affiche la section "Nova Street"
    PstreetContainer.classList.remove("hide");
    // Ajoute un événement au clic sur le bouton "Revenir à l'accueil"
backToHomeBtn3.addEventListener("click", function(event) {
    event.preventDefault();
    // Masque la section Nova Street
    PstreetContainer.classList.add("hide");
    // Réaffiche la page d'accueil
    FitContainer.classList.remove("hide");
    XContainer.classList.remove("hide");
    StreetContainer.classList.remove("hide");
    });
});
// Variable pour garder la trace de l'image actuellement affichée
let currentImageIndex = 0;

// Sélectionne l'élément img de la page
const slideshowImage = document.getElementById('slideshow-image');

// Ajoute un événement de clic sur l'image
slideshowImage.addEventListener('click', function() {
    // Incrémente l'index de l'image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    // Change l'image affichée
    slideshowImage.src = images[currentImageIndex];
    // Met à jour l'index d'image pour Nova Street (par exemple 1/3)
    indexNovafit.textContent = (currentImageIndex + 1) + '/' + images.length;
});

// Variables pour garder la trace des images actuellement affichées
let currentImageIndexNovaX = 0;
let currentImageIndexNovaStreet = 0;

// Sélectionne les éléments img pour Nova X et Nova Street
const slideshowNovaX = document.getElementById('slideshow-nova-x');
const slideshowNovaStreet = document.getElementById('slideshow-nova-street');
const indexNovaStreet = document.getElementById('nova-street-index');
const indexNovaX = document.getElementById('nova-x-index');
const indexNovafit = document.getElementById('nova-fit-index');

// Ajoute un événement de clic sur l'image Nova X
slideshowNovaX.addEventListener('click', function() {
    // Incrémente l'index de l'image pour Nova X
    currentImageIndexNovaX = (currentImageIndexNovaX + 1) % imagesNovaX.length;
    
    // Change l'image affichée pour Nova X
    slideshowNovaX.src = imagesNovaX[currentImageIndexNovaX];
    
    // Met à jour l'index d'image pour Nova X (par exemple 2/3)
    indexNovaX.textContent = (currentImageIndexNovaX + 1) + '/' + imagesNovaX.length;
});

// Ajoute un événement de clic sur l'image Nova Street
slideshowNovaStreet.addEventListener('click', function() {
    // Incrémente l'index de l'image pour Nova Street
    currentImageIndexNovaStreet = (currentImageIndexNovaStreet + 1) % imagesNovaStreet.length;
    
    // Change l'image affichée pour Nova Street
    slideshowNovaStreet.src = imagesNovaStreet[currentImageIndexNovaStreet];
    // Met à jour l'index d'image pour Nova Street (par exemple 1/3)
    indexNovaStreet.textContent = (currentImageIndexNovaStreet + 1) + '/' + imagesNovaStreet.length;
});