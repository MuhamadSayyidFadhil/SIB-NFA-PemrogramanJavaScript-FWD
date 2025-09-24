import dataMahasiswa from "./data.js";

function lihatData() {
  console.log("Daftar Data Mahasiswa:");
  dataMahasiswa.map((mhs, index) => {
    console.log(
      `${index + 1}. ${mhs.nama}, Umur: ${mhs.umur}, Alamat: ${mhs.alamat}, Email: ${mhs.email}`
    );
  });
}

function tambahData(nama, umur, alamat, email) {
  dataMahasiswa.push({ nama, umur, alamat, email });
  console.log(`Data ${nama} berhasil ditambahkan!`);
}

function hapusData(index) {
  if (index >= 0 && index < dataMahasiswa.length) {
    let hapus = dataMahasiswa.splice(index, 1);
    console.log(`Data ${hapus[0].nama} berhasil dihapus!`);
  } else {
    console.log("Index tidak ditemukan!");
  }
}

lihatData();

tambahData("Rina", 20, "Cirebon", "rina@mail.com");
tambahData("Bayu", 23, "Malang", "bayu@mail.com");

console.log("\nSetelah tambah data:");
lihatData();

hapusData(2);

console.log("\nSetelah hapus data:");
lihatData();
