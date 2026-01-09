<template>
    <!-- Section Pertama -->
    <section class="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen flex items-center justify-center p-8">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div class="lg:w-1/2 text-left mb-10 lg:mb-0">
            <p class="text-green-600 dark:text-green-400 font-bold text-lg mb-2 font-codec">Return of the Champion</p>
            <h1 class="text-5xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white work-sans-bold">
             Next-Level Inovation: The First Journey of Mark 1.5
            </h1>
            <div class="flex items-center space-x-4 mb-8">
            <div class="flex items-center text-gray-700 dark:text-gray-300 work-sans">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                25 November 2025
            </div>
            <div class="flex items-center text-gray-700 dark:text-gray-300 work-sans">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                10.00
            </div>
            <div class="flex items-center text-gray-700 dark:text-gray-300 work-sans">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Gedung Pusat Robotika ITS
            </div>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-10 text-center">
            <div>
                <div class="p-4 rounded-lg text-4xl font-bold bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">{{ formattedTime.days }}</div>
                <p class="mt-2 text-gray-600 dark:text-gray-400 work-sans">Days</p>
            </div>
            <div>
                <div class="p-4 rounded-lg text-4xl font-bold bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">{{ formattedTime.hours }}</div>
                <p class="mt-2 text-gray-600 dark:text-gray-400 work-sans">Hours</p>
            </div>
            <div>
                <div class="p-4 rounded-lg text-4xl font-bold bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">{{ formattedTime.minutes }}</div>
                <p class="mt-2 text-gray-600 dark:text-gray-400 work-sans">Minutes</p>
            </div>
            </div>

            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
                href="#jumbotron-mark-1-5" 
                @click.prevent="scrollToSection('jumbotron-mark-1-5')" 
                class="bg-[#29D970] hover:bg-[#1B563B] text-white px-6 py-3 rounded-full flex items-center justify-center text-lg font-semibold transition duration-300 work-sans"
            >
                Secure Your Seat
            </a>
            </div>
        </div>

        <div class="lg:w-1/2 flex justify-center items-center">
            <img src="../../public/img/m1.webp" alt="Mark 1.5 Anargya ITS" class="max-w-full h-auto blur-sm">
        </div>
        </div>
    </section>
    <!-- Section Pertama  -->

    <!-- Section Kedua -->
    <section class="bg-white dark:bg-[#000000] py-12 sm:py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Judul Bagian -->
         <h2 class="text-4xl text-center sm:text-5xl font-extrabold text-[#29D970] mb-4 leading-tight work-sans-bold">
            Our Sponsor
        </h2>

        <!-- Marquee Wrapper -->
        <marquee
            behavior="scroll"
            direction="left"
            scrollamount="8"
            loop="infinite"
            class="p-4 "
        >
            <div class="flex items-center h-full">
            <img
                v-for="sponsor in sponsors"
                :key="sponsor.name"
                :src="sponsor.url"
                :alt="sponsor.name"
                class="h-28 w-auto object-contain mx-8 opacity-75 hover:opacity-100 transition duration-300 dark:bg-white dark:p-1.5 dark:shadow-md "
            />
            </div>
        </marquee>
        </div>
    </section>
    <!-- Section Kedua -->

    <!-- Section Ketiga  -->
    <section class="bg-white dark:bg-[#000000] text-gray-900 dark:text-[#ffffff] min-h-fit py-16 px-4">
        <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div class="lg:w-1/2 w-full">
            <div class="relative pt-[56.25%] w-full rounded-lg overflow-hidden shadow-xl">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/bj7Q_Wvp6xY?si=OZYKfbMDKFyimQgc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
        </div>

            <div class="lg:w-1/2 w-full flex flex-col justify-center text-center lg:text-left p-4">
                <h2 class="text-4xl sm:text-5xl font-bold text-[#29D970] mb-4 leading-tight work-sans-bold">Mark 1.5</h2>
                <p class="text-base sm:text-lg text-justify text-[#1c1c1c] dark:text-[#ffffff] leading-relaxed work-sans">
                The Mark 1.5, which combines the Mark 1 chassis with the aerodynamic design of Mark 2, reflects the engineering 
                capabilities of ITS students in developing Formula electric vehicles. In 2025, the vehicle will appear at several 
                major events such as IIMS Jakarta, EV Indonesia Expo, IIMS Surabaya, and GIIAS to introduce the concept of Formula 
                EV to a wider audience.               
                </p>
            </div>
        </div>
    </section>
    <!-- Section Ketiga -->

    <!-- Lanjutan Section Ketiga -->
    <section class="bg-white dark:bg-[#000000] text-[#1c1c1c] dark:text-[#ffffff] py-16 px-4 md:py-24">
    
    <!-- Judul -->
    <h2 class="text-4xl text-center sm:text-5xl font-extrabold text-[#29D970] mb-12 leading-tight work-sans-bold">
        Mark 1.5 Update
    </h2>

    <div class="card-section flex flex-wrap justify-center gap-6 md:gap-10 max-w-6xl mx-auto">
      
      <!-- Kartu Update Mark 1.5 -->
      <!-- BG: #ffffff -> #1c1c1c | Shadow: default -> dark:shadow-black/50 -->
      <div class="mark15-card bg-[#ffffff] dark:bg-[#1c1c1c] rounded-xl 
                  shadow-lg dark:shadow-xl dark:shadow-black/50 
                  border border-gray-100 dark:border-gray-800 
                  transition-all duration-300 
                  hover:shadow-2xl hover:scale-[1.02] hover:border-gray-200 dark:hover:border-gray-700
                  group"
           v-for="(card, index) in updateCards"
           :key="index"
           :style="`--card-accent-color: ${card.accentColor};`"
      >
        <!-- Bagian Gambar (card-img-top) -->
        <div class="h-40 overflow-hidden rounded-t-xl relative">
          <!-- Gambar dengan efek blur-sm (blur kecil) dan efek zoom on hover -->
          <img :src="card.image" 
               alt="Mark 1.5 Update Image"
               class="w-full h-full object-cover filter blur-sm transition-transform duration-500 group-hover:scale-105"
          >
        </div>

        <!-- Bagian Konten Kartu (card-body) -->
        <div class="p-6 md:p-8">
          <!-- Title tetap menggunakan style binding karena warnanya berbeda-beda per kartu -->
          <p class="text-xl md:text-2xl font-bold mb-3" :style="`color: ${card.accentColor};`">{{ card.title }}</p>
          <!-- Deskripsi: text-gray-600 -> dark:text-gray-400 (standar Tailwind, tidak perlu custom color) -->
          <p class="text-sm md:text-base text-gray-600 dark:text-gray-400">{{ card.description }}</p>
        </div>
      </div>
      <!-- Akhir Kartu -->
      
    </div>
  </section>
     
    <!-- Section Keempat -->
      <section class="bg-white dark:bg-black text-black dark:text-white py-20">
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      
      <div 
        class="md:w-1/2 flex flex-col justify-center text-center md:text-left"
      >
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#29D970] work-sans-bold">
          Visit Us
        </h2>
        <p class="text-gray-400 text-lg mb-2 text-justify work-sans">
          Address: Jalan Raya ITS Campus ITS Sukolilo Surabaya Jawa Timur 60111, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60117
        </p>
        <p class="text-gray-400 text-lg mb-4 work-sans">
          Province: Jawa Timur
        </p>
        <p class="text-[#29D970] font-semibold text-lg work-sans">
          Come and visit our secretariat to explore the world of Anargya ITS EV Team!
        </p>
      </div>

      <div 
        class="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6775438617274!2d112.79741489999999!3d-7.277483500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa11c65fcca3%3A0x93e17758d6eeb2b1!2sITS%20Robotics%20Center!5e0!3m2!1sid!2sid!4v1763536439719!5m2!1sid!2sid"
          class="w-full h-full border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>

    <!-- Section Keempat -->
      
