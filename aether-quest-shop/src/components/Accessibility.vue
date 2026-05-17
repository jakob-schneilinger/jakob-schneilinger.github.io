<script setup>
</script>

<template>
  <div class=" min-h-screen bg-slate-900 text-slate-100 font-sans p-4 md:p-8 selection:bg-indigo-500 selection:text-white">

    <!-- Einleitung -->
    <section class="border-b border-slate-700 pb-6  rounded-lg">
      <h1 class="text-4xl font-extrabold text-white mb-4">Erklärung zur Barrierefreiheit</h1>
      <p class="text-lg text-slate-300 leading-relaxed mb-4">
        Die RetroStudiosVienna GmbH fällt als Kleinstunternehmen gemäß dem österreichischen
        Barrierefreiheitsgesetz (BaFG) zur Umsetzung der Richtlinie (EU) 2019/882 unter die
        gesetzliche Ausnahme. <strong>Dennoch haben wir uns bewusst und freiwillig dazu
        entschieden</strong>, unseren Webshop für "Aether Quest" vollständig barrierefrei
        zugänglich zu machen und zu gestalten.
      </p>
      <p class="text-slate-300">
        Diese Erklärung wurde am 17. Mai 2026 erstellt. Derzeit sind uns keine Mängel oder nicht barrierefreien Inhalte auf unserer Website bekannt.
      </p>
    </section>

    <!-- Konformitätsstatus -->
    <section class=" rounded-lg" >
      <h2 class="text-2xl font-bold text-indigo-400 mb-4">1. Stand der Vereinbarkeit mit den Anforderungen</h2>
      <p class="text-slate-300 mb-4">
        Diese Website ist mit den <strong>Web Content Accessibility Guidelines (WCAG) 2.2 auf Konformitätsstufe AA</strong> vollständig vereinbar. Wir legen großen Wert auf eine inklusive Gestaltung, die sowohl visuell ansprechend als auch technisch für alle Nutzergruppen zugänglich ist.
      </p>
    </section>

    <!-- Umgesetzte Maßnahmen -->
    <section class="margin-bottom bg-slate-700 p-6 rounded-lg border border-slate-600  " >
      <h2 class="text-2xl font-bold text-white mb-4">2. Umgesetzte Maßnahmen</h2>
      <p class="text-slate-300 mb-4">Um die Barrierefreiheit zu gewährleisten, haben wir folgende Design- und Technik-Prinzipien konsistent auf der gesamten Website angewendet:</p>
      <ul class="list-disc list-inside text-slate-300 space-y-3 ml-2">
        <li><strong>Tastaturnavigation:</strong> Alle interaktiven Elemente (Links, Buttons, Formulare) sind vollständig per <code>TAB</code>-Taste bedienbar. Ein deutlicher gelber Fokus-Ring zeigt das aktuell ausgewählte Element an.</li>
        <li><strong>Kontrastverhältnisse:</strong> Das Farbschema (dunkles Slate-Grau mit hellem Text und Indigo-Akzenten) wurde so gewählt, dass die WCAG-Kontrastvorgaben (mindestens 4.5:1 für normalen Text) stets erfüllt oder übertroffen werden.</li>
        <li><strong>Semantisches HTML:</strong> Die Struktur der Seite baut auf klarem HTML (<code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>) auf, um Screenreadern die Navigation zu erleichtern.</li>
        <li><strong>ARIA-Attribute:</strong> Visuelle Elemente oder Icons, die keinen textlichen Kontext bieten, sind mit beschreibenden <code>aria-label</code>-Attributen ausgestattet oder via <code>aria-hidden="true"</code> für Screenreader unsichtbar gemacht, um Verwirrung zu vermeiden.</li>
      </ul>
    </section>

    <!-- Prüf-Tools -->
    <section class="margin-bottom bg-slate-900 p-6 rounded-lg border border-slate-700  " >
      <h2 class="text-2xl font-bold text-indigo-400 mb-4">3. Verwendete Prüf-Tools</h2>
      <p class="text-slate-300 mb-4">
        Um die Einhaltung der Richtlinien sicherzustellen, wurden während der Entwicklung folgende Tools zur automatisierten und manuellen Überprüfung eingesetzt:
      </p>
      <ul class="list-disc list-inside text-slate-300 space-y-2 ml-2">
        <li><strong>WAVE (Web Accessibility Evaluation Tool):</strong> Zur Überprüfung der semantischen Struktur und der Text-Kontrastwerte.</li>
        <li><strong>axe DevTools:</strong> Für tiefergehende Analysen der ARIA-Attribute und der DOM-Struktur im Browser.</li>
      </ul>
    </section>

    <!-- Feedback / Kontakt -->
    <section class=" rounded-lg" >
      <h2 class="text-2xl font-bold text-white mb-4">4. Feedback und Kontaktangaben</h2>
      <p class="text-slate-300 mb-4">
        Ihnen sind Mängel beim barrierefreien Zugang zu Inhalten auf unserer Website aufgefallen? Dann können Sie sich gerne bei uns melden. Bitte kontaktieren Sie uns unter:
      </p>
      <p class="text-slate-300">
        <strong>E-Mail:</strong> <a href="mailto:barrierefreiheit@retrostudiosvienna.at" class="text-indigo-400 hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-400">barrierefreiheit@retrostudiosvienna.at</a><br>
        <strong>Telefon:</strong> +43 1 234567890
      </p>
    </section>

    <!-- Durchsetzungsverfahren -->
    <section class="mt-8 pt-6 border-t border-slate-700 rounded-lg">
      <h2 class="text-2xl font-bold text-white mb-4">5. Durchsetzungsverfahren</h2>
      <p class="text-slate-300 mb-4 text-sm leading-relaxed">
        Sollten Sie auf Mitteilungen oder Anfragen zur Barrierefreiheit keine zufriedenstellende Antwort erhalten haben, können Sie sich an das <strong>Sozialministeriumservice</strong> wenden. Dieses bietet ein kostenloses Schlichtungsverfahren an, um Streitigkeiten im Sinne des Behindertengleichstellungsgesetzes außergerichtlich beizulegen.
      </p>
      <p class="text-slate-300 text-sm">
        <a href="https://www.sozialministeriumservice.at/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:underline underline focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Weitere Informationen zur Schlichtungsstelle beim Sozialministeriumservice
        </a>
      </p>
    </section>
  </div>
</template>

<style scoped>

.margin-bottom {
  margin-bottom: 1rem;
}

</style>