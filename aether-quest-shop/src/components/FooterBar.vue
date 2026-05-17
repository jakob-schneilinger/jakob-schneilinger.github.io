<script setup>
</script>

<template>
  <footer class="bg-slate-950 py-8 border-t border-slate-800">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
      <p>© 2026 RetroStudiosVienna GmbH</p>

      <nav class="flex flex-wrap justify-center gap-4 md:gap-8">
        <router-link to="/lizenz" class="hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1">Lizenz</router-link>
        <router-link to="/impressum" class="hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1">Impressum & Kontakt</router-link>
        <router-link to="/datenschutz" class="hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1">Datenschutz</router-link>
        <router-link to="/barrierefreiheit" class="hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-1">Barrierefreiheit</router-link>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
</style>