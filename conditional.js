// let hour = 27;
// let greeting = "";

const readline = require("readline");

// Membuat antarmuka readline untuk input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Meminta input jam dari pengguna
rl.question("Enter the hour (0-24): ", (hourInput) => {
  let hour = parseInt(hourInput, 10); // Mengubah input menjadi integer
  let greeting = "";

  // Logika untuk menentukan greeting berdasarkan jam yang dimasukkan
  if (hour < 20 && hour >= 0) {
    greeting = "Good day";
  } else if (hour >= 20 && hour < 25) {
    greeting = "Normal day";
  } else {
    greeting = "Bad day"; // Untuk jam di luar rentang 0-24
  }

  console.log(greeting); // Menampilkan hasil ke terminal

  rl.close(); // Menutup antarmuka readline
});
