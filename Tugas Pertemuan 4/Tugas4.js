class Kendaraan {
    constructor(brand, tahun) {
        this.brand = brand;
        this.tahun = tahun;
    }
    getInfo() {
        return `${this.brand} (${this.tahun})`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
    }

    getInfoPelanggan() {
        if (this.kendaraanDisewa) {
            return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa.getInfo()}`;
        } else {
            return `${this.nama} (${this.nomorTelepon}) belum menyewa kendaraan`;
        }
    }
}

let mobil = new Kendaraan("Toyota Avanza", 2020);
let motor = new Kendaraan("Honda Vario", 2021);

let pelanggan1 = new Pelanggan("Budi", "08123456789");
let pelanggan2 = new Pelanggan("Siti", "08987654321");

pelanggan1.sewaKendaraan(mobil);
pelanggan2.sewaKendaraan(motor);

let daftarPelanggan = [pelanggan1, pelanggan2];

console.log("Daftar Pelanggan yang Sedang Menyewa Kendaraan:");
daftarPelanggan.forEach(p => {
    console.log(p.getInfoPelanggan());
});
