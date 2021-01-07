//==Algoritma==
// 1. Masukkan nama
// 2. Masukkan nilai
// 3. Jika Nilai 80 - 100: A
// 4. Jika Nilai 65 - 79: B
// 5. Jika Nilai 50 - 64: C
// 6. Jika Nilai 35 - 49: D
// 7. Jika Nilai 0 - 34: E
// 8. Tampilkan nama dan score ke display


// Insert your code here
//===Implementasi===
var nama = "Adelin ";
var nilai = "90";
var status;

if (80 >= nilai <= 100) {
    status = nama + "score : A"
} 
else if (65 >= nilai <= 79){
    status = nama + "score : B"
}
else if (50 >= nilai <= 64){
    status = nama + "score : C"
}
else if (35 >= nilai <= 49){
    status = nama + "score : D"
}
else if (0 >= nilai <= 34){
    status = nama + "score : E"
} else if (0 < nilai > 100 ) {
  status = nama + "invalid"
}
console.log(status)
