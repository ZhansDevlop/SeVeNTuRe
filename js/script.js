// --- JADWAL PELAJARAN ---
const jadwalPelajaran = {
  Senin: ["Rutinitas Pagi: Upacara", "Sejarah (2 jam)", "Geografi (2 jam)", "B. Sunda (2 jam)", "Pendidikan Pancasila (2 jam)", "Informatika (2 jam)"],
  Selasa: ["Rutinitas Pagi: Senam Pagi", "Inggris TL (2 jam)", "Pendidikan Agama Islam (2 jam)", "Sosiologi (3 jam)", "Inggris wajib (3 jam)"],
  Rabu: ["Rutinitas Pagi: Literasi Bestari", "Bahasa Indonesia (3 jam)", "PJOK (2 jam)", "Informatika (3 jam)", "Kokurikuler (2 jam)"],
  Kamis: ["Rutinitas Pagi: Literasi Religi", "Seni (2 jam)", "Sosiologi (2 jam)", "Inggris TL (3 jam)", "Geografi (3 jam)"],
  Jumat: ["Rutinitas Pagi: Sholat duha, membaca quran, tausiah, senam sehat", "Matematika (3 jam)", "Konseling / BK (1 jam)"],
};

// --- JADWAL PIKET ---
const jadwalPiket = {
  Senin: ["Bilqist Annisa Zahra", "Chalista Chandra Aurelia Pradnya Paramitha", "David Jessan Bayu Tanaya", "Fara Natasya Putri", "Muhamad Fauzhan Abdulah", "Raffa Octora Widya Thamma", "Reinhart Azriel Faiz", "Risma Wati", "Syaipa Pidi Hamidah"],
  Selasa: ["Alief Fathurrahman", "Annisa Larasati Irwadi", "Friences Azzahra Ramadani Gusfi Marlis", "Muhamad Arizki", "Muhammad Rasya Pramana Putra", "Nadia Fitri Nurtobia", "Nazriel Fatah", "Siti Juairoh", "Vannesa Maharani Bilqis"],
  Rabu: ["Adhio Bimantoro", "Alifia Nurul Aqilah", "Arinka Maulida Azkiya", "Debby Rahmawati", "Laiqa Adiva Djaya", "Muhamad Desta", "Muhammad Azril Agustian", "Nikky Awlyah Ardiansyah", "Rabbany Akbar"],
  Kamis: ["Arizka Maulida Azkiya", "Fitrah Nanda Seftiansyah", "Kirana Widyara", "Lintang Sindhunata", "Muhamad Fadly Faizuddin", "Muhammad Rafa Ar-Ramadhan", "Raffa Maulana", "Shakyra Al Fira", "Wahyu Bima Sakti"],
  Jumat: ["Putri Meiko Kenza", "Achmad Fauzan", "Alif Zahran Ramadhan", "Chairum Anindya Putri", "Farel Liandi", "Habibah Nurul Hadi", "Queenita Azizah", "Rafa Mulya Aldawa"]
};

// --- SEARCH FILTER SISWA (LEBIH AKURAT & ANTI-GAGAL) ---
function filterSiswa() {
  const siswaGrid = document.getElementById('siswa-grid');
  const searchInput = document.getElementById('search-input');
  if (!siswaGrid || !searchInput) return;

  const val = searchInput.value.toLowerCase().trim();
  const items = siswaGrid.children;
  let visibleCount = 0;

  for (let item of items) {
    // Skip elemen pesan kosong jika sudah ada
    if (item.id === 'empty-search-msg') continue;

    // Ambil seluruh teks di dalam kartu (nama + nomor absen)
    const cardText = item.innerText.toLowerCase();
    if (cardText.includes(val)) {
      item.style.display = 'flex';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  }

  // Tampilkan pesan jika nama tidak ditemukan
  let emptyMsg = document.getElementById('empty-search-msg');
  if (visibleCount === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('div');
      emptyMsg.id = 'empty-search-msg';
      emptyMsg.className = 'col-span-full text-center py-10 text-zinc-400 text-xs';
      siswaGrid.appendChild(emptyMsg);
    }
    emptyMsg.innerHTML = `Anggota dengan nama <span class="text-amber-400 font-bold">"${searchInput.value}"</span> tidak ditemukan. Coba cek ejaannya (misal: <em>Alief Fathurrahman</em>).`;
    emptyMsg.style.display = 'block';
  } else if (emptyMsg) {
    emptyMsg.style.display = 'none';
  }
}

