


/*var pseudos = prompt("votre pseudos svp"); {
  console.log("votre pseudos svp "+pseudos);
}


var mdp = prompt("votre mot de passe"); {
  console.log("votre mot de passe "+mdp);
}*/

var pseudosadmin = "michael";
var mdpadmin = "1234";

  while (pseudos != pseudosadmin) {
    var pseudos = prompt ("votre pseudos svp");
     if (pseudos != pseudosadmin) {
       alert("erreur recommencer !!!");
       console.log("indice : michael");
     }
  }
  while (mdp != mdpadmin) {
    var mdp = prompt ("votre mot de passe");
       if (mdp != mdpadmin) {
         alert("mauvais mot de passe  !!!");
         console.log("indice : 1234");
  }
  else {
    alert("connexion reussie !!!")
  }
  }
