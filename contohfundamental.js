// if
let nilai = 80;

if (nilai >= 70) {
  console.log("Anda lulus ujian.");
}

// if else
let nilai = 50;

if (nilai >= 70) {
  console.log("Anda lulus ujian.");
} else {
  console.log("Anda tidak lulus ujian.");
}

//else if
let nilai = 60;

if (nilai >= 80) {
  console.log("Anda mendapat nilai A.");
} else if (nilai >= 70) {
  console.log("Anda mendapat nilai B.");
} else if (nilai >= 60) {
  console.log("Anda mendapat nilai C.");
} else {
  console.log("Anda mendapat nilai D.");
}

// switch
let nilai = "A";

switch (nilai) {
  case "A":
    console.log("Anda mendapat nilai sempurna.");
    break;
  case "B":
    console.log("Anda mendapat nilai baik.");
    break;
  case "C":
    console.log("Anda mendapat nilai cukup.");
    break;
  case "D":
    console.log("Anda mendapat nilai kurang.");
    break;
  default:
    console.log("Anda mendapat nilai tidak valid.");
}

//for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// do while
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
// while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
//basic function
function greeting(name) {
  console.log("Hello, " + name + "!");
}

greeting("sam");

//expression
const greeting = function(name) {
  console.log("Hello, " + name + "!");
};

greeting("sam");

//arrow
const greeting = (name) => {
  console.log("Hello, " + name + "!");
};

greeting("sam");


