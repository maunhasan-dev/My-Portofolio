// ==========================================================
// KAMUS TERJEMAHAN (i18n) - v1
// File ini HARUS dimuat SEBELUM script-v5.js di setiap halaman.
//
// Cara kerjanya: setiap teks yang bisa diterjemahkan diberi
// "kode" di HTML lewat atribut data-i18n="kode-nya", misalnya:
//   <h1 data-i18n="home.title">Maunhasan</h1>
// Lalu di sini kita definisikan artinya dalam 2 bahasa:
//   "home.title": { id: "Maunhasan", en: "Maunhasan" }
//
// GANTI/TAMBAH: kalau nanti nambah teks baru di halaman manapun,
// tambahkan juga entrinya di sini dengan kode yang sama persis
// dengan yang ditulis di atribut data-i18n HTML.
// ==========================================================

const translations = {

  // ---------- DIPAKAI DI SEMUA HALAMAN (Navbar) ----------
  // Nav "Home, About, Projects, dst" sengaja TIDAK diterjemahkan
  // karena istilah itu sudah umum dipakai dalam Bahasa Indonesia
  // sehari-hari di dunia digital/portfolio.

  // ---------- HOME ----------
  "home.eyebrow1": { id: "01 — Halo, perkenalkan", en: "01 — Hello, I'm" },
  "home.headline": {
    id: "Belajar webapp development dengan membangun produk digital yang benar-benar dipakai oleh bisnis nyata, dari website brand, sistem operasional pertanian, sampai tools marketing berbasis AI untuk UMKM Indonesia.",
    en: "Learning web app development by building digital products that are actually used by real businesses, from brand websites and farm operations systems to AI-powered marketing tools for Indonesian small businesses."
  },
  "home.btn.viewProjects": { id: "View Projects", en: "View Projects" },
  "home.eyebrow2": { id: "02 — Karya Pilihan", en: "02 — Selected Work" },
  "home.highlightTitle": { id: "Highlight Project", en: "Highlight Projects" },

  "home.project.djamuntara.desc": {
    id: "Website resmi brand jamu Djamuntara, menghadirkan produk herbal organik dengan pengalaman modern, dari katalog produk sampai artikel kesehatan, dibangun untuk mencerminkan identitas brand-nya.",
    en: "The official website for Djamuntara, an organic herbal jamu brand, presenting products with a modern experience, from the product catalog to health articles, built to reflect the brand's identity."
  },
  "home.project.mhbfarm.desc": {
    id: "Website operasional untuk MHB Farm, mencakup SOP penanaman, monitoring jadwal tanam dan panen, reminder perawatan berkala, pencatatan hasil panen otomatis ke spreadsheet, serta AI chatbot untuk membantu operasional harian.",
    en: "An operational website for MHB Farm, covering planting SOPs, planting and harvest schedule monitoring, recurring care reminders, automatic harvest logging to spreadsheets, and an AI chatbot to support daily operations."
  },
  "home.project.etalase.desc": {
    id: "AI Marketing Workspace untuk UMKM Indonesia, memadukan Business Context dengan tools Content, Lead Magnet, Landing Page, Email, Sales Funnel, Campaign, dan Analytics dalam satu tempat.",
    en: "An AI Marketing Workspace for Indonesian small businesses, combining Business Context with Content, Lead Magnet, Landing Page, Email, Sales Funnel, Campaign, and Analytics tools in one place."
  },

  "home.eyebrow3": { id: "03 — Tentang Saya", en: "03 — About Me" },
  "home.aboutTeaser": {
    id: "Saya percaya cara terbaik belajar adalah dengan langsung praktik, membangun produk digital untuk brand dan bisnis nyata. Fokus saya saat ini ada di HTML, CSS, dan JavaScript, sambil terus mengasah cara berpikir yang lebih terstruktur dalam membangun sebuah produk digital.",
    en: "I believe the best way to learn is by directly practicing, building digital products for real brands and businesses. My current focus is on HTML, CSS, and JavaScript, while continuing to sharpen a more structured way of thinking in building a digital product."
  },
  "home.btn.learnMore": { id: "Learn More", en: "Learn More" },

  // ---------- ABOUT ----------
  "about.eyebrow1": { id: "01 — Tentang Saya", en: "01 — About Me" },
  "about.intro": {
    id: "Sedang membangun kemampuan sebagai web developer, belajar dari nol menggunakan HTML, CSS, dan JavaScript melalui project nyata. Saya percaya keterampilan teknis akan lebih kuat kalau dibangun sembari menyelesaikan masalah yang ada, bukan sekadar latihan tanpa konteks. Itulah kenapa setiap project yang saya kerjakan selalu terhubung dengan kebutuhan bisnis atau brand yang nyata, mulai dari operasional pertanian sampai strategi marketing digital.",
    en: "Currently building my skills as a web developer, learning from scratch using HTML, CSS, and JavaScript through real projects. I believe technical skills grow stronger when built while solving actual problems, not just practicing without context. That's why every project I work on is always connected to a real business or brand need, from farm operations to digital marketing strategy."
  },

  "about.eyebrow2": { id: "02 — Prinsip", en: "02 — Principles" },
  "about.valuesTitle": { id: "Nilai yang Saya Pegang", en: "Values I Hold" },
  "about.value1.title": { id: "Teliti", en: "Detail-oriented" },
  "about.value1.desc": { id: "Memperhatikan detail kecil, dari struktur kode sampai tampilan akhir.", en: "Paying attention to small details, from code structure to final appearance." },
  "about.value2.title": { id: "Konsisten Belajar", en: "Consistent Learning" },
  "about.value2.desc": { id: "Membangun kemampuan sedikit demi sedikit lewat proyek yang nyata.", en: "Building skills gradually through real projects." },
  "about.value3.title": { id: "Rendah Hati", en: "Humble" },
  "about.value3.desc": { id: "Terbuka menerima masukan dan terus memperbaiki hasil kerja.", en: "Open to feedback and always improving the work I do." },
  "about.value4.title": { id: "Solutif", en: "Solution-driven" },
  "about.value4.desc": { id: "Fokus mencari solusi praktis, sesuai dengan sumber daya yang tersedia.", en: "Focused on finding practical solutions with the resources available." },

  "about.eyebrow3": { id: "03 — Riwayat", en: "03 — Background" },
  "about.eduTitle": { id: "Pendidikan", en: "Education" },
  "about.eduBridge": {
    id: "Meskipun latar belakang pendidikan formal saya bukan di bidang teknologi, hal ini justru membentuk fondasi disiplin dan cara berpikir yang saya bawa ke dunia web development.",
    en: "Although my formal education background isn't in technology, it actually shaped the discipline and mindset I now bring into web development."
  },

  "about.eyebrow4": { id: "04 — Ringkasan", en: "04 — Summary" },
  "about.expTitle": { id: "Pengalaman Singkat", en: "Brief Experience" },
  "about.expSummary": {
    id: "2026, Sekarang. Membangun beberapa project web app dari nol, termasuk Djamuntara, MHB Farm, dan Etalase Marketing.",
    en: "2026, Present. Building several web app projects from scratch, including Djamuntara, MHB Farm, and Etalase Marketing."
  },
  "about.btn.viewExperience": { id: "Lihat Semua Pengalaman", en: "View All Experience" },

  // ---------- EXPERIENCE ----------
  "experience.eyebrow1": { id: "01 — Riwayat", en: "01 — Background" },
  "experience.title": { id: "Experience", en: "Experience" },
  "experience.subtitle": {
    id: "Perjalanan belajar dan pengalaman saya di dunia web development, disusun dari yang paling baru.",
    en: "My learning journey and experience in the world of web development, listed from most recent."
  },
  "experience.item1.meta": { id: "2026 — SEKARANG", en: "2026 — PRESENT" },
  "experience.item1.title": { id: "Belajar Web Development Mandiri", en: "Self-Taught Web Development" },
  "experience.item1.desc": {
    id: "Membangun kemampuan sebagai web developer secara mandiri, dimulai dari dasar HTML, CSS, dan JavaScript, hingga menyelesaikan beberapa project nyata untuk brand dan bisnis, termasuk Djamuntara, MHB Farm, dan Etalase Marketing.",
    en: "Building skills as a web developer independently, starting from the basics of HTML, CSS, and JavaScript, through to completing several real projects for brands and businesses, including Djamuntara, MHB Farm, and Etalase Marketing."
  },
  "experience.item2.meta": { id: "2021 — SEKARANG", en: "2021 — PRESENT" },
  "experience.item2.title": { id: "Investment & Trading", en: "Investment & Trading" },
  "experience.item2.desc": {
    id: "Mempelajari dan mempraktikkan analisa dasar investasi serta pengelolaan risiko dalam trading, sebagai bagian dari memahami sisi keuangan dan pengambilan keputusan bisnis secara lebih matang.",
    en: "Learning and practicing basic investment analysis and risk management in trading, as part of understanding the financial side and making more mature business decisions."
  },
  "experience.item3.meta": { id: "2020 — SEKARANG", en: "2020 — PRESENT" },
  "experience.item3.title": { id: "Mengajar Tahfidz Al-Qur'an", en: "Teaching Qur'an Memorization" },
  "experience.item3.desc": {
    id: "Membimbing santri dalam melafadzkan dan menghafalkan Al-Qur'an secara baik dan benar serta bersanad, melatih kesabaran, konsistensi, dan kemampuan menyampaikan sesuatu dengan cara yang mudah dipahami.",
    en: "Guiding students in reciting and memorizing the Qur'an correctly with proper chain of transmission, cultivating patience, consistency, and the ability to explain things in an easy-to-understand way."
  },

  // ---------- SKILLS ----------
  "skills.eyebrow1": { id: "01 — Kemampuan", en: "01 — Skills" },
  "skills.title": { id: "Skills", en: "Skills" },
  "skills.subtitle": {
    id: "Teknologi yang sedang saya pelajari, dan beberapa minat lain di luar dunia coding yang turut membentuk cara saya bekerja.",
    en: "Technologies I'm currently learning, along with a few interests outside of coding that shape the way I work."
  },
  "skills.eyebrow2": { id: "02 — Tech Stack", en: "02 — Tech Stack" },
  "skills.techTitle": { id: "Yang Sedang Saya Kuasai", en: "What I'm Currently Learning" },
  "skills.group.frontend": { id: "Frontend", en: "Frontend" },
  "skills.group.tools": { id: "Tools", en: "Tools" },
  "skills.group.learning": { id: "Sedang Dipelajari", en: "Currently Learning" },

  "skills.eyebrow3": { id: "03 — Di Luar Coding", en: "03 — Beyond Coding" },
  "skills.passionTitle": { id: "Minat Lain yang Membentuk Cara Saya Bekerja", en: "Other Interests That Shape How I Work" },
  "skills.passionSubtitle": {
    id: "Latar belakang di luar dunia teknis ini yang sering memberi sudut pandang berbeda saat membangun sebuah produk.",
    en: "This background outside the technical world often gives me a different perspective when building a product."
  },
  "skills.passion1.title": { id: "Farming & Herbal", en: "Farming & Herbal" },
  "skills.passion1.desc": {
    id: "Minat di dunia pertanian dan produk herbal, menjadi dasar pengembangan MHB Farm dan Djamuntara.",
    en: "An interest in farming and herbal products, forming the foundation for developing MHB Farm and Djamuntara."
  },
  "skills.passion2.title": { id: "Investment & Trading", en: "Investment & Trading" },
  "skills.passion2.desc": {
    id: "Mempelajari analisa dasar investasi dan pengelolaan risiko trading sejak 2021, membantu saya memahami pengambilan keputusan bisnis dari sudut pandang yang berbeda.",
    en: "Learning basic investment analysis and trading risk management since 2021, helping me understand business decision-making from a different perspective."
  },
  "skills.passion3.title": { id: "Writing", en: "Writing" },
  "skills.passion3.desc": {
    id: "Menulis artikel dan blog menjadi salah satu cara saya menyalurkan ide, termasuk ide bisnis dan strategi konten seperti menyusun lead magnet yang efektif.",
    en: "Writing articles and blog posts is one way I channel ideas, including business ideas and content strategy such as crafting effective lead magnets."
  },
  "skills.passion4.title": { id: "Mengajar Tahfidz Al-Qur'an", en: "Teaching Qur'an Memorization" },
  "skills.passion4.desc": {
    id: "Membimbing santri menghafal Al-Qur'an sejak 2020, melatih kesabaran dan konsistensi yang saya bawa ke berbagai bidang lain, termasuk dunia coding.",
    en: "Guiding students in memorizing the Qur'an since 2020, cultivating patience and consistency that I carry into other fields, including coding."
  },

  // ---------- CONTACT ----------
  "contact.eyebrow1": { id: "01 — Kontak", en: "01 — Contact" },
  "contact.title": { id: "Mari Terhubung", en: "Get In Touch" },
  "contact.subtitle": {
    id: "Punya project menarik, ide kolaborasi, atau cuma mau say hi? Kabar dari kamu selalu saya tunggu.",
    en: "Have an interesting project, a collaboration idea, or just want to say hi? I'd love to hear from you."
  },
  "contact.btn.send": { id: "Kirim Pesan", en: "Send Message" },

  // ---------- PROJECTS (list page) ----------
  "projects.eyebrow1": { id: "01 — Karya", en: "01 — Work" },
  "projects.title": { id: "Projects", en: "Projects" },
  "projects.subtitle": {
    id: "Kumpulan project yang sudah saya kerjakan. Cari atau saring berdasarkan kategori di bawah ini.",
    en: "A collection of projects I've worked on. Search or filter by category below."
  },
  "projects.search.placeholder": { id: "Cari project... (misal: brand, herbal)", en: "Search projects... (e.g. brand, herbal)" },
  "projects.filter.all": { id: "Semua", en: "All" },
  "projects.filter.brand": { id: "Brand Website", en: "Brand Website" },
  "projects.filter.webapp": { id: "Web App", en: "Web App" },
  "projects.emptyState": { id: "Tidak ada project yang cocok. Coba kata kunci lain.", en: "No matching projects. Try a different keyword." },

  // ---------- PROJECT DETAIL ----------
  "detail.eyebrow1": { id: "01 — Project", en: "01 — Project" },
  "detail.eyebrow2": { id: "02 — Hasil & Pembelajaran", en: "02 — Results & Learnings" },
  "detail.btn.demo": { id: "Lihat Demo", en: "View Demo" },
  "detail.btn.repo": { id: "Repository", en: "Repository" },
  "detail.btn.back": { id: "← Kembali ke Projects", en: "← Back to Projects" },
  "detail.notFound.title": { id: "Project Tidak Ditemukan", en: "Project Not Found" },
  "detail.notFound.desc": {
    id: "Sepertinya halaman ini dibuka tanpa memilih project dari daftar terlebih dahulu.",
    en: "It looks like this page was opened without selecting a project from the list first."
  },

};

// Kode ini otomatis mendeteksi jika ada kode yang lupa
// dipasangkan artinya, supaya gampang ketauan pas develop.
if (typeof window !== "undefined") {
  window.translations = translations;
}
