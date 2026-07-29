// ==========================================================
// SCRIPT UTAMA - v5
// Perubahan dari v4:
// - Data project diganti total: Djamuntara, MHB Farm, Etalase
//   Marketing (Lead Magnet Generator dihapus, sudah jadi bagian
//   dari Etalase Marketing)
// - description & learnings sekarang berupa objek {id, en}
//   supaya bisa berganti sesuai bahasa yang aktif
// - Ditambahkan sistem toggle bahasa (Indonesia/English)
//
// FILE INI BUTUH i18n-v1.js SUDAH DIMUAT LEBIH DULU
// (lihat urutan <script> di HTML masing-masing halaman)
// ==========================================================


// ---------- 1. DATA PROJECT ----------
const projects = [
  {
    id: "djamuntara",
    title: "Djamuntara",
    category: "brand",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "Screenshot Djamuntara", // GANTI: nanti diganti <img src="...">
    demoLink: "#",
    repoLink: "#",
    description: {
      id: "Website resmi brand jamu Djamuntara, menghadirkan produk herbal organik dengan pengalaman modern, dari katalog produk sampai artikel kesehatan, dibangun untuk mencerminkan identitas brand-nya.",
      en: "The official website for Djamuntara, an organic herbal jamu brand, presenting products with a modern experience, from the product catalog to health articles, built to reflect the brand's identity."
    },
    learnings: {
      id: "Belajar menyusun website brand yang cukup kompleks, mulai dari katalog produk dengan filter, keranjang belanja, sampai proses checkout, sambil menjaga identitas brand tetap konsisten di setiap halaman.",
      en: "Learned to build a fairly complex brand website, from a filterable product catalog and shopping cart to the checkout process, while keeping the brand identity consistent across every page."
    }
  },
  {
    id: "mhb-farm",
    title: "MHB Farm",
    category: "webapp",
    tags: ["HTML", "CSS", "JavaScript", "AI Integration"],
    image: "Screenshot MHB Farm",
    demoLink: "#",
    repoLink: "#",
    description: {
      id: "Website operasional untuk MHB Farm, mencakup SOP penanaman, monitoring jadwal tanam dan panen, reminder perawatan berkala, pencatatan hasil panen otomatis ke spreadsheet, serta AI chatbot untuk membantu operasional harian.",
      en: "An operational website for MHB Farm, covering planting SOPs, planting and harvest schedule monitoring, recurring care reminders, automatic harvest logging to spreadsheets, and an AI chatbot to support daily operations."
    },
    learnings: {
      id: "Belajar merancang sistem operasional yang lebih kompleks dari sekadar tampilan, mulai dari alur monitoring jadwal, reminder otomatis, sampai integrasi pencatatan data ke spreadsheet dan chatbot AI, sambil tetap menjaga kemudahan penggunaan untuk tim di lapangan.",
      en: "Learned to design an operational system that goes beyond just visuals, from schedule monitoring flows and automatic reminders to spreadsheet data integration and an AI chatbot, while keeping it easy to use for the team in the field."
    }
  },
  {
    id: "etalase-marketing",
    title: "Etalase Marketing",
    category: "webapp",
    tags: ["HTML", "JavaScript"],
    image: "Screenshot Etalase Marketing",
    demoLink: "#",
    repoLink: "#",
    description: {
      id: "AI Marketing Workspace untuk UMKM Indonesia, memadukan Business Context dengan tools Content, Lead Magnet, Landing Page, Email, Sales Funnel, Campaign, dan Analytics dalam satu tempat.",
      en: "An AI Marketing Workspace for Indonesian small businesses, combining Business Context with Content, Lead Magnet, Landing Page, Email, Sales Funnel, Campaign, and Analytics tools in one place."
    },
    learnings: {
      id: "Belajar merancang struktur produk yang bisa berkembang secara bertahap sesuai roadmap, serta bagaimana menyatukan beberapa tools pemasaran ke dalam satu alur kerja yang saling terhubung, bukan sekadar fitur-fitur yang terpisah.",
      en: "Learned to design a product structure that can grow gradually according to a roadmap, and how to unify several marketing tools into one connected workflow, rather than separate standalone features."
    }
  }
  // GANTI/TAMBAH: copy 1 blok { ... } di atas untuk menambah project baru
];


// ---------- 2. STATE ----------
let activeCategory = "all";
let searchQuery = "";

// Bahasa yang aktif sekarang. Diambil dari localStorage kalau
// user sebelumnya pernah pilih bahasa (biar konsisten pas
// pindah halaman), kalau belum ada, default ke "id".
let currentLang = localStorage.getItem("lang") || "id";


