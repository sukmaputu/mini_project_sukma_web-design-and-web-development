<template>
  <div class="bg-white dark:bg-black min-h-screen py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:space-x-12">
        <div class="lg:w-5/12 mb-10 lg:mb-0">
          <div class="inline-block px-3 py-1 rounded-md text-sm font-semibold text-[#1c1c1c] bg-yellow-300 dark:bg-yellow-500 shadow-sm">
            FAQ
          </div>
          <h1 class="text-5xl font-extrabold text-[#1c1c1c] dark:text-white my-4 work-sans-bold">
            Frequently Asked Questions
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6 work-sans">
            Still haven't found the answer? You can ask us directly here.
          </p>

          <a href="#" target="_blank" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-lg text-white bg-[#1c1c1c] hover:bg-[#1B563B] dark:bg-[#242424] dark:hover:bg-[#1B563B] transition duration-300 work-sans">
            Contact us
          </a>
        </div>
        <div class="lg:w-7/12">
          <div class="border-y border-gray-200 dark:border-gray-700">
            <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
              <button
                @click="toggleFaq(index)"
                class="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-[#1c1c1c] dark:text-white hover:text-[#EB413F] dark:hover:text-[#29D970] transition duration-200"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-answer-${index}`"
              >
                {{ item.question }}
                <svg 
                  class="w-6 h-6 transform transition-transform duration-300" 
                  :class="{ 
                    'rotate-180 text-[#29D970]': openIndex === index, 
                    'text-gray-400 dark:text-gray-500': openIndex !== index 
                  }" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <transition 
                name="accordion"
                @before-enter="beforeEnter" 
                @enter="enter" 
                @before-leave="beforeLeave" 
                @leave="leave"
              >
                <div v-show="openIndex === index" :id="`faq-answer-${index}`" class="overflow-hidden">
                  <div class="pb-4 pt-0 text-base text-gray-700 dark:text-gray-400 whitespace-pre-line work-sans">
                    {{ item.answer }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <section class="p-4 md:p-12 lg:p-16 bg-white dark:bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="w-full h-[450px] overflow-hidden rounded-xl shadow-xl mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.574097759784!2d112.79396467499987!3d-7.28920129271819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa6e71561e79%3A0x3990963c2da42ea6!2sGedung%20Riset%20Mobil%20Listrik%20ITS!5e0!3m2!1sid!2sid!4v1763613695499!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
    <div class="bg-white dark:bg-black p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 dark:border-[#1c1c1c]">
        
        <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-[#29D970] bg-opacity-10 rounded-full flex items-center justify-center dark:bg-white dark:bg-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1B563B] dark:text-[#29D970]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.606-10.606L14 7.414l-4.243-4.243m10.606 10.606a7 7 0 11-9.9-9.9A7 7 0 0117.657 14.657z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-[#1c1c1c] dark:text-white work-sans-bold">Address</h2>
        </div>
          
        <div class="text-lg text-[#1c1c1c] dark:text-white leading-relaxed ml-16 work-sans">
            <p>Jl. Teknik Sipil No.2,</p>
            <p>Keputih, Kec. Sukolilo,</p>
            <p>Surabaya, Jawa Timur 60111</p>
        </div>
    </div>

    <div class="bg-white dark:bg-black p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 dark:border-[#1c1c1c]">
        
        <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 bg-[#29D970] bg-opacity-10 rounded-full flex items-center justify-center dark:bg-white dark:bg-opacity-20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1B563B] dark:text-[#29D970]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.882 5.254a4 4 0 004.236 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-[#1c1c1c] dark:text-white work-sans-bold">Contact Info</h2>
        </div>
          
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 ml-16">
            
            <div>
              <p class="text-sm font-semibold text-[#1B563B] dark:text-[#29D970] uppercase work-sans-bold">Email</p>
              <a href="mailto:anargyaits@gmail.com" class="text-lg text-[#1c1c1c] dark:text-white hover:text-[#EB413F] transition-colors work-sans">anargyaits@gmail.com</a>
            </div>
            
            <div>
              <p class="text-sm font-semibold text-[#1B563B] dark:text-[#29D970] uppercase work-sans-bold">Instagram</p>
              <a href="https://instagram.com/anargya.its" target="_blank" class="text-lg text-[#1c1c1c] dark:text-white hover:text-[#EB413F] transition-colors work-sans">@anargya.its</a>
            </div>

            <div>
              <p class="text-sm font-semibold text-[#1B563B] dark:text-[#29D970] uppercase work-sans-bold">LinkedIn</p>
              <a href="#" class="text-lg text-[#1c1c1c] dark:text-white hover:text-[#EB413F] transition-colors work-sans">anargya its team</a>
            </div>

            <div>
              <p class="text-sm font-semibold text-[#1B563B] dark:text-[#29D970] uppercase work-sans-bold">WhatsApp</p>
              <a href="https://wa.me/6282289960215" target="_blank" class="text-lg text-[#1c1c1c] dark:text-white hover:text-[#EB413F] transition-colors work-sans">082289960215</a>
            </div>
        </div>
    </div>
</div>

    </div>
  </section>

  <BackToTop />
</template>

<script setup>
import { ref } from 'vue';
import BackToTop from '../components/BackToTop.vue';
const openIndex = ref(null);
const faqs = ref([
  {
    question: "So, what is this event actually about?",
    answer: "This event is the official unveiling of Anargya Mark 1.5, the latest electric vehicle created by Team Anargya ITS. It’s where the team finally shows the results of months of design, engineering, and testing — kind of like the moment where all the hard work gets revealed to the world. You’ll get to see the new upgrades, the design improvements, and hear the story behind this version of the car."
  },
  {
    question: "When and where is it happening?",
    answer: "The launch will take place on 25 November, from 10:00 AM to 4:00 PM WIB, at Gedung Robotika ITS. The entire building will be set up for the reveal, demos, and media sessions, so expect a packed and lively atmosphere."
  },
  {
    question: "Why is it called Mark 1.5?",
    answer: "The name “Mark 1.5” reflects that this is not a completely new generation, but a significantly improved version of the previous model. Think of it like a major upgrade — with better performance, smarter engineering decisions, and refined design elements. It’s the “1.0 but upgraded in all the ways that matter.”"
  },
  {
    question: "What’s the theme of the event?",
    answer: "The theme is “The Return of the Throne”, which symbolizes Anargya coming back stronger with a version of the car that’s built to reclaim its position. It suggests confidence, improvement, and a comeback moment worthy of a crown."
  },
  {
    question: "What’s the tagline, and what does it mean?",
    answer: "The tagline is “The Crown’s Return.” It’s a shorter, punchier way of saying that Anargya is returning not just with a new car, but with the pride and legacy of its past achievements. It signals readiness to perform, compete, and impress again with new innovations."
  },
  {
    question: "Who’s allowed to join the event?",
    answer: "Everyone who’s interested! The event welcomes ITS students, lecturers, alumni, EV and engineering enthusiasts, media crews, sponsors, tech lovers, and even people who are just curious about electric vehicles or student innovation. It’s designed to be an open and inclusive showcase."
  },
  {
    question: "What will be happening during the event?",
    answer: `There will be several main activities:
- Grand Reveal of Anargya Mark 1.5
- Technical Showcase & Demonstration, where the team explains what’s new and improved
- Media Interview & Documentation Session
 You’ll get to see the car up close, hear the engineering story behind it, and interact with the team`
  },
  {
    question: "Do I need to RSVP before coming?",
    answer: "Yes, you’ll need to register through the official Anargya website so the team can manage the crowd and prepare the venue properly. The RSVP page also includes basic info about Mark 1.5."
  },
  {
    question: "Is the event free?",
    answer: "Absolutely. It’s free and open for all invited audiences. Just make sure you RSVP to secure your spot."
  },
  {
    question: "Can I take pictures or record videos?",
    answer: "Yes! Feel free to take as many photos or videos as you like. The team will also have their own videography crew documenting everything, but you’re welcome to capture your own moments."
  },
  {
    question: "Do I need to know anything about EVs to enjoy the event?",
    answer: "Not at all. The sessions are easy to follow, even if you’re not from an engineering background. You’ll still get to enjoy the reveal, the storytelling, and the experience of seeing a student-built EV up close."
  },
  {
    question: "Why should I come?",
    answer: "Because it’s a rare chance to see what student innovation looks like at its best. You’ll experience a car reveal, meet passionate people, and learn something new about EV technology — all in a fun, energetic, and inspiring environment."
  },
]);

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const beforeEnter = (el) => {
  el.style.height = '0';
};

const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
};

const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
};

const leave = (el) => {
  el.style.height = '0';
};
</script>

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

.accordion-enter-active,
.accordion-leave-active {
  transition: height 0.3s ease;
}
</style>