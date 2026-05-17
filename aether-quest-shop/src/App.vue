<script setup>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>
<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
    <nav-bar></nav-bar>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<style>
.router-link-active {
  color: #818cf8;
}

router-link {
  cursor: pointer;
  color: #818cf8;
}

button {
  cursor: pointer;
}
</style>
