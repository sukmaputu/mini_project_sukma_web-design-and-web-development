<script>
export default {
  name: "NewsletterForm",
  data() {
    return {
      email: "",
      showAlert: false,
      isInvalid: false,
    };
  },
  methods: {
    subscribe() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.email.match(emailPattern)) {
        this.isInvalid = true;
        this.showAlert = false;
        return;
      }
      this.isInvalid = false;
      this.showAlert = true;
      this.email = "";
      setTimeout(() => (this.showAlert = false), 4000);
    },
  },
};
</script>

<template>
  <footer class="bg-white dark:bg-black text-gray-700 dark:text-white py-10 text-sm ">
    <div class="max-w-7xl mx-auto px-6 mb-10">
      <!-- CONTAINER BARU UNTUK MEMUSATKAN TIGA KOMPONEN UTAMA -->
      <div class="flex flex-col md:flex-row md:justify-center md:items-start gap-10">
        <!-- Komponen Anargya ITS -->
        <div class="md:w-1/3 lg:w-1/4"> <!-- Sesuaikan lebar jika perlu -->
          <h2 class="text-2xl font-bold text-[#29D970] mb-3 work-sans-bold">Anargya ITS</h2>
          <p class="text-sm text-gray-600 dark:text-white text-justify work-sans">
            Anargya ITS is a student team from Institut Teknologi Sepuluh Nopember dedicated to
            developing high-performance electric formula cars.
          </p>
        </div>

        <!-- Komponen Follow Us -->
        <div class="md:w-1/3 lg:w-1/4"> <!-- Sesuaikan lebar jika perlu -->
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 work-sans-bold">Follow Us</h3>
          <div class="flex space-x-5 text-xl">
            <a href="#" class="hover:text-blue-600 transition-colors duration-300">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="hover:text-sky-500 transition-colors duration-300">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="hover:text-pink-600 transition-colors duration-300">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="hover:text-red-600 transition-colors duration-300">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <!-- Komponen Subscription -->
        <div class="md:w-1/3 lg:w-1/4"> <!-- Sesuaikan lebar jika perlu -->
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3 work-sans-bold">Subscription</h3>
          <p class="text-sm mb-3 text-gray-700 dark:text-white work-sans">Get the latest news straight to your email.</p>

          <div class="flex">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              class="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-900 bg-gray-100 border border-gray-300"
              :class="{
                'border-2 border-red-500': isInvalid,
                'border border-gray-300': !isInvalid // Menjaga border konsisten
              }"
            />
            <button
              @click="subscribe"
              class="hover:bg-[#1B563B] bg-[#29D970] text-white px-5 py-2 rounded-r-lg transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showAlert"
        class="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg flex items-center space-x-3 z-50"
      >
        <i class="fas fa-check-circle work-sans"></i>
        <span>News subscription has been added to your email</span>
        <button @click="showAlert = false" class="ml-2 font-bold text-lg leading-none">&times;</button>
      </div>
    </transition>

    <div class="border-t border-gray-200"></div>

    <div class="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-3 md:space-y-0">
      <p class="work-sans">© 2025 Anargya ITS. All rights reserved.</p>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-[#29D970] transition work-sans">Terms & Conditions</a>
        <a href="#" class="hover:text-[#29D970] transition work-sans">Privacy Policy</a>
        <a href="#" class="hover:text-[#29D970] transition work-sans">Cookie Policy</a>
        <a href="#" class="hover:text-[#29D970] transition work-sans">Cookie Settings</a>
      </div>
    </div>
  </footer>
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>