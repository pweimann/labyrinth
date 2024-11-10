<template>
  <div class="overflow-x-hidden w-full">
    <section>
      <div class='hero-placeholder sm:text-1xl'>
        <h1>Hello Stranger, scroll down</h1>
      </div>
    </section>
    <FadeInTransition>
      <div class='container mx-auto md:px-4'>
        <div class='md:w-3/4 mx-auto text-center'>
          <h2 class='text-purple-dark text-4xl md:text-5xl font-bold uppercase leading-tight mb-6'>Labyrinth</h2>
          <p class='text-purple-dark text-md md:text-xl leading-normal'>Der Entwurf des Labyrinths vereint Architektur,
            Kunst, Emotionen und Technologie. Es entsteht nicht nur ein physischer Raum, sondern ein Erlebnis, das die
            Wahrnehmung und Interaktion der Nutzer auf völlig neue Weise fordert und erweitert. Durch die Integration
            moderner Medien erlangt es eine neue Dimension als dynamischer, interaktiver Raum und die Grenzen zwischen
            Realität und Virtualität verschwimmen auf spannende Weise.</p>
        </div>
      </div>
      <MarqueeLabel class='mt-8 -mb-10' :label='firstLabel'/>
    </FadeInTransition>
    <FadeInTransition>
      <div class='container mx-auto md:px-4 mt-20'>
        <nuxt-img class="mb-16 w-full" src='/ModuleRöhre.png'/>
      </div>
    </FadeInTransition>
    <FadeInTransition>
      <div class='container mx-auto md:px-4'>
        <nuxt-img class="scale-150 md:scale-100 mb-28" src='/MaßeRöhrePräsi_Webite.svg'/>
      </div>
    </FadeInTransition>
    <FadeInTransition>
      <div class='container mx-auto md:px-4'>
        <nuxt-img class="scale-175 md:scale-100" src='/CollageMaterial.png'/>
      </div>
    </FadeInTransition>
    <ImageCarousel-2
        class="mt-28"
        :images="carouselImages"
        :autoplay="false"
        :interval="4000"/>
    <TabSection :tabs-nav-list='tabsNavList' title='Grundrisse'/>
    <ImageCollage
        title="VERTICAL ABODE"
        subtitle="ist zeitlos und warm"
        description="Das vertical Village ist modern und konzentriert sich auf den Nutzen des Raumes. Es schafft eine vertikale Gemeinschaft in einem dichter besiedelten Bereich in Berlin Kreuzberg. Das zentrale Atrium kreiert eine offene, lichtdurchflutete und grüne Insel als Zentrum der Gemeinschaft."
        :images="[
          {
            src: '/renderings/AnsichtEingang.svg',
            alt: 'Rendering 1'
          },
          {
            src: '/renderings/SchnittA-A.svg',
            alt: 'Rendering 2'
          },
          {
            src: '/renderings/SchnittB-B.svg',
            alt: 'Rendering 3'
          }
        ]"
    />
    <FadeInTransition>
      <div class='container mx-auto md:px-4'>
        <nuxt-img src='/Pikto Iso A4.svg'/>
      </div>
    </FadeInTransition>
    <FadeInTransition>
      <div class='container mx-auto md:px-4'>
        <nuxt-img src='/ISO vollständig.svg'/>
      </div>
    </FadeInTransition>
    <ImageCollage
        title="VERTICAL ABODE"
        subtitle="ist zeitlos und warm"
        description="Das vertical Village ist modern und konzentriert sich auf den Nutzen des Raumes. Es schafft eine vertikale Gemeinschaft in einem dichter besiedelten Bereich in Berlin Kreuzberg. Das zentrale Atrium kreiert eine offene, lichtdurchflutete und grüne Insel als Zentrum der Gemeinschaft."
        :images="[
          {
            src: '/collage/Collage LV 1 ohne Hintergrund.png',
            alt: 'Rendering 1'
          },
          {
            src: '/collage/Collage LV 2 ohne Hintergrund.png',
            alt: 'Rendering 2'
          },
          {
            src: '/collage/Collage LV 3 ohne Hintergrund.png',
            alt: 'Rendering 3'
          },
          {
            src: '/collage/Collage LV 4 ohne Hintergrund.png',
            alt: 'Rendering 4'
          },
          {
            src: '/collage/Collage LV 5 ohne Hintergrund.png',
            alt: 'Rendering 5'
          },
          {
            src: '/collage/Collage LV 6 ohne Hintergrund.png',
            alt: 'Rendering 6'
          },
          {
            src: '/collage/Collage LV 7 ohne Hintergrund.png',
            alt: 'Rendering 7'
          },
          {
            src: '/collage/Collage LV 8 ohne Hintergrund.png',
            alt: 'Rendering 8'
          }
        ]"
    />
  </div>
