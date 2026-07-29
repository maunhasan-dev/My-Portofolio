// ==========================================================
// SCRIPT UTAMA - v2
// Perubahan dari v1:
// - Data project ditambah field: image, demoLink, repoLink, learnings
// - Card project sekarang jadi <a> (bisa di-tap ke halaman detail)
// - Ditambahkan renderProjectDetail() untuk halaman Project Detail
// - Ditambahkan "penjaga" (guard) supaya script ini AMAN dipakai
//   di halaman manapun, walau elemennya tidak selalu ada semua
// ==========================================================


// ---------- 1. DATA PROJECT ----------
const projects = [
  {
    id: "djamuntara",
    title: "Djamuntara",
    description: "Website e-commerce untuk brand herbal/jamu, lengkap dengan katalog, keranjang, dan checkout.",
    category: "ecommerce",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "Screenshot Djamuntara", // GANTI: nanti diganti <img src="...">, lihat catatan di project-detail-v1.html
    demoLink: "#",   // GANTI: link demo/preview project (kalau sudah online)
    repoLink: "#",   // GANTI: link ke source code, misal GitHub
    learnings: "Belajar menyusun halaman e-commerce yang cukup kompleks: katalog dengan filter, keranjang belanja, sampai proses checkout, sambil menjaga tampilan tetap konsisten di setiap halaman."
  },
  {
    id: "lead-magnet-generator",
    title: "Lead Magnet Idea Generator",
    description: "Web app pembelajaran untuk menghasilkan ide lead magnet berdasarkan industri bisnis.",
    category: "webapp",
    tags: ["HTML", "JavaScript"],
    image: "Screenshot Lead Magnet Idea Generator",
    demoLink: "#",
    repoLink: "#",
    learnings: "Belajar mengubah isi sebuah ebook menjadi tool interaktif sederhana, serta memahami dasar menyusun data dan logika di JavaScript."
  }
  // GANTI/TAMBAH: copy 1 blok { ... } di atas untuk menambah project baru
];


// ---------- 2. STATE ----------
let activeCategory = "all";
let searchQuery = "";


// ---------- 3. RENDER: HALAMAN PROJECTS (list + search + filter) ----------
function renderProjects() {
  const grid = document.getElementById("project-grid");

  // PENJAGA: kalau di halaman ini tidak ada elemen #project-grid,
  // artinya kita BUKAN sedang di halaman Projects. Langsung
  // keluar dari function, tidak usah lanjut (biar tidak error).
  if (!grid) return;

  const emptyState = document.getElementById("empty-state");

  const filtered = projects.filter((project) => {
    const matchCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  grid.innerHTML = "";
  emptyState.style.display = filtered.length === 0 ? "block" : "none";

  filtered.forEach((project) => {
    // PERUBAHAN dari v1: dulu <div>, sekarang <a> supaya bisa di-tap
    // dan berpindah ke halaman detail.
    const card = document.createElement("a");
    card.className = "card card-link";
    card.href = `project-detail-v3.html?id=${project.id}`;

    const tagsHTML = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p style="margin: 8px 0 12px;">${project.description}</p>
      ${tagsHTML}
    `;

    grid.appendChild(card);
  });
}


// ---------- 4. RENDER: HALAMAN PROJECT DETAIL ----------
function renderProjectDetail() {
  const wrapper = document.getElementById("project-detail");

  // PENJAGA: kalau elemen #project-detail tidak ada,
  // berarti kita bukan di halaman detail. Keluar saja.
  if (!wrapper) return;

  // URLSearchParams adalah fitur bawaan browser untuk membaca
  // bagian "?id=..." di alamat URL saat ini.
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  // .find() mirip .filter(), tapi cuma ambil SATU data pertama
  // yang cocok (bukan daftar/list seperti .filter()).
  const project = projects.find((p) => p.id === projectId);

  // Kalau id di URL tidak cocok dengan project manapun
  // (misal halaman dibuka langsung tanpa lewat tap card),
  // tampilkan pesan, bukan halaman kosong/error.
  if (!project) {
    wrapper.innerHTML = `
      <p class="eyebrow">Oops</p>
      <h1>Project Tidak Ditemukan</h1>
      <p>Sepertinya halaman ini dibuka tanpa memilih project dari daftar terlebih dahulu.</p>
      <a href="projects-v4.html" class="btn btn-primary" style="margin-top: var(--space-sm);">Kembali ke Projects</a>
    `;
    return;
  }

  const tagsHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  wrapper.innerHTML = `
    <p class="eyebrow">01 — Project</p>
    <h1>${project.title}</h1>

    <div class="detail-image">${project.image}</div>

    <p style="margin: var(--space-sm) 0;">${project.description}</p>
    <div style="margin-bottom: var(--space-md);">${tagsHTML}</div>

    <div class="btn-row">
      <a href="${project.demoLink}" class="btn btn-primary" target="_blank" rel="noopener">Lihat Demo</a>
      <a href="${project.repoLink}" class="btn btn-secondary" target="_blank" rel="noopener">Repository</a>
    </div>

    <hr class="divider">

    <p class="eyebrow">02 — Hasil &amp; Pembelajaran</p>
    <p>${project.learnings}</p>

    <a href="projects-v4.html" class="btn btn-secondary" style="margin-top: var(--space-lg);">← Kembali ke Projects</a>
  `;
}


// ---------- 5. EVENT LISTENER: SEARCH (hanya jika elemennya ada) ----------
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderProjects();
  });
}


// ---------- 6. EVENT LISTENER: FILTER CHIP ----------
const filterButtons = document.querySelectorAll(".filter-chip");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProjects();
  });
});


// ---------- 7. JALANKAN SAAT HALAMAN DIBUKA ----------
// Kedua function ini AMAN dipanggil di halaman manapun,
// karena masing-masing sudah punya "penjaga" di awal (langkah 3 & 4)
// yang otomatis keluar kalau elemennya tidak ditemukan.
renderProjects();
renderProjectDetail();


// ---------- 8. SCROLL REVEAL (v3) ----------
// Ini fitur baru: elemen dengan class "reveal" (lihat CSS
// di style-v3.css) akan "muncul perlahan" begitu masuk ke
// area layar yang terlihat, bukan langsung terlihat semua
// pas halaman dibuka.
//
// IntersectionObserver adalah fitur bawaan browser yang
// tugasnya "mengintai" kapan sebuah elemen masuk/keluar
// dari layar yang sedang terlihat oleh user.
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // isIntersecting = true artinya elemen ini SEDANG
        // terlihat di layar (minimal sebagian).
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // unobserve = "berhenti mengintai elemen ini".
          // Dipakai supaya animasi cuma jalan SEKALI saja,
          // tidak berulang tiap kali di-scroll naik-turun.
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 } // elemen dianggap "muncul" begitu 15% bagiannya kelihatan
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  // Kalau browser sangat lawas dan tidak mendukung
  // IntersectionObserver, langsung tampilkan semua elemen
  // tanpa animasi (lebih baik langsung terlihat daripada
  // tersembunyi selamanya).
  revealElements.forEach((el) => el.classList.add("is-visible"));
}
