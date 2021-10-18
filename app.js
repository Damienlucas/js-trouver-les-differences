// --------------------------------------------------bootstrap-----------------------------
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// ----------------------------------------------jeu-----------------------------------------------------
// ---------------------------------------------choix------------------------------------------------
const photoOriginal = document.getElementById('photo-original');
const photoModifiee = document.getElementById('photo-modifiee');
const jouerSteampunk = document.getElementById('jouer-steampunk');
const jouerChinaTown = document.getElementById('jouer-chinaTown');
const contBoxPhotos = document.getElementById('cont-box-photos');
const choix = document.getElementById('choix');
const menuAccueil = document.getElementById('menu-accueil');
const solution = document.getElementById('solution');
const items = document.getElementsByClassName('items');
var progressBar = document.querySelector('.progress-bar');
var decouvert
var choixDifficulte
var decouvertPourcent
var morceau1;
var morceau2;
var morceau3;
var morceau4;
var morceau5;
var morceau6;
var morceau7;
var morceau8;
var morceau9;
var morceau10;
var jouer = false;

menuAccueil.addEventListener('click', () => {
    document.location.reload(true);
})
solution.addEventListener('click', () => {
    // photoModifiee.style.opacity = "1";
    photoModifiee.style.backgroundColor = "blue";
})

function option(){
jouerSteampunk.addEventListener("click", function() {
    if(jouer==false){
        contBoxPhotos.style.display = "block";
        choix.style.display = "none";
        choixDifficulte = 10;
        decouvert = 0;
        morceau1 = false;
        morceau2 = false;
        morceau3 = false;
        morceau4 = false;
        morceau5 = false;
        morceau6 = false;
        morceau7 = false;
        morceau8 = false;
        morceau9 = false;
        morceau10 = false;
        jouer = true;
        steampunk();
    }
})
jouerChinaTown.addEventListener("click", function() {
    if(jouer==false){
        contBoxPhotos.style.display = "block";
        choix.style.display = "none";
        choixDifficulte = 10;
        decouvert = 0;
        morceau1 = false;
        morceau2 = false;
        morceau3 = false;
        morceau4 = false;
        morceau5 = false;
        morceau6 = false;
        morceau7 = false;
        morceau8 = false;
        morceau9 = false;
        morceau10 = false;
        jouer = true;
        chinaTown();
    }
})
}
option();

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
boutArme.className = "items";
photoModifiee.appendChild(boutArme);


boutCeinture.setAttribute('src', './images/steampunk/bouton-ceinture.png');
boutCeinture.setAttribute('alt', 'bout de l arme');
boutCeinture.id = "bouton-ceinture";
boutCeinture.className = "items";
photoModifiee.appendChild(boutCeinture);

coeur.setAttribute('src', './images/steampunk/coeur.png');
coeur.setAttribute('alt', 'coeur du bustier');
coeur.id = "coeur";
coeur.className = "items";
photoModifiee.appendChild(coeur);

fils.setAttribute('src', './images/steampunk/fils-electriques.png');
fils.setAttribute('alt', 'fils éléctriques');
fils.id = "fils-electriques";
fils.className = "items";
photoModifiee.appendChild(fils);

gachette.setAttribute('src', './images/steampunk/gachette.png');
gachette.setAttribute('alt', 'gachette');
gachette.id = "gachette";
gachette.className = "items";
photoModifiee.appendChild(gachette);

lacet.setAttribute('src', './images/steampunk/lacet.png');
lacet.setAttribute('alt', 'lacet de droite');
lacet.id = "lacet";
lacet.className = "items";
photoModifiee.appendChild(lacet);

medaille.setAttribute('src', './images/steampunk/medaille.png');
medaille.setAttribute('alt', 'morceau de medaille');
medaille.id = "medaille";
medaille.className = "items";
photoModifiee.appendChild(medaille);

lacetRajout.setAttribute('src', './images/steampunk/rajout-lacet.png');
lacetRajout.setAttribute('alt', 'rajout de lacet à gauche');
lacetRajout.id = "rajout-lacet";
lacetRajout.className = "items";
photoModifiee.appendChild(lacetRajout);

boutRajout.setAttribute('src', './images/steampunk/rajout-bouton.png');
boutRajout.setAttribute('alt', 'rajout d un bouton à gauche');
boutRajout.id = "rajout-bouton";
boutRajout.className = "items";
photoModifiee.appendChild(boutRajout);