</template>
<script lang='ts' setup>
import MarqueeLabel from '~/components/MarqueeLabel.vue'
import {ref, Ref} from 'vue'
import type {TabNavItem} from '~/types/tab-nav-item'
import ImageSlider from '~/components/ImageSlider.vue'
import Impressum from '~/pages/impressum.vue'

// Bilder für das Carousel
const carouselImages = ref([
  '/ImageCarusel/Form 1 WEB.svg',
  '/ImageCarusel/Form 2 WEB.svg',
  '/ImageCarusel/Form 3 WEB.svg',
  '/ImageCarusel/Form 4 WEB.svg',
  '/ImageCarusel/Form 5 WEB.svg',
  '/ImageCarusel/Form 6 WEB.svg',
  '/ImageCarusel/Form 7 WEB.svg',
  '/ImageCarusel/Form 8 WEB.svg',

])

const tabsNavList: Ref<TabNavItem[]> = ref([
  {
    title: 'Grundriss LV 1',
    imageSrc: '/tabs/GR 1.svg',
    description: '<span class="font-bold">Urvertrauen vs. Urmisstrauen</span><br>\n' +
        '\t(Säuglingsalter, 0-1 Jahr)\n' +
        '<br> <br>' +
        '\tAufgabe: Entwicklung von Vertrauen in die Umwelt und die Betreuungspersonen.'
  },
  {
    title: 'Grundriss LV 2',
    imageSrc: '/tabs/GR 2.svg',
    description: '<span class="font-bold">Autonomie vs. Scham + Zweifel</span><br>\n' +
        '\t(frühes Kleinkindalter, 1-3 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Erlernen von Autonomie und Selbstkontrolle, ohne Scham oder Zweifel an den eigenen Fähigkeiten zu entwickeln.'
  },
  {
    title: 'Grundriss LV 3',
    imageSrc: '/tabs/GR 3.svg',
    description: '<span class="font-bold">Initiative vs. \tSchuldgefühl</span><br>\n' +
        '\t (Kindergartenalter, 3-6 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Entwicklung von Initiative und Fähigkeit, Ziele zu setzen, ohne dabei ein übermäßiges Schuldgefühl zu empfinden.'
  },
  {
    title: 'Grundriss LV 4',
    imageSrc: '/tabs/GR 4.svg',
    description: '<span class="font-bold">Fleiß vs. Minderwertigkeitsgefühl</span><br>\n' +
        '\t(Grundschulalter, 6-12 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Entwicklung von Fähigkeiten und Kompetenzen, um ein Gefühl der Kompetenz und Fleiß zu fördern.'
  },
  {
    title: 'Grundriss LV 5',
    imageSrc: '/tabs/GR 5.svg',
    description: '<span class="font-bold">Identität vs. Identitätsdiffusion</span><br> \n' +
        '\t(Jugendalter, 12-18 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Herausforderung der Identitätsbildung und Integration verschiedener Rollen.'
  },
  {
    title: 'Grundriss LV 6',
    imageSrc: '/tabs/GR 6.svg',
    description: '<span class="font-bold">Intimität vs. Isolation</span><br> \n' +
        '\t(frühes Erwachsenenalter, 18-40 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Aufbau intimer Beziehungen und Bindungen zu anderen Menschen.'
  },
  {
    title: 'Grundriss LV 7',
    imageSrc: '/tabs/GR 7.svg',
    description: '<span class="font-bold">Generativität vs. Stagnation</span><br> \n' +
        '\t(mittleres Erwachsenenalter, 40-65 Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Beitrag zur Gesellschaft und Schaffung von etwas, das über die eigene Person hinausgeht.'
  },
  {
    title: 'Grundriss LV 8',
    imageSrc: '/tabs/GR 8.svg',
    description: '<span class="font-bold">Ich-Integrität vs. Verzweiflung</span><br> \n' +
        '\t(spätes Erwachsenenalter, 65+ Jahre)\n' +
        '<br> <br>' +
        '\tAufgabe: Akzeptanz des eigenen Lebens und der eigenen Erfahrungen, ohne Verzweiflung über verpasste Chancen.'
  }
])


const firstLabel = 'find the <strong>exit</strong> +++ one earth - one labryrinth +++&nbsp;\n'
const secondLabel = 'wer das liest <strong>bleibt</strong> +++ dumm +++&nbsp;\n'
</script>
<style lang='css'>
.hero-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
