'use strict';

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Contact form
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

// Modal data
const modalData = {
  'eksterior-1': {
    title: 'Villa Tropis Modern',
    cat: 'Eksterior',
    location: 'Bandung, Jawa Barat',
    year: '2024',
    area: '450 m²',
    desc: 'Villa dua lantai dengan konsep tropis modern yang memadukan elemen alam dengan desain kontemporer. Fasad menggunakan kombinasi batu alam, kayu jati, dan kaca tempered yang memaksimalkan pencahayaan alami. Taman tropis yang lush mengelilingi bangunan menciptakan privasi sekaligus harmoni dengan lingkungan.',
    tags: ['Tropis', 'Modern', 'Batu Alam', 'Kaca', 'Landscaping'],
    svgId: 'eksterior-1',
  },
  'eksterior-2': {
    title: 'Gedung Komersial Kontemporer',
    cat: 'Eksterior',
    location: 'Jakarta Selatan',
    year: '2023',
    area: '2.400 m²',
    desc: 'Gedung perkantoran 8 lantai dengan curtain wall kaca gelap dan frame aluminium yang mencerminkan citra bisnis modern. Desain fasad yang dinamis dengan permainan bidang solid dan transparan menciptakan identitas visual yang kuat di kawasan CBD.',
    tags: ['Komersial', 'Curtain Wall', 'High-rise', 'CBD', 'Aluminium'],
    svgId: 'eksterior-2',
  },
  'eksterior-3': {
    title: 'Rumah Minimalis Klasik',
    cat: 'Eksterior',
    location: 'Yogyakarta',
    year: '2023',
    area: '320 m²',
    desc: 'Hunian satu keluarga yang menggabungkan proporsi klasik dengan detail minimalis. Atap pelana simetris, kolom berkarakter, dan palet warna netral menciptakan tampilan yang timeless dan elegan. Taman depan yang tertata rapi melengkapi keindahan fasad.',
    tags: ['Minimalis', 'Klasik', 'Residensial', 'Timeless'],
    svgId: 'eksterior-3',
  },
  'interior-1': {
    title: 'Ruang Tamu Japandi',
    cat: 'Interior',
    location: 'Surabaya',
    year: '2024',
    area: '45 m²',
    desc: 'Desain ruang tamu yang menggabungkan estetika Jepang dan Skandinavia (Japandi) dengan palet warna earthy tone. Material alami seperti kayu jati, rotan, dan linen dipadukan dengan furniture berproporsi rendah. Pencahayaan layered — ambient, task, dan accent — menciptakan suasana hangat dan tenang.',
    tags: ['Japandi', 'Natural', 'Earthy Tone', 'Low Furniture', 'Warm Lighting'],
    svgId: 'interior-1',
  },
  'interior-2': {
    title: 'Home Theater Premium',
    cat: 'Interior',
    location: 'BSD City',
    year: '2024',
    area: '38 m²',
    desc: 'Ruang bioskop pribadi dengan sistem akustik kelas cinema dan desain immersive yang gelap dan dramatis. Panel akustik custom berbalut fabric velvet menyerap suara secara optimal. Kursi recliner kulit premium dan pencahayaan LED ambient yang dapat diprogram melengkapi pengalaman menonton.',
    tags: ['Home Cinema', 'Akustik', 'LED', 'Premium', 'Immersive'],
    svgId: 'interior-2',
  },
  'interior-3': {
    title: 'Dapur Open Plan Modern',
    cat: 'Interior',
    location: 'Bali',
    year: '2023',
    area: '60 m²',
    desc: 'Dapur open plan yang terintegrasi dengan ruang makan dan living area dalam satu konsep yang mengalir. Island counter marmer putih menjadi focal point dengan storage bawah yang melimpah. Kabinet atas dan bawah berfinishing matte putih dengan hardware emas menciptakan tampilan yang bersih namun mewah.',
    tags: ['Open Plan', 'Marmer', 'Island Counter', 'Modern', 'Integrated'],
    svgId: 'interior-3',
  },
  'engineering-1': {
    title: 'Denah Lantai Residensial',
    cat: 'Engineering',
    location: 'Gambar Teknik',
    year: 'Skala 1:100',
    area: '340 m²',
    desc: 'Gambar denah lantai lengkap untuk proyek hunian dua lantai dengan anotasi dimensi, keterangan ruang, dan notasi teknis sesuai SNI. Denah mencakup layout ruang tamu, ruang makan, dapur, 4 kamar tidur, 3 kamar mandi, ruang keluarga, dan area servis. Semua gambar dikerjakan dengan AutoCAD dan disajikan dalam format A1.',
    tags: ['AutoCAD', 'SNI', 'Denah', 'Dimensi', 'A1'],
    svgId: 'engineering-1',
  },
  'engineering-2': {
    title: 'Sistem Struktur Beton',
    cat: 'Engineering',
    location: 'Gambar Teknik',
    year: 'Detail Konstruksi',
    area: 'Skala 1:50',
    desc: 'Gambar detail sistem struktur beton bertulang yang mencakup penulangan kolom, balok, dan pelat lantai. Spesifikasi beton mutu K-250, tulangan BJTP-24 dan BJTD-40 sesuai standar perhitungan struktur. Gambar ini merupakan bagian dari set dokumen tender dan pelaksanaan proyek gedung 3 lantai.',
    tags: ['Struktur', 'Beton Bertulang', 'AutoCAD', 'K-250', 'Tender'],
    svgId: 'engineering-2',
  },
  'engineering-3': {
    title: 'Sistem MEP',
    cat: 'Engineering',
    location: 'Gambar Teknik',
    year: 'Instalasi Teknis 2023',
    area: 'Multi-lantai',
    desc: 'Gambar sistem Mekanikal, Elektrikal, dan Plumbing (MEP) yang komprehensif meliputi jaringan air bersih, air kotor, sistem drainase, instalasi listrik, titik lampu, dan sistem tata udara. Koordinasi antar disiplin dilakukan untuk menghindari clash dan memastikan aksesibilitas maintenance. Gambar dikerjakan dengan Revit MEP dan AutoCAD.',
    tags: ['MEP', 'Plumbing', 'Elektrikal', 'Revit', 'Koordinasi'],
    svgId: 'engineering-3',
  },
};

function openModal(id) {
  const data = modalData[id];
  if (!data) return;

  const sourceImg = document.querySelector(`.img-ph.${data.svgId}`);
  const svgClone = sourceImg ? sourceImg.innerHTML : '';

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-img">${svgClone}</div>
    <span class="card-cat" style="display:inline-block;margin-top:1rem">${data.cat}</span>
    <h3>${data.title}</h3>
    <div class="modal-meta">
      <span><strong>Lokasi:</strong> ${data.location}</span>
      <span><strong>Tahun:</strong> ${data.year}</span>
      <span><strong>Luas:</strong> ${data.area}</span>
    </div>
    <p class="modal-desc">${data.desc}</p>
    <div class="modal-tags">
      ${data.tags.map(t => `<span>${t}</span>`).join('')}
    </div>
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

// Scroll reveal
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
