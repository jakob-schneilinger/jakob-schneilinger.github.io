<script setup>
import { ref } from 'vue'

const formSubmitted = ref(false)

const submitContact = (event) => {
  event.preventDefault()
  formSubmitted.value = true
  setTimeout(() => {
    formSubmitted.value = false
    event.target.reset()
  }, 5000)
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans p-4 md:p-8 selection:bg-indigo-500 selection:text-white">

      <!-- Aufgabe 6: Kontaktformular -->
      <section class="bg-slate-800 p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600">
        <h1 class="text-3xl font-extrabold text-white mb-6">Kontaktieren Sie uns</h1>
        <p class="text-slate-300 mb-6">Haben Sie Fragen zu Aether Quest, Ihrer Lizenz oder ein technisches Problem? Schreiben Sie uns!</p>

        <form @submit="submitContact" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col">
              <label for="name" class="mb-1 text-sm font-semibold text-slate-400">Name / Nickname</label>
              <input type="text" id="name" required class="bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            </div>
            <div class="flex flex-col">
              <label for="email" class="mb-1 text-sm font-semibold text-slate-400">E-Mail-Adresse</label>
              <input type="email" id="email" required class="bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            </div>
          </div>

          <div class="flex flex-col">
            <label for="message" class="mb-1 text-sm font-semibold text-slate-400">Nachricht</label>
            <textarea id="message" rows="5" required class="bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
          </div>

          <button type="submit" class="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded font-bold shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all">
            Nachricht absenden
          </button>

          <div v-if="formSubmitted" class="mt-4 p-4 bg-green-900/50 border border-green-500 text-green-200 rounded" role="alert">
            Danke für Ihre Nachricht! Unser Team wird sich (simuliert) in Kürze melden.
          </div>
        </form>
      </section>

      <!-- Aufgabe 6: Impressum -->
      <section class="bg-slate-800 p-6 md:p-10 rounded-xl shadow-2xl border-t-4 border-slate-600">
        <h2 class="text-3xl font-extrabold text-white mb-6">Impressum</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">

          <div>
            <h3 class="text-lg font-bold text-indigo-400 mb-2">Angaben zum Unternehmen</h3>
            <p><strong>Firma:</strong> RetroStudiosVienna GmbH</p>
            <p><strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung</p>
            <p><strong>Unternehmensgegenstand:</strong> IT-Dienstleistungen, Entwicklung und Vertrieb von Software (Videospielen)</p>
            <br>
            <h3 class="text-lg font-bold text-indigo-400 mb-2">Sitz & Kontaktdaten</h3>
            <address class="not-italic">
              Musterstraße 123<br>
              1010 Wien<br>
              Österreich<br><br>
              <strong>Tel:</strong> +43 1 234567890<br>
              <strong>E-Mail:</strong> <a href="mailto:support@retrostudiosvienna.at" class="text-indigo-400 hover:underline underline focus:outline-none focus:ring-2 focus:ring-yellow-400">support@retrostudiosvienna.at</a>
            </address>
          </div>

          <div>
            <h3 class="text-lg font-bold text-indigo-400 mb-2">Registerangaben</h3>
            <p><strong>Firmenbuchnummer:</strong> FN 123456 x</p>
            <p><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
            <p><strong>UID-Nummer:</strong> ATU12345678</p>
            <p><strong>GISA-Zahl:</strong> 12345678</p>
            <br>
            <h3 class="text-lg font-bold text-indigo-400 mb-2">Aufsichtsbehörde & Mitgliedschaften</h3>
            <p><strong>Mitgliedschaft:</strong> WKO (Wirtschaftskammer Österreich), Fachgruppe UBIT</p>
            <p><strong>Gewerbebehörde:</strong> Magistratisches Bezirksamt des I. Bezirkes</p>
            <p><strong>Gewerberechtliche Geschäftsführung:</strong> Max Mustermann</p>
            <p><strong>Anwendbare Rechtsvorschriften:</strong> Gewerbeordnung (GewO), E-Commerce-Gesetz (ECG), Mediengesetz (MedienG), Unternehmensgesetzbuch (UGB) (abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline underline focus:outline-none focus:ring-2 focus:ring-yellow-400">ris.bka.gv.at</a>)</p>
          </div>
        </div>

        <hr class="border-slate-700 my-6">

        <div>
          <h3 class="text-lg font-bold text-indigo-400 mb-2">Offenlegungspflicht gem. § 25 Mediengesetz und Angaben nach § 24 Mediengesetz</h3>
          <p class="text-slate-300 text-sm">
            <strong>Medieninhaber und Herausgeber:</strong> RetroStudiosVienna GmbH (Adresse wie oben).<br>
            <strong>Geschäftsführer:</strong> Max Mustermann.<br>
            <strong>Gesellschafter:</strong> Max Mustermann (100%).<br>
            <strong>Blattlinie:</strong> Diese Website dient der Präsentation, der Information über und dem Vertrieb von eigenen Softwareprodukten, insbesondere des Indie-Videospiels "Aether Quest".
          </p>
        </div>

      </section>

  </div>
</template>