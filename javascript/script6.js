
DateMidnight today = new DateMidnight();
DateMidnight birthday = new DateMidnight(1985, 6, 15);
int yearsCount = Years.yearsBetween(birthday, today).getYears();









/*var naissance = prompt("votre date de naissance");
var jour = prompt("saisir la date du jour svp");


var age = (jour - naissance);
 alert(age+" ans");*/



 /*var dateani = new Date('0000-00-00');
  prompt("votre date de naissance");

 var datejour = new Date('2012-10-29');
  prompt("saisir la date du jour svp");

 var tmp = (datejour - dateani);
  alerte(tmp+" ans");
*/
/*
  function dateDiff(date1, date2){
      var diff = {}                           // Initialisation du retour
      var tmp = date2 - date1;

      tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
      diff.sec = tmp % 60;                    // Extraction du nombre de secondes

      tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
      diff.min = tmp % 60;                    // Extraction du nombre de minutes

      tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
      diff.hour = tmp % 24;                   // Extraction du nombre d'heures

      tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
      diff.day = tmp;

      return diff;
  }

*/

 /*function calcul_age(date){



     var	jour_n = ("jour");
     var	mois_n =("mois").value;
     var	annee_n = ("annee");
     alert(mois_n = mois+(c'est bientôt votre aniversaire !), mois_n < 2 +(un peu de patience...), mois > 6 + (t'as le temps);
 }*/
 /*function age(birthday)
{
  birthday = new Date(birthday);
  return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
}*/
/*var date = new Date();*/
