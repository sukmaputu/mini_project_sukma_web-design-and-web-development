<!-- src/layouts/AppLayout.vue -->
<template>
  <div class="min-h-screen bg-white text-black dark:bg-[#0A0A0A] dark:text-white flex flex-col">

    <!-- LoaderBar hanya tampil jika isLoading bernilai true -->
    <LoaderBar v-if="isLoading" class="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-[#0A0A0A]" />

    <!-- Konten layout lainnya hanya tampil jika isLoading bernilai false -->
    <template v-else>
      <Navbar />

      <main class="flex-grow max-w-7xl mx-auto px-6 py-10 w-full">
        <slot />
      </main>

      <Footer />
    </template>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Import ref dan onMounted
import Navbar from '../components/NavbarApp.vue';
import Footer from '../components/FooterApp.vue';
import LoaderBar from '../components/LoaderBar.vue';

// Definisikan state reaktif untuk isLoading
const isLoading = ref(true); // Mulai dengan true agar loader tampil saat pertama kali dimuat

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false; // Setelah 3 detik, sembunyikan loader
  }, 5000); // 3000 ms = 3 detik
});
</script>

<style scoped>
/* Anda mungkin ingin menambahkan transisi untuk perubahan tema agar lebih halus */
/* Contoh: */
/*
.min-h-screen {
  transition: background-color 0.3s ease, color 0.3s ease;
}
*/

/* Pastikan LoaderBar memiliki latar belakang yang menutupi konten di bawahnya */
/* Kelas .fixed, .inset-0, .flex, .items-center, .justify-center, .z-50 sudah dari Tailwind */
/* Kamu bisa menyesuaikan warna bg-white/dark:bg-[#0A0A0A] sesuai tema kamu */
</style>