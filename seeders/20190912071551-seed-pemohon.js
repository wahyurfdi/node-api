'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pemohon', [
      {
        nama_lengkap: 'Nadine',
        nilai_pengajuan: 1000000,
        sektor_usaha: 'Fermentum Corp.',
        alamat_rumah: '7102 Praesent Road',
        kota_rumah: 'Laramie',
        kecamatan_rumah: 'WY',
        kelurahan_rumah: 'United Arab Emirates'
      },
      {
        nama_lengkap: 'Eleanor',
        nilai_pengajuan: 93215722,
        sektor_usaha: 'Non PC',
        alamat_rumah: '598-8091 Eget Road',
        kota_rumah: 'Sagamu',
        kecamatan_rumah: 'Ogun',
        kelurahan_rumah: 'Bonaire, Sint Eustatius'
      },
      {
        nama_lengkap: 'Keegan',
        nilai_pengajuan: 36670352,
        sektor_usaha: 'Erat Eget Corporation',
        alamat_rumah: '934-406 Donec Road',
        kota_rumah: 'Cork',
        kecamatan_rumah: 'M',
        kelurahan_rumah: 'Saint Helena, Ascension'
      },
      {
        nama_lengkap: 'Lacy',
        nilai_pengajuan: 61022427,
        sektor_usaha: 'Ac Limited',
        alamat_rumah: 'Ap #822-5789 Dis Rd.',
        kota_rumah: 'Jerez de la Frontera',
        kecamatan_rumah: 'AN',
        kelurahan_rumah: 'Rwanda'
      },
      {
        nama_lengkap: 'Lee',
        nilai_pengajuan: 52605179,
        sektor_usaha: 'Cubilia Curae; Donec Comp.',
        alamat_rumah: '3151 Mauris Avenue',
        kota_rumah: 'Sosnowiec',
        kecamatan_rumah: 'Sląskie',
        kelurahan_rumah: 'Sri Lanka'
      },
      {
        nama_lengkap: 'Keefe',
        nilai_pengajuan: 8678824,
        sektor_usaha: 'Egestas Aliquam LLP',
        alamat_rumah: '210-4216 Aenean St.',
        kota_rumah: 'Te Puke',
        kecamatan_rumah: 'NI',
        kelurahan_rumah: 'Moldova'
      },
      {
        nama_lengkap: 'Leilani',
        nilai_pengajuan: 48758233,
        sektor_usaha: 'Enim Associates',
        alamat_rumah: 'P.O. Box 830, 5841 Augue Ave',
        kota_rumah: 'Caloundra',
        kecamatan_rumah: 'Queensland',
        kelurahan_rumah: 'United States Islands'
      },
      {
        nama_lengkap: 'Montana',
        nilai_pengajuan: 80949553,
        sektor_usaha: 'Eros Turpis Non Corp.',
        alamat_rumah: 'Ap #636-5770 Dapibus Road',
        kota_rumah: 'Meerut Cantonment',
        kecamatan_rumah: 'UP',
        kelurahan_rumah: 'Cayman Islands'
      },
      {
        nama_lengkap: 'Ivana',
        nilai_pengajuan: 94253149,
        sektor_usaha: 'Lectus Rutrum Urna',
        alamat_rumah: 'P.O. Box 182, 8558 Morbi Rd.',
        kota_rumah: 'Newbury',
        kecamatan_rumah: 'ON',
        kelurahan_rumah: 'New Caledonia'
      },
      {
        nama_lengkap: 'Kiayada',
        nilai_pengajuan: 79071605,
        sektor_usaha: 'Tristique Foundation',
        alamat_rumah: 'Ap #296-6312 Et, Rd.',
        kota_rumah: 'Barrhead',
        kecamatan_rumah: 'Renfrewshire',
        kelurahan_rumah: 'Greece'
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pemohon', null, {});
  }
};
