import type { Question } from '../types';

// Helper function to transform questions with "pilihan" format
function transformQuestion(q: any): Question {
  if ('pilihan' in q) {
    return {
      id: q.id,
      question: q.pertanyaan,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: q.penjelasan
    };
  }
  if ('soal' in q) {
    return {
      id: q.id,
      question: q.soal,
      options: q.pilihan,
      correctAnswer: q.jawaban,
      explanation: ''
    };
  }
  return q;
}

// All questions combined and transformed
export const questions: Question[] = [
  {
    id: 1,
    question: "Apa syarat desa untuk mendapatkan dana konservasi dan/atau dana rehabilitasi?",
    options: ["Terletak di kawasan suaka alam", "Terletak di kawasan pelestarian alam", "Terletak di hutan produksi", "Terletak di pegunungan tertinggi"],
    correctAnswer: 0,
    explanation: "Desa harus terletak di kawasan suaka alam untuk memenuhi syarat mendapatkan dana konservasi dan/atau dana rehabilitasi sesuai peraturan perundang-undangan."
  },
  {
    id: 2,
    question: "Di mana desa harus berada agar bisa mendapatkan dana konservasi?",
    options: ["Di tengah kota metropolitan", "Di pinggiran hutan belantara", "Di kawasan industri", "Di kawasan suaka alam"],
    correctAnswer: 3,
    explanation: "Desa harus berada di kawasan suaka alam agar memenuhi syarat untuk mendapatkan dana konservasi sesuai peraturan yang berlaku."
  },
  {
    id: 3,
    question: "Siapa yang berwenang mengelola dana konservasi di desa?",
    options: ["Kepala Desa", "Badan Permusyawaratan Desa", "Camat", "Gubernur"],
    correctAnswer: 0,
    explanation: "Kepala Desa memiliki wewenang untuk mengelola dana konservasi sesuai dengan ketentuan yang berlaku."
  },
  {
    id: 4,
    question: "Bagaimana prosedur pengajuan dana konservasi untuk desa?",
    options: ["Langsung ke pusat", "Melalui provinsi", "Melalui kabupaten", "Melalui kecamatan"],
    correctAnswer: 2,
    explanation: "Prosedur pengajuan dana konservasi dilakukan melalui kabupaten sesuai dengan hierarki pemerintahan."
  },
  {
    id: 5,
    question: "Apa tujuan utama pemberian dana konservasi kepada desa?",
    options: ["Pembangunan infrastruktur", "Pelestarian lingkungan", "Pengembangan ekonomi", "Pemberdayaan masyarakat"],
    correctAnswer: 1,
    explanation: "Dana konservasi bertujuan untuk mendukung upaya pelestarian lingkungan di kawasan desa."
  },
  {
    id: 6,
    question: "Berapa lama periode pelaporan penggunaan dana konservasi?",
    options: ["1 bulan", "3 bulan", "6 bulan", "12 bulan"],
    correctAnswer: 2,
    explanation: "Pelaporan penggunaan dana konservasi dilakukan setiap 6 bulan sekali."
  },
  {
    id: 7,
    question: "Apa konsekuensi jika terjadi penyalahgunaan dana konservasi?",
    options: ["Teguran lisan", "Sanksi administratif", "Pencabutan dana", "Semua benar"],
    correctAnswer: 3,
    explanation: "Penyalahgunaan dana konservasi dapat mengakibatkan teguran lisan, sanksi administratif, hingga pencabutan dana."
  },
  {
    id: 8,
    question: "Siapa yang melakukan pengawasan terhadap penggunaan dana konservasi?",
    options: ["Masyarakat", "BPD", "Inspektorat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Pengawasan dana konservasi dilakukan oleh berbagai pihak termasuk masyarakat, BPD, dan Inspektorat."
  },
  {
    id: 9,
    question: "Apa yang harus dilakukan desa sebelum menerima dana konservasi?",
    options: ["Menyusun proposal", "Membuat tim khusus", "Melakukan survei", "Semua benar"],
    correctAnswer: 0,
    explanation: "Desa harus menyusun proposal yang komprehensif sebelum dapat menerima dana konservasi."
  },
  {
    id: 10,
    question: "Bagaimana mekanisme pencairan dana konservasi?",
    options: ["Langsung ke rekening desa", "Melalui bank daerah", "Bertahap sesuai progress", "Sekaligus di awal"],
    correctAnswer: 2,
    explanation: "Dana konservasi dicairkan secara bertahap sesuai dengan progress pelaksanaan program."
  },
  {
    id: 11,
    question: "Apa yang menjadi prioritas penggunaan dana konservasi?",
    options: ["Pembangunan fisik", "Pelestarian alam", "Gaji pegawai", "Operasional kantor"],
    correctAnswer: 1,
    explanation: "Prioritas penggunaan dana konservasi adalah untuk kegiatan pelestarian alam."
  },
  {
    id: 12,
    question: "Berapa persen dana konservasi yang boleh digunakan untuk operasional?",
    options: ["10%", "15%", "20%", "25%"],
    correctAnswer: 0,
    explanation: "Maksimal 10% dana konservasi dapat digunakan untuk keperluan operasional."
  },
  {
    id: 13,
    question: "Apa syarat minimal jumlah penduduk desa untuk mendapatkan dana konservasi?",
    options: ["500 jiwa", "1000 jiwa", "1500 jiwa", "Tidak ada syarat minimal"],
    correctAnswer: 3,
    explanation: "Tidak ada syarat minimal jumlah penduduk untuk mendapatkan dana konservasi."
  },
  {
    id: 14,
    question: "Siapa yang menentukan besaran dana konservasi untuk setiap desa?",
    options: ["Kepala Desa", "Bupati", "Menteri", "Tim evaluasi"],
    correctAnswer: 1,
    explanation: "Bupati berwenang menentukan besaran dana konservasi untuk setiap desa."
  },
  {
    id: 15,
    question: "Apa bentuk pertanggungjawaban penggunaan dana konservasi?",
    options: ["Laporan tertulis", "Dokumentasi", "Bukti pengeluaran", "Semua benar"],
    correctAnswer: 3,
    explanation: "Pertanggungjawaban meliputi laporan tertulis, dokumentasi, dan bukti pengeluaran."
  },
  {
    id: 16,
    question: "Kapan evaluasi penggunaan dana konservasi dilakukan?",
    options: ["Awal tahun", "Pertengahan tahun", "Akhir tahun", "Setiap triwulan"],
    correctAnswer: 2,
    explanation: "Evaluasi penggunaan dana konservasi dilakukan pada akhir tahun."
  },
  {
    id: 17,
    question: "Apa sanksi jika desa tidak menyampaikan laporan penggunaan dana?",
    options: ["Teguran tertulis", "Penundaan pencairan", "Penghentian dana", "Semua benar"],
    correctAnswer: 3,
    explanation: "Sanksi dapat berupa teguran tertulis, penundaan pencairan, hingga penghentian dana."
  },
  {
    id: 18,
    question: "Siapa yang bertanggung jawab atas kebenaran laporan penggunaan dana?",
    options: ["Kepala Desa", "Bendahara", "Tim pelaksana", "Semua benar"],
    correctAnswer: 0,
    explanation: "Kepala Desa bertanggung jawab penuh atas kebenaran laporan penggunaan dana."
  },
  {
    id: 19,
    question: "Apa yang harus dilakukan jika terjadi bencana alam di lokasi konservasi?",
    options: ["Menghentikan program", "Merevisi anggaran", "Melaporkan kejadian", "Semua benar"],
    correctAnswer: 3,
    explanation: "Semua tindakan tersebut harus dilakukan jika terjadi bencana alam."
  },
  {
    id: 20,
    question: "Bagaimana cara mengukur keberhasilan program konservasi?",
    options: ["Survei kepuasan", "Indikator lingkungan", "Laporan keuangan", "Semua benar"],
    correctAnswer: 1,
    explanation: "Keberhasilan program diukur melalui indikator lingkungan yang telah ditetapkan."
  },
  {
    id: 21,
    question: "Apa peran masyarakat dalam program konservasi?",
    options: ["Pelaksana", "Pengawas", "Penerima manfaat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Masyarakat berperan sebagai pelaksana, pengawas, dan penerima manfaat program."
  },
  {
    id: 22,
    question: "Berapa lama masa berlaku program konservasi?",
    options: ["1 tahun", "2 tahun", "3 tahun", "5 tahun"],
    correctAnswer: 2,
    explanation: "Program konservasi berlaku untuk periode 3 tahun."
  },
  {
    id: 23,
    question: "Apa yang harus dilakukan jika dana konservasi tidak mencukupi?",
    options: ["Menghentikan program", "Mengajukan tambahan", "Mengurangi kegiatan", "Mencari sponsor"],
    correctAnswer: 1,
    explanation: "Desa dapat mengajukan tambahan dana jika anggaran tidak mencukupi."
  },
  {
    id: 24,
    question: "Siapa yang melakukan audit terhadap penggunaan dana konservasi?",
    options: ["BPK", "Inspektorat", "Auditor independen", "Semua benar"],
    correctAnswer: 3,
    explanation: "Audit dapat dilakukan oleh BPK, Inspektorat, dan auditor independen."
  },
  {
    id: 25,
    question: "Apa syarat untuk perpanjangan program konservasi?",
    options: ["Laporan baik", "Hasil signifikan", "Dukungan masyarakat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Perpanjangan program memerlukan semua syarat tersebut."
  },
  {
    id: 26,
    question: "Bagaimana cara mengatasi konflik dalam pelaksanaan program?",
    options: ["Musyawarah", "Mediasi", "Arbitrase", "Semua benar"],
    correctAnswer: 0,
    explanation: "Konflik diselesaikan melalui musyawarah dengan melibatkan semua pihak."
  },
  {
    id: 27,
    question: "Apa yang harus dilakukan jika terjadi pergantian kepala desa?",
    options: ["Menghentikan program", "Serah terima", "Evaluasi ulang", "Semua benar"],
    correctAnswer: 1,
    explanation: "Harus dilakukan serah terima program kepada kepala desa yang baru."
  },
  {
    id: 28,
    question: "Siapa yang berhak mengusulkan perubahan program konservasi?",
    options: ["Kepala Desa", "BPD", "Masyarakat", "Semua benar"],
    correctAnswer: 3,
    explanation: "Semua pihak berhak mengusulkan perubahan program konservasi."
  },
  {
    id: 29,
    question: "Apa dampak jika target program tidak tercapai?",
    options: ["Evaluasi program", "Pengurangan dana", "Penghentian program", "Semua benar"],
    correctAnswer: 3,
    explanation: "Kegagalan mencapai target dapat berakibat pada semua konsekuensi tersebut."
  },
  {
    id: 30,
    question: "Apa yang merupakan bagian dari tugas Kepala Desa dalam pembangunan di Desa?",
    options: ["Melakukan pencabutan hak masyarakat secara sewenang-wenang", "Memfasilitasi pembangunan infrastruktur dan sarana publik", "Menetapkan pajak secara berlebihan kepada warga Desa", "Menghentikan seluruh proyek pembangunan di Desa"],
    correctAnswer: 1,
    explanation: "Kepala Desa bertanggung jawab memfasilitasi pembangunan infrastruktur dan sarana publik di desa."
  },
  {
    id: 31,
    question: "Tugas utama Kepala Desa adalah untuk….",
    options: {
      a: "Memerintah secara dictatorial",
      b: "Mengurus pembangunan kota",
      c: "Membina kemasyarakatan di Desa",
      d: "Membangun infrastruktur modern"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa bertugas menyelenggarakan pemerintahan, pembangunan, pembinaan kemasyarakatan, dan pemberdayaan masyarakat di Desa."
  },
  {
    id: 32,
    question: "Dalam menjalankan tugasnya, Kepala Desa bertanggung jawab kepada….",
    options: {
      a: "Bupati/Walikota",
      b: "Camat",
      c: "Gubernur",
      d: "Menteri Dalam Negeri"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa bertanggung jawab kepada Bupati/Walikota melalui Camat."
  },
  {
    id: 33,
    question: "Masa jabatan Kepala Desa adalah….",
    options: {
      a: "3 tahun",
      b: "4 tahun",
      c: "5 tahun",
      d: "8 tahun"
    },
    correctAnswer: "d",
    explanation: "Masa jabatan Kepala Desa adalah 8 tahun dan dapat dipilih kembali untuk maksimal 2 kali masa jabatan."
  },
  {
    id: 34,
    question: "Kepala Desa dipilih secara….",
    options: {
      a: "Langsung oleh masyarakat",
      b: "Ditunjuk oleh Camat",
      c: "Dipilih oleh BPD",
      d: "Ditunjuk oleh Bupati"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dipilih secara langsung oleh penduduk Desa yang memenuhi persyaratan."
  },
  {
    id: 35,
    question: "Salah satu wewenang Kepala Desa adalah….",
    options: {
      a: "Mengangkat Camat",
      b: "Menetapkan Peraturan Desa",
      c: "Membuat Undang-undang",
      d: "Menentukan kebijakan provinsi"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa berwenang menetapkan Peraturan Desa bersama BPD."
  },
  {
    id: 36,
    question: "Dalam pembangunan Desa, Kepala Desa wajib….",
    options: {
      a: "Mengabaikan aspirasi masyarakat",
      b: "Melibatkan partisipasi masyarakat",
      c: "Bekerja sendiri",
      d: "Menolak bantuan pemerintah"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa wajib melibatkan partisipasi masyarakat dalam pembangunan Desa."
  },
  {
    id: 37,
    question: "Laporan penyelenggaraan Pemerintahan Desa disampaikan kepada….",
    options: {
      a: "Masyarakat saja",
      b: "BPD saja",
      c: "Bupati/Walikota saja",
      d: "Bupati/Walikota dan BPD"
    },
    correctAnswer: "d",
    explanation: "Laporan penyelenggaraan Pemerintahan Desa disampaikan kepada Bupati/Walikota dan BPD."
  },
  {
    id: 38,
    question: "Kepala Desa dapat diberhentikan karena….",
    options: {
      a: "Menyelesaikan masa jabatan",
      b: "Mengembangkan Desa",
      c: "Melaksanakan tugas dengan baik",
      d: "Membangun infrastruktur"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dapat diberhentikan karena telah menyelesaikan masa jabatannya."
  },
  {
    id: 39,
    question: "Dalam mengelola keuangan Desa, Kepala Desa harus….",
    options: {
      a: "Transparan dan akuntabel",
      b: "Tertutup dan rahasia",
      c: "Bebas dan tidak terkontrol",
      d: "Tanpa pertanggungjawaban"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa harus mengelola keuangan Desa secara transparan dan akuntabel."
  },
  {
    id: 40,
    question: "Kepala Desa dalam membuat kebijakan harus….",
    options: {
      a: "Sepihak",
      b: "Mempertimbangkan aspirasi masyarakat",
      c: "Mengabaikan aturan",
      d: "Tanpa musyawarah"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus mempertimbangkan aspirasi masyarakat dalam membuat kebijakan."
  },
  {
    id: 41,
    question: "Fungsi Kepala Desa dalam pemberdayaan masyarakat adalah….",
    options: {
      a: "Membatasi kegiatan masyarakat",
      b: "Mengabaikan potensi masyarakat",
      c: "Memfasilitasi kegiatan pemberdayaan",
      d: "Menghambat kreativitas masyarakat"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa berfungsi memfasilitasi kegiatan pemberdayaan masyarakat."
  },
  {
    id: 42,
    question: "Dalam menjalankan pemerintahan, Kepala Desa dibantu oleh….",
    options: {
      a: "Perangkat Desa",
      b: "Camat",
      c: "Bupati",
      d: "Gubernur"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa dibantu oleh Perangkat Desa dalam menjalankan pemerintahan."
  },
  {
    id: 43,
    question: "Kepala Desa dalam melaksanakan pembangunan harus….",
    options: {
      a: "Mengabaikan lingkungan",
      b: "Memperhatikan kelestarian lingkungan",
      c: "Merusak alam",
      d: "Mengeksploitasi sumber daya"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus memperhatikan kelestarian lingkungan dalam pembangunan."
  },
  {
    id: 44,
    question: "Kepala Desa dalam menyelesaikan perselisihan warga harus….",
    options: {
      a: "Berpihak pada yang kuat",
      b: "Mengabaikan masalah",
      c: "Bertindak adil dan bijaksana",
      d: "Memperkeruh suasana"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus bertindak adil dan bijaksana dalam menyelesaikan perselisihan."
  },
  {
    id: 45,
    question: "Apa yang dilakukan Kepala Desa dalam merencanakan pembangunan Desa?",
    options: {
      a: "Melakukan rencana tanpa konsultasi kepada siapa pun",
      b: "Mengabaikan kebutuhan masyarakat dalam pembangunan",
      c: "Melibatkan masyarakat dalam perencanaan pembangunan",
      d: "Menentukan pembangunan tanpa memperhatikan dampaknya"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus menyusun rencana pembangunan berdasarkan musyawarah dan partisipasi masyarakat."
  },
  {
    id: 46,
    question: "Apa salah satu kewajiban wajib bagi Kepala Desa dalam melaksanakan tugas mereka sesuai dengan Pasal 26?",
    options: {
      a: "Memberikan dan/atau menyebarkan informasi tertulis tentang pelaksanaan Pemerintahan Desa kepada masyarakat setempat setiap akhir tahun anggaran.",
      b: "Menyerahkan laporan pertanggungjawaban pelaksanaan Pemerintahan Desa pada akhir masa jabatan mereka di Forum Musyawarah Desa.",
      c: "Memberikan laporan pertanggungjawaban secara horizontal tentang pelaksanaan Pemerintahan Desa dalam bentuk lisan dan tertulis kepada Badan Permusyawaratan Desa setiap akhir tahun anggaran.",
      d: "Menjadi pengayom semua golongan masyarakat."
    },
    correctAnswer: "a",
    explanation: ""
  },
  {
    id: 47,
    question: "Bagaimana seharusnya Kepala Desa mengelola aset Desa?",
    options: {
      a: "Secara pribadi",
      b: "Untuk kepentingan kelompok",
      c: "Secara transparan dan bertanggung jawab",
      d: "Tanpa pencatatan"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus mengelola aset Desa secara transparan dan bertanggung jawab."
  },
  {
    id: 48,
    question: "Dalam pengambilan keputusan, Kepala Desa harus….",
    options: {
      a: "Memutuskan sendiri",
      b: "Bermusyawarah dengan masyarakat",
      c: "Mengikuti keinginan pribadi",
      d: "Mengabaikan aspirasi"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus bermusyawarah dengan masyarakat dalam pengambilan keputusan."
  },
  {
    id: 49,
    question: "Kepala Desa dalam pemberdayaan ekonomi harus….",
    options: {
      a: "Mengembangkan potensi lokal",
      b: "Membatasi usaha warga",
      c: "Menghambat perdagangan",
      d: "Menutup pasar desa"
    },
    correctAnswer: "a",
    explanation: "Kepala Desa harus mengembangkan potensi lokal dalam pemberdayaan ekonomi."
  },
  {
    id: 50,
    question: "Dalam pelayanan publik, Kepala Desa wajib….",
    options: {
      a: "Membeda-bedakan warga",
      b: "Memberikan pelayanan yang sama",
      c: "Mengabaikan keluhan",
      d: "Mempersulit prosedur"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa wajib memberikan pelayanan yang sama kepada semua warga."
  },
  {
    id: 51,
    question: "Kepala Desa dalam mengelola dana desa harus….",
    options: {
      a: "Sesuai kepentingan pribadi",
      b: "Tanpa perencanaan",
      c: "Sesuai aturan dan transparan",
      d: "Bebas penggunaan"
    },
    correctAnswer: "c",
    explanation: "Kepala Desa harus mengelola dana desa sesuai aturan dan transparan."
  },
  {
    id: 52,
    question: "Dalam pembinaan generasi muda, Kepala Desa berperan….",
    options: {
      a: "Membatasi aktivitas",
      b: "Memfasilitasi pengembangan",
      c: "Mengabaikan potensi",
      d: "Menghambat kreativitas"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa berperan memfasilitasi pengembangan generasi muda."
  },
  {
    id: 53,
    question: "Kepala Desa dalam menjaga keamanan harus….",
    options: {
      a: "Bekerja sendiri",
      b: "Melibatkan masyarakat",
      c: "Mengabaikan ancaman",
      d: "Menolak bantuan"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa harus melibatkan masyarakat dalam menjaga keamanan."
  },
  {
    id: 54,
    question: "Dalam pengembangan teknologi, Kepala Desa sebaiknya….",
    options: {
      a: "Menolak modernisasi",
      b: "Mengadopsi yang sesuai",
      c: "Mengabaikan kemajuan",
      d: "Menutup diri"
    },
    correctAnswer: "b",
    explanation: "Kepala Desa sebaiknya mengadopsi teknologi yang sesuai dengan kebutuhan desa."
  },
  {
    id: 55,
    question: "Apa arti Forum Musyawarah Desa dalam proses pertanggungjawaban Kepala Desa?",
    options: {
      a: "Ini berfungsi sebagai platform transparansi",
      b: "Ini membatasi keterlibatan masyarakat",
      c: "Ini mempromosikan pemerintahan otoriter",
      d: "Ini merusak langkah-langkah pertanggungjawaban"
    },
    correctAnswer: "a",
    explanation: ""
  }
].map(transformQuestion);