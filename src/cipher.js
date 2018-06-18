window.cipher = {
offset: 33,

encode: (offset,string) => {

 let str = [];

for (let i = 0; i < string.length; i++) { //recorre todo el string
  if (string.charCodeAt(i) == 32){
    character = String.fromCharCode(string.charCodeAt(i));
    str.push(character); //convierte de letra a ascii y de ascii a letra
  } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
    let character = String.fromCharCode((string.charCodeAt(i) -97+ parseInt(offset))%26+97);
    str.push(character);//condicion para letras minusculas
  }else {
 let character = String.fromCharCode((string.charCodeAt(i) -65+ parseInt(offset))%26+65);
 str.push(character);// condicion para mayusculas
}
}
 let joinLetters = str.join("");
txtCif.value= joinLetters;
},


decode: (offset,string) => {

  let str = [];
  let character2 = "";
 for (let i = 0; i < string.length; i++) {
   if (string.charCodeAt(i) == 32){
     character = String.fromCharCode(string.charCodeAt(i));
     str.push(character);
   } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
     if ((((string.charCodeAt(i) +90- parseInt(offset))%26)+92)>= 92 && (((string.charCodeAt(i) +90- parseInt(offset))%26)+92<=96)){
       let character = String.fromCharCode(((string.charCodeAt(i) +90- parseInt(offset))%26)+118);
       str.push(character);
     }
     else {
       let character = String.fromCharCode(((string.charCodeAt(i) +90- parseInt(offset))%26)+92);
       str.push(character);
     }

   }else {
  let character = String.fromCharCode((string.charCodeAt(i) +65- parseInt(offset))%26+65);
  str.push(character);
 }

 let joinLetters2 = str.join("");
 txtDes.value= joinLetters2;
}
},

};
