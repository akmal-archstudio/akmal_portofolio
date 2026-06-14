'use strict';

// =====================
// DATA PORTOFOLIO
// Tambah/hapus item di sini, kartu otomatis muncul
// =====================
const portfolioItems = [
  { id: 'eksterior-1', cat: 'eksterior', title: 'Exterior 1', img: 'assets/exterior/exterior1.jpg' },
  { id: 'eksterior-2', cat: 'eksterior', title: 'Exterior 2', img: 'assets/exterior/exterior2.jpg' },
  { id: 'eksterior-3', cat: 'eksterior', title: 'Exterior 3', img: 'assets/exterior/exterior3.jpg' },
  { id: 'eksterior-4', cat: 'eksterior', title: 'Exterior 4', img: 'assets/exterior/exterior4.jpg' },
  { id: 'interior-1',  cat: 'interior', title: 'Interior 1',  img: 'assets/interior/interior1.jpg' },
  { id: 'interior-2',  cat: 'interior', title: 'Interior 2',  img: 'assets/interior/interior2.jpg' },
  { id: 'interior-3',  cat: 'interior', title: 'Interior 3',  img: 'assets/interior/interior3.jpg' },
  { id: 'interior-4',  cat: 'interior', title: 'Interior 4',  img: 'assets/interior/interior4.jpg' },
  { id: 'interior-5',  cat: 'interior', title: 'Interior 5',  img: 'assets/interior/interior5.jpg' },
  { id: 'interior-6',  cat: 'interior', title: 'Interior 6',  img: 'assets/interior/interior6.jpg' },
  { id: 'interior-7',  cat: 'interior', title: 'Interior 7',  img: 'assets/interior/interior7.jpg' },
  { id: 'interior-8',  cat: 'interior', title: 'Interior 8',  img: 'assets/interior/interior8.jpg' },
  { id: 'interior-9',  cat: 'interior', title: 'Interior 9',  img: 'assets/interior/interior9.jpg' },
  { id: 'interior-10', cat: 'interior', title: 'Interior 10', img: 'assets/interior/interior10.jpg' },
  { id: 'interior-11', cat: 'interior', title: 'Interior 11', img: 'assets/interior/interior11.jpg' },
  { id: 'interior-12', cat: 'interior', title: 'Interior 12', img: 'assets/interior/interior12.jpg' },
  { id: 'interior-13', cat: 'interior', title: 'Interior 13', img: 'assets/interior/interior13.jpg' },
  { id: 'interior-14', cat: 'interior', title: 'Interior 14', img: 'assets/interior/interior14.jpg' },
  { id: 'interior-15', cat: 'interior', title: 'Interior 15', img: 'assets/interior/interior15.jpg' },
  { id: 'interior-16', cat: 'interior', title: 'Interior 16', img: 'assets/interior/interior16.jpg' },
  { id: 'interior-17', cat: 'interior', title: 'Interior 17', img: 'assets/interior/interior17.jpg' },
  { id: 'interior-18', cat: 'interior', title: 'Interior 18', img: 'assets/interior/interior18.jpg' },
  { id: 'interior-19', cat: 'interior', title: 'Interior 19', img: 'assets/interior/interior19.jpg' },
  { id: 'interior-20', cat: 'interior', title: 'Interior 20', img: 'assets/interior/interior20.jpg' },
  { id: 'interior-21', cat: 'interior', title: 'Interior 21', img: 'assets/interior/interior21.jpg' },
  { id: 'interior-22', cat: 'interior', title: 'Interior 22', img: 'assets/interior/interior22.jpg' },
  { id: 'interior-23', cat: 'interior', title: 'Interior 23', img: 'assets/interior/interior23.jpg' },
  { id: 'engineering-1', cat: 'engineering', title: 'Engineering 1', img: 'assets/engineering/engineering1.jpg' },
  { id: 'engineering-2', cat: 'engineering', title: 'Engineering 2', img: 'assets/engineering/engineering2.jpg' },
  { id: 'engineering-3', cat: 'engineering', title: 'Engineering 3', img: 'assets/engineering/engineering3.jpg' },
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
        <img src="${item.img}" alt="${item.title}" />
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
// SCROLL REVEAL — hanya untuk section non-portfolio
// =====================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .about-grid, .contact-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
