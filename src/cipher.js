window.cipher = {
  // ...
};

//let cifrar = document.getElementById('id')
let phrase = prompt("Ingresa el texto");

 function cipher (phrase){
  let string = [];
  phrase = phrase.replace(/\s/g, '').toLowerCase();
  for (let i=0; i<phrase.length; i++){
    let character = String.fromCharCode((phrase[i].charCodeAt()-65+33)%26+65);

    string.push(character);

    let joinLetters = string.join ("");
  }
//document.getElementById("txtCifrado").value = joinLetters;
  return joinLetters;
}

function decipher (phrase){
  let string = [];

  phrase = phrase.toLowerCase().replace(/\s/g, '');

  for (let i=0; i<phrase.length; i++){
    let character = String.fromCharCode((phrase[i].charCodeAt()-65+33)%26+65);

    string.push(character);

    let joinLetters = string.join ("");
  }
//document.getElementById('txtDecifrado').innerHTML = joinLetters2
  return joinLetters;
}


console.log(cipher(phrase));
console.log(decipher(cipher(phrase)));


//document.getElementById("txtDecifrado").value = decipher(phrase);
//console.log(decipher(cipher(phrase)));
