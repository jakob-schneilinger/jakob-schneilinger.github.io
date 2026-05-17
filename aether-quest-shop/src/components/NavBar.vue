<script setup>
</script>
<template>
  <header class="bg-slate-800 border-b-4 border-indigo-600 shadow-md">
  <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">

    <!-- Aufgabe 3: Wortbildmarke -->
    <router-link to="/" class="text-2xl font-black tracking-widest text-indigo-400 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-yellow-400 rounded p-1">
      <span aria-hidden="true" class="text-3xl">
        <img
          src="/favicon.svg"
          alt="red potion icon"
          height="40"
          width="40" />
      </span>
      <span>AETHER QUEST</span>
    </router-link>

    <nav class="flex gap-6 font-semibold text-slate-300">
      <router-link to="/" class="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1">Home</router-link>
      <router-link to="/ueber-uns" class="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1">Über Uns</router-link>
    </nav>

    <button
        class="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
        aria-label="Vollversion für 19,99 Euro kaufen"
    >
      Kaufen (19,99€)
    </button>
  </div>
  </header>
</template>

<style scoped>
</style>