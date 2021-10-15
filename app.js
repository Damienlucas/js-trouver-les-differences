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