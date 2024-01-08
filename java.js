// declaration de variable aléatoire entre 1 et 100
var number = Math.floor(Math.random() * 100) + 1;
console.log(number)

// demander à l'utilisateur d'assigner une valeur à userNumber
var userNumber = prompt("donnez un nombre");

// variable i pour notre boucle
var i = 0;

// boucle pour verifier si le nombre donné par l'utilisateur est faux, et si le nombre d'essai et 5 fois
while (userNumber != number && i < 5) {
    //si le nombre donné par l'utilisateur < nombre, alert "trop basse"
    if (userNumber < number) {
        alert("trop basse")
    }
    //si le nombre donné par l'utilisateur < nombre, alert "trop haute"
    else if (userNumber > number) {
        alert("trop haute");
    }
    // demander à l'utilisateur de donner une autre valeur si la valeur precedente est fausse
    var userNumber = prompt("donnez une autre valeur");
    // incrémenter la valeur de i par 1
    i++;
}
// si le nombre donné par l'utilisateur est faux afficher "perdu!"
if (i >= 5) {
    alert("Perdu!")
}
// si le nombre donné par l'utilisateur est juste afficher "bravo!"
else {
    alert("Bravo!");
}












