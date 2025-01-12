<template>
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
  
      <!-- Section: Keterampilan -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Kartu 1 -->
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold text-blue-500">Skills</h3>
          <ul class="mt-4 text-gray-700 space-y-2">
            <li>🌟 HTML, CSS, JavaScript</li>
            <li>🌟 Vue.js, React</li>
            <li>🌟 Tailwind CSS</li>
            <li>🌟 Firebase & Backend Integration</li>
          </ul>
        </div>
  
        <!-- Kartu 2 -->
        <div class="p-6 bg-white shadow-md rounded-lg">
          <h3 class="text-2xl font-semibold text-blue-500">Experience</h3>
          <ul class="mt-4 text-gray-700 space-y-2">
            <li>🚀 Front-end Developer Intern at XYZ Company</li>
            <li>🚀 Freelance Web Developer (2 years)</li>
            <li>🚀 Built multiple responsive websites</li>
          </ul>
        </div>
      </div>
  
      <!-- Section: Kontak -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-semibold text-blue-600">Want to Work Together?</h3>
        <p class="mt-4 text-gray-700">
          Feel free to <a href="#contact" class="text-blue-500 hover:underline">contact me</a> for any project inquiries or collaboration opportunities.
        </p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutView",
  };
  </script>
  
  <style scoped>
  </style>
  