let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

function tambahProduk(nama, harga, stok) {
  let idBaru = produkToko.length + 1;
  produkToko.push({ id: idBaru, nama, harga, stok });
}

function hapusProduk(id) {
  produkToko = produkToko.filter((p) => p.id !== id);
}

function tampilkanProduk() {
  console.log(produkToko);
}

tampilkanProduk();
tambahProduk("Headset", 500000, 8);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
