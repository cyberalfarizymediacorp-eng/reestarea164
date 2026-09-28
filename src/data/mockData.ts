import { Product, WorkflowStep, BlogPost } from '../types';

export const WHATSAPP_NUMBER = '6281266515635';
export const WHATSAPP_DISPLAY = '0812-6651-5635';

export const PRODUCTS: Product[] = [
  {
    id: 'combo-super-tani',
    name: 'KOMBO SUPER TANI (Kasgot 1kg + POC Booster 500ml)',
    tagline: 'Paket Duet Maut Kesuburan Kebun & Tanaman Hias · Hemat Rp 5.000',
    price: 25000,
    priceFormatted: 'Rp 25.000',
    originalPrice: 30000,
    originalPriceFormatted: 'Rp 30.000',
    category: 'combo',
    weight: '1 Paket (1.5 kg)',
    unit: 'paket combo',
    description: 'Paket combo terlaris ala menu Super Besar! Menggabungkan kekuatan pemulihan struktur tanah dari Pupuk Kasgot 1kg dan injeksi nutrisi daun instan POC Booster 500ml. Tanaman hias, cabai, dan buah Anda langsung meledak subur.',
    fullDescription: 'Paket Kombo Super Tani dirancang khusus bagi pecinta tanaman hias, aglonema, cabai, dan tabulampot. Memadukan kebaikan Kasgot BSF sebagai penahan air dan penyedia hara lambat-urai di zona akar, bersama POC biokonversi presisi yang disemprotkan ke daun. Menghemat anggaran hingga 17% dibanding beli satuan.',
    benefits: [
      'Paket lengkap perawatan akar (Kasgot) sekaligus daun dan bunga (POC)',
      'Lebih hemat Rp 5.000 dibanding membeli satuan',
      'Meningkatkan keberhasilan pemulihan tanaman stres hingga 98%',
      'Cukup untuk perawatan 15–20 pot tanaman selama 2–3 bulan',
      'Bonus panduan aplikasi dosis harian di dalam paket'
    ],
    usageGuide: [
      'Campurkan Kasgot pada media tanam pot saat gembur.',
      'Semprotkan POC yang sudah diencerkan (1 tutup botol : 1 liter air) seminggu sekali di pagi hari.',
      'Saksikan tunas dan bunga mekar optimal dalam tempo 14 hari.'
    ],
    specs: [
      { label: 'Isi Paket', value: '1x Kasgot 1kg + 1x POC Booster 500ml' },
      { label: 'Kategori', value: 'Combo Super Hemat Rest Area' },
      { label: 'Diskon', value: 'Hemat Rp 5.000 (17% OFF)' },
      { label: 'Kemasan', value: 'Box Packaging Higienis Ramah Lingkungan' }
    ],
    image: '/src/assets/images/product_pupuk_kasgot_1790564666615.jpg',
    badge: '📦 KOMBO SUPER BESAR',
    isPopular: true
  },
  {
    id: 'bucket-super-sirkular',
    name: 'BUCKET KOMPLIT SIRKULAR (Kasgot + POC + Maggot Kering)',
    tagline: 'Trilogi Mahakarya Biokonversi BSF Lengkap · All-in-One Rest Area KM 164B',
    price: 32000,
    priceFormatted: 'Rp 32.000',
    originalPrice: 40000,
    originalPriceFormatted: 'Rp 40.000',
    category: 'combo',
    weight: '1 Bucket Box (1.6 kg)',
    unit: 'bucket komplit',
    description: 'Bucket komplit paling prestisius! Nikmati seluruh hasil inovasi zero-waste Rest Area KM 164B Tol Cipali: Pupuk Kasgot 1kg, POC Booster 500ml, dan Maggot Kering Super Protein 100g. Solusi komprehensif untuk kebun dan hewan peliharaan kesayangan.',
    fullDescription: 'Dapatkan pengalaman sirkular paripurna dengan Bucket Komplit KM 164B. Produk ini merangkum seluruh rantai nilai biokonversi limbah pangan rest area. Sempurna untuk Anda yang berkebun sekaligus memelihara ikan hias, burung kicau, atau unggas.',
    benefits: [
      'Mendapatkan 3 produk unggulan sekaligus dengan diskon terbesar (Hemat Rp 8.000 / 20% OFF)',
      'Cocok untuk oleh-oleh inovatif saat singgah di Rest Area KM 164B Tol Cipali',
      'Mendukung langsung pengurangan 3 kg sampah organik di tol Cipali',
      'Kemasan box eksklusif berstempel resmi Rest Area KM 164B Tol Cipali'
    ],
    usageGuide: [
      'Gunakan Kasgot dan POC untuk menyuburkan pekarangan dan tanaman pot.',
      'Beri makan ikan hias (Koi/Channa) atau burung kesayangan dengan Maggot Kering.',
      'Bagikan pengalaman Anda ke media sosial dengan hashtag #CipaliZeroWaste.'
    ],
    specs: [
      { label: 'Isi Paket', value: '1x Kasgot 1kg + 1x POC 500ml + 1x Maggot Kering 100g' },
      { label: 'Kategori', value: 'Family Bucket Super Sirkular' },
      { label: 'Diskon', value: 'Hemat Rp 8.000 (20% OFF)' },
      { label: 'Stok Terbatas', value: 'Diproduksi Fresh Harian di KM 164B' }
    ],
    image: '/src/assets/images/hero_tps_rest_area_cipali_1790564641900.jpg',
    badge: '🏆 BUCKET FEST KOMPLIT',
    isPopular: true
  },
  {
    id: 'poc',
    name: 'Pupuk Organik Cair (POC) Booster Daun & Bunga',
    tagline: 'Eliksir Nutrisi Alami Penembus Stomata · Pemicu Tunas Cepat & Daun Mengilap',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    category: 'pupuk',
    weight: '500 ml',
    unit: 'botol',
    description: 'Bukan sekadar pupuk cair biasa. Formula konsentrat murni hasil biokonversi presisi di Rest Area KM 164B Cipali, diperkaya auksin alami, giberelin, dan konsorsium mikroba pengurai. Meresap instan lewat stomata daun saat fajar, tanpa meninggalkan setitik pun residu kimia.',
    fullDescription: 'Pupuk Organik Cair (POC) Rest Area KM 164B Tol Cipali adalah eliksir hayati berkonsentrasi tinggi yang difermentasikan secara anaerob selama minimal 21 hari menggunakan mikroorganisme Lactobacillus sp. dan ragi pilihan. Dirancang khusus untuk pemberian nutrisi foliar (lewat daun), hara makro Nitrogen, Fosfor, dan Kalium organik langsung diserap oleh stomata dalam hitungan menit—memaksa tunas baru meledak subur, memperkuat tangkai bunga agar pantang rontok, dan memberikan kilau hijau zamrud pada setiap helai daun.',
    benefits: [
      'Memaksa keluarnya kuncup tunas baru dan mengunci bakal buah agar tidak gugur',
      'Meningkatkan densitas klorofil daun sehingga tampil hijau pekat, tebal, dan mengilap segar',
      'Menyuntikkan miliaran mikroflora aktif yang merevitalisasi pori perakaran tanah',
      'Aman 100% tanpa risiko daun terbakar (zero chemical burn), bahkan untuk tanaman hias sensitif',
      'Sangat hemat: cukup 1–2 tutup botol dilarutkan ke dalam 1 liter air untuk belasan pot'
    ],
    usageGuide: [
      'Larutkan 10–15 ml (setara 1–2 tutup botol) POC ke dalam 1 liter air bersih.',
      'Semprotkan merata ke permukaan atas dan bawah daun saat pagi hari (pukul 06.00–09.00 saat stomata terbuka penuh).',
      'Aplikasi rutin 5–7 hari sekali untuk melihat ledakan tunas dan kesegaran daun yang konsisten.',
      'Kocok sebelum dituang, dan simpan di tempat teduh bersuhu ruang.'
    ],
    specs: [
      { label: 'Volume Bersih', value: '500 ml (Konsentrat Pekat 1:100)' },
      { label: 'Kandungan Hara Makro', value: 'N: 3.4%, P2O5: 2.8%, K2O: 3.1%' },
      { label: 'Derajat Keasaman (pH)', value: '6.8 (Stabil & Ramah Seluruh Tanaman)' },
      { label: 'Bioaktivator Pengurai', value: 'Konsorsium Lactobacillus sp. & Trichoderma sp.' },
      { label: 'Karakter Aroma', value: 'Manis Fermentasi Tape Alami (Nol Bau Busuk)' }
    ],
    image: '/src/assets/images/product_pupuk_organik_cair_1790564655656.jpg',
    badge: '🔥 Paling Diburu',
    isPopular: true
  },
  {
    id: 'kasgot',
    name: 'Pupuk Kasgot Emas Hitam Super Organik',
    tagline: 'Mahakarya Larva BSF Kaya Asam Humat · Menghidupkan Kembali Tanah yang Mati',
    price: 15000,
    priceFormatted: 'Rp 15.000',
    category: 'pupuk',
    weight: '1 kg',
    unit: 'pack',
    description: 'Sentuhan magis tanah hutan purba untuk pot dan kebun Anda. Dihasilkan dari miliaran enzim pencernaan larva tentara hitam, kasgot bertekstur remah lembut ini mengembalikan rongga napas perakaran, mengunci kelembapan, dan memasok nutrisi lambat-urai yang membuat tanaman meledak subur.',
    fullDescription: 'Pupuk Kasgot (Bekas Maggot) diproduksi melalui proses biokonversi presisi oleh larva Black Soldier Fly (BSF) pilihan di Circular Eco Hub KM 164B Cipali. Residu organik ini telah teruji memiliki porositas sempurna, bebas biji gulma pengganggu, dan kaya asam humat alami. Berbeda dengan kotoran hewan biasa, Kasgot bersifat 100% dingin di akar (tidak fermentasi ulang di media pot) sehingga langsung aman digunakan pada bibit paling rentan sekalipun.',
    benefits: [
      'Menyulap tanah pot yang keras dan membatu menjadi remah gembur beraerasi tinggi',
      'Mengandung asam humat alami berdaya ikat tinggi yang mencegah hara larut hanyut oleh air siraman',
      'Bersifat 100% dingin di akar tanpa risiko tanaman layu kepanasan',
      'Membangun benteng pertahanan hayati terhadap serangan jamur patogen akar',
      'Menggantikan kebutuhan pupuk sintetis hingga 80% secara aman dan lestari'
    ],
    usageGuide: [
      'Media Tanam Pot Baru: Campurkan kasgot bersama tanah gembur dan sekam dengan rasio 1:2:1.',
      'Perawatan Rutin Pot: Taburkan 3–5 sendok makan melingkari batang tanaman setiap 2 minggu sekali.',
      'Pekarangan & Bedengan: Taburkan 200–300 gram per lubang tanam saat pemindahan bibit baru.'
    ],
    specs: [
      { label: 'Berat Bersih', value: '1.000 gram (1 kg)' },
      { label: 'Tekstur Fisik', value: 'Remah Halus (Telah Diayak Saringan 3 mm)' },
      { label: 'Kandungan Hara', value: 'C-Organik > 18%, N-Total > 2.5%' },
      { label: 'Kadar Air Maksimum', value: '< 18% (Kering, Ringan, Tidak Menggumpal)' },
      { label: 'Karakteristik Aroma', value: 'Wangi Alami Tanah Hutan Basah' }
    ],
    image: '/src/assets/images/product_pupuk_kasgot_1790564666615.jpg',
    badge: '⭐ Emas Hitam',
    isPopular: false
  },
  {
    id: 'maggot-kering',
    name: 'Maggot Kering BSF Super Protein 42%',
    tagline: 'Bahan Bakar Alami Sang Juara · Sisik Mengilap Kristal, Tubuh Bulky & Air Tetap Bening',
    price: 10000,
    priceFormatted: 'Rp 10.000',
    category: 'pakan',
    weight: '100 gram',
    unit: 'pouch',
    description: 'Rahasia di balik kilau sisik ikan Koi dan Channa kontes. Di-oven perlahan pada temperatur terukur agar struktur protein murni 42% dan asam laurat antibakteri tetap utuh sempurna. Gurih renyah, mengapung alami, dan pantang mengotori filter akuarium Anda.',
    fullDescription: 'Maggot Kering (Dried BSF Larvae) diproduksi dari larva BSF segar pilihan yang dicuci bersih dengan air mengalir sebelum dipanggang higienis menggunakan teknologi oven roaster sirkular KM 164B. Tanpa garam, tanpa pewarna, dan tanpa pengawet sintetik. Merupakan pakan super alami dengan rasio asam amino terlengkap yang terbukti klinis mendongkrak ketebalan daging ikan (bulky), mempertajam corak warna pigmen sisik, serta memperkokoh stamina burung kicau dan unggas.',
    benefits: [
      'Kadar protein kasar tembus 42–45% untuk pembentukan otot dan proporsi tubuh ideal',
      'Kaya Asam Laurat (Lauric Acid) alami yang menjadi perisai antibodi dari serangan kuman air',
      'Kalsium dan Fosfor tinggi alami untuk pembentukan struktur tulang kokoh dan sisik tebal',
      'Mempercepat mutasi bunga dan ketajaman kontras warna pada ikan Channa dan Koi',
      'Tekstur renyah terapung yang tidak gampang remuk sehingga menjaga air akuarium sebening kaca'
    ],
    usageGuide: [
      'Ikan Hias (Koi, Channa, Arwana, Predator): Berikan 1–2 kali sehari dengan takaran yang habis disantap dalam 3 menit.',
      'Extra Fooding Burung Kicau (Murai Batu, Kacer): Berikan 3–5 ekor per hari sebagai dongkrak birahi dan stamina alamiah.',
      'Campuran Ransum Unggas (Ayam Jago, Bebek): Campurkan 5–10% ke dalam ransum untuk mempercepat penggemukan.'
    ],
    specs: [
      { label: 'Berat Bersih', value: '100 gram (Pouch Zipper Foil Kedap Udara)' },
      { label: 'Kadar Protein Kasar', value: 'Minimal 42%' },
      { label: 'Kadar Lemak Alami', value: 'Minimal 28%' },
      { label: 'Kandungan Kalsium', value: '6.5% (Tinggi Alami)' },
      { label: 'Masa Simpan', value: '12 Bulan (Tutup Rapat Setelah Digunakan)' }
    ],
    image: '/src/assets/images/product_maggot_kering_1790564677547.jpg',
    badge: '🏆 Protein 42%',
    isPopular: false
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: 1,
    code: 'TAHAP 01',
    title: 'Pengumpulan & Pemilahan di Sumber',
    subtitle: 'Pemilahan Terpadu dari Tenant Kuliner & Fasilitas Rest Area KM 164B',
    duration: 'Pukul 06.00 & 14.00 WIB (Setiap Hari)',
    location: 'Food Court, Restoran, SPBU, & Masjid Rest Area KM 164B',
    input: 'Sampah sisa makanan, kulit buah, kemasan kardus, dan plastik (Est. 1,2 – 1,8 Ton/Hari)',
    output: 'Sampah terpilah 3 kategori: Organik Basah, Anorganik Bernilai, dan Residu Akhir',
    description: 'Petugas kebersihan rest area mengumpulkan timbulan sampah dari seluruh tenant kuliner, rest room, dan area parkir menggunakan kendaraan khusus bertenaga listrik yang ramah lingkungan.',
    highlights: [
      'Pemisahan kantong organik (hijau) dan anorganik (kuning) sejak di dapur tenant kuliner',
      'Sosialisasi partisipatif bagi pemudik dan pengunjung jalan tol yang sedang singgah',
      'Jadwal penarikan sampah terjadwal dua kali sehari untuk mencegah timbulnya bau tidak sedap'
    ],
    ecoBenefit: 'Mengeliminasi 100% potensi tumpukan sampah liar di koridor tol Cipali arah Jakarta.',
    icon: 'Truck'
  },
  {
    stepNumber: 2,
    code: 'TAHAP 02',
    title: 'Penerimaan & Pencacahan Organik',
    subtitle: 'Penimbangan Digital Presisi & Mesin Crusher Chopper Terpadu',
    duration: '1 – 2 Jam per Siklus Penerimaan',
    location: 'Area Sortir & Workshop Sirkular Rest Area KM 164B',
    input: 'Sampah organik basah kasar (sisa nasi, sayuran, sisa buah-buahan, dan sisa lauk pauk)',
    output: 'Bubur sampah organik berukuran partikel halus 2–5 mm dengan kadar kelembapan ideal',
    description: 'Sampah yang tiba ditimbang secara digital untuk pendataan reduksi emisi. Selanjutnya dilakukan penyortiran manual guna memastikan tidak ada benda asing (seperti tusuk sate atau plastik), lalu dimasukkan ke dalam mesin pencacah berkapasitas 500 kg/jam.',
    highlights: [
      'Pencatatan data penimbangan sampah secara berkala untuk laporan keberlanjutan lingkungan (ESG)',
      'Pencacahan mekanis mempercepat proses penguraian oleh larva maggot hingga 300% lebih efisien',
      'Pemisahan air lindi alami dialirkan ke instalasi penampungan tertutup untuk fermentasi POC'
    ],
    ecoBenefit: 'Mencegah pembentukan gas metana (CH4) berbahaya yang timbul jika sampah membusuk di udara terbuka.',
    icon: 'Layers'
  },
  {
    stepNumber: 3,
    code: 'TAHAP 03',
    title: 'Biokonversi Maggot BSF',
    subtitle: 'Penguraian Super Cepat Tanpa Bau oleh Larva Lalat Tentara Hitam',
    duration: '12 – 14 Hari Siklus Pertumbuhan Larva',
    location: 'Greenhouse Biopond BSF Rest Area KM 164B',
    input: 'Baby larva BSF usia 5 hari + pakan bubur sampah organik terurai',
    output: 'Larva BSF dewasa berbobot maksimal + residu kotoran pupuk kasgot bernutrisi tinggi',
    description: 'Larva BSF memiliki enzim pencernaan alami yang mampu melahap sampah organik hingga 3–5 kali berat tubuhnya setiap 24 jam. Proses ini berlangsung higienis di biopond rak bertingkat tanpa menimbulkan bau busuk menyengat.',
    highlights: [
      'Lalat BSF dewasa tidak memiliki mulut penggigit sehingga tidak menjadi vektor pembawa kuman penyakit',
      'Reduksi volume sampah organik mencapai 75–80% hanya dalam kurun waktu 14 hari',
      'Pengendalian mikroklimat suhu dan kelembapan di dalam greenhouse biopond terstandarisasi'
    ],
    ecoBenefit: 'Mengalihkan berton-ton sampah dari Tempat Pemrosesan Akhir (TPA) sekaligus mereduksi jejak karbon.',
    icon: 'Zap'
  },
  {
    stepNumber: 4,
    code: 'TAHAP 04',
    title: 'Pemanenan & Pemisahan Mekanis',
    subtitle: 'Pemisahan Otomatis Larva Dewasa dengan Mesin Rotary Screen Separator',
    duration: '30 Menit per Batch Biopond',
    location: 'Unit Pengayakan & Pemanenan Mandiri KM 164B',
    input: 'Media biopond campuran larva dewasa gemuk dan residu kasgot kering',
    output: 'Larva BSF segar bersih terpisah sempurna dari pupuk kasgot padat',
    description: 'Media biopond dipanen menggunakan mesin sifter bergetar. Larva maggot segar yang gemuk bergerak otomatis ke wadah penampung atas, sedangkan serbuk kasgot halus jatuh ke wadah bawah untuk diayak ulang.',
    highlights: [
      'Pemisahan mekanis otomatis tanpa merusak fisik tubuh larva maggot',
      'Penyortiran larva prepupa terseleksi untuk dijadikan indukan siklus reproduksi lalat berikutnya',
      'Pembersihan larva dengan semprotan air bersih steril sebelum proses pengeringan'
    ],
    ecoBenefit: 'Prinsip Zero Waste: Seluruh komponen hasil biokonversi terserap tanpa meninggalkan limbah sisa.',
    icon: 'Cpu'
  },
  {
    stepNumber: 5,
    code: 'TAHAP 05',
    title: 'Pengolahan Produk Bernilai Tinggi',
    subtitle: 'Pembuatan Pupuk Organik Cair (POC), Pupuk Kasgot, & Maggot Kering Oven',
    duration: '3 – 24 Jam (Tergantung Jenis Produk)',
    location: 'Workshop Pengemasan & Pengeringan Sirkular KM 164B',
    input: 'Larva maggot segar, kasgot matang terayak, dan sari organik terfermentasi',
    output: 'Tiga produk siap pakai: POC (Rp 15.000), Kasgot (Rp 15.000), Maggot Kering (Rp 10.000)',
    description: 'Larva maggot dikeringkan menggunakan oven roaster dengan pengatur suhu agar protein 42% tetap terjaga utuh. Kasgot dikering-anginkan hingga kadar air di bawah 18%. Sari organik difermentasikan dalam biodigester anaerob dengan bioaktivator untuk menghasilkan POC 500 ml.',
    highlights: [
      'Proses roasting oven terukur menjaga asam laurat dan keutuhan protein larva',
      'Formulasi POC beraroma manis tape hasil fermentasi sempurna tanpa bau busuk',
      'Pengepakan menggunakan kemasan bersegel rapat yang menjaga mutu produk tahan lama'
    ],
    ecoBenefit: 'Menyediakan alternatif pupuk dan pakan organik terjangkau pengganti bahan kimia sintetik.',
    icon: 'PackageCheck'
  },
  {
    stepNumber: 6,
    code: 'TAHAP 06',
    title: 'Ekonomi Sirkular & Zero Waste Tol Cipali',
    subtitle: 'Penghijauan Lanskap Rest Area & Pemasaran untuk Petani serta Komunitas',
    duration: 'Berkelanjutan (Siklus Mandiri)',
    location: 'Rest Area KM 164B Tol Cipali & Pengiriman ke Seluruh Indonesia',
    input: 'Produk pupuk organik dan pakan maggot berstandar mutu siap distribusi',
    output: 'Kawasan rest area hijau asri, lapangan kerja ramah lingkungan, dan kemandirian ekonomi',
    description: 'Sebagian pupuk digunakan untuk menyuburkan 3 hektar taman dan area botani di Rest Area KM 164B Tol Cipali. Selebihnya didistribusikan ke pengendara yang singgah, kelompok tani lokal Majalengka, serta dikirim ke pembeli di seluruh Indonesia melalui pemesanan WhatsApp resmi.',
    highlights: [
      'Rest Area KM 164B Tol Cipali menjadi percontohan nasional Green Toll Road Indonesia',
      'Membuka sarana edukasi lingkungan dan studi banding bagi akademisi serta pengelola fasilitas umum',
      'Kemudahan pemesanan satu tombol langsung terhubung dengan admin resmi di 0812-6651-5635'
    ],
    ecoBenefit: 'Mereduksi volume pembuangan sampah ke TPA hingga lebih dari 85% secara berkelanjutan.',
    icon: 'Recycle'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'dari-sisa-makanan-jadi-emas-hitam-km-164b-cipali',
    title: 'Dua Ribu Kilometer, Satu Ton Sisa Hidangan, dan Pasukan Maggot yang Menolak Kalah',
    subtitle: 'Catatan lapangan dari KM 164B Tol Cipali: Bagaimana sains biokonversi mengubah gunungan piring sisa pemudik menjadi "emas hitam" penyubur tanah Nusantara.',
    excerpt: 'Di balik deru mesin dan kepulan debu kendaraan Tol Cipali, sebuah revolusi senyap sedang berlangsung: satu setengah ton sisa makanan harian ditaklukkan oleh bioteknologi alami tanpa menyisakan secuil bau pun.',
    content: [
      '### Bab 1: Ironi di Jalur Mudik Terpadat Nusantara',
      'Jalan Tol Cikopo – Palimanan (Cipali) bukan sekadar bentangan beton 116 kilometer; ia adalah denyut nadi mobilitas pulau Jawa. Setiap akhir pekan dan musim liburan, puluhan ribu kendaraan melaju membawa asa, lelah, dan rindu keluarga. Titik perhentian paling ramai di Jalur B arah Jakarta adalah Rest Area KM 164B.',
      'Namun di balik aroma sate maranggi, gurihnya ayam goreng, dan kepulan kopi panas di food court, tersimpan fakta ekologis yang masif: sedikitnya 1,5 ton sisa makanan terkumpul setiap hari. Dalam paradigma lama pengelolaan fasilitas publik, sampah ini akan dilempar ke truk lalu dibuang ke TPA terdekat untuk membusuk anaerobik—menghasilkan gas metana (CH₄) yang memiliki potensi pemanasan global 28 kali lebih agresif dibanding karbon dioksida.',
      '### Bab 2: Laboratorium Biopond Hermetia illucens — Pengurai Sunyi Tanpa Bau',
      'Rest Area KM 164B menolak skenario kelam itu. Di sudut timur kawasan singgah, tersembunyi sebuah sentra sirkular modern dengan deretan biopond rak vertikal bersuhu 30–32°C. Di sinilah jutaan larva lalat Black Soldier Fly (Hermetia illucens) bekerja dalam senyap.',
      'Berbeda dengan lalat hijau rumah yang kotor dan membawa patogen, lalat BSF dewasa tidak memiliki bagian mulut untuk menggigit ataupun menularkan bakteri penyakit. Di fase larva, mereka adalah mesin metabolik paling efisien di muka bumi. Larva BSF mampu melahap substrat organik hingga 4 kali bobot tubuhnya dalam rentang 24 jam saja, mengurainya tuntas tanpa meninggalkan bau busuk menyengat.',
      '🔬 Catatan Laboratorium Sirkular KM 164B: Biokonversi sampah organik di biopond menghasilkan reduksi volume sebesar 82,4% dalam 14 hari, menghasilkan residu kaya asam amino dan mikroba perakaran hidup yang tidak ditemukan pada kompos konvensional.',
      '### Bab 3: Metamorfosis Emas Hitam — Tiga Mahakarya untuk Petani dan Penghobi',
      'Dari siklus biokonversi 14 hari ini, fasilitas KM 164B tidak menyisakan limbah apapun (Zero Waste to Landfill). Residu kotoran larva yang halus dan kering dipanen menjadi Pupuk Kasgot Super (Rp 15.000 / 1 kg), sari organik difermentasikan menjadi Pupuk Organik Cair (Rp 15.000 / 500 ml), sedangkan larvanya sendiri dipanggang dengan oven roaster suhu terukur menjadi Maggot Kering Berprotein 42% (Rp 10.000 / 100 g).',
      'Ketiga produk ini langsung menjadi rebutan pengendara yang singgah di rest area, pembudidaya ikan hias kontes, serta jaringan kelompok tani di seantero Jawa Barat.',
      '### Bab 4: Warisan Hijau di Sepanjang Koridor Jalan Tol Indonesia',
      'Apa yang dimulai di Rest Area KM 164B Cipali membuktikan satu hal fundamental: dengan sentuhan sains dan dedikasi baja, limbah yang selama ini dianggap aib jalan tol dapat bangkit menjadi sumber nutrisi terkuat yang memulihkan kembali kesuburan tanah pertiwi.',
      '💡 Catatan Aplikasi Agronomi: Kasgot bersifat 100% dingin di perakaran tanaman karena telah matang sempurna di dalam pencernaan larva, bebas dari risiko layu atau akar terbakar yang kerap dipicu oleh kotoran kandang mentah.'
    ],
    author: {
      name: 'Ir. Hendra Kusuma',
      role: 'Koordinator Riset Sirkular KM 164B',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
    },
    date: '24 September 2026',
    readTime: '4 menit baca',
    category: 'Inovasi Sirkular',
    tags: ['Tol Cipali', 'Zero Waste', 'Maggot BSF', 'Rest Area KM 164B'],
    coverImage: '/src/assets/images/blog_biokonversi_bsf_1790566012540.jpg',
    likes: 842,
    shares: 319,
    viralQuote: 'Sampah di jalan tol bukan lagi akhir dari sebuah perjalanan, melainkan fajar baru bagi kesuburan tanah dan tanaman di seluruh negeri.',
    keyTakeaways: [
      'Reduksi timbulan sampah organik mencapai lebih dari 85% langsung di lokasi sumber',
      'Memanfaatkan bioteknologi maggot BSF higienis tanpa bau dan tanpa emisi gas metana',
      'Menghasilkan pupuk organik bersertifikasi mutu dan pakan protein 42% dengan harga terjangkau'
    ],
    trendingRank: 1,
    audioDuration: '2:15 audio',
    readCount: '4.8k dibaca',
    recommendedProductId: 'kasgot',
    statHighlights: [
      { label: 'Reduksi Sampah', value: '85%' },
      { label: 'Emisi Terpangkas', value: '3.7 Ton/Bln' }
    ]
  },
  {
    id: 'post-2',
    slug: 'efek-dahsyat-maggot-kering-km-164b-untuk-koi-channa',
    title: 'Rahasia Sisik Berkilau Sang Juara: Mengapa Pembudidaya Koi & Channa Memburu Maggot KM 164B?',
    subtitle: 'Bongkar tuntas peranan asam laurat alami dan protein murni 42% yang bikin pertumbuhan bulky melesat dan air akuarium tetap sebening kristal.',
    excerpt: 'Banyak penghobi rela membayar jutaan rupiah untuk pakan impor berlabel mahal, padahal kunci sisik mengilap tahan penyakit tersimpan pada larva BSF oven produksi Rest Area KM 164B Tol Cipali.',
    content: [
      '### Bab 1: Dilema Pembudidaya: Pakan Impor Selangit vs Kualitas Air yang Tercemar',
      'Di jagat kontes ikan hias—mulai dari kemegahan Koi Kohaku, liarnya Channa Maru Barito, hingga wibawa Arwana Super Red—setiap pembudidaya menghadapi dilema klasik. Pakan pelet buatan pabrik seringkali mengandung pengisi tepung berlebih yang cepat hancur di dalam air, memicu lonjakan amonia (NH₃) berbahaya dan mengeruhkan kolam dalam hitungan hari.',
      'Di sisi lain, pakan hidup seperti cacing sutra atau udang liar menyimpan risiko parasit dan bakteri anaerob mematikan yang dapat menulari insang ikan sewaktu-waktu.',
      '### Bab 2: Senjata Rahasia Asam Laurat (Lauric Acid): Imunitas Alami Penangkal Penyakit',
      'Di sinilah Maggot Kering BSF oven Rest Area KM 164B hadir sebagai pengubah permainan. Larva BSF yang dibudidayakan secara higienis menyimpan asam laurat alami berkonsentrasi tinggi—senyawa antibakteri dan antivirus alami yang sama seperti yang ditemukan pada minyak kelapa murni (VCO).',
      'Ketika disantap oleh ikan hias, asam laurat menembus dinding sel patogen di saluran pencernaan, melipatgandakan daya tahan tubuh ikan terhadap infeksi jamur Saprolegnia dan bakteri Aeromonas hydrophila yang kerap menyerang saat pergantian musim.',
      '🔬 Hasil Uji Laboratorium Pakan: Kadar protein kasar maggot oven KM 164B mencapai 42–45%, dengan profil asam amino esensial lengkap (metionin, lisin, treonin) yang langsung diserap otot ikan untuk memacu pertumbuhan bodi bulky tanpa menumpuk lemak jenuh.',
      '### Bab 3: Mengapa Maggot Roaster KM 164B Menjaga Air Kolam Tetap Sebening Kristal',
      'Melalui teknik pemanggangan bertahap (low-temperature roasting) di workshop KM 164B, kadar air ditekan hingga di bawah 8% tanpa merusak lapisan kitin luar larva. Hasilnya adalah pakan renyah yang mengapung stabil di permukaan air.',
      'Ikan terstimulasi oleh aroma gurih alami serangga dan langsung menyambarnya dalam hitungan detik. Tidak ada serpihan minyak atau remah tepung yang mengendap di dasar kolam, sehingga media filtrasi biologis Anda tetap bekerja optimal dan air akuarium tetap jernih sebening kaca.',
      '### Bab 4: Protokol Pemberian Pakan untuk Pertumbuhan dan Warna Maksimal',
      'Berikan Maggot Kering KM 164B sebanyak 1–2 kali sehari sebagai pakan selingan berprotein tinggi. Cukup 5–10 butir larva per ekor (sesuai ukuran ikan). Cukup dengan Rp 10.000 per pouch 100 gram, pakan berkualitas kontes kini berada dalam genggaman semua penghobi.'
    ],
    author: {
      name: 'Rian Pratama',
      role: 'Praktisi Akuakultur & Hobiis Ikan Hias',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    date: '21 September 2026',
    readTime: '3 menit baca',
    category: 'Tips Tani & Ternak',
    tags: ['Maggot Kering', 'Ikan Hias', 'Pakan Protein', 'Koi Indonesia'],
    coverImage: '/src/assets/images/product_maggot_kering_1790564677547.jpg',
    likes: 615,
    shares: 247,
    viralQuote: 'Ikan agresif lincah, warna mencolok berkilau tajam, dan air kolam tetap sebening kaca. Pakan lokal dengan performa kelas dunia!',
    keyTakeaways: [
      'Kadar protein 42–45% memacu pembentukan massa tubuh ideal tanpa lemak jenuh berlebih',
      'Asam Laurat alami membangun perisai antibodi mandiri terhadap infeksi bakteri air',
      'Tekstur renyah terapung tidak mudah larut sehingga menjamin filter kolam tetap bersih'
    ],
    trendingRank: 2,
    audioDuration: '1:45 audio',
    readCount: '3.9k dibaca',
    recommendedProductId: 'maggot-kering',
    statHighlights: [
      { label: 'Protein Kasar', value: '42-45%' },
      { label: 'Asam Laurat', value: 'Alami' }
    ]
  },
  {
    id: 'post-3',
    slug: 'panduan-sukses-pupuk-kasgot-dan-poc-tanaman-subur-14-hari',
    title: 'Eksperimen 14 Hari yang Menggemparkan: Ketika Tanah Keras Gersang Kembali Bernafas Berkat Kasgot & POC',
    subtitle: 'Uji coba lapangan pada cabai dan aglonema: bagaimana residu maggot melipatgandakan serbuan tunas baru hingga tiga kali lipat.',
    excerpt: 'Tanah pot Anda membatu, tandus, dan tanaman enggan bertunas? Jangan buru-buru membuangnya. Cukup taburkan segenggam kasgot dan saksikan keajaiban regenerasi mikrobioma tanah.',
    content: [
      '### Bab 1: Fenomena "Tanah Mati" di Pekarangan Rumah Kita',
      'Hampir setiap pemilik tanaman di pekarangan rumah pernah merasakan frustrasi yang sama: tanaman hias yang daunnya menguning lambat laun layu, bunga cabai yang selalu rontok sebelum mekar, dan tanah pot yang berubah menjadi lempengan tanah liat keras yang kedap udara.',
      'Banyak orang mengira tanaman kekurangan pupuk kimia, lalu menambahkan NPK secara berlebihan. Hasilnya justru fatal: residu garam sintetis menumpuk, pH tanah anjlok drastis (di bawah 5.0), dan populasi cacing serta mikroba tanah mati terpanggang. Tanah kehilangan porositas oksigennya, membuat akar lemas tercekik.',
      '### Bab 2: Anatomi Kasgot: Mengapa Kotoran Maggot Disebut Emas Hitam Agronomi',
      'Kasgot (Bekas Maggot) bukan sekadar pupuk organik biasa. Saat larva BSF mencerna sampah organik, saluran pencernaan mereka bertindak seperti bioreaktor mikroskopis yang kaya akan mikroorganisme pelarut fosfat dan bakteri penambat nitrogen.',
      'Serbuk kasgot memiliki struktur partikel remah berpori tinggi dengan daya ikat air (water retention) hingga 3 kali bobotnya sendiri. Lebih dari itu, kasgot kaya akan senyawa Asam Humat dan Asam Fulvat—senyawa organik rantai panjang yang mampu meregangkan ikatan partikel tanah liat keras menjadi gembur beroksigen.',
      '🔬 Catatan Uji Coba Lapangan 14 Hari (Kebun Percobaan KM 164B):',
      '• Hari 1–3: Tanah pot keras digemburkan ringan, ditaburkan 4 sendok makan Kasgot Super KM 164B, lalu disiram larutan POC encer (1:100). Asam humat mulai meregangkan kepadatan tanah.',
      '• Hari 7: Muncul serbuan akar rambut putih baru di balik dinding pot plastik. Tanah tercium wangi segar seperti tanah humus hutan rimba alami.',
      '• Hari 14: Terjadi ledakan pertumbuhan 5 helai daun baru yang tebal mengilap dengan warna hijau pekat berkilau. Kasgot bersifat 100% dingin di akar sehingga tidak ada risiko daun layu terbakar panas seperti pupuk kandang mentah.',
      '### Bab 3: Sinergi Dwi-Aksi: Kasgot di Bawah Tanah, POC Menyemprot Stomata Fajar',
      'Rahasia sukses agronomi modern adalah perpaduan nutrisi lambat urai (slow-release) di perakaran dengan nutrisi semprot langsung ke daun (foliar spray). Kasgot memberi makan mikrobioma tanah dari bawah, sementara Pupuk Organik Cair (POC) disemprotkan saat fajar untuk langsung diserap oleh pori-pori stomata daun yang sedang terbuka lebar.',
      '### Bab 4: Formula Hemat: Modal Rp 15.000 untuk Selusin Pot Tanaman',
      'Anda tidak perlu merogoh kocek dalam-dalam untuk pupuk impor berbahan kimia keras. Dengan satu pack Kasgot Super KM 164B (Rp 15.000 / 1 kg) dan satu botol POC (Rp 15.000 / 500 ml konsentrat setara 50 liter semprotan), seluruh koleksi tanaman di pekarangan Anda tercukupi nutrisinya hingga 2 bulan penuh.'
    ],
    author: {
      name: 'Siti Nurhaliza, S.P.',
      role: 'Agronomis Lanskap Rest Area',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    },
    date: '18 September 2026',
    readTime: '5 menit baca',
    category: 'Tips Tani & Ternak',
    tags: ['Pupuk Organik', 'Kasgot BSF', 'POC Super', 'Urban Farming'],
    coverImage: '/src/assets/images/blog_kebun_organik_1790566031807.jpg',
    likes: 934,
    shares: 412,
    viralQuote: 'Tanah yang subur bukan lahir dari zat kimia keras, melainkan dari mikroorganisme alami yang hidup selaras bersama perakaran.',
    keyTakeaways: [
      'Asam humat alami meregangkan struktur tanah liat padat menjadi gembur berpori oksigen',
      'POC bertindak sebagai pengisi nutrisi sel daun instan lewat stomata terbuka',
      'Sangat ekonomis: modal Rp 15.000 cukup untuk menyuburkan belasan pot tanaman di rumah'
    ],
    trendingRank: 3,
    audioDuration: '2:30 audio',
    readCount: '5.2k dibaca',
    recommendedProductId: 'kasgot',
    statHighlights: [
      { label: 'C-Organik', value: '> 18%' },
      { label: 'Efek Akar', value: '100% Dingin' }
    ]
  },
  {
    id: 'post-4',
    slug: 'rest-area-zero-waste-pertama-di-tol-cipali-solusi-sampah-berkelanjutan',
    title: 'Manifesto Tol Bebas Sampah: Mengapa KM 164B Menjadi Rest Area Paling Visioner di Indonesia',
    subtitle: 'Cetak biru masa depan jalan tol modern: pengolahan on-site 100% mandiri, nol kiriman ke TPA, dan pemberdayaan ratusan petani lokal.',
    excerpt: 'Rest area bukan lagi sekadar tempat buang lelah dan isi bensin. KM 164B membuktikan bahwa koridor tol dapat menjadi benteng terdepan pelestarian lingkungan hidup dan ekonomi sirkular Indonesia.',
    content: [
      '### Bab 1: Jalan Tol Modern dan Tanggung Jawab Lingkungan yang Terabaikan',
      'Membentang sejauh 116,75 kilometer melintasi lima kabupaten di Jawa Barat, Tol Cikopo – Palimanan (Cipali) adalah urat nadi perekonomian yang tak pernah tidur. Namun di balik jutaan kendaraan yang melintas setiap tahun, ada beban lingkungan yang tak terhindarkan: gunungan sampah plastik dan sisa makanan yang kerap membebani Tempat Pemrosesan Akhir daerah.',
      'Selama puluhan tahun, fasilitas publik jalan tol hanya bertindak sebagai produsen limbah yang memindahkan masalah sampah ke luar kota.',
      '### Bab 2: Rest Area KM 164B: Memutus Rantai Limbah Tepat di Titik Sumber',
      'Rest Area KM 164B menolak menjadi bagian dari masalah tersebut. Dengan tekad bulat menuju Zero Waste Highway, pengelola membangun sentra sirkular terpadu yang memproses sampah organik langsung di titik sumber.',
      'Dengan memproses sampah organik di tempat (on-site processing) memanfaatkan biokonversi lalat tentara hitam (BSF), KM 164B memangkas lebih dari 85% volume timbulan sampah harian. Tidak ada armada truk pengangkut sampah yang perlu meluncur puluhan kilometer membakar solar dan memuntahkan gas buang ke udara.',
      '🔬 Metrik Dampak Terverifikasi: Reduksi 1,5 ton sampah per hari setara dengan pemangkasan emisi gas metana dan CO₂ sebesar 44,4 ton per tahun, sekaligus menghemat anggaran logistik pengelolaan limbah daerah secara permanen.',
      '### Bab 3: Mengalirkan Berkah Hijau ke Pangkuan Petani Lokal Majalengka',
      'Model ekonomi sirkular KM 164B tidak berhenti di dalam pagar jalan tol. Residu kasgot dan POC yang melimpah dialirkan dengan harga subsidi yang sangat terjangkau (hanya Rp 15.000) bagi kelompok tani hortikultura dan padi di kawasan sekitar Majalengka.',
      'Petani yang sebelumnya terbebani lonjakan harga pupuk kimia kini beralih ke pupuk kasgot organik yang terbukti memulihkan kesuburan tanah mereka secara berkelanjutan.',
      '### Bab 4: Cetak Biru Masa Depan Infrastruktur Hijau Asia Tenggara',
      'KM 164B telah membuktikan bahwa fasilitas publik modern tidak harus menjadi produsen polusi. Ia bisa menjadi katalisator peradaban baru: tempat di mana setiap rupiah yang dibelanjakan pemudik berputar kembali menjadi kesuburan tanah, udara bersih, dan kemandirian pangan nasional.'
    ],
    author: {
      name: 'Budi Santoso',
      role: 'Pengamat Tata Kelola Lingkungan Hidup',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    date: '15 September 2026',
    readTime: '4 menit baca',
    category: 'Kisah Inspiratif',
    tags: ['Tol Berkelanjutan', 'Astra Tol Cipali', 'Ekonomi Sirkular', 'Green Highway'],
    coverImage: '/src/assets/images/hero_tps_rest_area_cipali_1790564641900.jpg',
    likes: 729,
    shares: 288,
    viralQuote: 'Keberlanjutan bukan sekadar slogan di atas spanduk seminar, melainkan keberanian mengolah apa yang dibuang menjadi berkah bagi bumi.',
    keyTakeaways: [
      'Penyelesaian tuntas sampah organik di lokasi tanpa membebani daya tampung TPA daerah',
      'Pemberdayaan tenaga kerja lokal dan sinergi pasokan pupuk dengan kelompok tani',
      'Mengurangi jejak emisi transportasi truk sampah secara permanen'
    ],
    trendingRank: 4,
    audioDuration: '2:05 audio',
    readCount: '2.7k dibaca',
    recommendedProductId: 'poc',
    statHighlights: [
      { label: 'TPA Diversion', value: '85%+' },
      { label: 'Tenaga Kerja', value: 'Lokal' }
    ]
  },
  {
    id: 'post-5',
    slug: 'rahasia-formulasi-poc-daun-lebat-bunga-tidak-rontok',
    title: 'Sihir Embun Pagi: Formulasi Pupuk Organik Cair yang Memaksa Stomata Daun Bekerja Sempurna',
    subtitle: 'Fermentasi anaerob 21 hari dengan bioaktivator Lactobacillus: nutrisi mikro pelindung bunga dan pemicu daun hijau pekat seketika.',
    excerpt: 'Mengapa semprotan POC Rest Area KM 164B mampu menghentikan kerontokan bunga dan membuat daun tanaman hias mengilap seketika? Inilah rahasia mikroba aktif di dalamnya.',
    content: [
      '### Bab 1: Kronobiologi Tumbuhan: Kapan Daun Sebenarnya Bernapas dan Lapar?',
      'Banyak penggemar tanaman melakukan kesalahan fatal: menyemprot pupuk daun di siang bolong saat terik matahari memanggang. Padahal, secara biologis tanaman telah menutup rapat-rapat lubang stomata mereka untuk mencegah penguapan cairan sel tubuh.',
      'Waktu emas metabolisme daun adalah saat fajar menyingsing—antara pukul 06.00 hingga 08.30 pagi. Pada jendela waktu ini, udara sejuk dan kelembapan embun memicu jutaan sel penjaga stomata di balik permukaan daun untuk membuka diri selebar-lebarnya.',
      '### Bab 2: Fermentasi 21 Hari: Memecah Molekul Organik Jadi Nutrisi Siap Serap',
      'Pupuk Organik Cair (POC) Rest Area KM 164B dibuat melalui proses fermentasi anaerobik bertahap selama 21 hari menggunakan konsorsium mikroba pengurai Lactobacillus sp. dan ragi Saccharomyces.',
      'Hasilnya adalah larutan konsentrat berwarna cokelat keemasan dengan aroma fermentasi manis tape yang khas tanpa aroma busuk. Makromolekul protein, fosfat, dan kalium organik telah dipecah menjadi asam amino bebas dan ion hara mikro yang berukuran kurang dari 5 nanometer—cukup kecil untuk menembus dinding stomata secara instan tanpa resistensi.',
      '🔬 Profil Biokimia POC KM 164B: Mengandung hormon auksin alami pemicu perpanjangan sel, sitokinin penunda penuaan daun, serta konsentrasi kalium organik terlarut yang memperkuat tangkai bunga dari terpaan angin kencang.',
      '### Bab 3: Mengunci Bunga Agar Tidak Gugur dan Memacu Daun Mengilap',
      'Salah satu keluhan paling umum pekebun adalah bunga cabai, tomat, ataupun jeruk yang selalu gugur sebelum menjadi bakal buah. Kandungan kalsium dan kalium hayati dalam POC KM 164B bekerja mempertebal dinding sel pada tangkai bunga (pedicel), mencegah terbentuknya lapisan absisi penyebab rontok.',
      'Disaat yang sama, sintesis klorofil pada lamina daun melonjak hingga 40% dalam 48 jam pasca penyemprotan, membuat daun tanaman hias seperti Philodendron, Monstera, dan Aglonema tampak hijau royo-royo mengilap seperti dilapisi lilin alami.',
      '### Bab 4: Panduan Pelarutan Super Hemat: 1 Tutup Botol untuk 1 Liter Air',
      'Karena POC KM 164B berbentuk konsentrat murni, penggunaannya sangat irit: cukup encerkan 10 ml (1 tutup botol) ke dalam 1 liter air bersih, lalu semprotkan kabut halus ke permukaan bawah daun setiap 5–7 hari sekali. Satu botol 500 ml seharga Rp 15.000 menghasilkan 50 liter larutan semprot siap pakai—efisiensi tak tertandingi untuk kebun rumah Anda.'
    ],
    author: {
      name: 'Siti Nurhaliza, S.P.',
      role: 'Agronomis Lanskap Rest Area',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    },
    date: '12 September 2026',
    readTime: '3 menit baca',
    category: 'Tips Tani & Ternak',
    tags: ['Pupuk Cair', 'POC Super', 'Hortikultura', 'Booster Buah'],
    coverImage: '/src/assets/images/product_pupuk_organik_cair_1790564655656.jpg',
    likes: 885,
    shares: 340,
    viralQuote: 'Nutrisi daun alami diserap langsung saat fajar merekah, melahirkan tunas baru yang segar tanpa racun berbahaya bagi keluarga.',
    keyTakeaways: [
      'Penyerapan instan via stomata daun (foliar spray) pada saat fajar pagi hari',
      'Mengandung hormon auksin & giberelin alami yang mengunci bunga agar tidak gugur',
      '1 botol konsentrat 500 ml setara dengan 50 liter pupuk semprot siap pakai'
    ],
    trendingRank: 5,
    audioDuration: '1:50 audio',
    readCount: '4.1k dibaca',
    recommendedProductId: 'poc',
    statHighlights: [
      { label: 'Konsentrat', value: '1:100 Air' },
      { label: 'Hasil Larutan', value: '50 Liter' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Pak Sugeng Riyadi',
    role: 'Pecinta Ikan Koi & Channa, Cirebon',
    text: 'Awalnya saya membeli Maggot Kering KM 164B saat sedang beristirahat di rest area, lalu mencobanya untuk ikan Koi dan Channa di rumah. Hasilnya sangat memuaskan! Corak warna ikan tampak lebih tajam dan mengilap dalam 2 minggu. Sekarang setiap melintas di Tol Cipali saya selalu menyempatkan mampir atau pesan ulang via WhatsApp.',
    rating: 5,
    product: 'Maggot Kering BSF'
  },
  {
    name: 'Ibu Ratna Dewi',
    role: 'Penggiat Urban Farming & Tanaman Hias, Bekasi',
    text: 'Kombinasi Pupuk Kasgot dan POC nya benar-benar istimewa! Tanaman Aglonema dan monstera saya yang sebelumnya sulit bertunas, setelah diberi kasgot dan disemprot POC seminggu sekali langsung memunculkan daun-daun baru yang segar. Harganya sangat hemat hanya Rp 15.000 tapi kualitasnya melampaui pupuk kimia impor.',
    rating: 5,
    product: 'Pupuk Kasgot & POC'
  },
  {
    name: 'Kang Asep Wahyudi',
    role: 'Petani Hortikultura & Cabai, Majalengka',
    text: 'Pupuk kasgot dari sentra sirkular KM 164B berhasil membuat tanah kebun saya yang tadinya padat menjadi gembur kembali. Tanaman cabai lebih tahan terhadap serangan layu dan menghasilkan buah yang lebat. Kami sangat bangga ada rest area di wilayah kami yang mampu mengolah sampah menjadi berkah bagi petani lokal.',
    rating: 5,
    product: 'Pupuk Kasgot 1 Kg'
  }
];

export const FAQS = [
  {
    q: 'Bagaimana cara memesan produk Pupuk Organik Cair, Kasgot, dan Maggot Kering?',
    a: 'Pemesanan sangat praktis! Anda dapat mengklik tombol "Pesan via WhatsApp" atau menambahkan produk ke keranjang belanja di website ini. Format pesan akan otomatis terhubung ke WhatsApp resmi pengelola di 0812-6651-5635. Kami melayani pengiriman ke seluruh kota di Indonesia atau pengambilan langsung saat Anda singgah di Rest Area KM 164B Tol Cipali.'
  },
  {
    q: 'Berapa daftar harga resmi untuk masing-masing produk olahan?',
    a: 'Harga kami sangat terjangkau karena diproduksi langsung dari sentra sirkular mandiri: 1) Pupuk Organik Cair (POC) Rp 15.000 / botol 500 ml, 2) Pupuk Kasgot Super Rp 15.000 / kemasan 1 kg, dan 3) Maggot Kering BSF Rp 10.000 / kantong 100 gram.'
  },
  {
    q: 'Apakah lalat dan larva Black Soldier Fly (BSF) aman dan tidak membawa bibit penyakit?',
    a: 'Sangat aman! Lalat Black Soldier Fly (Hermetia illucens) berbeda secara biologis dengan lalat rumah atau lalat hijau. BSF dewasa tidak memiliki mulut penggigit, tidak hinggap pada makanan manusia, dan bukan merupakan vektor penyakit. Larvanya justru memproduksi zat antibakteri alami yang menekan perkembangbiakan bakteri patogen seperti Salmonella dan E. coli.'
  },
  {
    q: 'Bagaimana anjuran takaran dan dosis penggunaan Pupuk Organik Cair (POC)?',
    a: 'Cukup larutkan 10–15 ml (setara 1–2 tutup botol) POC ke dalam 1 liter air bersih. Semprotkan secara merata pada permukaan daun di pagi hari sebelum matahari terik, atau siramkan pada media tanah di sekitar perakaran tanaman setiap 5–7 hari sekali.'
  },
  {
    q: 'Di mana lokasi persis fasilitas pengelolaan sirkular di Rest Area KM 164B Tol Cipali?',
    a: 'Fasilitas Circular Eco Hub terletak di area belakang sisi timur Rest Area KM 164B Tol Cipali (Jalur B – arah menuju Jakarta/Bandung, Kabupaten Majalengka, Jawa Barat). Fasilitas ini juga terbuka untuk kunjungan edukasi dan studi banding lingkungan hidup dengan konfirmasi terlebih dahulu.'
  }
];
