let librarySystem = [
    ["300", "Cats", "I am Sam"],
    ["Cat in the Hat", "Oceans 8", "Waterworld"],
    ["The Slient Sea", "The Slient Paitent", "The Cellar"],
];

console.log(
    librarySystem[0],
    librarySystem[1], 
    librarySystem[2]);

let row= (0);
let items= (0);
console.log(librarySystem[row][items]);


for (let i = 0; i < librarySystem.length; i++) {
    for (let j = 0; j < librarySystem[i].length; j++) {
    console.log(librarySystem[i][j]);
    }
   }