<template>
    <header class="flex justify-between items-center px-6 py-4 bg-black text-white fixed w-full z-10">
      <!-- Logo -->
      <div class="text-3xl font-bold tracking-wide">
        <span class="text-blue-500">My</span> Portfolio
      </div>
  
      <!-- Navigasi -->
      <nav class="flex gap-8">
        <a href="#home" class="hover:text-blue-500 transition duration-300">Home</a>
        <a href="#about" class="hover:text-blue-500 transition duration-300">About</a>
        <a href="#projects" class="hover:text-blue-500 transition duration-300">Projects</a>
        <a href="#contact" class="hover:text-blue-500 transition duration-300">Contact</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  
  
  