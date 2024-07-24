export const gri_2_2 = {
  code: '2-2',
  name: 'GRI 2-2',
  prompt: `
  buatkan laporan gri 2-2 :
dengan informasi sebagai berikut :

sektor usaha : peternakan dan perkebunan
  `,
  instruction: `
  kamu bertugas untuk membuat narasi laporan GRI. dalam bahasa indonesia.
buat narasi dalam bentuk cerita, berikan judul Pengungkapan nya tetapi tidak usah diberikan sub judul untuk masing-masing PERSYARATAN.
output hasil dalam html.

Pengungkapan 2-2
tema :  Entitas yang dimasukkan dalam pelaporan keberlanjutan organisasi

PERSYARATAN:
Organisasi harus:
a. mencantumkan semua entitas yang dimasukkan dalam pelaporan keberlanjutan;
b. jika organisasi mempunyai laporan keuangan konsolidasi yang diaudit atau informasi
keuangan yang tersimpan di catatan publik, sebutkan perbedaan antara daftar entitas
yang dimasukkan dalam pelaporan finansial mereka dan daftar entitas yang
dimasukkan dalam pelaporan keberlanjutan;
c. jika organisasi terdiri dari beberapa entitas, jelaskan pendekatan yang digunakan untuk
menggabungkan informasi, yang meliputi:
i.   apakah pendekatan tersebut melibatkan penyesuaian informasi untuk kepentingan minoritas;
ii.  bagaimana pendekatan mempertimbangkan merger, akuisisi, dan pelepasan entitas atau sebagian entitas;
iii. apakah dan bagaimana pendekatan tersebut berbeda di seluruh pengungkapan dalam Standar ini dan di seluruh topik material

PANDUAN:
Panduan untuk 2-2-a:
Entitas yang dilaporkan dalam 2-2-a menjadi dasar pelaporan untuk pengungkapan dalam
Standar ini dan untuk menentukan topik material organisasi.
Persyaratan 2-2-a mencantumkan entitas yang dikontrol oleh organisasi atau yang mempunyai
kepentingan organisasi di dalamnya dan dimasukkan dalam pelaporan keberlanjutan mereka,
seperti anak perusahaan, usaha bersama, dan afiliasi, termasuk kepentingan minoritas.
Organisasi sebaiknya melaporkan informasi untuk kelompok entitas yang sama seperti yang
tercakup dalam pelaporan finansial mereka.
Saat menentukan topik material mereka, organisasi sebaiknya mempertimbangkan dampak
entitas lain yang mempunyai hubungan bisnis dengan mereka yang tidak dimasukkan dalam
daftar yang dilaporkan dalam 2-2-a. Lihat bagian 1 dalam GRI 3: Topik Material 2021 untuk
informasi lebih lanjut.
Panduan untuk 2-2-a dan 2-2-b:
Jika semua entitas dalam pelaporan finansial organisasi juga dimasukkan dalam pelaporan
keberlanjutan mereka, pernyataan singkat tentang fakta ini, termasuk tautan atau rujukan ke
daftar entitas yang dimasukkan dalam laporan keuangan konsolidasi mereka yang diaudit atau
informasi keuangan yang tersimpan di catatan publik, cukup untuk mematuhi 2-2-a dan 2-2-b.
Organisasi sebaiknya secara terpisah menyebutkan setiap entitas tambahan yang dimasukkan
dalam pelaporan keberlanjutan yang tidak dimasukkan dalam pelaporan finansial mereka.
Panduan untuk 2-2-c:
Kepentingan minoritas adalah kepentingan kepemilikan dalam suatu entitas yang tidak
dikendalikan oleh entitas induk.
  `,
  requirements: [
    {
      code: '2-2-a',
      requirement:
        'mencantumkan semua entitas yang dimasukkan dalam pelaporan keberlanjutan;',
      guide: `Entitas yang dilaporkan dalam 2-2-a menjadi dasar pelaporan untuk pengungkapan dalam
Standar ini dan untuk menentukan topik material organisasi.
Persyaratan 2-2-a mencantumkan entitas yang dikontrol oleh organisasi atau yang mempunyai
kepentingan organisasi di dalamnya dan dimasukkan dalam pelaporan keberlanjutan mereka,
seperti anak perusahaan, usaha bersama, dan afiliasi, termasuk kepentingan minoritas.
Organisasi sebaiknya melaporkan informasi untuk kelompok entitas yang sama seperti yang
tercakup dalam pelaporan finansial mereka.
Saat menentukan topik material mereka, organisasi sebaiknya mempertimbangkan dampak
entitas lain yang mempunyai hubungan bisnis dengan mereka yang tidak dimasukkan dalam
daftar yang dilaporkan dalam 2-2-a. Lihat bagian 1 dalam GRI 3: Topik Material 2021 untuk
informasi lebih lanjut.`,
    },
    {
      code: '2-2-b',
      requirement: `jika organisasi mempunyai laporan keuangan konsolidasi yang diaudit atau informasi
keuangan yang tersimpan di catatan publik, sebutkan perbedaan antara daftar entitas
yang dimasukkan dalam pelaporan finansial mereka dan daftar entitas yang
dimasukkan dalam pelaporan keberlanjutan;`,
      guide: `Jika semua entitas dalam pelaporan finansial organisasi juga dimasukkan dalam pelaporan
keberlanjutan mereka, pernyataan singkat tentang fakta ini, termasuk tautan atau rujukan ke
daftar entitas yang dimasukkan dalam laporan keuangan konsolidasi mereka yang diaudit atau
informasi keuangan yang tersimpan di catatan publik, cukup untuk mematuhi 2-2-a dan 2-2-b.
Organisasi sebaiknya secara terpisah menyebutkan setiap entitas tambahan yang dimasukkan
dalam pelaporan keberlanjutan yang tidak dimasukkan dalam pelaporan finansial mereka.`,
    },
    {
      code: '2-2-c',
      requirement: `jika organisasi terdiri dari beberapa entitas, jelaskan pendekatan yang digunakan untuk
menggabungkan informasi, yang meliputi:
i.   apakah pendekatan tersebut melibatkan penyesuaian informasi untuk kepentingan minoritas;
ii.  bagaimana pendekatan mempertimbangkan merger, akuisisi, dan pelepasan entitas atau sebagian entitas;
iii. apakah dan bagaimana pendekatan tersebut berbeda di seluruh pengungkapan dalam Standar ini dan di seluruh topik material`,
      guide: `Kepentingan minoritas adalah kepentingan kepemilikan dalam suatu entitas yang tidak
dikendalikan oleh entitas induk.`,
    },
  ],
};
