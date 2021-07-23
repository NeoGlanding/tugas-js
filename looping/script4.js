let ulang = true;
let perulangan = 0;

do {
   let jawaban = confirm('Apakah anda ingin mengulang');
   console.log();

   if (jawaban) {
       perulangan += 1;
       ulang = true;
   } else if (!jawaban) {
       ulang = false;
       console.log(`Pengulangan telah dilakukan ${perulangan}`);
   }
} while(ulang === true);