<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue' 

const isDark = ref(false)
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const applyThemeClass = (isDarkModeActive) => {
  const htmlElement = document.documentElement;

  if (isDarkModeActive) {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }

  // Tambahkan transisi kelas untuk efek transisi tema (jika ada CSS global untuk ini)
  htmlElement.classList.add('theme-transition');
  window.setTimeout(() => {
    htmlElement.classList.remove('theme-transition');
  }, 450);
}

// Fungsi untuk menutup sidebar jika ukuran layar menjadi desktop
const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) { 
    isOpen.value = false;
  }
};

watch(isDark, (newValue) => {
  applyThemeClass(newValue);
});

onMounted(() => {
  // Atur initial state dari local storage
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    isDark.value = true;
  } else if (saved === 'light') {
    isDark.value = false;
  } else {
    // Cek preferensi sistem jika tidak ada di localStorage
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDark.value = prefersDark;
  }
  applyThemeClass(isDark.value);

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <nav class="fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-black z-50">
    <div v-if="!isOpen" class="flex items-center gap-2">
      <div class="text-2xl font-bold text-[#29D970] work-sans-bold">Anargya ITS</div>
    </div>

    <div class="flex items-center gap-4">
      <div class="hidden md:flex items-center gap-6">
        <ul class="flex items-center gap-6 text-lg text-black dark:text-[#ffffff]">
          <li><router-link to="/" class="relative group work-sans">Home
            <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1B563B] dark:bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
          </router-link></li>
          <li><router-link to="/about" class="relative group work-sans">About Us
            <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1B563B] dark:bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
          </router-link></li>
          <li><router-link to="/faq" class="relative group work-sans">FAQ
            <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1B563B] dark:bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
          </router-link></li>
        </ul>

        <!-- TOGGLE BARU UNTUK DESKTOP -->
        <label class="switch ml-3" aria-label="Toggle theme">
          <!-- Hapus 'checked="darkTheme"' karena kita menggunakan v-model -->
          <input id="input" type="checkbox" v-model="isDark" class="sr-only" /> 
          <div class="slider round">
            <div class="sun-moon">
              <!-- Semua SVG di sini -->
              <svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>

              <svg id="cloud-1" class="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-2" class="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-3" class="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-4" class="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-5" class="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-6" class="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
            </div>
            <div class="stars">
              <svg id="star-1" class="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-2" class="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-3" class="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-4" class="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>

      <!-- Tombol Hamburger HANYA tampil jika menu TIDAK terbuka dan di layar MOBILE -->
      <button
        v-if="!isOpen"
        @click="toggleMenu"
        class="md:hidden z-50 p-2"
        aria-label="Open menu"
      >
        <span class="block w-6 h-[3px] bg-[#E0E0E0] dark:bg-white mb-1"></span>
        <span class="block w-6 h-[3px] bg-[#E0E0E0] dark:bg-white mb-1"></span>
        <span class="block w-6 h-[3px] bg-[#E0E0E0] dark:bg-white"></span>
      </button>
    </div>
  </nav>

  <transition name="slide-left">
    <aside
      v-if="isOpen"
      class="fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#0A0A0A] p-6 z-40 shadow-xl flex flex-col md:hidden"
    >
      <!-- ... (Konten lain di sidebar) ... -->
      <div class="flex justify-end items-center mb-6">
        <!-- Tambahkan tombol silang (✕) agar menu bisa ditutup dari sisi sidebar -->
        <button @click="toggleMenu" class="text-black dark:text-white text-3xl leading-none">
            &times;
        </button>
      </div>


      <!-- TOGGLE BARU DI DALAM SIDEBAR -->
      <div class="mb-6">
        <label class="switch inline-block" aria-label="Toggle theme">
          <input id="input-mobile" type="checkbox" v-model="isDark" class="sr-only" />
          <div class="slider round">
            <div class="sun-moon">
              <!-- Gunakan SVG yang sama di sini -->
              <svg id="moon-dot-1-m" class="moon-dot" viewBox="0 0 100 100">...</svg>
              <!-- Disederhanakan untuk tampilan, tambahkan semua SVG di sini -->
              <svg id="moon-dot-2-m" class="moon-dot" viewBox="0 0 100 100">...</svg>
              <svg id="moon-dot-3-m" class="moon-dot" viewBox="0 0 100 100">...</svg>
              <svg id="light-ray-1-m" class="light-ray" viewBox="0 0 100 100">...</svg>
              <svg id="light-ray-2-m" class="light-ray" viewBox="0 0 100 100">...</svg>
              <svg id="light-ray-3-m" class="light-ray" viewBox="0 0 100 100">...</svg>

              <svg id="cloud-1-m" class="cloud-dark" viewBox="0 0 100 100">...</svg>
              <svg id="cloud-2-m" class="cloud-dark" viewBox="0 0 100 100">...</svg>
              <svg id="cloud-3-m" class="cloud-dark" viewBox="0 0 100 100">...</svg>
              <svg id="cloud-4-m" class="cloud-light" viewBox="0 0 100 100">...</svg>
              <svg id="cloud-5-m" class="cloud-light" viewBox="0 0 100 100">...</svg>
              <svg id="cloud-6-m" class="cloud-light" viewBox="0 0 100 100">...</svg>
            </div>
            <div class="stars">
              <svg id="star-1-m" class="star" viewBox="0 0 20 20">...</svg>
              <svg id="star-2-m" class="star" viewBox="0 0 20 20">...</svg>
              <svg id="star-3-m" class="star" viewBox="0 0 20 20">...</svg>
              <svg id="star-4-m" class="star" viewBox="0 0 20 20">...</svg>
            </div>
          </div>
        </label>
      </div>
      <!-- End TOGGLE BARU DI DALAM SIDEBAR -->

      <ul class="flex flex-col gap-6 text-lg text-black dark:text-[#E0E0E0]">
        <li><router-link to="/" @click="toggleMenu" class="relative group work-sans">Home
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
        </router-link></li>
        <li><router-link to="/about" @click="toggleMenu" class="relative group work-sans">About Us
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
        </router-link></li>
        <li><router-link to="/faq" @click="toggleMenu" class="relative group work-sans">FAQ
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#29D970] transition-all duration-300 group-hover:w-full"></span>
        </router-link></li>
      </ul>
    </aside>
  </transition>

  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black/40 z-30 md:hidden"
    @click="toggleMenu"
  ></div>
