// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
var k1 = pertama.substr(0,4);
var k2 = pertama.substr(11,8)
var k3 = kedua.substr(0,8)
var k4 = kedua.substr(8,10)
console.log(k1.concat(k2).concat(k3).concat(k4.toUpperCase()));

// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";
var angka1 = parseInt(kataPertama);
var angka2 = parseInt(kataKedua);
var angka3 = parseInt(kataKetiga);
var angka4 = parseInt(kataKeempat);
var hasil = angka1 + (angka2*angka3) + angka4;
console.log(hasil);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);