// --- ACAK KELOMPOK SEIMBANG GENDER (20 LAKI-LAKI & 24 PEREMPUAN) ---
const dataSiswaGender = [
  { absen: 1, nama: "Achmad Fauzan", gender: "L" },
  { absen: 2, nama: "Adhio Bimantoro", gender: "L" },
  { absen: 3, nama: "Alief Fathurrahman", gender: "L" },
  { absen: 4, nama: "Alif Zahran Ramadhan", gender: "L" },
  { absen: 5, nama: "Alifia Nurul Aqilah", gender: "P" },
  { absen: 6, nama: "Annisa Larasati Irwadi", gender: "P" },
  { absen: 7, nama: "Arinka Maulida Azkiya", gender: "P" },
  { absen: 8, nama: "Arizka Maulida Azkiya", gender: "P" },
  { absen: 9, nama: "Bilqist Annisa Zahra", gender: "P" },
  { absen: 10, nama: "Chairum Anindya Putri", gender: "P" },
  { absen: 11, nama: "Chalista Chandra Aurelia Pradnya Paramitha", gender: "P" },
  { absen: 12, nama: "David Jessan Bayu Tanaya", gender: "L" },
  { absen: 13, nama: "Debby Rahmawati", gender: "P" },
  { absen: 14, nama: "Fara Natasya Putri", gender: "P" },
  { absen: 15, nama: "Farel Liandi", gender: "L" },
  { absen: 16, nama: "Fitrah Nanda Seftiansyah", gender: "L" },
  { absen: 17, nama: "Friences Azzahra Ramadani Gusfi Marlis", gender: "P" },
  { absen: 18, nama: "Habibah Nurul Hadi", gender: "P" },
  { absen: 19, nama: "Kirana Widyara", gender: "P" },
  { absen: 20, nama: "Laiqa Adiva Djaya", gender: "P" },
  { absen: 21, nama: "Lintang Sindhunata", gender: "L" },
  { absen: 22, nama: "Muhamad Arizki", gender: "L" },
  { absen: 23, nama: "Muhamad Desta", gender: "L" },
  { absen: 24, nama: "Muhamad Fadly Faizuddin", gender: "L" },
  { absen: 25, nama: "Muhamad Fauzhan Abdulah", gender: "L" },
  { absen: 26, nama: "Muhammad Azril Agustian", gender: "L" },
  { absen: 27, nama: "Muhammad Rafa Ar-Ramadhan", gender: "L" },
  { absen: 28, nama: "Muhammad Rasya Pramana Putra", gender: "L" },
  { absen: 29, nama: "Nadia Fitri Nurtobia", gender: "P" },
  { absen: 30, nama: "Nazriel Fatah", gender: "L" },
  { absen: 31, nama: "Nikky Awlyah Ardiansyah", gender: "P" },
  { absen: 32, nama: "Putri Meiko Kenza", gender: "P" },
  { absen: 33, nama: "Queenita Azizah", gender: "P" },
  { absen: 34, nama: "Rabbany Akbar", gender: "L" },
  { absen: 35, nama: "Rafa Mulya Aldawa", gender: "L" },
  { absen: 36, nama: "Raffa Maulana", gender: "L" },
  { absen: 37, nama: "Raffa Octora Widya Thamma", gender: "L" },
  { absen: 38, nama: "Reinhart Azriel Faiz", gender: "L" },
  { absen: 39, nama: "Risma Wati", gender: "P" },
  { absen: 40, nama: "Shakyra Al Fira", gender: "P" },
  { absen: 41, nama: "Siti Juairoh", gender: "P" },
  { absen: 42, nama: "Syaipa Pidi Hamidah", gender: "P" },
  { absen: 43, nama: "Vannesa Maharani Bilqis", gender: "P" },
  { absen: 44, nama: "Wahyu Bima Sakti", gender: "L" }
];

let latestGeneratedGroups = [];

