// --------------------------------------------------bootstrap-----------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// ----------------------------------------------jeu-----------------------------------------------------
// ---------------------------------------------choix------------------------------------------------
const jouerSteampunk = document.getElementById('jouer-steampunk');
const contBoxPhotos = document.getElementById('cont-box-photos');
const choix = document.getElementById('choix');
const menuAccueil = document.getElementById('menu-accueil');

menuAccueil.addEventListener('click', () => {
    document.location.reload(true);
})

jouerSteampunk.addEventListener("click", function() {
    contBoxPhotos.style.display = "block";
    choix.style.display = "none";
})


const photoOriginal = document.getElementById('photo-original');
const photoModifiee = document.getElementById('photo-modifiee');

var imgSteampunk = document.createElement('img');
var imgSteampunkModif = document.createElement('img');
var boutArme = document.createElement('img');
var boutCeinture = document.createElement('img');
var boutRajout = document.createElement('img');
var dent = document.createElement('img');
var fils = document.createElement('img');
var gachette = document.createElement('img');
var lacet = document.createElement('img');
var medaille = document.createElement('img');
var lacetRajout = document.createElement('img');
var verresLunette = document.createElement('img');

imgSteampunk.setAttribute('src', './images/steampunk/steampunk.jpg');
imgSteampunk.setAttribute('alt', 'portrait steampunk d une femme armée');
imgSteampunk.id = "steampunk";
photoOriginal.appendChild(imgSteampunk);

imgSteampunkModif.setAttribute('src', './images/steampunk/steampunk-modifie.jpg');
imgSteampunkModif.setAttribute('alt', 'portrait modifié steampunk d une femme armée');
imgSteampunkModif.id = "steampunk-modif";
photoModifiee.appendChild(imgSteampunkModif);

boutArme.setAttribute('src', './images/steampunk/bout-arme.png');
boutArme.setAttribute('alt', 'bout de l arme');
boutArme.id = "bout-arme";
photoModifiee.appendChild(boutArme);


boutCeinture.setAttribute('src', './images/steampunk/bouton-ceinture.png');
boutCeinture.setAttribute('alt', 'bout de l arme');
boutCeinture.id = "bouton-ceinture";
photoModifiee.appendChild(boutCeinture);

dent.setAttribute('src', './images/steampunk/dent.png');
dent.setAttribute('alt', 'dent');
dent.id = "dent";
photoModifiee.appendChild(dent);

fils.setAttribute('src', './images/steampunk/fils-electriques.png');
fils.setAttribute('alt', 'fils éléctriques');
fils.id = "fils-electriques";
photoModifiee.appendChild(fils);

gachette.setAttribute('src', './images/steampunk/gachette.png');
gachette.setAttribute('alt', 'gachette');
gachette.id = "gachette";
photoModifiee.appendChild(gachette);

lacet.setAttribute('src', './images/steampunk/lacet.png');
lacet.setAttribute('alt', 'lacet de droite');
lacet.id = "lacet";
photoModifiee.appendChild(lacet);

medaille.setAttribute('src', './images/steampunk/medaille.png');
medaille.setAttribute('alt', 'morceau de medaille');
medaille.id = "medaille";
photoModifiee.appendChild(medaille);

lacetRajout.setAttribute('src', './images/steampunk/rajout-lacet.png');
lacetRajout.setAttribute('alt', 'rajout de lacet à gauche');
lacetRajout.id = "rajout-lacet";
photoModifiee.appendChild(lacetRajout);

boutRajout.setAttribute('src', './images/steampunk/rajout-bouton.png');
boutRajout.setAttribute('alt', 'rajout d un bouton à gauche');
boutRajout.id = "rajout-bouton";
photoModifiee.appendChild(boutRajout);

verresLunette.setAttribute('src', './images/steampunk/verres-lunettes.png');
verresLunette.setAttribute('alt', 'verres des lunettes');
verresLunette.id = "verres-lunettes";
photoModifiee.appendChild(verresLunette);

boutArme.addEventListener("click", function() {
    boutArme.style.opacity = "1";
})
boutCeinture.addEventListener("click", function() {
    boutCeinture.style.opacity = "1";
})
dent.addEventListener("click", function() {
    dent.style.opacity = "1";
})
fils.addEventListener("click", function() {
    fils.style.opacity = "1";
})
gachette.addEventListener("click", function() {
    gachette.style.opacity = "1";
})
lacet.addEventListener("click", function() {
    lacet.style.opacity = "1";
})
medaille.addEventListener("click", function() {
    medaille.style.opacity = "1";
})
verresLunette.addEventListener("click", function() {
    verresLunette.style.opacity = "1";
})
lacetRajout.addEventListener("click", function() {
    lacetRajout.style.opacity = "0";
})
boutRajout.addEventListener("click", function() {
    boutRajout.style.opacity = "0";
})

