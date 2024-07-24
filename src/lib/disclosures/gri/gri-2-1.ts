export const gri_2_1 = {
  code: '2-1',
  name: 'GRI 2-1',
  prompt: `
    buatkan laporan gri 2-1 :
dengan informasi sebagai berikut :

sektor usaha : peternakan dan perkebunan
    `,
  instruction: `
    kamu bertugas untuk membuat narasi laporan GRI. dalam bahasa indonesia.
buat narasi dalam bentuk cerita, tampilkan Jaringan Operasional dalam bentuk tabel, berikan judul Pengungkapan nya tetapi tidak usah diberikan sub judul untuk masing-masing PERSYARATAN.

Pengungkapan 2-1
tema : Rincian organisasi

PERSYARATAN:
Organisasi harus:
a. melaporkan nama resmi mereka;
b. melaporkan jenis kepemilikan dan bentuk hukum mereka;
c. melaporkan lokasi kantor pusat mereka;
d. melaporkan negara tempat mereka beroperasi.

PANDUAN:
Panduan untuk 2-1-a:
Jika organisasi menggunakan nama dagang atau nama bisnis yang dikenal oleh publik yang
berbeda dengan nama resminya, mereka sebaiknya melaporkan nama ini selain nama
resminya.
Panduan untuk 2-1-b:
Jenis kepemilikan dan bentuk hukum organisasi berarti apakah kepemilikannya dimiliki publik
atau swasta, dan apakah organisasi tersebut merupakan badan hukum, kemitraan,
kepemilikan tunggal, atau jenis entitas lain seperti nirlaba, asosiasi, atau lembaga amal.
Panduan untuk 2-1-c:
Kantor pusat merupakan pusat administrasi global dari suatu organisasi, tempat
mengendalikan atau mengarahkan organisasi.
Panduan untuk 2-1-d:
Jika organisasi telah melaporkan negara tempat mereka beroperasi di tempat lain, seperti
dalam laporan keuangan konsolidasi yang diaudit atau informasi keuangan yang tersimpan di
catatan publik, organisasi dapat menyediakan tautan atau rujukan ke informasi ini. Organisasi
juga dapat melaporkan wilayah atau lokasi spesifik di dalam negara (misalnya, negara bagian,
kota) tempat mereka beroperasi, jika ini menyediakan informasi kontekstual untuk memahami
dampak-dampak organisasi. 
    `,
  requirements: [
    {
      code: '2-1-a',
      requirement: 'melaporkan nama resmi mereka;',
      guide: `Jika organisasi menggunakan nama dagang atau nama bisnis yang dikenal oleh publik yang
                berbeda dengan nama resminya, mereka sebaiknya melaporkan nama ini selain nama
                resminya.`,
    },
    {
      code: '2-1-b',
      requirement: 'melaporkan jenis kepemilikan dan bentuk hukum mereka;',
      guide: `Jenis kepemilikan dan bentuk hukum organisasi berarti apakah kepemilikannya dimiliki publik
atau swasta, dan apakah organisasi tersebut merupakan badan hukum, kemitraan,
kepemilikan tunggal, atau jenis entitas lain seperti nirlaba, asosiasi, atau lembaga amal.`,
    },
    {
      code: '2-1-c',
      requirement: 'melaporkan lokasi kantor pusat mereka;',
      guide: `Kantor pusat merupakan pusat administrasi global dari suatu organisasi, tempat
mengendalikan atau mengarahkan organisasi.`,
    },
    {
      code: '2-1-d',
      requirement: 'melaporkan negara tempat mereka beroperasi.',
      guide: `Jika organisasi telah melaporkan negara tempat mereka beroperasi di tempat lain, seperti
dalam laporan keuangan konsolidasi yang diaudit atau informasi keuangan yang tersimpan di
catatan publik, organisasi dapat menyediakan tautan atau rujukan ke informasi ini. Organisasi
juga dapat melaporkan wilayah atau lokasi spesifik di dalam negara (misalnya, negara bagian,
kota) tempat mereka beroperasi, jika ini menyediakan informasi kontekstual untuk memahami
dampak-dampak organisasi.`,
    },
  ],
};
