<template>
    <div>
      <!-- Header -->
      <HeaderComponent />
  
      <!-- Hero Section -->
      <section
  id="home"
  class="min-h-screen flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-black via-gray-600 to-gray-400 text-white px-6 py-10"
>
  <!-- Kartun Anak Laki-Laki -->
  <div class="md:w-1/3 flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      class="w-64 h-64 md:w-80 md:h-80"
      fill="none"
    >
      <!-- Wajah -->
      <circle cx="100" cy="70" r="50" fill="#FFD79E" />
      <!-- Rambut -->
      <path d="M50 60c10-60 100-60 100 0H50z" fill="#4A2511" />
      <!-- Mata Kanan -->
      <circle cx="80" cy="65" r="5" fill="#000" />
      <!-- Mata Kiri -->
      <circle cx="120" cy="65" r="5" fill="#000" />
      <!-- Mulut -->
      <path
        d="M85 90c5 10 25 10 30 0"
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
      />
      <!-- Badan -->
      <rect
        x="70"
        y="120"
        width="60"
        height="80"
        rx="10"
        fill="#007BFF"
      />
      <!-- Tangan Kiri -->
      <rect x="40" y="130" width="20" height="60" rx="10" fill="#FFD79E" />
      <!-- Tangan Kanan -->
      <rect x="140" y="130" width="20" height="60" rx="10" fill="#FFD79E" />
      <!-- Kaki Kiri -->
      <rect x="80" y="200" width="20" height="40" rx="10" fill="#4A4A4A" />
      <!-- Kaki Kanan -->
      <rect x="110" y="200" width="20" height="40" rx="10" fill="#4A4A4A" />
    </svg>
  </div>

  <!-- Hi, I'm Hansel -->
  <div class="md:w-1/3 text-center md:text-left mt-10 md:mt-0">
    <h1 class="text-6xl font-extrabold">
      Hi, I'm <span class="text-blue-500">Hansel</span>.
    </h1>
    <p class="text-xl mt-4">A Web Developer</p>
    <button
      class="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 hover:bg-purple-500 transition duration-300"
      @click="scrollToSection('about')"
    >
      Learn More
    </button>
  </div>

  <!-- Ikon Sosial Media -->
  <div class="md:w-1/3 flex flex-col justify-center items-center md:items-end space-y-6 mt-10 md:mt-0">
    <a
      href="https://www.instagram.com/hanselchristlie"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white hover:text-pink-500 transition duration-300"
    >
      <i class="fab fa-instagram text-3xl"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/hansel-linuwih-238929254"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white hover:text-blue-500 transition duration-300"
    >
      <i class="fab fa-linkedin text-3xl"></i>
    </a>
    <a
      href="https://github.com/Hansel12345llll"
      target="_blank"
      rel="noopener noreferrer"
      class="text-white hover:text-gray-500 transition duration-300"
    >
      <i class="fab fa-github text-3xl"></i>
    </a>
  </div>
</section>


      <!-- About Section -->
      <section id="about" class="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-blue-600">About Me</h2>
          <p class="mt-4 text-lg text-gray-700">
            Hello! I'm Hansel, a passionate Web Developer with a strong interest
            in building interactive and user-friendly websites.
          </p>
        </div>
  
        <!-- Skills and Experience -->
        <div class="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Skills Section -->
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-2xl font-semibold text-blue-500">Skills</h3>
            <div class="mt-4 space-y-4">
              <!-- Skill 1 -->
              <div>
                <div class="flex justify-between text-gray-600">
                  <span>HTML & CSS</span>
                  <span>90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div class="bg-blue-500 h-3 rounded-full" style="width: 90%;"></div>
                </div>
              </div>
              <!-- Skill 2 -->
              <div>
                <div class="flex justify-between text-gray-600">
                  <span>Laravel</span>
                  <span>85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div class="bg-blue-500 h-3 rounded-full" style="width: 85%;"></div>
                </div>
              </div>
              <!-- Skill 3 -->
              <div>
                <div class="flex justify-between text-gray-600">
                  <span>Selenium</span>
                  <span>80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div class="bg-blue-500 h-3 rounded-full" style="width: 80%;"></div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Experience Section -->
          <div class="p-6 bg-white shadow-md rounded-lg">
            <h3 class="text-2xl font-semibold text-blue-500">Experience</h3>
            <ul class="mt-4 text-gray-700 space-y-4">
              <li>
                <span class="font-bold text-gray-800">IT Infra Developer Intern</span>
                <p class="text-sm text-gray-500">Feb 2023 - Jan 2024</p>
                <p class="text-gray-600">
                  Worked on Network engineering, Web Automation, and Data Center for PT Mayora Indah Tbk.
                </p>
              </li>
              <li>
                <span class="font-bold text-gray-800">Bachelor's Degree in Computer Science</span>
                <p class="text-sm text-gray-500">Bina Nusantara University (2021 - 2025)</p>
                <p class="text-gray-600">
                  Specialized in Database Technology, actively learning full-stack development.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  
      <!-- Projects Section -->
      <section id="projects" class="min-h-screen bg-gray-800 text-white py-10 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-blue-500">Projects</h2>
          <p class="mt-4 text-lg text-gray-300">
            Here are some of the projects I've worked on recently.
          </p>
        </div>
  
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
          <!-- Loop untuk menampilkan proyek -->
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            @click="openModal(project)"
          >
            <img :src="project.thumbnail" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-blue-400">{{ project.title }}</h3>
              <p class="text-gray-300 mt-2">{{ project.description }}</p>
            </div>
          </div>
        </div>
  
        <!-- Modal Popup -->
        <div
          v-if="showModal"
          class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div class="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative">
            <!-- Close Button -->
            <button
              class="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              @click="closeModal"
            >
              ✖
            </button>
  
            <!-- Modal Content -->
            <div class="p-6">
              <h3 class="text-2xl font-bold text-blue-500">{{ selectedProject.title }}</h3>
              <p class="text-gray-700 mt-2">{{ selectedProject.description }}</p>
              <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  v-for="(image, index) in selectedProject.images"
                  :key="index"
                  :src="image"
                  class="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- Contact Section -->
    <section id="contact" class="min-h-screen bg-gray-100 text-gray-800 py-10 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <!-- Kartun Laki-Laki -->
      <div class="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          class="w-64 h-64"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="32" cy="16" r="10" fill="#FFD700"></circle>
          <path
            d="M32 26c-9.94 0-18 7.82-18 17.5v9c0 3.57 5.22 6.5 18 6.5s18-2.93 18-6.5v-9C50 33.82 41.94 26 32 26z"
            fill="#FFD700"
          ></path>
          <path
            d="M18 48c0-7.73 4.03-13.5 14-13.5s14 5.77 14 13.5"
            fill="#F4A460"
          ></path>
        </svg>
      </div>

      <!-- Form Kontak -->
      <div>
        <h2 class="text-4xl font-bold text-blue-600 text-center md:text-left">Get In Touch</h2>
        <p class="text-gray-600 mt-4 text-center md:text-left">
          Feel free to reach out to me for collaborations or just a friendly chat. I’d love to hear from you!
        </p>

        <!-- Form dengan mailto -->
        <form @submit.prevent="sendEmail" class="mt-6 space-y-4">
          <!-- Input Nama -->
          <div>
            <label for="name" class="block text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              v-model="formData.name"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <!-- Input Email -->
          <div>
            <label for="email" class="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              v-model="formData.email"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <!-- Input Pesan -->
          <div>
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <!-- Tombol Kirim -->
          <div class="text-center md:text-left">
            <button
              type="submit"
              class="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 hover:shadow-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
      <!-- Footer -->
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from "../components/HeaderComponent.vue";
  import FooterComponent from "../components/FooterComponent.vue";
  import LelanginAja from "@/assets/LelanginAJa.png";
  import LelanginAja1 from "@/assets/lelanginaja (1).png";
  import LelanginAja2 from "@/assets/lelanginaja (2).png";