verresLunette.setAttribute('src', './images/steampunk/verres-lunettes.png');
verresLunette.setAttribute('alt', 'verres des lunettes');
verresLunette.id = "verres-lunettes";
verresLunette.className = "items";
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
// --------------------------------------photo ruelle asiatique-------------------------------------
function chinaTown(){
    var imgChinaTown = document.createElement('img');
    var imgChinaTownModif = document.createElement('img');
    var cones = document.createElement('img');
    var dame = document.createElement('img');
    var ecureuil = document.createElement('img');
    var forza = document.createElement('img');
    var photomaton = document.createElement('img');
    var pigeon = document.createElement('img');
    var pomme = document.createElement('img');
    var t = document.createElement('img');
    var tel = document.createElement('img');
    var cableGauche = document.createElement('img');
    
    scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
    imgChinaTown.setAttribute('src', './images/china town/china town.jpg');
    imgChinaTown.setAttribute('alt', 'ruelle asiatique');
    imgChinaTown.id = "china-town";
    photoOriginal.appendChild(imgChinaTown);
    
    imgChinaTownModif.setAttribute('src', './images/china town/china-town-modifie.jpg');
    imgChinaTownModif.setAttribute('alt', 'ruelle asiatique modifiée');
    imgChinaTownModif.id = "china-town-modif";
    photoModifiee.appendChild(imgChinaTownModif);
    
    cones.setAttribute('src', './images/china town/cones.png');
    cones.setAttribute('alt', 'cones de traveaux');
    cones.id = "cones";
    cones.className = "items";
    photoModifiee.appendChild(cones);
    
    
    dame.setAttribute('src', './images/china town/dame.png');
    dame.setAttribute('alt', 'dame');
    dame.id = "dame";
    dame.className = "items";
    photoModifiee.appendChild(dame);
    
    ecureuil.setAttribute('src', './images/china town/ecureuil.png');
    ecureuil.setAttribute('alt', 'ecureuil');
    ecureuil.id = "ecureuil";
    ecureuil.className = "items";
    photoModifiee.appendChild(ecureuil);
    
    forza.setAttribute('src', './images/china town/forza.png');
    forza.setAttribute('alt', 'enseigne forza');
    forza.id = "forza";
    forza.className = "items";
    photoModifiee.appendChild(forza);
    
    photomaton.setAttribute('src', './images/china town/photomaton.png');
    photomaton.setAttribute('alt', 'affiche du photomaton');
    photomaton.id = "photomaton";
    photomaton.className = "items";
    photoModifiee.appendChild(photomaton);
    
    pigeon.setAttribute('src', './images/china town/pigeon.png');
    pigeon.setAttribute('alt', 'pigeon');
    pigeon.id = "pigeon";
    pigeon.className = "items";
    photoModifiee.appendChild(pigeon);
    
    pomme.setAttribute('src', './images/china town/pomme.png');
    pomme.setAttribute('alt', 'pomme');
    pomme.id = "pomme";
    pomme.className = "items";
    photoModifiee.appendChild(pomme);
    
    t.setAttribute('src', './images/china town/t.png');
    t.setAttribute('alt', 'enseigne t');
    t.id = "t";
    t.className = "items";
    photoModifiee.appendChild(t);
    
    tel.setAttribute('src', './images/china town/tel.png');
    tel.setAttribute('alt', 'numéro de téléphone');
    tel.id = "tel";
    tel.className = "items";
    photoModifiee.appendChild(tel);
    
    cableGauche.setAttribute('src', './images/china town/cable-gauche.png');
    cableGauche.setAttribute('alt', 'cable à gauche de la photo');
    cableGauche.id = "cable-gauche";
    cableGauche.className = "items";
    photoModifiee.appendChild(cableGauche);
    
    cones.addEventListener("click", function() {
        if(morceau1 == false){
            cones.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau1 = true;
        }
    })
    dame.addEventListener("click", function() {
        if(morceau2 == false){
            dame.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau2 = true;
        }
    })
    ecureuil.addEventListener("click", function() {
        if(morceau3 == false){
            ecureuil.style.opacity = "0";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau3 = true;
        }
    })
    forza.addEventListener("click", function() {
        if(morceau4 == false){
            forza.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau4 = true;
        }
    })
    photomaton.addEventListener("click", function() {
        if(morceau5 == false){
            photomaton.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau5 = true;
        }
    })
    pigeon.addEventListener("click", function() {
        if(morceau6 == false){
            pigeon.style.opacity = "0";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau6 = true;
        }
    })
    pomme.addEventListener("click", function() {
        if(morceau7 == false){
            pomme.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau7 = true;
        }
    })
    t.addEventListener("click", function() {
        if(morceau8 == false){
            t.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau8 = true;
        }
    })
    tel.addEventListener("click", function() {
        if(morceau9 == false){
            tel.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau9 = true;
        }
    })
    cableGauche.addEventListener("click", function() {
        if(morceau10 == false){
            cableGauche.style.opacity = "1";
            decouvert++;
            scoreValeur.textContent = `${decouvert} sur ${choixDifficulte}`;
            decouvertPourcent = decouvert * 10;
            progressBar.style.width= decouvertPourcent+"%";
            progressBar.setAttribute('aria-valuenow', decouvertPourcent);
            morceau10 = true;
        }
    })
    }

// -------------------------------------fin ruelle asiatique-----------------------------------------
