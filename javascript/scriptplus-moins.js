var = min 1;
var = max 100;
var nb = Math.floor(Math.random() *(max - min + 1))+ min;
console.log(nb);

/*function nb_aleatoire(min, max) {
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

var de = nb_aleatoire(1, 6);
alert("Vous lancez un dé et obtenez " + de);
var nb = nb_aleatoire(1, 100);  // nb a deviner

var cpt = 0;    // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 1 et 100.';


do{
     saisie = prompt(msg);
     cpt++;
     // message a afficher au prochain tour :

     if(saisie > nb)
          msg = "C'est moins";

     else
          msg = "C'est plus";
}

while(saisie != nb);
alert("Bravo, tu as gagne en " + cpt + " coups !");*/