import DeviceManagement from "@/assets/DeviceManagement.png";
import DeviceManagement1 from "@/assets/DeviceManagement (1).png";
import DeviceManagement2 from "@/assets/DeviceManagement (2).png";
import DeviceManagement3 from "@/assets/DeviceManagement (3).png";
import DeviceManagement4 from "@/assets/DeviceManagement (4).png";
import DeviceManagement5 from "@/assets/DeviceManagement (5).png";
import DeviceManagement6 from "@/assets/DeviceManagement (6).png";
import DeviceManagement7 from "@/assets/DeviceManagement (7).png";
import DeviceManagement8 from "@/assets/DeviceManagement (8).png";
import CarDealer from "@/assets/CarDealer.png";
import CarDealer1 from "@/assets/CarDealer (1).png";
import CarDealer2 from "@/assets/CarDealer (2).png";
import CoffeeShop from "@/assets/CoffeeShop.png";
import CoffeeShop1 from "@/assets/CoffeeShop1.png";
import BookingLibrary from "@/assets/BookingLibrary.png";
import BookingLibrary1 from "@/assets/BookingLibrary1.png";
import DataMining from "@/assets/DataMining.png";
import DataMining1 from "@/assets/DataMining1.png";
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
    data() {
      return {
        formData: {
        name: "",
        email: "",
        message: "",
        },
        showModal: false,
        selectedProject: null,
        
        projects: [
          {
            title: "LelanginAja",
            description: "An online bid website for auctions.",
            thumbnail: LelanginAja,
            images: [LelanginAja, LelanginAja1, LelanginAja2],
          },
          {
            title: "Device Management",
            description: "Centralized device management solution.",
            thumbnail: DeviceManagement,
            images: [DeviceManagement, DeviceManagement1, DeviceManagement6, DeviceManagement8],
          },
          {
            title: "Car Dealer",
            description: "Front-end project for a car dealer website.",
            thumbnail: CarDealer,
            images: [CarDealer, CarDealer1, CarDealer2],
          },
          {
            title: "Coffee Shop",
            description: "System to manage coffee shop operations.",
            thumbnail: CoffeeShop,
            images: [CoffeeShop, CoffeeShop1],
          },
          {
            title: "Booking Library",
            description: "Online system for reserving and borrowing books.",
            thumbnail: BookingLibrary,
            images: [BookingLibrary, BookingLibrary1],
          },
          {
            title: "Data Mining",
            description: "Predicting data using regression and clustering.",
            thumbnail: DataMining,
            images: [DataMining, DataMining1], 
          },
        ],
      };
    },
    methods: {
      openModal(project) {
        this.selectedProject = project;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.selectedProject = null;
      },
      scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  },
  sendEmail() {
      const { name, email, message } = this.formData;
      const mailtoLink = `mailto:your_email@gmail.com?subject=Message from ${encodeURIComponent(
        name
      )}&body=Email: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    },
    },
  };
  </script>
  
  <style scoped>
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 10s ease infinite;
}
.fixed-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
  </style>
  
  
  




  