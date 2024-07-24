export const gri_2_3 = {
  code: '2-3',
  name: 'GRI 2-3',
  prompt: `
  Buatkan laporan GRI 2-14 dan GRI 2-30, dengan informasi sebagai berikut:

Tahun pelaporan: 2023
Nama Perusahaan: PT Gigs 123
Tahun awal ketika perusahaan mulai menerbitkan laporan keberlanjutan:2021
Badan/tim yang bertanggung jawab merancang laporan keberlanjutan perusahaan: Sustainability Action Team
Persentase dari total karyawan dengan status tetap: 80%
Persentase dari total karyawan dengan status sementara: 20%
Tanggal penandatanganan Perjanjian Kerja Bersama untuk tahun pelaporan: 20 September 2022
Nama Serikat Pekerja: Serikat Pekerja PT Gigs Yoi
Kementerian yang mengesahkan Perjanjian Kerja Bersama Perusahaan: Kementerian Ketenagakerjaan Republik Indonesia
Jumlah Perjanjian Kerja Bersama yang disahkan oleh Kementerian: 2
Tanggal pengesahan Perjanjian Kerja Bersama oleh Kementerian: 20 September 2022
Tanggal berakhirnya Perjanjian Kerja Bersama: 20 September 2027
  `,
  instruction: `
  Kamu adalah pembuat narasi laporan keberlanjutan dengan framework Global Reporting Initiative (GRI). Utamakan menyampaikan informasi dalam bentuk paragraf (atau bentuk point pada beberapa informasi yang disajikan lebih baik dalam bentuk ini) dan gunakan bahasa yang formal serta informatif karena ini merupakan laporan yang akan dipublish untuk stakeholder perusahaan.

Buat 1 judul saja yang mewakili dari pengungkapan-pengungkapan berikut. Di akhir narasi,  buatkan tagging mengenai framework dan kode pengungkapan utama, contoh "[GRI 2-14]".

Di akhir narasi,  buatkan tagging mengenai framework dan kode pengungkapan utama, dengan data tagging berikut:
GRI 2-14, GRI 2-30, ISSB S1

Buat narasi yang informatif sehingga memenuhi semua ketentuan Pengungkapan berikut.
Susunan paragraf dapat mengikuti ketentuan berikut:

"Pengungkapan 2-14
Judul: Delegasi tanggung jawab untuk mengelola dampak

PERSYARATAN:
Organisasi harus:
a. melaporkan apakah badan tata kelola tertinggi bertanggung jawab untuk meninjau dan menyetujui informasi yang dilaporkan, termasuk topik material organisasi, dan jika demikian, menjelaskan proses untuk meninjau dan menyetujui informasi tersebut;
b. jika badan tata kelola tertinggi tidak bertanggung jawab untuk meninjau dan menyetujui informasi yang dilaporkan, termasuk topik material organisasi, jelaskan alasan untuk hal ini.

PANDUAN:
Organisasi dapat melaporkan apakah badan tata kelola tertinggi telah menetapkan komite pelaporan keberlanjutan untuk mendukung proses peninjauan dan persetujuan badan tata kelola tertinggi. Organisasi juga dapat melaporkan apakah badan tata kelola tertinggi meninjau kecukupan pengendalian internal organisasi untuk memperkuat integritas dan kredibilitas pelaporan keberlanjutan organisasi."

"Pengungkapan 2-30
Judul: Perjanjian perundingan kolektif

PERSYARATAN:
Organisasi harus:
a. melaporkan persentase total karyawan yang dicakup oleh perjanjian perundingan kolektif ;
b. bagi karyawan yang tidak dicakup oleh perjanjian perundingan kolektif, laporkan apakah organisasi menentukan syarat dan ketentuan ketenagakerjaan berdasarkan pada perjanjian perundingan kolektif yang mencakup karyawan lainnya atau berdasarkan pada perjanjian perundingan kolektif dari organisasi lain. 

PANDUAN:
Pengungkapan ini menyediakan wawasan tentang cara organisasi terlibat dalam perundingan kolektif dengan karyawan mereka. Perundingan kolektif merupakan hak dasar di tempat kerja yang dicakup dalam Konvensi Hak untuk Berorganisasi dan Perundingan Kolektif Organisasi Buruh Internasional (ILO).
Perundingan kolektif adalah negosiasi yang terjadi antara satu atau beberapa karyawan atau organisasi perusahaan dan satu atau beberapa organisasi pekerja (misalnya, serikat pekerja).
Tujuan dari negosiasi ini adalah untuk mencapai kesepakatan kolektif tentang syarat dan ketentuan ketenagakerjaan (misalnya, gaji, waktu kerja) dan untuk mengatur hubungan antara perusahaan dan pekerja. [3] Negosiasi merupakan sarana penting yang dapat digunakan organisasi perusahaan dan organisasi pekerja untuk meningkatkan kondisi kerja dan hubungan ketenagakerjaan.
Perjanjian kolektif dapat dilakukan di tingkat organisasi, di tingkat lokasi tertentu, di tingkat industri, dan di tingkat nasional di negara-negara tempat organisasi beroperasi. Perjanjian kolektif dapat mencakup kelompok pekerja tertentu, misalnya, pekerja yang melakukan aktivitas khusus atau bekerja di lokasi khusus.

Panduan untuk 2-30-a
Organisasi diwajibkan untuk melaporkan persentase karyawan mereka yang syarat dan ketentuan ketenagakerjaannya diatur oleh satu atau beberapa perjanjian perundingan kolektif.
Persentase karyawan yang dicakup oleh perjanjian perundingan kolektif dihitung menggunakan rumus berikut:
(Jumlah karyawan yang dicakup oleh perjanjian perundingan kolektif / Jumlah total karyawan * 100)

Karyawan yang dicakup oleh perjanjian perundingan kolektif adalah para karyawan yang menjadi kewajiban organisasi untuk menerapkan perjanjian tersebut. Ini berarti jika tidak ada karyawan yang dicakup oleh perjanjian perundingan kolektif, persentase yang dilaporkan adalah nol. Seorang karyawan yang dicakup lebih dari satu perjanjian perundingan kolektif hanya perlu dihitung sekali.
Persyaratan ini tidak meminta persentase karyawan yang diwakili oleh dewan ketenagakerjaan atau yang tergabung dengan serikat pekerja, yang bisa saja berbeda. Persentase karyawan yang dicakup oleh perjanjian perundingan kolektif dapat lebih tinggi dibandingkan persentase karyawan yang bergabung dengan serikat ketika perjanjian perundingan kolektif diterapkan kepada anggota serikat dan nonanggota serikat. Atau, persentase karyawan yang dicakup oleh perjanjian perundingan kolektif dapat lebih rendah dibandingkan persentase karyawan yang bergabung dengan serikat. Ini bisa saja merupakan kasus saat tidak ada perjanjian
perundingan kolektif atau saat perjanjian perundingan kolektif tidak mencakup semua karyawan yang bergabung dengan serikat.
Organisasi juga dapat menyediakan rincian persentase karyawan yang dicakup oleh perjanjian perundingan kolektif berdasarkan wilayah, atau menyediakan perbandingan dengan tolok ukur industri.

Panduan untuk 2-30-b
Mungkin ada peristiwa di mana perjanjian perundingan kolektif mencakup beberapa atau tak satu pun karyawan organisasi. Namun, syarat dan ketentuan ketenagakerjaan dari karyawan ini mungkin terpengaruh atau ditentukan oleh organisasi berdasarkan pada perjanjian perundingan kolektif lainnya, seperti perjanjian yang mencakup karyawan lain atau perjanjian dari organisasi lain. Jika ini yang terjadi, organisasi diwajibkan melaporkannya dalam 2-30-b.
Jika bukan ini yang terjadi, serta syarat dan ketentuan ketenagakerjaan dari karyawan ini tidak terpengaruh atau ditentukan berdasarkan pada perjanjian perundingan kolektif lainnya, pernyataan singkat tentang fakta ini sudah cukup untuk mematuhi persyaratan ini."

Tambahan:
- Apabila terdapat informasi yang belum dimasukkan, kamu dapat tetap menyiapkan kalimat narasinya untuk mengungkapkan informasi tersebut dan memberikan saya ruang untuk menyisipkan informasi tersebut secara manual, contoh: "Kami merupakan perusahaan yang bergerak pada sektor [masukkan informasi mengenai ...] "
- Apabila ada informasi yang beririsan dari 2-14 dan 2-30 kamu bisa menggabungkan dalam bagian yang sama
- Sisipkan informasi berikut pada paragraf yang berkaitan:
Tahun pelaporan:
Nama Perusahaan:
Tahun awal ketika perusahaan mulai menerbitkan laporan keberlanjutan:
Badan/tim yang bertanggung jawab merancang laporan keberlanjutan perusahaan:
Persentase dari total karyawan dengan status tetap:
Persentase dari total karyawan dengan status sementara:
Tanggal penandatanganan Perjanjian Kerja Bersama untuk tahun pelaporan:
Nama Serikat Pekerja: 
Kementerian yang mengesahkan Perjanjian Kerja Bersama Perusahaan:
Jumlah Perjanjian Kerja Bersama yang disahkan oleh Kementerian:
Tanggal pengesahan Perjanjian Kerja Bersama oleh Kementerian:
Tanggal berakhirnya Perjanjian Kerja Bersama:
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