function openSpinModal() {
  const modal = document.getElementById('spin-modal');
  if (modal) modal.classList.remove('hidden');
}

function closeSpinModal() {
  const modal = document.getElementById('spin-modal');
  if (modal) modal.classList.add('hidden');
}

function quickSetGroup(num) {
  const input = document.getElementById('group-count-input');
  if (input) {
    input.value = num;
    generateBalancedGroups();
  }
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateBalancedGroups() {
  const input = document.getElementById('group-count-input');
  const alertBox = document.getElementById('group-status-alert');
  const container = document.getElementById('groups-result-container');
  const copyBtn = document.getElementById('copy-groups-btn');

  if (!input || !alertBox || !container) return;

  const numGroups = parseInt(input.value, 10);
  const totalSiswa = dataSiswaGender.length;

  if (isNaN(numGroups) || numGroups < 2) {
    alertBox.className = "rounded-xl p-3 text-xs font-medium bg-red-500/15 border border-red-500/40 text-red-300 block";
    alertBox.innerHTML = `⚠️ <strong>Tidak sesuai:</strong> Minimal pembagian adalah <strong>2 kelompok</strong>.`;
    container.innerHTML = "";
    if (copyBtn) copyBtn.classList.add('hidden');
    return;
  }

  if (numGroups > 22) {
    alertBox.className = "rounded-xl p-3 text-xs font-medium bg-red-500/15 border border-red-500/40 text-red-300 block";
    alertBox.innerHTML = `⚠️ <strong>Tidak sesuai:</strong> Jumlah ${numGroups} kelompok terlalu banyak untuk ${totalSiswa} siswa (maksimal 22 kelompok agar minimal berisi 2 orang).`;
    container.innerHTML = "";
    if (copyBtn) copyBtn.classList.add('hidden');
    return;
  }

  const lakiLaki = shuffleArray(dataSiswaGender.filter(s => s.gender === "L"));
  const perempuan = shuffleArray(dataSiswaGender.filter(s => s.gender === "P"));

  const groups = Array.from({ length: numGroups }, () => []);

  lakiLaki.forEach((siswa, idx) => {
    groups[idx % numGroups].push(siswa);
  });

  perempuan.forEach((siswa, idx) => {
    const targetGroup = (numGroups - 1) - (idx % numGroups);
    groups[targetGroup].push(siswa);
  });

  latestGeneratedGroups = groups.map(g => shuffleArray(g));

  const sisaBagi = totalSiswa % numGroups;
  const minAnggota = Math.floor(totalSiswa / numGroups);
  const maxAnggota = Math.ceil(totalSiswa / numGroups);

  if (sisaBagi !== 0) {
    const kurangUntukPas = numGroups - sisaBagi;
    alertBox.className = "rounded-xl p-3 text-xs font-medium bg-amber-500/15 border border-amber-500/40 text-amber-300 block";
    alertBox.innerHTML = `ℹ️ <strong>Info Pembagian:</strong> ${totalSiswa} siswa tidak habis dibagi rata ke ${numGroups} kelompok (kurang <strong>${kurangUntukPas} siswa</strong> untuk jumlah persis sama). Sistem otomatis membagi seimbang menjadi <strong>${minAnggota}–${maxAnggota} orang</strong> per kelompok dengan komposisi L/P setara.`;
  } else {
    alertBox.className = "rounded-xl p-3 text-xs font-medium bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 block";
    alertBox.innerHTML = `✅ <strong>Pembagian Pas & Seimbang:</strong> ${totalSiswa} siswa terbagi rata menjadi <strong>${numGroups} kelompok</strong> (masing-masing <strong>${minAnggota} orang</strong> dengan komposisi L/P merata).`;
  }

  container.innerHTML = latestGeneratedGroups.map((members, idx) => {
    const countL = members.filter(m => m.gender === "L").length;
    const countP = members.filter(m => m.gender === "P").length;

    const memberRows = members.map((m, mIdx) => `
      <li class="flex items-center justify-between text-xs py-1.5 border-b border-zinc-800/70 last:border-none">
        <span class="text-zinc-200 truncate pr-2">
          <span class="text-zinc-500 mr-1.5">${mIdx + 1}.</span>${m.nama}
        </span>
        <span class="text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${m.gender === 'L' ? 'bg-sky-500/15 text-sky-400' : 'bg-pink-500/15 text-pink-400'}">
          ${m.gender}
        </span>
      </li>
    `).join('');

    return `
      <div class="bg-[#09090b] border border-zinc-800 rounded-2xl p-4 flex flex-col justify-between fade-in">
        <div>
          <div class="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-2.5">
            <h4 class="font-serif-custom font-bold text-amber-400 text-sm">Kelompok ${idx + 1}</h4>
            <span class="text-[10px] font-bold text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded-md border border-zinc-800">
              ${countL} L • ${countP} P
            </span>
          </div>
          <ul>${memberRows}</ul>
        </div>
      </div>
    `;
  }).join('');

  if (copyBtn) copyBtn.classList.remove('hidden');
}

function copyGroupsToClipboard() {
  if (latestGeneratedGroups.length === 0) return;

  let textOutput = `*PEMBAGIAN KELOMPOK XI-SEVENTURE*\n\n`;
  latestGeneratedGroups.forEach((members, idx) => {
    const countL = members.filter(m => m.gender === "L").length;
    const countP = members.filter(m => m.gender === "P").length;
    textOutput += `*Kelompok ${idx + 1}* (${countL}L / ${countP}P)\n`;
    members.forEach((m, mIdx) => {
      textOutput += `${mIdx + 1}. ${m.nama} (${m.gender})\n`;
    });
    textOutput += `\n`;
  });

  if (navigator.clipboard) {
    navigator.clipboard.writeText(textOutput.trim()).then(() => {
      showToast('Hasil pembagian kelompok disalin untuk WA!');
    });
  }
}

// --- MODAL LIGHTBOX, KEYBOARD & TOUCH SWIPE ---
let currentGalleryList = [];
let currentSlideIndex = 0;

function getItemsFromSection(selector) {
  const cards = document.querySelectorAll(selector);
  return Array.from(cards).map(card => {
    const img = card.querySelector('img');
    return {
      src: img ? img.getAttribute('src') : '',
      caption: img ? img.getAttribute('alt') : ''
    };
  });
}

function updateModalContent() {
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalCounter = document.getElementById('modal-counter');
  const item = currentGalleryList[currentSlideIndex];

  if (!modalImg || !modalCaption || !item) return;

  modalImg.onerror = function () {
    this.onerror = null;
    this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.caption)}&background=18181b&color=fbbf24&bold=true&size=512`;
  };

  modalImg.src = item.src;
  modalCaption.innerText = item.caption;
  if (modalCounter) {
    modalCounter.innerText = `${currentSlideIndex + 1} / ${currentGalleryList.length}`;
  }
}

function openModal(src, caption) {
  const modal = document.getElementById('image-modal');
  if (!modal) return;

  if (src.includes('/siswa/')) {
    currentGalleryList = getItemsFromSection('#siswa-grid > div');
  } else {
    currentGalleryList = getItemsFromSection('#potret .grid > div');
  }

  const foundIndex = currentGalleryList.findIndex(item => item.src === src);
  currentSlideIndex = foundIndex !== -1 ? foundIndex : 0;

  if (currentGalleryList.length === 0) {
    currentGalleryList = [{ src, caption }];
  }

  updateModalContent();
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function nextSlide(event) {
  if (event) event.stopPropagation();
  if (currentGalleryList.length === 0) return;
  currentSlideIndex = (currentSlideIndex + 1) % currentGalleryList.length;
  updateModalContent();
}

function prevSlide(event) {
  if (event) event.stopPropagation();
  if (currentGalleryList.length === 0) return;
  currentSlideIndex = (currentSlideIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  updateModalContent();
}

// Navigasi Keyboard
document.addEventListener('keydown', (e) => {
  const imageModal = document.getElementById('image-modal');
  const spinModal = document.getElementById('spin-modal');

  if (imageModal && !imageModal.classList.contains('hidden')) {
    if (e.key === 'ArrowRight') nextSlide();
    else if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key === 'Escape') closeModal();
  } else if (spinModal && !spinModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeSpinModal();
  }
});

// Navigasi Geser Jari (Touch Swipe) di HP
let touchStartX = 0;
document.addEventListener('touchstart', (e) => {
  const imageModal = document.getElementById('image-modal');
  if (imageModal && !imageModal.classList.contains('hidden')) {
    touchStartX = e.changedTouches[0].screenX;
  }
}, { passive: true });

document.addEventListener('touchend', (e) => {
  const imageModal = document.getElementById('image-modal');
  if (imageModal && !imageModal.classList.contains('hidden')) {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }
}, { passive: true });

// --- AUTO-DETECT HARI INI & RENDER JADWAL ---
const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const dayIndex = new Date().getDay();
const todayName = (dayIndex >= 1 && dayIndex <= 5) ? days[dayIndex - 1] : null;
let activeDay = todayName || 'Senin';

function renderJadwal() {
  const dayTabs = document.getElementById('day-tabs');
  const container = document.getElementById('jadwal-content');

  if (!dayTabs || !container) return;

  dayTabs.innerHTML = days.map(d => {
    const isSelected = d === activeDay;
    const isToday = d === todayName;
    const badge = isToday 
      ? `<span class="ml-1.5 px-1.5 py-0.5 text-[9px] rounded-md ${isSelected ? 'bg-black/20 text-black' : 'bg-amber-500/20 text-amber-400'}">HARI INI</span>` 
      : '';

    return `
      <button onclick="setDay('${d}')" class="px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center shrink-0 ${isSelected ? 'bg-amber-500 text-black shadow-md' : 'bg-zinc-900 text-zinc-400 hover:text-zinc-100 border border-zinc-800/80'}">
        ${d}${badge}
      </button>
    `;
  }).join('');

  let mapels = jadwalPelajaran[activeDay].map((m, i) => `
    <li class="flex items-center text-xs text-zinc-300 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800">
      <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center mr-3 text-[11px] shrink-0">${i+1}</span>
      <span>${m}</span>
    </li>
  `).join('');

  let pikets = jadwalPiket[activeDay].map(p => `
    <span class="text-xs font-semibold bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-800">${p}</span>
  `).join('');

  container.innerHTML = `
    <div class="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/80 space-y-3 fade-in">
      <h4 class="text-xs font-bold text-amber-400 uppercase tracking-widest">PELAJARAN (${activeDay})</h4>
      <ul class="space-y-2">${mapels}</ul>
    </div>
    <div class="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/80 space-y-3 fade-in">
      <h4 class="text-xs font-bold text-amber-400 uppercase tracking-widest">PIKET (${activeDay})</h4>
      <div class="flex flex-wrap gap-2">${pikets}</div>
    </div>
  `;
}

function setDay(d) {
  activeDay = d;
  renderJadwal();
}

// --- FLOATING MUSIC PLAYER ---
function toggleMusic() {
  const audio = document.getElementById('bg-music');
  const eq = document.getElementById('equalizer');
  const label = document.getElementById('music-label');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      eq.classList.remove('paused');
      label.innerText = 'Jeda Lagu';
    }).catch(() => {
      showToast('File audio/bgm.mp3 belum ditambahkan');
    });
  } else {
    audio.pause();
    eq.classList.add('paused');
    label.innerText = 'Putar Lagu';
  }
}

// --- QUICK SHARE & TOAST NOTIFICATION ---
function showToast(message) {
  const toast = document.getElementById('toast-notif');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.remove('opacity-0');
  setTimeout(() => {
    toast.classList.add('opacity-0');
  }, 2600);
}

function shareWebsite() {
  const shareData = {
    title: 'XI-SEVENTURE | SMAN 1 Gunung Sindur',
    text: 'Lihat profil kelas, galeri kenangan, dan jadwal XI-SEVENTURE!',
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('Link website berhasil disalin!');
    });
  }
}

// --- BACK TO TOP & SCROLL REVEAL ---
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const backBtn = document.getElementById('back-to-top');
  if (backBtn) {
    if (window.scrollY > 450) {
      backBtn.classList.remove('hidden');
    } else {
      backBtn.classList.add('hidden');
    }
  }
});

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// --- INITIALIZE ALL ---
function initApp() {
  renderJadwal();
  initScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}