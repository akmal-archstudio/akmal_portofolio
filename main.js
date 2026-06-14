'use strict';

// =====================
// DATA PORTOFOLIO
// Tambah/hapus item di sini, kartu otomatis muncul
// =====================
const portfolioItems = [
  { id: 'eksterior-1', cat: 'eksterior', title: 'Villa Tropis Modern',         img: 'assets/villa-tropis-modern.jpg' },
  { id: 'eksterior-2', cat: 'eksterior', title: 'Gedung Komersial Kontemporer', img: 'assets/gedung-komersial-kontemporer.jpg' },
  { id: 'eksterior-3', cat: 'eksterior', title: 'Rumah Minimalis Klasik',       img: 'assets/rumah-minimalis-klasik.jpg' },
  { id: 'interior-1',  cat: 'interior',  title: 'Ruang Tamu Japandi',           img: 'assets/interior/ruang-tamu-japandi.jpg' },
  { id: 'interior-2',  cat: 'interior',  title: 'Home Theater Premium',         img: 'assets/interior/home-theater-premium.jpg' },
  { id: 'interior-3',  cat: 'interior',  title: 'Dapur Open Plan Modern',       img: 'assets/interior/dapur-open-plan-modern.jpg' },
  { id: 'interior-4',  cat: 'interior',  title: 'Interior 01',                  img: 'assets/interior/interior-01.jpg' },
  { id: 'interior-5',  cat: 'interior',  title: 'Interior 02',                  img: 'assets/interior/interior-02.jpg' },
  { id: 'interior-6',  cat: 'interior',  title: 'Interior 03',                  img: 'assets/interior/interior-03.jpg' },
  { id: 'interior-7',  cat: 'interior',  title: 'Interior 04',                  img: 'assets/interior/interior-04.jpg' },
  { id: 'interior-8',  cat: 'interior',  title: 'Interior 05',                  img: 'assets/interior/interior-05.jpg' },
  { id: 'interior-9',  cat: 'interior',  title: 'Interior 06',                  img: 'assets/interior/interior-06.jpg' },
  { id: 'interior-10', cat: 'interior',  title: 'Interior 07',                  img: 'assets/interior/interior-07.jpg' },
  { id: 'interior-11', cat: 'interior',  title: 'Interior 08',                  img: 'assets/interior/interior-08.jpg' },
  { id: 'interior-12', cat: 'interior',  title: 'Interior 09',                  img: 'assets/interior/interior-09.jpg' },
  { id: 'interior-13', cat: 'interior',  title: 'Interior 10',                  img: 'assets/interior/interior-10.jpg' },
  { id: 'interior-14', cat: 'interior',  title: 'Interior 11',                  img: 'assets/interior/interior-11.jpg' },
  { id: 'interior-15', cat: 'interior',  title: 'Interior 12',                  img: 'assets/interior/interior-12.jpg' },
  { id: 'interior-16', cat: 'interior',  title: 'Interior 13',                  img: 'assets/interior/interior-13.jpg' },
  { id: 'interior-17', cat: 'interior',  title: 'Interior 14',                  img: 'assets/interior/interior-14.jpg' },
  { id: 'interior-18', cat: 'interior',  title: 'Interior 15',                  img: 'assets/interior/interior-15.jpg' },
  { id: 'interior-19', cat: 'interior',  title: 'Interior 16',                  img: 'assets/interior/interior-16.jpg' },
  { id: 'interior-20', cat: 'interior',  title: 'Interior 17',                  img: 'assets/interior/interior-17.jpg' },
  { id: 'interior-21', cat: 'interior',  title: 'Interior 18',                  img: 'assets/interior/interior-18.jpg' },
  { id: 'engineering-1', cat: 'engineering', title: 'Denah Lantai Residensial', img: 'assets/denah-lantai-residensial.jpg' },
  { id: 'engineering-2', cat: 'engineering', title: 'Sistem Struktur Beton',    img: 'assets/sistem-struktur-beton.jpg' },
  { id: 'engineering-3', cat: 'engineering', title: 'Sistem MEP',               img: 'assets/sistem-mep.jpg' },
  { id: 'engineering-4', cat: 'engineering', title: 'Engineering 01',           img: 'assets/engineering/engineering-01.jpg' },
];

const catLabel = { eksterior: 'Eksterior', interior: 'Interior', engineering: 'Engineering' };

// =====================
// GENERATE KARTU PORTOFOLIO
// =====================
const grid = document.getElementById('portfolioGrid');

portfolioItems.forEach(item => {
  const card = document.createElement('div');
  card.className = 'portfolio-card';
  card.dataset.category = item.cat;
  card.innerHTML = `
    <div class="card-image">
      <div class="img-ph ${item.id}">
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="card-overlay">
        <span class="card-cat">${catLabel[item.cat]}</span>
        <button class="card-view" onclick="openModal('${item.id}')">Lihat Detail</button>
      </div>
    </div>
    <div class="card-info">
      <h3>${item.title}</h3>
    </div>
  `;
  grid.appendChild(card);
});

// =====================
// NAVBAR
// =====================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// =====================
// FILTER PORTOFOLIO
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const allCards   = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    allCards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// =====================
// CONTACT FORM
// =====================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    formSuccess.classList.add('show');
    contactForm.reset();
    btn.textContent = 'Kirim Pesan';
    btn.disabled = false;
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1000);
});

// =====================
// MODAL — gambar saja
// =====================
function openModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item) return;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img">
      <img src="${item.img}" alt="${item.title}" />
    </div>
    <h3>${item.title}</h3>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// =====================
// SCROLL REVEAL
// =====================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-card, .service-card, .about-grid, .contact-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
