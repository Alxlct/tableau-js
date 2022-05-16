let elementToAdd = document.getElementById('elementToAdd')
// console.log (elementToAdd) (equivalent de border dark en JS, permet de tout vérifier)

const arrayToShow = document.getElementById('arrayToShow')
// console.log (arrayToShow)

let myArray = []



function saveElement() {
    myArray.push(elementToAdd.value)
    console.log(myArray)
}
localStorage.setItem("mon-tableau", myArray);

function showArray() {
    arrayToShow.innerHTML = `
    <p id="arrayToShow" class="h1">${myArray}</p>
    `
}

function arrayErase() {
    let elementToErase = document.getElementById('elementToErase')
    // indexOf = l'index du tableau 
    myArray.splice(myArray.indexOf(elementToErase.value), 1)
}