<section class="py-16 md:py-24 bg-white dark:bg-black overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        
        <!-- Bagian Kiri: Animasi Truk -->
        <!-- Penyesuaian Responsivitas: Tambahkan 'px-4' untuk padding horizontal pada mobile agar animasi tidak mepet tepi, dan 'overflow-hidden' untuk mengelola jika ukuran animasi terlalu besar -->
        <div class="w-full md:w-1/2 flex justify-center items-center h-[400px] relative px-4 overflow-hidden">
          <!-- Tambahkan 'max-w-full' untuk memastikan container animasi menyesuaikan lebar maksimum yang tersedia -->
          <div class="car-container max-w-full">
            <div class="car">
              <div class="window"></div>
              <div class="cargo-details"></div>
              <div class="door"></div>
              <div class="lights"></div>
            </div>
            <div class="wheels wheels1"></div>
            <div class="wheels wheels2"></div>
            <div class="street"></div>
            <div class="post"></div>
          </div>
        </div>

        <!-- Bagian Kanan: Teks dan Poin-Poin -->
        <div class="w-full md:w-1/2 p-6 md:p-12">
          <h2 class="text-3xl md:text-5xl font-extrabold mb-8 work-sans-bold" :style="{ color: '#29D970' }">
            What will you get
          </h2>
           <ul class="space-y-6 list-none p-0">
            <!-- Poin 1 -->
            <li class="flex items-start">
              <div class="text-xl font-bold mr-3 text-[#EB413F] ">1.</div>
              <div class="text-[#1c1c1c] dark:text-white">
                <span class="work-sans-bold">Exclusive First Look</span>
                <p class="mt-1 work-sans">Get the earliest reveal of Anargya’s newest EV innovation.</p>
              </div>
            </li>
            <!-- Poin 2 -->
            <li class="flex items-start">
              <div class="text-xl font-bold mr-3 text-[#EB413F] ">2.</div>
              <div class="text-[#1c1c1c] dark:text-white">
                <span class="work-sans-bold">Technical Insights</span>
                <p class="mt- work-sans1">Learn key features, engineering highlights, and performance upgrades.</p>
              </div>
            </li>
            <!-- Poin 3 -->
            <li class="flex items-start">
              <div class="text-xl font-bold mr-3 text-[#EB413F] ">3.</div>
              <div class="text-[#1c1c1c] dark:text-white">
                <span class="work-sans-bold">Live Demonstrations</span>
                <p class="mt-1 work-sans">Experience real-time showcases of the car’s capabilities.</p>
              </div>
            </li>
            <!-- Poin 4 -->
            <li class="flex items-start">
              <div class="text-xl font-bold mr-3 text-[#EB413F] ">4.</div>
              <div class="text-[#1c1c1c] dark:text-white">
                <span class="work-sans-bold">Engagement & Networking</span>
                <p class="mt-1 work-sans">Connect with the team, ask questions, and interact with the display area.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- Section Keempat -->

    <!-- Section Kelima --> 
    <section 
        class="relative h-screen lg:h-auto lg:py-48 bg-white dark:bg-[#1c1c1c] overflow-hidden" 
        id="jumbotron-mark-1-5"
    >
        <div class="absolute inset-0">
            <img 
            src="../../public/img/jumbotron.webp" 
            alt="Latar Belakang Grand Launching Mark 1.5" 
            class="w-full h-full object-cover opacity-40 dark:opacity-60"
            loading="lazy"
            >
            <div class="absolute inset-0 bg-white/50 dark:bg-[#000000]/50"></div> 
        </div>
        <div class="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4 text-center">
            <h1 class="text-3xl md:text-7xl lg:text-7xl font-black mb-4 uppercase leading-tight tracking-wider text-[#000000] dark:text-white work-sans-bold">
            GRAND LAUNCHING <br/> 
            <span class="text-[#29D970] work-sans-bold">MARK 1.5</span> 
            </h1>
            
            <p class="text-lg md:text-xl lg:text-2xl text-[#1c1c1c] dark:text-white/80 mb-10 max-w-3xl font-light">
            Witness the latest technological evolution from the Anargya ITS Team. A major leap in electric vehicle development.
            </p>  
            <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <router-link 
                to="/rsvp" 
                class="px-8 py-3 text-lg md:px-10 md:py-4 md:text-xl font-bold rounded-full bg-[#EB413F] text-white hover:bg-opacity-90 transition duration-300 shadow-xl shadow-[#EB413F]/50 transform hover:scale-105"
                role="button"
            >
                Register
            </router-link>
            
            </div>
            
        </div>
    </section>
    <!-- Section Kelima -->

    <BackToTop />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import BackToTop from '../components/BackToTop.vue';

