//var phrase = prompt("Ingresa el texto");
function cipher() {
    let phrase = document.getElementById("txt").value.toUpperCase();
    let key = parseInt(document.getElementById("salto").value);
//console.log(phrase,key);
    let string = [];
    for (let i = 0; i < phrase.length; i++) {

        let character = String.fromCharCode((phrase.charCodeAt(i) -65+key)%26+65); //declaramos la Variable character que leer� la palabra y con String.fromCharCode nos devolver� la cadena mediante el uso de secuencia de valores//
//console.log(character);
        string.push(character);
    }
    let joinLetters = string.join("");
    document.getElementById("txtCifrado").value = joinLetters;
    return joinLetters;
}


function decipher() {
    let phrase2 = document.getElementById("txtCifrado").value.toUpperCase();
    let key = parseInt(document.getElementById("salto").value);

   let string = [];
    for (let i = 0; i < phrase2.length; i++) {
        let character2 = String.fromCharCode((phrase2.charCodeAt(i) +65-key)%26+65); //declaramos la Variable character que leer� la palabra y con String.fromCharCode nos devolver� la cadena mediante el uso de secuencia de valores//
//console.log(character2);
        string.push(character2);
}
      let joinLetters2 = string.join("");
    document.getElementById("txtDecifrado").value = joinLetters2;
    return joinLetters2;
}


//console.log(decipher(cipher(phrase)));
//window.cipher = {
  // ...
//};
