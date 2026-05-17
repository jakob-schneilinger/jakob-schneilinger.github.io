<script setup>
import { ref } from 'vue';

const images = [
  {
    src: '/desert-ruins-preview.png',
    alt: 'Vorschau der Wüstenruinen in Aether Quest'
  },
  {
    src: '/jungle-ruins-preview.png',
    alt: 'Vorschau der Dschungelruinen in Aether Quest'
  }
];

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">

      <section class="text-center max-w-4xl mx-auto mb-16 mt-8">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
          Die goldene Ära des Gamings kehrt zurück.
        </h1>
        <p class="text-xl text-slate-300 mb-10 leading-relaxed">
          Ein 16-Bit-Platformer für Speedrunner und Retro-Fans. Baue deine eigenen Level im Editor und erlebe 50 packende Story-Missionen in einer liebevoll gestalteten Pixel-Welt.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
              class="bg-slate-700 hover:bg-slate-600 border-2 border-slate-500 text-white px-8 py-3 rounded text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              aria-label="Kostenlose Demo-Version im Browser spielen"
          >
            Demo downloaden (Kostenlos)
          </button>
          <button
              class="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded text-lg font-bold focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
              aria-label="Vollversion für 19,99 Euro kaufen"
          >
            Kaufen (19,99€)
          </button>
        </div>
      </section>

    <section class="max-w-5xl mx-auto mb-16 px-4 w-full" aria-labelledby="screenshot-heading">
      <h2 id="screenshot-heading" class="sr-only">Spiel-Screenshots</h2>

      <div class="relative bg-slate-800 p-2 md:p-4 rounded-xl border-2 border-slate-700 shadow-2xl">
        <!-- Bild-Container -->
        <div class="relative aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center border border-slate-600">
          <img
              :src="images[currentIndex].src"
              :alt="images[currentIndex].alt"
              class="h-full object-cover transition-opacity duration-300"
          />
        </div>

        <button
            @click="prevImage"
            class="absolute left-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-700 text-white w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all z-10"
            aria-label="Vorheriges Bild anzeigen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
            @click="nextImage"
            class="absolute right-6 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-700 text-white w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all z-10"
            aria-label="Nächstes Bild anzeigen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            <span
                v-for="(img, idx) in images"
                :key="idx"
                :class="currentIndex === idx ? 'bg-indigo-500 scale-125' : 'bg-slate-400/70'"
                class="w-3 h-3 rounded-full transition-all duration-300 shadow-sm"
                aria-hidden="true"
            ></span>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
</style>