const targetDate = new Date('2025-11-25T10:00:00');
const timeRemaining = ref(0);
let countdownInterval = null;
const calculateTimeRemaining = () => {
  const now = new Date();
  timeRemaining.value = Math.max(0, targetDate.getTime() - now.getTime());
};


const formattedTime = computed(() => {
  const totalSeconds = Math.floor(timeRemaining.value / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
  };
});


onMounted(() => {
  calculateTimeRemaining();
  countdownInterval = setInterval(calculateTimeRemaining, 1000); 
});

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'     
        });
    }
};

import sponsorALogo from '../../public/img/spectrum.webp';
import sponsorBLogo from '../../public/img/atera.webp'; 
import sponsorCLogo from '../../public/img/pln.webp'; 
import sponsorDLogo from '../../public/img/kuy.webp'; 
import sponsorELogo from '../../public/img/tdr.webp'; 
import sponsorFLogo from '../../public/img/lng.webp'; 
import sponsorGLogo from '../../public/img/pelindo.webp'; 
import sponsorHLogo from '../../public/img/inka.webp'; 

const sponsors = ref([
  { name: 'Sponsor A', url: sponsorALogo },
  { name: 'Sponsor B', url: sponsorBLogo },
  { name: 'Sponsor C', url: sponsorCLogo },
  { name: 'Sponsor D', url: sponsorDLogo },
  { name: 'Sponsor E', url: sponsorELogo },
  { name: 'Sponsor F', url: sponsorFLogo },
  { name: 'Sponsor G', url: sponsorGLogo },
  { name: 'Sponsor H', url: sponsorHLogo },

]);

