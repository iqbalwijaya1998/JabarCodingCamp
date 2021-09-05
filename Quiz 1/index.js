function jumlah_kata(str) {
  return str.split(" ").length;
}

var kalimat_1 = " Halo nama saya Iqbal Putra Haktriandi Wijaya";
var kalimat_2 = "Saya Iqbal";

console.log(jumlah_kata(kalimat_1));
console.log(jumlah_kata(kalimat_2));
