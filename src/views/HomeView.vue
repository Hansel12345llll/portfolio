<template>
  <div>
    <!-- Header -->
    <HeaderComponent />

    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex flex-col justify-center items-center h-screen bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 animate-gradient-x"></div>
      <h1 class="text-6xl font-extrabold z-10">
        Hi, I'm <span class="text-blue-500">Hansel</span>.
      </h1>
      <p class="text-xl mt-4 z-10">Interactive Front-end Developer</p>
      <button
        class="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 hover:bg-purple-500 transition duration-300 z-10"
      >
        Learn More
      </button>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="min-h-screen bg-gray-100 text-gray-800 py-10 px-6"
    >
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-blue-600">About Me</h2>
        <p class="mt-4 text-lg text-gray-700">
          Hello! I'm Hansel, a passionate Web Developer with a strong interest
          in building interactive and user-friendly websites.
        </p>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold text-blue-500">Skills</h3>
          <ul class="mt-4 text-gray-700 space-y-2">
            <li>🌟 HTML, CSS, JavaScript</li>
            <li>🌟 Vue.js, React</li>
            <li>🌟 Tailwind CSS</li>
            <li>🌟 Firebase & Backend Integration</li>
          </ul>
        </div>

        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold text-blue-500">Experience</h3>
          <ul class="mt-4 text-gray-700 space-y-2">
            <li>🚀 Front-end Developer Intern at XYZ Company</li>
            <li>🚀 Freelance Web Developer (2 years)</li>
            <li>🚀 Built multiple responsive websites</li>
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
      <!-- Tambahkan daftar project Anda di sini -->
    </section>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>



