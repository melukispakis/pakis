/* eslint-disable react/no-unescaped-entities */
import { Text, H2 } from "@/components";

type Article = {
  image: string;
  location: string;
  title: string;
  text: JSX.Element;
};

type DataArticleGerotan = {
  [key: string]: Article;
};

export const dataArticleGerotan: DataArticleGerotan = {
  "tpa": {
    image: "/gerotan/tpa.jpg",
    location: "Rumah TPA Dusun Gerotan",
    title: "Kegiatan Mengajar TPA Anak-Anak",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Sebagai bentuk kontribusi nyata mahasiswa Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat (KKN-PPM), salah satu program kerja utama yang dijalankan di Dusun Gerotan adalah kegiatan mengajar TPA (Taman Pendidikan Al-Qur’an). Kegiatan ini difokuskan pada pengajaran Iqro’ dan Al-Qur’an bagi anak-anak dari usia Taman Kanak-Kanak (TK) hingga Sekolah Menengah Pertama (SMP), yang berjumlah sekitar 30 anak.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kegiatan ini berlangsung di Rumah TPA Dusun Gerotan, sebuah tempat yang menjadi pusat pembelajaran agama bagi anak-anak dusun. Pelaksanaan kegiatan dilakukan setiap hari, kecuali hari Kamis, mulai pukul 16.00 WIB hingga waktu Maghrib. Jadwal ini dipilih untuk menyesuaikan dengan waktu senggang anak-anak setelah pulang sekolah, sekaligus sebagai bagian dari rutinitas sore mereka dalam mendalami nilai-nilai keagamaan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam proses belajar mengajar, mahasiswa KKN berperan sebagai pendamping sekaligus pengajar. Anak-anak dibagi berdasarkan kemampuan mereka, mulai dari yang baru belajar Iqro’ hingga yang sudah lancar membaca Al-Qur’an. Materi pembelajaran mencakup teknik membaca huruf hijaiyah dengan tajwid yang benar, hafalan surat-surat pendek, serta penanaman nilai-nilai akhlak melalui kisah-kisah islami.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kegiatan ini bukan hanya menjadi sarana untuk menumbuhkan kecintaan anak-anak terhadap Al-Qur’an, tetapi juga menjadi ruang pembelajaran bagi mahasiswa untuk mengasah kemampuan komunikasi, kesabaran, dan manajemen kelas. Interaksi yang hangat dan kedekatan emosional yang terjalin dengan para santri kecil menciptakan suasana belajar yang menyenangkan dan penuh makna
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dukungan dari tokoh masyarakat dan orang tua sangat membantu kelancaran kegiatan ini. Mereka menyambut baik inisiatif mahasiswa KKN yang turut andil dalam pendidikan agama anak-anak mereka. Melalui kegiatan ini, mahasiswa KKN berharap dapat meninggalkan jejak kebaikan yang berkelanjutan dan memberikan dampak positif bagi generasi muda di Dusun Gerotan.
        </Text>
      </>
    ),
  },
  "pelatihan-excel": {
    image: "/gerotan/pelatihan-excel.jpg",
    location: "SMP Negeri 3 Pakis",
    title: "Pelatihan Microsoft Excel",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Dalam rangka mendukung peningkatan literasi digital di kalangan pelajar, mahasiswa KKN-PPM melaksanakan kegiatan Pelatihan Microsoft Excel yang ditujukan bagi siswa-siswi SMP Negeri 3 Pakis. Kegiatan ini menjadi bagian dari program kerja KKN bidang pendidikan dan teknologi informasi, yang bertujuan membekali pelajar dengan keterampilan dasar pengolahan data menggunakan perangkat lunak spreadsheet yang umum digunakan di dunia pendidikan maupun dunia kerja.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Pelatihan ini diawali dengan sesi pembukaan dan pengenalan, yang mencakup perkenalan antara mahasiswa KKN dan peserta pelatihan, serta pemaparan tujuan pelatihan Microsoft Excel, yaitu agar siswa mampu memahami dasar-dasar penggunaan Excel dan menerapkannya dalam kegiatan belajar sehari-hari, seperti menghitung nilai, membuat grafik, dan mengelola data sederhana.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi pertama yang disampaikan adalah Pengenalan Dasar Excel, di mana peserta dikenalkan dengan bagian-bagian utama dalam Excel seperti cell, kolom, baris, dan function bar. Mahasiswa KKN juga memberikan penjelasan mengenai navigasi dan fungsi dasar yang sering digunakan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Selanjutnya, pelatihan berlanjut ke penggunaan rumus dasar, seperti:
        </Text>
        <ul className="list-disc list-inside ml-10 text-lg">
          <li>SUM untuk menjumlahkan data</li>
          <li>AVERAGE untuk menghitung nilai rata-rata</li>
          <li>MAX dan MIN untuk mencari nilai tertinggi dan terendah</li>
          <li>IF untuk logika sederhana dalam pengolahan data</li>
        </ul>
        <br />
        <Text size="lg" className="indent-10">
          Setelah sesi teori, peserta diarahkan pada instruksi latihan praktik, di mana mereka dibimbing menggunakan file latihan bernama <code>Latihan_Excel.xlsx</code>. File ini berisi tabel nilai siswa yang dapat diolah menggunakan rumus-rumus yang telah diajarkan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam sesi latihan praktik mandiri, siswa diminta untuk:
        </Text>
        <ul className="list-disc list-inside ml-10 text-lg">
          <li>Mengisi tabel nilai mata pelajaran</li>
          <li>Menerapkan rumus-rumus yang telah dipelajari</li>
          <li>Membuat grafik sederhana untuk memvisualisasikan data nilai</li>
        </ul>
        <br />
        <Text size="lg" className="indent-10">
          Kegiatan ditutup dengan sesi diskusi dan peninjauan hasil latihan. Peserta diberikan kesempatan untuk bertanya dan berbagi kendala selama latihan. Mahasiswa KKN memberikan tanggapan serta solusi dari permasalahan yang ditemukan, sekaligus menegaskan kembali poin-poin penting dari materi yang telah dipelajari.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Melalui pelatihan ini, diharapkan siswa-siswi SMPN 3 Pakis memiliki bekal awal dalam penggunaan Excel yang dapat mereka kembangkan lebih lanjut. Program ini juga membuktikan pentingnya sinergi antara mahasiswa dan sekolah dalam mendukung kemajuan pendidikan berbasis teknologi di tingkat sekolah menengah.
        </Text>
      </>
    ),
  },

  "kelas-tik": {
    image: "/gerotan/kelas-tik.jpg",
    location: "Posko KKN UGM Sub Unit Gerotan",
    title:
      "Kelas TIK Microsoft Word untuk Pelajar Desa",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Sebagai upaya meningkatkan literasi digital di kalangan pelajar desa, mahasiswa KKN-PPM melaksanakan Kelas Teknologi Informasi dan Komunikasi (TIK) yang berfokus pada pelatihan penggunaan Microsoft Word. Kegiatan ini ditujukan kepada siswa SMP dan SMA, agar mereka memiliki keterampilan dasar dalam membuat dokumen formal, yang sangat dibutuhkan dalam penyusunan tugas maupun laporan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Materi pelatihan disusun secara bertahap dan aplikatif. Siswa diajarkan membuat template laporan, mulai dari halaman cover, pengaturan margin dan font, hingga penulisan Bab I, II, dan III. Selain itu, peserta juga belajar membuat daftar isi otomatis (TOC) dengan memanfaatkan fitur heading (Heading 1, Heading 2) yang tepat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Untuk menunjang visualisasi dalam dokumen, mahasiswa KKN juga mengajarkan cara menyisipkan gambar, mengatur posisi, dan memberikan keterangan gambar (caption) dengan penomoran otomatis. Semua materi ini langsung dipraktikkan oleh peserta melalui penyusunan dokumen latihan.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Di akhir sesi, siswa diberi waktu untuk menyusun laporan sederhana secara mandiri dengan pendampingan mahasiswa. Mereka belajar memahami struktur dokumen yang baik, serta cara memanfaatkan fitur Word untuk efisiensi dan kerapian dokumen.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Kegiatan ini disambut antusias oleh para pelajar. Banyak dari mereka baru pertama kali mengetahui bahwa daftar isi atau keterangan gambar bisa dibuat otomatis. Program ini terbukti efektif dalam membuka wawasan pelajar terhadap pemanfaatan teknologi, khususnya dalam menunjang kegiatan akademik.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dengan terselenggaranya Kelas TIK ini, mahasiswa KKN berharap pelajar desa mampu menyusun laporan secara profesional dan percaya diri menggunakan Microsoft Word. Program ini menjadi langkah awal dalam membekali generasi muda desa menghadapi tantangan dunia pendidikan dan pekerjaan yang semakin berbasis digital.
        </Text>
      </>
    ),
  },
  "digitalisasi-umkm": {
    image: "/gerotan/digitalisasi-umkm.jpg",
    location: "UMKM di Kelurahan Ketundan",
    title: "Digitalisasi Lokasi dan Informasi UMKM",
    text: (
      <>
        <Text size="lg" className="indent-10">
          Mahasiswa KKN-PPM turut mengambil peran dalam mendorong pertumbuhan ekonomi lokal melalui program kerja bertajuk “Digitalisasi Lokasi dan Informasi UMKM” di Kelurahan Ketundan. Program ini difokuskan pada upaya membantu para pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) agar dapat dikenal lebih luas oleh masyarakat dengan memanfaatkan teknologi digital, khususnya platform Google Maps (GMaps).
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dalam program ini, mahasiswa KKN mendampingi pemilik UMKM dalam proses pendaftaran dan verifikasi lokasi usaha mereka di Google Maps, termasuk pembuatan akun Google Bisnisku (Google Business Profile). Hal ini bertujuan agar usaha mereka dapat dengan mudah ditemukan oleh pelanggan melalui pencarian online, sekaligus menampilkan informasi penting seperti jam operasional, alamat, nomor telepon, serta foto produk dan lokasi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program ini disambut antusias oleh para pelaku UMKM yang selama ini belum memiliki akses atau pengetahuan terkait pemasaran digital. Banyak dari mereka yang baru pertama kali mengetahui bahwa usaha kecil pun bisa tampil di Google Maps dan menjangkau pelanggan lebih luas.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dengan adanya digitalisasi ini, UMKM di Kelurahan Ketundan tidak hanya memperoleh visibilitas secara online, tetapi juga berpeluang mendapatkan lebih banyak pelanggan, baik dari dalam maupun luar daerah. Mahasiswa KKN berharap bahwa keterampilan ini dapat diteruskan oleh para pelaku usaha secara mandiri ke depannya.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Program ini menjadi bukti nyata bahwa sinergi antara mahasiswa dan masyarakat dapat menghasilkan dampak positif yang berkelanjutan, terutama dalam mendukung transformasi digital di sektor ekonomi lokal.
        </Text>
      </>
    ),
  },
  "peta-lahan": {
    image: "/gerotan/peta-lahan.jpg",
    location: "Dusun Gerotan, Kelurahan Keundan",
    title: "Pembuatan Peta Lahan Pertanian Dusun Gerotan",
    text: (
      <>
        <p className="font-bold mt-1 mb-1">Latar Belakang</p>
        <Text size="lg" className="indent-10">
          Dusun Gerotan memiliki potensi pertanian yang sangat besar dengan berbagai jenis komoditas unggulan. Namun, hingga saat ini belum tersedia peta lahan pertanian yang memadai untuk mendukung pengelolaan dan pemanfaatan lahan secara optimal. Kondisi ini membuat informasi terkait sebaran lahan, jenis komoditas, serta status pemanfaatannya sulit diakses oleh masyarakat maupun pemerintah desa. Oleh karena itu, diperlukan pemetaan lahan pertanian yang akurat sebagai langkah awal dalam perencanaan dan pengembangan sektor pertanian di Dusun Gerotan.
        </Text>
        <p className="font-bold mt-1 mb-1">Proses Pembuatan Peta</p>
        <Text size="lg" className="indent-10">
          Kegiatan pembuatan peta lahan pertanian dilakukan melalui serangkaian tahapan, mulai dari pengumpulan data lapangan, wawancara dengan petani setempat, hingga pemetaan menggunakan teknologi berbasis GIS (Geographic Information System). Peta yang dihasilkan memuat informasi detail seperti batas lahan, jenis komoditas yang ditanam, serta kondisi lahan pada setiap wilayah.
        </Text>
        <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
        <Text size="lg" className="indent-10">
          Hadirnya peta lahan pertanian memberikan banyak manfaat bagi masyarakat dan pengelola desa. Dengan peta ini, proses pendataan dan perencanaan pertanian dapat dilakukan secara lebih efektif. Masyarakat dapat dengan mudah memahami sebaran komoditas dan penggunaan lahan di wilayah mereka. Selain itu, peta ini juga menjadi dasar pengambilan keputusan dalam program pengembangan pertanian yang berkelanjutan, efisien, dan berbasis data.
        </Text>
        <p className="font-bold mt-1 mb-1">Kesimpulan</p>
        <Text size="lg" className="indent-10">
          Pembuatan peta lahan pertanian Dusun Gerotan bukan hanya sekadar dokumentasi, tetapi merupakan langkah strategis untuk meningkatkan produktivitas pertanian. Dengan informasi yang jelas dan akurat, diharapkan pengelolaan lahan dapat dilakukan secara optimal sehingga membawa manfaat jangka panjang bagi perekonomian desa dan kesejahteraan masyarakat.
        </Text>
      </>
    ),
  },
  "perangkap-kuning": {
    image: "/gerotan/perangkap-kuning.jpg",
    location: "Dusun Gerotan, Kelurahan Ketundan",
    title: "Sistem Deteksi Dini Kutu Kebul melalui Perangkap Kuning dan Kalender Dinamika Populasi",
    text: (
      <>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Sasaran: Warga Dusun Gerotan</li>
            <li>Peserta: ± 35 orang</li>
          </ul>

          <p className="font-bold mt-1 mb-1">Latar Belakang</p>
          <p className="text-lg indent-10">
            Proker ini dilaksanakan untuk mengenalkan sistem pemantauan hama yang sederhana dan murah melalui perangkap kuning.
            Melalui pendataan mingguan dan penyusunan kalender populasi, warga (petani) didorong agar dapat melakukan deteksi dini
            dan pengendalian hama secara tepat.
          </p>

          <p className="font-bold mt-1 mb-1">Pelaksanaan Kegiatan</p>
          <p className="text-lg indent-10">
            Kegiatan dilaksanakan di Rumah Warga Dusun Gerotan dengan melibatkan warga setempat, khususnya para petani.
            Peserta diberikan penjelasan mengenai cara pembuatan dan pemasangan perangkap kuning, teknik pencatatan jumlah
            hama setiap minggu, serta penyusunan kalender populasi hama berdasarkan data yang diperoleh.
          </p>

          <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
          <p className="text-lg indent-10">
            Warga (petani) mulai memahami pentingnya monitoring hama dan penggunaan perangkap kuning.
            Selain itu, kalender populasi juga membantu menentukan waktu pengendalian, sehingga penggunaan pestisida bisa
            lebih efisien dan ramah lingkungan.
          </p>

          <p className="font-bold mt-1 mb-1">Kesimpulan</p>
          <p className="text-lg indent-10">
            Penerapan sistem pemantauan hama menggunakan perangkap kuning memberikan manfaat nyata bagi petani dalam mengurangi
            risiko serangan hama. Dengan deteksi dini dan perencanaan pengendalian yang tepat, hasil pertanian dapat lebih terjaga
            dan biaya operasional dapat ditekan.
          </p>
        </div>
      </>
    ),
  },
  "ph-tanah": {
    image: "/gerotan/ph-tanah.jpg",
    location: "Dusun Gerotan, Kelurahan Ketundan",
    title:
      "Sosialisasi dan Pelatihan Menjaga Kebersihan Lingkungan oleh Tim KKN PPM UGM 2024 di Masjid Dusun",
    text: (
      <>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Sasaran: Bapak-Bapak Dusun Gerotan & Petani Lokal</li>
            <li>Peserta: ± 30 orang</li>
          </ul>

          <p className="font-bold mt-1 mb-1">Latar Belakang</p>
          <p className="text-lg indent-10">
            Lahan pertanian Dusun Gerotan yang didominasi tanah masam akibat curah hujan tinggi dan ditemukan banyaknya limbah
            organik pascapanen yang belum dikelola. Untuk menjawab hal ini, dilakukan edukasi penanganan pH tanah dan workshop
            budidaya maggot BSF sebagai solusi limbah sekaligus dukungan bagi pertanian berkelanjutan.
          </p>

          <p className="font-bold mt-1 mb-1">Pelaksanaan Kegiatan</p>
          <p className="text-lg indent-10">
            Kegiatan ini diikuti oleh para petani lokal dan warga setempat, khususnya bapak-bapak Dusun Gerotan.
            Peserta diberikan materi mengenai cara mengukur dan mengatur pH tanah, teknik pengapuran untuk menetralkan tanah masam,
            serta praktik langsung pembuatan media budidaya maggot BSF.
            Selain itu, dijelaskan pula manfaat maggot dalam mengolah limbah organik menjadi pakan bernilai ekonomi.
          </p>

          <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
          <p className="text-lg indent-10">
            Warga mulai memahami pentingnya menjaga pH tanah untuk produktivitas pertanian.
            Pemanfaatan maggot BSF membuka wawasan baru dalam pengelolaan sampah organik menjadi pakan bernilai,
            sekaligus mendorong praktik pertanian dan lingkungan yang lebih berkelanjutan.
          </p>

          <p className="font-bold mt-1 mb-1">Kesimpulan</p>
          <p className="text-lg indent-10">
            Edukasi ini memberikan bekal pengetahuan praktis bagi petani dalam menjaga kualitas tanah dan mengelola limbah organik.
            Dengan penerapan teknologi sederhana seperti budidaya maggot BSF, masyarakat dapat mendukung pertanian berkelanjutan
            sekaligus meningkatkan pendapatan dari hasil sampingan.
          </p>
        </div>

      </>
    ),
  },
  "pengenalan-web-skrining": {
    image: "/gerotan/pengenalan-web-skrining.jpg",
    location: "Balai Desa Kelurahan Ketundan",
    title: "Sosialisasi dan Pelatihan Web Skrining Kesehatan Gigi dan Mulut",
    text: (
      <>
        <ul className="list-disc list-inside text-lg ml-4 mb-4">
          <li>Sasaran: Kader dan Ibu PKK</li>
          <li>Peserta: ± 20 orang</li>
        </ul>
        <p className="font-bold mt-1 mb-1">Latar Belakang</p>
        <p className="text-lg indent-10 mb-4">
          Kesehatan gigi dan mulut merupakan salah satu aspek kesehatan yang masih menjadi permasalahan di berbagai wilayah, termasuk Desa Ketundan. Minimnya pendataan yang terstruktur sering kali menjadi hambatan dalam upaya pencegahan dan penanganan masalah kesehatan gigi. Pemanfaatan teknologi, khususnya melalui web skrining, dapat menjadi solusi efektif untuk memantau dan mengontrol perkembangan kesehatan gigi dan mulut secara berkala.
        </p>
        <p className="font-bold mt-1 mb-1">Pelaksanaan Kegiatan</p>
        <p className="text-lg indent-10 mb-4">
          Kegiatan sosialisasi dan pelatihan ini dilaksanakan di Balai Desa Ketundan dengan sasaran utama kader kesehatan dan Ibu PKK. Peserta diberikan pemahaman mengenai pentingnya kesehatan gigi dan mulut, serta pelatihan penggunaan web skrining untuk melakukan pendataan secara mandiri dan terintegrasi.
        </p>
        <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
        <p className="text-lg indent-10 mb-4">
          Web skrining kesehatan gigi dan mulut memudahkan kader dan Ibu PKK dalam melakukan pendataan kesehatan warga secara cepat, tepat, dan berbasis teknologi. Data yang terkumpul dapat menjadi acuan dalam menentukan langkah pencegahan maupun penanganan masalah kesehatan gigi di masyarakat. Dengan penerapan ini, diharapkan kesehatan gigi dan mulut masyarakat Desa Ketundan dapat terpantau lebih baik, sehingga meningkatkan kualitas hidup warga secara keseluruhan.
        </p>
        <p className="font-bold mt-1 mb-1">Kesimpulan</p>
        <p className="text-lg indent-10">
          Pemanfaatan teknologi dalam skrining kesehatan gigi dan mulut merupakan langkah inovatif yang tidak hanya memudahkan pendataan, tetapi juga mendorong partisipasi masyarakat dalam menjaga kesehatan. Melalui kader dan Ibu PKK, program ini dapat diperluas dan diaplikasikan secara berkelanjutan di seluruh wilayah desa.
        </p>
      </>
    ),
  },
  "senam-kebugaran": {
    image: "/gerotan/senam-kebugaran.jpg",
    location: "Dusun Gerotan, Kelurahan Ketundan",
    title: "Senam Kebugaran",
    text: (
      <>
        <Text size="lg" className="indent-10">
          <br />
          Pada KKN PPM UGM 2024, salah satu program kerja yang penting adalah
          pembuatan Rencana Anggaran Biaya (RAB) untuk pembangunan retaining
          wall di Dusun Gerotan. Retaining wall adalah konstruksi bangunan berupa
          dinding yang digunakan untuk menstabilkan tanah miring agar tanah
          tidak bergeser atau longsor. Dusun ini mengalami masalah longsor yang
          sering terjadi setiap musim hujan sehingga diperlukan solusi teknis
          berupa retaining wall untuk melindungi lahan dan infrastruktur desa.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          <H2>Proses Perhitungan RAB </H2>
          Proses pembuatan RAB dimulai dengan pengumpulan data lapangan yang
          telah dilakukan sebelumnya. Tim KKN bersama perangkat desa dan warga
          setempat mengidentifikasi area yang membutuhkan retaining wall, serta
          mengukur dimensi dan kondisi teknis lokasi. Data ini sangat penting
          untuk menentukan kebutuhan material dan tenaga kerja yang akan
          digunakan dalam pembangunan retaining wall.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          <H2>Perhitungan Material dan Biaya </H2>
          Setelah data teknis terkumpul, langkah berikutnya adalah menghitung
          kebutuhan material. Tim KKN melakukan perhitungan detail mengenai
          jumlah dan jenis material yang dibutuhkan, seperti batu, semen, pasir,
          besi, dan bahan lainnya. Mereka juga memperhitungkan biaya
          transportasi untuk mengangkut material ke lokasi proyek. Selain itu,
          tim juga mempertimbangkan kebutuhan alat berat dan peralatan pendukung
          lainnya yang diperlukan selama proses konstruksi.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          <H2>Perhitungan Tenaga Kerja </H2>
          Selain material, biaya tenaga kerja juga menjadi komponen penting
          dalam RAB. Tim KKN melakukan estimasi jumlah tenaga kerja yang
          dibutuhkan serta waktu yang diperlukan untuk menyelesaikan proyek.
          Mereka menghitung upah harian pekerja berdasarkan standar lokal dan
          memperhitungkan biaya tambahan untuk supervisi dan manajemen proyek.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          <H2>Penyusunan RAB (Rencana Anggaran Biaya)</H2>
          Setelah semua komponen biaya dihitung, tim KKN menyusun RAB secara
          terperinci. RAB ini mencakup semua elemen biaya, mulai dari material,
          tenaga kerja, transportasi, hingga biaya tidak terduga. Setiap item
          dalam RAB dijelaskan secara rinci untuk memastikan transparansi dan
          akurasi anggaran.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          <H2>Presentasi dan Sosialisasi RAB </H2>
          RAB yang telah disusun kemudian dipresentasikan kepada kepala dusun
          dan perangkat desa dalam sebuah rapat resmi. Tim KKN menjelaskan
          setiap komponen biaya dan metode perhitungannya serta menjawab
          pertanyaan dan masukan dari perangkat desa dan warga. Presentasi ini
          bertujuan untuk memastikan bahwa semua pihak memahami dan menyetujui
          anggaran yang telah dibuat.
        </Text>
        <br />
        <Text size="lg" className="indent-10">
          Dengan adanya RAB yang terperinci dan transparan, diharapkan
          pembangunan retaining wall di Dusun Gerotan dapat berjalan lancar dan
          sesuai anggaran. Program ini tidak hanya memberikan solusi teknis
          untuk masalah longsor, tetapi juga meningkatkan partisipasi dan
          kesadaran masyarakat dalam pengelolaan proyek pembangunan di desa
          mereka.
        </Text>
      </>
    ),
  },
  "edukasi-keuangan": {
    image: "/gerotan/edukasi-keuangan.jpg",
    location: "SMPN 3 Pakis",
    title: "Edukasi Perencanaan Keuangan untuk SMP",
    text: (
      <>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Sasaran: Siswa SMP Kelas 8 A</li>
            <li>Peserta: 38 orang</li>
          </ul>

          <p className="font-bold mt-1 mb-1">Latar Belakang</p>
          <p className="text-lg indent-10">
            Rendahnya literasi keuangan di kalangan anak usia remaja mendorong saya untuk mensosialisasi perencanaan keuangan
            guna memberikan pemahaman dasar finansial meliputi skala prioritas metode 40:30:20:10 sekaligus membedakan kebutuhan
            dengan keinginan. Selain itu, siswa juga diperkenalkan pada konsep dasar investasi dan pembiayaan beserta risikonya.
          </p>

          <p className="font-bold mt-1 mb-1">Pelaksanaan Kegiatan</p>
          <p className="text-lg indent-10">
            Kegiatan ini dilaksanakan dengan metode pembelajaran interaktif, menggunakan leaflet edukatif yang memuat materi
            perencanaan keuangan, contoh penerapan metode 40:30:20:10, serta penjelasan perbedaan kebutuhan dan keinginan.
            Siswa juga diajak mengenal konsep investasi sederhana dan jenis pembiayaan beserta risiko yang mungkin timbul.
          </p>

          <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
          <p className="text-lg indent-10">
            Membantu siswa memahami cara mengelola keuangan dengan cara yang menyenangkan melalui leaflet interaktif
            dilengkapi dengan games seperti teka-teki silang dan find the words, membuat siswa lebih antusias dan mudah
            menyerap informasi. Mereka pun mulai menunjukkan pemahaman lebih baik dalam membedakan prioritas serta menyikapi
            uang dengan lebih bijak.
          </p>

          <p className="font-bold mt-1 mb-1">Kesimpulan</p>
          <p className="text-lg indent-10">
            Sosialisasi ini memberikan bekal awal bagi siswa untuk lebih cerdas dalam mengelola uang sejak usia dini.
            Dengan pendekatan interaktif, siswa tidak hanya mendapatkan pengetahuan, tetapi juga motivasi untuk menerapkan
            kebiasaan finansial yang sehat di kehidupan sehari-hari.
          </p>
        </div>

      </>
    ),
  },
  "perizinan-mata-air": {
    image: "/gerotan/perizinan-mata-air.jpg",
    location: "Dusun Gerotan & Taman Nasional Gunung Merbabu",
    title:
      "Sosialisasi Perizinan Pemanfaatan Mata Air Warga Melalui Kolaborasi dengan Taman Nasional Gunung Merbabu",
    text: (
      <>
        <div className="space-y-4">
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Sasaran: Warga Dusun Gerotan</li>
            <li>Peserta: ± 5 orang</li>
          </ul>

          <p className="font-bold mt-1 mb-1">Latar Belakang</p>
          <p className="text-lg indent-10">
            Warga Dusun Gerotan menggunakan sumber mata air di kawasan Taman Nasional Gunung Merbabu untuk kebutuhan sehari-hari
            dan pertanian. Namun, belum ada izin resmi yang dimiliki warga untuk pemanfaatan tersebut.
            Kegiatan ini dilakukan untuk membantu warga memahami prosedur perizinan dan mulai mengurusnya secara legal.
          </p>

          <p className="font-bold mt-1 mb-1">Pelaksanaan Kegiatan</p>
          <p className="text-lg indent-10">
            Pendampingan dilakukan secara langsung dengan memberikan penjelasan mengenai regulasi penggunaan sumber daya alam
            di kawasan taman nasional, dokumen yang dibutuhkan, serta tahapan proses perizinan.
            Warga juga diarahkan untuk menjalin komunikasi dengan pihak Balai Taman Nasional Gunung Merbabu sebagai langkah awal.
          </p>

          <p className="font-bold mt-1 mb-1">Dampak dan Manfaat</p>
          <p className="text-lg indent-10">
            Warga lebih memahami aturan terkait pemanfaatan sumber mata air di kawasan taman nasional dan mulai terhubung
            dengan pihak balai. Hal ini menjadi langkah awal menuju pemanfaatan air yang legal, aman, dan berkelanjutan
            untuk kebutuhan rumah tangga maupun pertanian.
          </p>

          <p className="font-bold mt-1 mb-1">Kesimpulan</p>
          <p className="text-lg indent-10">
            Pendampingan ini diharapkan dapat mempercepat proses perizinan dan memastikan pemanfaatan sumber mata air dilakukan
            sesuai ketentuan hukum, sehingga keberlanjutan sumber daya tetap terjaga.
          </p>
        </div>

      </>
    ),
  },
};
