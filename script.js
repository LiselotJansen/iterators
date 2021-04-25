console.log("-------------------");
// OPDRACHT: ITERATORS - OUDE EN NIEUWE STIJL:
// OUDE STIJL: LOOPS

/*// WHILE LOOP: 
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (colors[i]) {
    console.log(colors[i]);
    i++; // als ik hier een return statement toevoeg werkt hij niet meer. waarom? zit een return alleen in een function
}
*/


/*// FOR LOOP:
const colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
for (colors[i]; i < colors.length; i++){
    console.log(colors[i]);
};
*/


// NIEUWE STIJL: ARRAY METHODS:
/* const colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element));
*/

// VRAGEN.
// 1. HOEVEEL REGELS NEEMT HET IN BESLAG:
    // WHILE LOOP: 5 REGELS
    // FOR LOOP: 4 REGELS
// 2. HOEVEEL REGELS NEEMT ARRAY METHOD IN BESLAG?
    // 1 REGEL. 
// 3. VOORDELEN ARRAY METHOD: MINDER FOUTGEVOELING, BETER LEESBAAR. OMDAT ER MINDER VALUES INZITTEN. MINDER REGELS. 
// 4. NEE JE KUNT EEN ARRAY METHOD NIET GEBRUIKEN OP EEN OBJECT. 
    // ZIE OPDRACHT HIERONDER: NEE VOLGENS MIJ IS DIT GEEN ITERATIE. JE DOET HET VOOR ELK OPBJECT IN. 

//  TOCH ALLE PROPERTIES VAN EEN OBJECT NAAR DE CONSOLE LOGGEN MET "FOR...IN-STATEMENT"
const person = {voornaam:"John", achternaam:"Doe", age:25, adress:"Dorpsstraat 1", woonplaat:"Mijn Dorp"}; 
let i;
for (i in person) {
   console.log(person[i]);
}

