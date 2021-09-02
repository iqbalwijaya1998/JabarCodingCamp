// Soal 1

var nilai = 48;

if (nilai >= 85) {
  console.log("A");
} else if (85 > nilai && nilai >= 75) {
  console.log("B");
} else if (75 > nilai && nilai >= 65) {
  console.log("C");
} else if (65 > nilai && nilai >= 55) {
  console.log("D");
} else {
  console.log("E");
}

// Soal 2
var tanggal = 13;
var bulan = 11;
var tahun = 1998;

switch (bulan) {
  case 1: {
    bulanLahir = " Januari ";
    break;
  }
  case 2: {
    bulanLahir = " Februari ";
    break;
  }
  case 3: {
    bulanLahir = " Maret ";
    break;
  }
  case 4: {
    bulanLahir = " April ";
    break;
  }
  case 5: {
    bulanLahir = " Mei ";
    break;
  }
  case 6: {
    bulanLahir = " Juni ";
    break;
  }
  case 7: {
    bulanLahir = " Juli ";
    break;
  }
  case 8: {
    bulanLahir = " Agustus ";
    break;
  }
  case 9: {
    bulanLahir = " September ";
    break;
  }
  case 10: {
    bulanLahir = " Oktober";
    break;
  }
  case 11: {
    bulanLahir = " November ";
    break;
  }
  case 12: {
    bulanLahir = " Desember ";
    break;
  }
  default:
    {
      bulanLahir = "Tidak Ditemukan";
    }
    break;
}

console.log("" + tanggal + bulanLahir + tahun);

// Soal 3
function segitiga(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "# ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga(3));