// ---------- 3. TERJEMAHAN (i18n) ----------
// Function ini membaca SEMUA elemen yang punya atribut
// data-i18n="kode", lalu mengganti isinya sesuai kamus di
// i18n-v1.js dan bahasa yang sedang aktif.
function applyTranslations() {
  // Teks biasa (isi elemen)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = translations[key];
    if (entry) {
      el.textContent = entry[currentLang];
    } else {
      // Kalau ada kode yang lupa didaftarkan di kamus,
      // ini akan muncul di console -- membantu pas develop.
      console.warn(`[i18n] Kode tidak ditemukan di kamus: "${key}"`);
    }
  });

  // Placeholder input (misal kotak search) -- ini butuh cara
  // beda karena teksnya bukan "isi" elemen, tapi atributnya.
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const entry = translations[key];
    if (entry) {
      el.placeholder = entry[currentLang];
    }
  });

  // Tandai <html> dengan bahasa aktif -- berguna untuk
  // aksesibilitas (pembaca layar tahu bahasa halaman ini apa).
  document.documentElement.lang = currentLang;
}

// Function ini menyalakan/mematikan tombol "ID"/"EN" mana
// yang terlihat "aktif" saat ini.
function updateLangToggleUI() {
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

// Function ini dipanggil setiap kali user MENGGANTI bahasa.
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang); // simpan pilihan untuk halaman lain
  applyTranslations();
  updateLangToggleUI();
  // Konten yang di-generate JavaScript (list & detail project)
  // perlu digambar ulang supaya bahasanya ikut berubah juga.
  renderProjects();
  renderProjectDetail();
}

// Pasang event listener ke semua tombol toggle bahasa
document.querySelectorAll(".lang-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});


// ---------- 4. RENDER: HALAMAN PROJECTS (list + search + filter) ----------
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return; // bukan halaman Projects, keluar

  const emptyState = document.getElementById("empty-state");

  const filtered = projects.filter((project) => {
    const matchCategory =
      activeCategory === "all" || project.category === activeCategory;

    const desc = project.description[currentLang].toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchSearch =
      project.title.toLowerCase().includes(query) || desc.includes(query);

    return matchCategory && matchSearch;
  });

  grid.innerHTML = "";
  emptyState.style.display = filtered.length === 0 ? "block" : "none";

  filtered.forEach((project) => {
    const card = document.createElement("a");
    card.className = "card card-link";
    card.href = `project-detail-v4.html?id=${project.id}`;

    const tagsHTML = project.tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p style="margin: 8px 0 12px;">${project.description[currentLang]}</p>
      ${tagsHTML}
    `;

    grid.appendChild(card);
  });
}


// ---------- 5. RENDER: HALAMAN PROJECT DETAIL ----------
function renderProjectDetail() {
  const wrapper = document.getElementById("project-detail");
  if (!wrapper) return; // bukan halaman detail, keluar

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    wrapper.innerHTML = `
      <p class="eyebrow">${translations["detail.eyebrow1"][currentLang]}</p>
      <h1>${translations["detail.notFound.title"][currentLang]}</h1>
      <p>${translations["detail.notFound.desc"][currentLang]}</p>
      <a href="projects-v5.html" class="btn btn-primary" style="margin-top: var(--space-sm);">${translations["detail.btn.back"][currentLang]}</a>
    `;
    return;
  }

  const tagsHTML = project.tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  wrapper.innerHTML = `
    <p class="eyebrow">${translations["detail.eyebrow1"][currentLang]}</p>
    <h1>${project.title}</h1>

    <div class="detail-image">${project.image}</div>

    <p style="margin: var(--space-sm) 0;">${project.description[currentLang]}</p>
    <div style="margin-bottom: var(--space-md);">${tagsHTML}</div>

    <div class="btn-row">
      <a href="${project.demoLink}" class="btn btn-primary" target="_blank" rel="noopener">${translations["detail.btn.demo"][currentLang]}</a>
      <a href="${project.repoLink}" class="btn btn-secondary" target="_blank" rel="noopener">${translations["detail.btn.repo"][currentLang]}</a>
    </div>

    <hr class="divider">

    <p class="eyebrow">${translations["detail.eyebrow2"][currentLang]}</p>
    <p>${project.learnings[currentLang]}</p>

    <a href="projects-v5.html" class="btn btn-secondary" style="margin-top: var(--space-lg);">${translations["detail.btn.back"][currentLang]}</a>
  `;
}


// ---------- 6. EVENT LISTENER: SEARCH ----------
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderProjects();
  });
}


// ---------- 7. EVENT LISTENER: FILTER CHIP ----------
const filterButtons = document.querySelectorAll(".filter-chip");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderProjects();
  });
});


// ---------- 8. JALANKAN SAAT HALAMAN DIBUKA ----------
applyTranslations();
updateLangToggleUI();
renderProjects();
renderProjectDetail();


// ---------- 9. SCROLL REVEAL ----------
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-visible"));
}
