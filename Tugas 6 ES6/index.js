// Soal 1

const PersegiPanjang = (panjang, lebar) => {
  var panjang = 8;
  var lebar = 9;

  let hasilLuas = panjang * lebar;
  let hasilKeliling = 2 * (panjang + lebar);
  return { hasilLuas, hasilKeliling };
};

console.log(PersegiPanjang());

// Saol 2
var Nama = {
  firstName: "William",
  lastName: "Imoh",
  FullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(Nama.FullName());

// Soal 3
var studentName = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = studentName;

console.log(studentName);

// Soal 4
let west = ["Will", "Chris", "Sam", "Holly"];
let east = ["Gill", "Brian", "Noel", "Maggie"];

let combinedArray = [...west, ...east];
console.log(combinedArray);

// Soal 5
const Kalimat = (planet, view) => {
  var planet = "earth";
  var view = "glass";

  var before =
    "Lorem " +
    view +
    " dolor sit amet, " +
    "consectetur adipiscing elit," +
    planet;

  return before;
};

console.log(Kalimat());