</template>

<style scoped>
@font-face {
  font-family: 'Codec Cold';
  src: url('../../public/font/Codec-Cold-Regular-trial.ttf') format('truetype'),
       url('../../public/font/Codec-Cold-Regularl.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.font-codec{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Codec Cold', sans-serif;
  font-variant-numeric: lining-nums;
}

.work-sans{
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.work-sans-bold{
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3;
  transition: 0.4s;
  z-index: 0;
  overflow: hidden;
}

.sun-moon {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: yellow;
  transition: 0.4s;
}

/* Mengganti '#input:checked' dengan '.switch input:checked' karena 'sr-only' */
.switch input:checked + .slider {
  background-color: #121212;
}

/* Mengganti '#input:focus' dengan '.switch input:focus' */
.switch input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

.switch input:checked + .slider .sun-moon {
  transform: translateX(26px);
  background-color: white;
  animation: rotate-center 0.6s ease-in-out both;
}

.moon-dot {
  opacity: 0;
  transition: 0.4s;
  fill: gray;
}

.switch input:checked + .slider .sun-moon .moon-dot {
  opacity: 1;
}

.slider.round {
  border-radius: 34px;
}

.slider.round .sun-moon {
  border-radius: 50%;
}

/* SVG Positioning (Moon Dots) */
#moon-dot-1, #moon-dot-1-m {
  left: 10px; top: 3px; position: absolute; width: 6px; height: 6px; z-index: 4;
}
#moon-dot-2, #moon-dot-2-m {
  left: 2px; top: 10px; position: absolute; width: 10px; height: 10px; z-index: 4;
}
#moon-dot-3, #moon-dot-3-m {
  left: 16px; top: 18px; position: absolute; width: 3px; height: 3px; z-index: 4;
}

/* SVG Positioning (Light Rays) */
#light-ray-1, #light-ray-1-m {
  left: -8px; top: -8px; position: absolute; width: 43px; height: 43px; z-index: -1; fill: white; opacity: 10%;
}
#light-ray-2, #light-ray-2-m {
  left: -50%; top: -50%; position: absolute; width: 55px; height: 55px; z-index: -1; fill: white; opacity: 10%;
}
#light-ray-3, #light-ray-3-m {
  left: -18px; top: -18px; position: absolute; width: 60px; height: 60px; z-index: -1; fill: white; opacity: 10%;
}

/* Clouds */
.cloud-light {
  position: absolute; fill: #eee; animation-name: cloud-move; animation-duration: 6s; animation-iteration-count: infinite;
}
.cloud-dark {
  position: absolute; fill: #ccc; animation-name: cloud-move; animation-duration: 6s; animation-iteration-count: infinite; animation-delay: 1s;
}

#cloud-1, #cloud-1-m { left: 30px; top: 15px; width: 40px; }
#cloud-2, #cloud-2-m { left: 44px; top: 10px; width: 20px; }
#cloud-3, #cloud-3-m { left: 18px; top: 24px; width: 30px; }
#cloud-4, #cloud-4-m { left: 36px; top: 18px; width: 40px; }
#cloud-5, #cloud-5-m { left: 48px; top: 14px; width: 20px; }
#cloud-6, #cloud-6-m { left: 22px; top: 26px; width: 30px; }

@keyframes cloud-move {
  0% { transform: translateX(0px); }
  40% { transform: translateX(4px); }
  80% { transform: translateX(-4px); }
  100% { transform: translateX(0px); }
}

/* Stars */
.stars {
  transform: translateY(-32px);
  opacity: 0;
  transition: 0.4s;
}

.star {
  fill: white;
  position: absolute;
  transition: 0.4s;
  animation-name: star-twinkle;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.switch input:checked + .slider .stars {
  transform: translateY(0);
  opacity: 1;
}

#star-1, #star-1-m { width: 20px; top: 2px; left: 3px; animation-delay: 0.3s; }
#star-2, #star-2-m { width: 6px; top: 16px; left: 3px; }
#star-3, #star-3-m { width: 12px; top: 20px; left: 10px; animation-delay: 0.6s; }
#star-4, #star-4-m { width: 18px; top: 0px; left: 18px; animation-delay: 1.3s; }

@keyframes star-twinkle {
  0% { transform: scale(1); }
  40% { transform: scale(1.2); }
  80% { transform: scale(0.8); }
  100% { transform: scale(1); }
}

@keyframes rotate-center {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

/* ================================== */
/* Transisi Sidebar (Keep this) */
/* ================================== */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.28s ease, opacity 0.28s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>