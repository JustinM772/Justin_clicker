// Student Counter Project
let b = document.getElementById("count-el");
let count = 0;
let x = 1;
function increment() {
    count = count + x;
    b.innerHTML = count;
}
let savedEntries = [];
function save() {
    savedEntries.push(count);
    let p = document.getElementsByTagName("p")[0];
    let text = "Previous entries: ";
    for (let i = 0; i < savedEntries.length; i++) {
        text += savedEntries[i] + " - ";
    }
    p.innerHTML = text;
}
function decrement() {
    count = count - x;
    b.innerHTML = count;
}
function change() {
    let newIncrement = prompt("New increment? ");
    x = parseInt(newIncrement);
}
