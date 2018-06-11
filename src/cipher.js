//var phrase = prompt("Ingresa el texto");
function cipher() {
    let phrase = document.getElementById("txt").value.toUpperCase();
    let key = parseInt(document.getElementById("salto").value);
console.log(phrase,key);
    //mensaje = document.getElementById('texto').value;
    let string = [];
    //phrase = phrase.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i < phrase.length; i++) {
        let character = String.fromCharCode((phrase.charCodeAt(i) -65+key)%26+65); //declaramos la Variable character que leer� la palabra y con String.fromCharCode nos devolver� la cadena mediante el uso de secuencia de valores//
console.log(character);
        string.push(character);

        //let joinLetters = string.join("");
    }
    joinLetters = document.getElementById("txtCifrado").value;
    return joinLetters;
}


function decipher(phrase) {
    let string = [];

    //phrase = phrase.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < phrase.length; i++) {
        //let character2 = String.fromCharCode((phrase[i].charCodeAt() +65-key)%26+65);
let character2 = String.fromCharCode((phrase.charCodeAt(i) +65-key)%26+65);
        string.push(character2);

        //let joinLetters2 = string.join("");
    }
  joinLetters2= document.getElementById("txtDecifrado").value;
    return joinLetters2;
}


//console.log(cipher(phrase));
//console.log(decipher(cipher(phrase)));


//document.getElementById("txtDecifrado").value = decipher(phrase);
//console.log(decipher(cipher(phrase)));


//console.log(decipher(cipher(phrase)));
//window.cipher = {
  // ...
//};
