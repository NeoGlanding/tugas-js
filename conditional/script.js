// Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP. (CEO, CTO, HR, PROGRAMMER)
// Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

// 2. Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.

// 3. Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
// Hari minggu dimulai dari angka 1 dan seterusnya

// 1
const posisi= 'HR';
if (posisi === 'HR') {
    console.log('melakukan rekrutmen untuk calon pegawai baru');
} else {
    console.log('tugas saya tidak merekrut karyawan baru');
}

// 2
const a = 20;
const b = 13;

if (a>b) console.log('Nilai a lebih besar dari nilai b');
else if (a<b) console.log('Nilai a lebih kecil  dari nilai b');
else if (a === b) console.log('Nilai a sama dengan nilai b')

// 3
const hari = 1;

switch (hari) {
    case 1:
        console.log('Minggu')
        break;
    case 2:
        console.log('Senin')
        break;
    case 3:
        console.log('Selasa')
        break;
    case 4:
        console.log('Rabu')
        break;
    case 5:
        console.log('Kamis')
        break;
    case 6:
        console.log('Jumat')
        break;
    case 7:
        console.log('Sabtu')
        break;
}

// 4
const jalan = 'UP';

switch (hari) {
    case "UP":
        console.log('Berjalan ke atas')
        break;
    case "DOWN":
        console.log('Berjalan ke bawah')
        break;
    case "RIGHT":
        console.log('Berjalan ke kanan')
        break;
    case "LEFT":
        console.log('Berjalan ke kiri')
        break;
}