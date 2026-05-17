<script setup>
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans p-4 md:p-8 selection:bg-indigo-500 selection:text-white">

      <section class="mb-12 border-b border-slate-700 pb-8">
        <h1 class="text-4xl font-extrabold text-white mb-4">Über RetroStudiosVienna</h1>
        <p class="text-lg text-slate-300 leading-relaxed">
          Wir sind ein 3-köpfiges Indie-Studio aus dem Herzen von Wien. Unser Team besteht aus einem Lead Programmer, einem Pixel-Artist und einem Audio- & Web-Entwickler.
          <br><br>
          <strong>Unsere Philosophie:</strong> <em>„Wir bringen die goldene Ära des Gamings auf moderne Bildschirme.“</em>
        </p>
      </section>

      <!-- Aufgabe 3: Marken -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-indigo-400 mb-6">Unsere Markenidentität</h2>
        <p class="text-slate-300 mb-6">
          Um unser Spiel "Aether Quest" rechtlich abzusichern und einen hohen Wiedererkennungswert zu schaffen, haben wir drei spezifische Markenformen definiert:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Marke 1: Wortbildmarke -->
          <div class="bg-slate-700 p-6 rounded-lg border border-slate-600" >
            <h3 class="text-xl font-bold text-white mb-2">1. Wortbildmarke</h3>
            <div class="bg-slate-900 p-4 rounded mb-4 text-center font-black tracking-widest text-indigo-400 flex justify-center items-center gap-2" aria-hidden="true">
              <span aria-hidden="true" class="text-3xl">
                <img
                    src="/favicon.svg"
                    alt="red potion icon"
                    height="20"
                    width="20" />
              </span>
              AETHER QUEST
            </div>
            <p class="text-sm text-slate-300">
              <strong>Bedeutung:</strong> Die Kombination aus dem Titel und der Pixel-Potion repräsentiert unser Kernprodukt und kommuniziert sofort das Fantasy-Retro-Setting. Wir haben sichergestellt, dass die Wortwahl "Aether Quest" keine bestehenden Marken verletzt. Das Potion-Icon ist eine exklusive Eigenproduktion unseres Pixel-Artists.   
            </p>
          </div>

          <!-- Marke 2: Hörmarke -->
          <div class="bg-slate-700 p-6 rounded-lg border border-slate-600" >
            <h3 class="text-xl font-bold text-white mb-2">2. Hörmarke</h3>
            <div class="bg-slate-900 p-4 rounded mb-4 text-center">
              <span class="text-3xl" aria-hidden="true">🎵</span>
              <audio controls src="alert.wav" class="mt-4 w-full h-8 rounded-full outline-none focus:ring-2 focus:ring-yellow-400">
                Ihr Browser unterstützt das Audio-Element nicht. Alert-Sound konnte nicht abgespielt werden.
              </audio>
            </div>
            <p class="text-sm text-slate-300">
              <strong>Bedeutung:</strong> Ein eindeutiger Alert-Sound (8-Bit-Jingle) schafft eine akustische Wiedererkennung beim Starten des Spiels und ist als Hörmarke geschützt.
            </p>
          </div>

          <!-- Marke 3: Positionsmarke (statt redundanter Wortmarke) -->
          <div class="bg-slate-700 p-6 rounded-lg border border-slate-600" >
            <h3 class="text-xl font-bold text-white mb-2">3. Positionsmarke</h3>
            <div class="bg-slate-900 p-4 rounded mb-4 text-center relative h-24 flex items-center justify-center">
              <div class="w-16 h-16 bg-slate-800 border-2 border-indigo-400 rounded relative">
                 <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-slate-900"></div>
              </div>
            </div>
            <p class="text-sm text-slate-300">
              <strong>Bedeutung:</strong> Die Platzierung unseres "Golden Orb"-Icons in der oberen rechten Ecke aller physischen und digitalen Box-Arts dient als spezifische Positionsmarke.
            </p>
          </div>

        </div>
      </section>

      <!-- Marke 4: Farbmarke -->
      <section class="mb-12">
          <div class="bg-slate-700 p-6 rounded-lg border border-slate-600" >
            <h3 class="text-xl font-bold text-white mb-2">4. Farbmarke</h3>
            <div class="bg-[#3A4E7A] p-4 rounded mb-4 text-center border-2 border-slate-900 shadow-inner">
              <p class="text-white font-mono text-sm drop-shadow-md">Aether-Blau (#3A4E7A)</p>
            </div>
            <p class="text-sm text-slate-300">
              <strong>Bedeutung:</strong> Diese spezifische Farbnuance ("Aether-Blau") ist die geschützte Leitfarbe für all unsere UI-Elemente und Marketingmaterialien.
            </p>
          </div>
      </section>

      <!-- Nizza Einordnung -->
      <section class="bg-slate-900 p-6 rounded-lg border border-slate-700">
        <h2 class="text-2xl font-bold text-white mb-4">Markenrechtliche Einordnung</h2>

        <div class="mb-4">
          <h3 class="text-lg font-bold text-indigo-400">Nizza-Klassen:</h3>
          <ul class="list-disc list-inside text-slate-300 ml-2 mt-2 space-y-1">
            <li><strong>Klasse 9:</strong> Computerspielsoftware (herunterladbar)</li>
            <li><strong>Klasse 41:</strong> Unterhaltung; Bereitstellung von Online-Computerspielen</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold text-indigo-400">Markenrecherche & Schutz:</h3>
          <p class="text-slate-300 text-sm mt-2 leading-relaxed">
            Vor der Nutzung unserer Marken haben wir umfangreiche Recherchen in Datenbanken wie <strong>EUIPO eSearch</strong>, <strong>Madrid Monitor</strong> und <strong>TMview</strong> durchgeführt. Wir haben sichergestellt, dass keine Markenrechte Dritter verletzt werden. Dabei wurde explizit auf die Einzigartigkeit der Wortwahl ("Aether Quest"), der Bildwahl (spezifisches Pixel-Art), der Farbwahl (#3A4E7A), der Positionswahl (oben rechts) und der Formwahl (spezifische Potion-Silhouette) geachtet.
          </p>
        </div>
      </section>

  </div>
</template>