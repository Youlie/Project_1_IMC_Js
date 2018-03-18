var prompt = require('prompt');
 
// 
// Start the prompt 
// 
prompt.start();

// 
// Get two properties from the user: username and email 
console.log("L’IMC (indice de masse corporelle) évalue la santé pondérale (corpulence)"
+"Il permet notamment de mettre en évidence le surpoids ou l’obésité."
+"Le calcul de l’IMC n’est qu’un critère indicatif car la masse osseuse et"
+"musculaire n’est pas prise en compte."
+":");

console.log("BMI (Body Mass Index) measures body weight health."
+"In particular, it helps to highlight overweight or obesity."
+"The calculation of BMI is only an indicative criterion because bone mass and"
+"is not taken into account.");

console.log("Nous allons maintenant vous demander de saisir quelques informations personnelles afin de calculer votre  indice de masse corporelle.");
console.log("We will now ask you to enter some personal information to calculate your body mass index.")
// 
prompt.get(['username', 'email','poids_Kg', 'taille_M'], function (err, result) {
  // 
  // Log the results. 
  // 
  
  console.log("result", result);
  console.log('Command-line input received:');
  console.log('  Your username: ' + result.username);
  console.log('  Your email: ' + result.email);
  console.log('  Your weight in kilogram: ' + result.poids_Kg);
  console.log('  Your height in meters: ' + result.taille_M);

  var T = result.taille_M ;
  var P = result.poids_Kg ;
  var imc = P/(T*T);

  console.log('  Your IMC is: ' + imc);
});