import g1 from "../../public/img/DSC03527.jpg"
import g2 from "../../public/img/DSC03523.jpg"
import g3 from "../../public/img/DSC03525.jpg" 
const updateCards = ref([
  {
    title: "Interactive Racing Simulator",
    description: "Optimized as an interactive racing simulator, allowing visitors to experience a realistic virtual Formula racing environment.",
    accentColor: "#29D970", 
    image: g1 , 
  },
  {
    title: "High-Efficiency Powertrain",
    description: "Equipped with an aerodynamic body, long-lasting battery, and an AI-based electric drivetrain designed for improved energy efficiency.",
    accentColor: "#29D970", 
    image: g2, 
  },
  {
    title: "International Competition Readiness",
    description: "Showcases the technological advancements developed for international Formula Student competitions in Japan and Australia.",
    accentColor: "#29D970", 
    image: g3, 
  },
]);
</script>

<style>
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

.mark15-card {
  /* Lebar default penuh di mobile */
  width: 100%;
  max-width: 350px;
}


@media (min-width: 1024px) {
  .mark15-card {
    width: calc(33.333% - 27px); 
    max-width: none;
  }
}

/* Efek hover border menggunakan accent color (optional, jika ingin custom border) */
.mark15-card:hover {

}

@keyframes bounce {
  0% {
    top: 135px;
  }
  50% {
    top: 132px;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes lighting1 {
  0% {
    background-color: rgb(255, 237, 191);
    box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
  }

  50% {
    box-shadow: inset 0px -8px rgba(217, 83, 1, 0.719);
  }
}

@keyframes lighting {
  0% {
    box-shadow: inset 0px 9px rgb(207, 2, 2);
  }

  50% {
    box-shadow: inset 0px 9px rgb(255, 0, 0);
  }
}

@keyframes motion {
  0% {
    left: 0;
  }
  100% {
    left: -450px;
  }
}

@keyframes moving {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-650px);
  }
}

.car-container {
  position: relative; 
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.car {
  position: absolute;
  background-color: rgb(204, 204, 204);
  width: 200px;
  height: 120px;
  left: 50px;
  border-top: 4px solid rgb(162, 162, 162);
  top: 135px;
  animation: bounce 0.4s infinite;
}


.car::before {
  content: "";
  position: absolute;
  width: 290px;
  height: 20px;
  background-color: rgb(46, 46, 81);
  bottom: -10px;
}

.car::after {
  content: "";
  position: absolute;
  background-color: rgb(229, 229, 229);
  width: 80px;
  height: 90px;
  right: -90px;
  bottom: 10px;
  clip-path: polygon(0% 0%, 50% 0, 100% 60%, 100% 100%, 0% 100%);
}

.window {
  position: absolute;
  background-color: rgb(126, 191, 226);
  width: 50px;
  height: 40px;
  right: -75px;
  top: 26px;
  z-index: 1;
  clip-path: polygon(0% 0%, 40% 0, 100% 100%, 0% 100%);
  border: 2px solid rgb(135, 135, 135);
}

.window::before {
  content: "";
  position: absolute;
  background-color: rgb(186, 225, 247);
  width: 5px;
  height: 40px;
  left: 5px;
  transform: skew(-36deg);
  box-shadow: 9px 0px rgb(186, 225, 247);
}
.window::after {
  content: "";
  position: absolute;
  background-color: rgb(108, 107, 107);
  width: 10px;
  height: 10px;
  bottom: 2px;
  right: 10px;
  box-shadow:
    2px 6px 0px -2px rgb(229, 229, 229),
    inset 2px 0px rgb(203, 203, 204);
}

.wheels {
  position: absolute;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #bcbcbc;
  border: 10px solid rgb(4, 4, 4);
  bottom: 108px;
  left: 90px;
  box-shadow: 0px 0px 0px 4px;
  animation: rotation 0.3s linear infinite;
}

.wheels::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: rgb(67, 67, 67);
  top: 10px;
  left: 3px;
  border-radius: 50%;
  box-shadow:
    14.5px 0px rgb(67, 67, 67),
    7px -7px rgb(67, 67, 67),
    7px 7px rgb(67, 67, 67),
    7px 0px 0px 4px rgb(67, 67, 67);
  /* 'animation' di sini dibiarkan kosong karena tidak ada nama, durasi, dsb. */
}

