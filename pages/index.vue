<template>
  <section>
    <div class='hero-placeholder sm:text-1xl'>
      <h1>Hello stranger, scroll down</h1>
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
    <div class='container mx-auto md:px-4'>
      <nuxt-img class="scale-125 mb-16" src='/PiktoModulareBauweise.svg'/>
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
  <section>
    <FadeInTransition>
      <nuxt-img src='/3D-Schnitt.jpg' class='w-full mt-10'/>
    </FadeInTransition>
  </section>
  <ImageSlider/>
  <ImageCollage></ImageCollage>
  <MarqueeLabel class='my-16' :label='secondLabel'/>
  <BackgroundImageSection/>
  <TabSection :tabs-nav-list='saveOurPlanetList' title='Materialkreislauf' reverse invert/>
  <footer class='w-full flex align-center justify-center text-white text-xs bg-purple-dark sm:py-2'>
    <NuxtLink to='/impressum'>Impressum</NuxtLink>
  </footer>
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
    title: 'Level 1',
    imageSrc: '/tabs/GR 1.svg',
    description: 'Ein integrierter Freizeitbereich, der sich auf Sport, Fitness und Entspannung konzentriert, ist ebenfalls ein wichtiger Bestandteil des Gebäudes. Zugleich bietet das Gebäude auch Raum für Entspannung und Yoga. Außerdem gibt es kreative Freiräume, in denen Bewohner und Be- sucher ihre Kreativität und ihr handwerkliches Können ausleben können. Diese Räume können für eine Vielzahl von Aktivitäten genutzt werden, von Kunst- bis hin zu DIY-Projekten.'
  },
  {
    title: 'Level 2',
    imageSrc: '/tabs/GR 2.svg',
    description: 'Die Arbeitsflächen sind individuell anpassbar und können für eine Vielzahl von Geschäftsbedürfnissen genutzt werden, von Co-Working-Räumen bis hin zu kleinen Büros und Atelierflächen.'
  },
  {
    title: 'Level 3',
    imageSrc: '/tabs/GR 3.svg',
    description: 'Jede Wohnung verfügt über eine offene und helle Grundfläche mit hohen Decken, um maximale Bewegungsfreiheit und Licht zu bieten. Zusätzlich bieten Balkone, Loggien und Auskragungen eine Erhöhung der Wohnqualität und ermöglichen eine nahtlose Verbindung vom Innen- und Außenraum.'
  },
  {
    title: 'Level 4',
    imageSrc: '/tabs/GR 4.svg',
    description: 'Das lichtdurchflutete Atrium fungiert als grüne Lunge des Gebäudes. Als Zentrum dient es der Begegnung zwischen Besucher und Bewohner und lässt die verschiedenen Nutzungen innerhalb des Gebäudes miteinander verschmelzen. Die Treppe im Erdgeschoss lädt zum verweilen, beobachten und als Treffpunkt ein.'
  },
  {
    title: 'Level 5',
    imageSrc: '/tabs/GR 5.svg',
    description: 'Durch eine Tiefgarage mit abgetrennten Car-Sharing Plätzen und integrierten E-Ladesäulen wird ein großer Beitrag zur Mobilitätswende geleistet. Der im Erdgeschoss verortete, abschließbare Fahrradraum mit Umkleiden und Duschen unterstützt die Wahl des Verkehrsmittels hin zum Fahrrad oder E-Bike und ermöglicht sichere und trockene Parkflächen hierfür. '
  },
  {
    title: 'Level 6',
    imageSrc: '/tabs/GR 6.svg',
    description: 'Durch eine Tiefgarage mit abgetrennten Car-Sharing Plätzen und integrierten E-Ladesäulen wird ein großer Beitrag zur Mobilitätswende geleistet. Der im Erdgeschoss verortete, abschließbare Fahrradraum mit Umkleiden und Duschen unterstützt die Wahl des Verkehrsmittels hin zum Fahrrad oder E-Bike und ermöglicht sichere und trockene Parkflächen hierfür. '
  },
  {
    title: 'Level 7',
    imageSrc: '/tabs/GR 7.svg',
    description: 'Durch eine Tiefgarage mit abgetrennten Car-Sharing Plätzen und integrierten E-Ladesäulen wird ein großer Beitrag zur Mobilitätswende geleistet. Der im Erdgeschoss verortete, abschließbare Fahrradraum mit Umkleiden und Duschen unterstützt die Wahl des Verkehrsmittels hin zum Fahrrad oder E-Bike und ermöglicht sichere und trockene Parkflächen hierfür. '
  },
  {
    title: 'Level 8',
    imageSrc: '/tabs/GR 8.svg',
    description: 'Durch eine Tiefgarage mit abgetrennten Car-Sharing Plätzen und integrierten E-Ladesäulen wird ein großer Beitrag zur Mobilitätswende geleistet. Der im Erdgeschoss verortete, abschließbare Fahrradraum mit Umkleiden und Duschen unterstützt die Wahl des Verkehrsmittels hin zum Fahrrad oder E-Bike und ermöglicht sichere und trockene Parkflächen hierfür. '
  }
])

const saveOurPlanetList: Ref<TabNavItem[]> = ref([
  {
    title: 'Save',
    imageSrc: '/tabs/Recycle.png',
    description: ''
  },
  {
    title: 'Our',
    imageSrc: '/tabs/ReUse.png',
    description: ''
  },
  {
    title: 'Planet',
    imageSrc: '/tabs/Reduce_neu.png',
    description: ''
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
