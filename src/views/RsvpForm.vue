<template>
  <div class="min-h-screen py-10 px-4 sm:px-6 lg:px-8"> 
    <div class="max-w-3xl w-full mx-auto bg-white dark:bg-black dark:text-white p-8 md:p-12 shadow-2xl rounded-xl border-t-8 border-[#29D970]">
      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-extrabold text-[#1B563B] dark:text-[#29D970] mb-2 work-sans-bold">
          Grand Launching Mark 1.5
        </h1>
        <h2 class="text-xl font-semibold text-[#29D970] work-sans">
          Anargya ITS RSVP Form
        </h2>
        <p class="mt-4 text-gray-600 text-base dark:text-white">
          Please fill in your details to confirm your attendance at the launch of the Anargya ITS Mark 1.5 electric vehicle.
        </p>
        <p v-if="hasError" class="mt-4 text-sm font-semibold text-[#EB413F] dark:text-white">
            Please fill in all required fields.
        </p>
      </div>
      <div class="mb-6">
          <div v-if="submitSuccess" class="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg" role="alert">
              <p class="font-bold">RSVP Confirmed!</p>
              <p class="text-sm">Thank you for confirming your attendance. A detailed confirmation email has been sent to your inbox.</p>
          </div>
          
          <!-- Pesan Gagal Server -->
          <div v-if="submitError" class="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
              <p class="font-bold">Submission Failed!</p>
              <p class="text-sm">{{ submitError }}</p>
          </div>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6" v-if="!submitSuccess">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="fullName" class="block text-sm font-medium text-[#1B563B] dark:text-[#29D970] mb-1">
                Full Name
                <span class="text-[#EB413F]">*</span>
              </label>
              <input 
                type="text" 
                id="fullName" 
                v-model="fullName" 
                required 
                placeholder="Enter your full name"
                :class="{'border-red-500 ring-1 ring-red-500': errors.fullName}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29D970] focus:border-transparent transition duration-150 text-base dark:text-black"
              >
            </div>

            <!-- Email Address -->
            <div>
              <label for="email" class="block text-sm font-medium text-[#1B563B] dark:text-[#29D970] mb-1">
                Email Address
                <span class="text-[#EB413F]">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                v-model="email" 
                required 
                placeholder="example@domain.com"
                :class="{'border-red-500 ring-1 ring-red-500': errors.email}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29D970] focus:border-transparent transition duration-150 text-base dark:text-black"
              >
            </div>
        </div>
        
        <!-- BARIS 2: LINE ID & Phone Number (2 kolom di desktop) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- LINE ID -->
            <div>
              <label for="lineId" class="block text-sm font-medium text-[#1B563B] dark:text-[#29D970] mb-1">
                LINE ID
              </label>
              <input 
                type="text" 
                id="lineId" 
                v-model="lineId" 
                placeholder="Your LINE ID (Optional)"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29D970] focus:border-transparent transition duration-150 text-base dark:text-black"
              >
            </div>

            <!-- Phone Number -->
            <div>
              <label for="phoneNumber" class="block text-sm font-medium text-[#1B563B] dark:text-[#29D970] mb-1">
                Phone Number
                <span class="text-[#EB413F]">*</span>
              </label>
              <input 
                type="tel" 
                id="phoneNumber" 
                v-model="phoneNumber" 
                required
                placeholder="e.g.: +6281234567890"
                :class="{'border-red-500 ring-1 ring-red-500': errors.phoneNumber}"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29D970] focus:border-transparent transition duration-150 text-base dark:text-black"
              >
            </div>
        </div>

        <!-- BARIS 3: Institution / Affiliation (1 kolom di desktop dan mobile) -->
        <div>
          <label for="institution" class="block text-sm font-medium text-[#1B563B] dark:text-[#29D970] mb-1">
            Institution / Affiliation
            <span class="text-[#EB413F]">*</span>
          </label>
          <input 
            type="text" 
            id="institution" 
            v-model="institution" 
            required
            placeholder="Your Institution/Company/University Name"
            :class="{'border-red-500 ring-1 ring-red-500': errors.institution}"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29D970] focus:border-transparent transition duration-150 text-base dark:text-black"
          >
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-xl font-bold text-white bg-[#29D970] hover:bg-[#1B563B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#29D970] transition duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isSubmitting" class="flex items-center">
            <!-- Loading Indicator Sederhana -->
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
          <span v-else class="work-sans">
            Confirm Attendance
          </span>
        </button>

        <div class="text-center pt-4">
            <p class="text-sm text-[#EB413F] font-medium work-sans">Mark 1.5 - The Future of Electric Mobility</p>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'RsvpForm',
  data() {
    return {
      fullName: '',
      email: '',
      lineId: '',
      phoneNumber: '',
      institution: '',
      
      errors: {
        fullName: false,
        email: false,
        phoneNumber: false,
        institution: false,
      },
      hasError: false, 
      
      isSubmitting: false,
      submitSuccess: false, 
      submitError: null, 
    };
  },
  methods: {
    resetForm() {
      this.fullName = '';
      this.email = '';
      this.lineId = '';
      this.phoneNumber = '';
      this.institution = '';
      
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false;
      });
      this.hasError = false;
    },
    
    validateForm() {
      let valid = true;
      this.hasError = false;

      Object.keys(this.errors).forEach(key => {
        this.errors[key] = false;
      });

      const requiredFields = ['fullName', 'email', 'phoneNumber', 'institution'];

      requiredFields.forEach(field => {
        if (!this[field] || this[field].trim() === '') {
          this.errors[field] = true;
          valid = false;
        }
      });
      
      if (!valid) {
          this.hasError = true;
      }

      return valid;
    },

    async handleSubmit() {
  this.submitSuccess = false;
  this.submitError = null;

  if (this.validateForm()) {
    this.isSubmitting = true;

    const formData = {
      fullName: this.fullName,
      email: this.email,
      lineId: this.lineId || "",
      phoneNumber: this.phoneNumber,
      institution: this.institution,
    };

    try {
      const response = await fetch("https://hook.eu1.make.com/ufislo800v9fcsjufrutx4ptfhmomkdx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      this.submitSuccess = true;
      this.resetForm();

    } catch (error) {
      console.error("Submission Error:", error);
      this.submitError = error.message || "Failed to submit the form.";
    } finally {
      this.isSubmitting = false;
    }

  } else {
    console.log("Validation failed.");
  }
}



  }
}
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
</style>