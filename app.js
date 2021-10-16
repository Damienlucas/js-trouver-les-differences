// --------------------------------------------------bootstrap-----------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// ----------------------------------------------jeu-----------------------------------------------------
// ---------------------------------------------choix------------------------------------------------
const jouerSteampunk = document.getElementById('jouer-steampunk');
const contBoxPhotos = document.getElementById('cont-box-photos');
const choix = document.getElementById('choix');
const menuAccueil = document.getElementById('menu-accueil');
var progressBar = document.querySelector('.progress-bar');
var decouvert
var choixDifficulte
var decouvertPourcent

menuAccueil.addEventListener('click', () => {
    document.location.reload(true);
})

function option(){
jouerSteampunk.addEventListener("click", function() {
    contBoxPhotos.style.display = "block";
    choix.style.display = "none";
    choixDifficulte = 10;
    decouvert = 0;
    steampunk();
})
}
option();



const photoOriginal = document.getElementById('photo-original');
const photoModifiee = document.getElementById('photo-modifiee');

// --------------------------------------------------progress bar----------------------------------
var scoreValeur = document.getElementById('score-valeur');


// --------------------------------------------fin progress bar-----------------------------------
// ----------------------------------------------------photo steampunk------------------------------
function steampunk(){
var imgSteampunk = document.createElement('img');
var imgSteampunkModif = document.createElement('img');
var boutArme = document.createElement('img');
var boutCeinture = document.createElement('img');
var boutRajout = document.createElement('img');
var coeur = document.createElement('img');
var fils = document.createElement('img');
var gachette = document.createElement('img');
var lacet = document.createElement('img');
var medaille = document.createElement('img');
var lacetRajout = document.createElement('img');
var verresLunette = document.createElement('img');

var morceau1 = false;
var morceau2 = false;
var morceau3 = false;
var morceau4 = false;
var morceau5 = false;
var morceau6 = false;
var morceau7 = false;
var morceau8 = false;
var morceau9 = false;
var morceau10 = false;


scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
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

coeur.setAttribute('src', './images/steampunk/coeur.png');
coeur.setAttribute('alt', 'coeur du bustier');
coeur.id = "coeur";
photoModifiee.appendChild(coeur);

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
    if(morceau1 == false){
        boutArme.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau1 = true;
    }
})
boutCeinture.addEventListener("click", function() {
    if(morceau2 == false){
        boutCeinture.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau2 = true;
    }
})
coeur.addEventListener("click", function() {
    if(morceau3 == false){
        coeur.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau3 = true;
    }
})
fils.addEventListener("click", function() {
    if(morceau4 == false){
        fils.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau4 = true;
    }
})
gachette.addEventListener("click", function() {
    if(morceau5 == false){
        gachette.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau5 = true;
    }
})
lacet.addEventListener("click", function() {
    if(morceau6 == false){
        lacet.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau6 = true;
    }
})
medaille.addEventListener("click", function() {
    if(morceau7 == false){
        medaille.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau7 = true;
    }
})
verresLunette.addEventListener("click", function() {
    if(morceau8 == false){
        verresLunette.style.opacity = "1";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau8 = true;
    }
})
lacetRajout.addEventListener("click", function() {
    if(morceau9 == false){
        lacetRajout.style.opacity = "0";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau9 = true;
    }
})
boutRajout.addEventListener("click", function() {
    if(morceau10 == false){
        boutRajout.style.opacity = "0";
        decouvert++;
        scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
        decouvertPourcent = decouvert * 10;
        progressBar.style.width= decouvertPourcent+"%";
        progressBar.setAttribute('aria-valuenow', decouvertPourcent);
        morceau10 = true;
    }
})
}
// -------------------------------------------------fin photo steampunk------------------------------

