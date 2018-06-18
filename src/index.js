let phrase = document.getElementById("txt"); //variable que nos guarda el texto que nos da el usuario
let key = document.getElementById("salto"); //variable que guarda el numero de saltos que quiere dar
let bUno =document.getElementById("cifrar"); //funcion del boton para cifrar
let bDos =document.getElementById("descifrar"); //funcion del boton para descifrar
let txtCif =document.getElementById("txtCifrado");//nos da el texto cifrado
let txtDes =document.getElementById("txtDecifrado");//nos da el texto descifrado

bUno.addEventListener("click", event=>{
  let detonar = window.cipher.encode(
  key.value, phrase.value
);
});

bDos.addEventListener("click", event=>{
  let detonar = window.cipher.decode(
  key.value, txtCif.value
);
});
