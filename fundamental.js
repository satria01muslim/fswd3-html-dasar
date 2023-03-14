let x = 5; // Variabel
let y = "Halo";
let z = x + 10; // Operasi Aritmatika

if (z > 10) { // Percabangan
  console.log("z lebih besar dari 10");
} else {
  console.log("z kurang dari atau sama dengan 10");
}

for (let i = 0; i < 5; i++) { // Perulangan
  console.log(i);
}

function tambah(x, y) { // Fungsi
  return x + y;
}

let hasil = tambah(5, 3);

let orang = { // Objek
  nama: "sam",
  umur: 23,
  alamat: "Lombok",
  sapa: function() {
    console.log("Halo, nama saya " + this.nama);
  }
};

console.log(orang.nama);
orang.sapa();

let buah = ["apel", "mangga", "jeruk"]; // Array
console.log(buah[1]);

buah.push("pisang");
console.log(buah);
