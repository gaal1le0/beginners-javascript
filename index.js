// Arrays indicados (Corregidos)
let surnames = ["10", "juan", "@12", "null", "antonioPerezDelCarmen", "abcdefghtioiasoisdjads", "Manolo", "Perez", "Soledad"];
let excuses = ["OMG?", "What’s going on?", "How much is it?", "18", null, "undefined", function(){}];
let names = ["Jeferson", "Matilda", "R@fael", "1van", "Pep3", "Loquesea", "Fel1berto", "Pepit@", "D@M"];

// Genera un número aleatorio entre 0 y la longitud del array
function randomNumber(array){
    return Math.floor(Math.random() * array.length);
}

// Devuelve una copia temporal del array sin los elementos que no son string
function filter(array){

    let clean = [];

    for (let i = 0; i < array.length; i++){
        if (typeof(array[i]) === "string"){
            clean.push(array[i]);
        }
    }

    return clean;
}

// Genera una excusa a partir de un nombre, apellido y excusa
function excuseGenerator(names, surnames, excuses){

    // Filtra los arrays para eliminar los elementos que no son strings
    let filteredNames = filter(names);
    let filteredSurnames = filter(surnames);
    let filteredExcuses = filter(excuses);

    // Selecciona un string aleatorio del array "names"
    let name = filteredNames[randomNumber(filteredNames)];

	// Selecciona un string aleatorio del array "surnames"
    let surname = filteredSurnames[randomNumber(filteredSurnames)];

	// Selecciona un string aleatorio del array "excuses"
    let excuse = filteredExcuses[randomNumber(filteredExcuses)];

	// Devuelve la excusa completa
    return `${name} ${surname} ${excuse}`;
}

// Contea las repeticiones de una letra, comenzando por la letra indicada y se repite recursivamente hasta llegar a la "z"
function letterCounter(letterCode, array){

    let filtered = filter(array);
    let letter = String.fromCharCode(letterCode);
    let iterations = 0;

    for (let i = 0; i < filtered.length; i++){
        for (let j = 0; j < filtered[i].length; j++){
            // Convierte las letras a lowercase para hacer case-insensitive el resultado.
            if (filtered[i][j].toLowerCase() === letter){
                iterations++
            }
        }
    }

    let result = `The letter "${letter}" is repeated ${iterations} times.\n`

    if (letterCode < 122){
        return result + letterCounter(letterCode + 1, array);
    } else{
        return result;
    }
}

// Cuenta cuantas repeticiones de cada letra hay en el array dado
function lettersInArray(array){
    // Letra en ASCII, para recorrer recursivamente el alfabeto en la función. 97 = "a"
    return letterCounter(97, array);
}

// Suprime las repeticiones en un array dado
function noRepeat(array){

    let filtered = filter(array);
    let nonRepeated = [];

    for (let i = 0; i < array.length; i++){
        let word = array[i];
        let repeated = false;

        for (let j = 0; j < filtered.length; j++){
            if (nonRepeated[j] === word){
                repeated = true;
            }
        }

        if (repeated === false){
            nonRepeated.push(word);
        }
    }

    // Si no había valores repetidos, lo indica con un mensaje. Si los había, devuelve el array sin repeticiones.
    if (nonRepeated.length === array.length){
        return "There were no repetitions in this array"
    } else{
        return nonRepeated;
    }
}

// Invierte todos los valores del array dado
function reverse(array){

    let reversed = [];
    let filtered = filter(array);

    for (let i = 0; i < filtered.length; i++){
        let word = "";

        for (let j = (filtered[i].length - 1); j >= 0; j--){
            word = word.concat(filtered[i][j]);
        }

        reversed.push(word);
    }

    return reversed;
}