.wheels2 {
  left: 270px;
}

.cargo-details {
  position: absolute;
  width: 185px;
  height: 20px;
  background-color: #e9e9e9;
  left: 8px;
  top: 5px;
  box-shadow:
    0px 23px #e9e9e9,
    0px 46px #e9e9e9,
    0px 69px #e9e9e9;
}

.cargo-details::before {
  position: absolute;
  content: "";
  width: 10px;
  height: 4px;
  background-color: red;
  bottom: -72px;
  box-shadow:
    10px 0px white,
    20px 0px red,
    30px 0px white,
    40px 0px red,
    50px 0px white,
    60px 0px red,
    70px 0px white,
    80px 0px red,
    90px 0px white,
    100px 0px red,
    110px 0px white,
    120px 0px red,
    130px 0px white,
    140px 0px red,
    150px 0px white,
    160px 0px red,
    170px 0px white,
    175px 0px red;
}

.cargo-details::after {
  position: absolute;
  content: "";
  width: 10px;
  height: 6px;
  background-color: rgb(135, 135, 135);
  top: -6px;
  left: -10px;
  box-shadow:
    195px 0px rgb(135, 135, 135),
    0px 125px rgb(46, 46, 81);
}

.door {
  position: absolute;
  width: 10px;
  height: 4px;
  background-color: black;
  right: -31px;
  bottom: 40px;
  z-index: 2;
}

.door::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: rgb(85, 84, 85);
  left: -21px;
  z-index: -1;
  bottom: -30px;
  box-shadow: inset 0px 4px rgb(163, 163, 163);
}

.lights {
  position: absolute;
  width: 12px;
  height: 20px;
  background-color: rgb(255, 237, 191);
  right: -90px;
  bottom: 0px;
  z-index: 1;
  box-shadow: inset 0px -8px rgba(172, 2, 2, 0.719);
  animation: lighting1 1.5s infinite ease-in-out;
}

.lights::before {
  content: "";
  position: absolute;
  width: 6px;
  height: 15px;
  background-color: rgb(207, 2, 2);
  left: -280px;
  bottom: 0px;
  box-shadow: inset 0px 7px rgb(207, 2, 2);
  animation: lighting 1.5s infinite ease-in-out;
}

.lights::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 2px;
  background-color: rgb(81, 81, 81);
  top: -8px;
  box-shadow:
    0px -6px rgb(81, 81, 81),
    0px -12px rgb(81, 81, 81);
  right: 0px;
}

.street {
  height: 2px;
  width: 70px;
  background-color: black;
  position: absolute;
  bottom: 105px;
  left: 0;
  box-shadow:
    90px 0,
    180px 0,
    270px 0,
    360px 0;
  animation: motion 2s linear infinite;
}

.street::before {
  content: "";
  height: 2px;
  width: 70px;
  background-color: black;
  position: absolute;
  bottom: 0;
  left: 450px;
  box-shadow:
    90px 0,
    180px 0,
    270px 0,
    360px 0;
}

/* .street2 tidak ada di HTML Anda */

.post {
  position: absolute;
  width: 5px;
  height: 180px;
  background-color: black;
  right: -15px;
  top: 115px;
  animation: moving 2.9s infinite linear;
  z-index: -2;
}

.post::before {
  width: 20px;
  height: 20px;
  position: absolute;
  content: "";
  background-color: black;
  top: -15px;
  left: -7px;
  clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
}

.post::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 20px solid transparent;
  border-left: 10px solid transparent;
  border-left: 20px solid black;
  transform: rotate(45deg);
  top: -23px;
  left: -7px;
}

</style>