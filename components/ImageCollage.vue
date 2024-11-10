<template>
  <section class='bg-white py-10 md:py-16' ref='main'>
    <div class='container mx-auto'>
      <div class='mx-auto text-center'>
        <h2 class='text-purple-dark text-4xl md:text-5xl font-bold uppercase leading-tight mb-6' v-if="title">{{ title }}</h2>
        <p class='text-purple-dark text-2xl md:text-3xl leading-normal mb-4' v-if="subtitle">{{ subtitle }}</p>
        <p class='text-purple-dark text-md md:text-xl leading-normal'>{{ description }}</p>
      </div>
    </div>
    <FadeInTransition>
      <div class='bg-purple-dark collage-container mt-8 md:mt-16 px-4 w-full py-12 md:py-6'>
        <!-- Erste Reihe -->
        <div class='collage-row'>
          <div class='collage-left-side'>
            <img v-if="images[0]" :src='images[0].src' :alt='images[0].alt'
                 class='bg-white collage-left-side-item rounded-3xl object-cover'>
            <img v-if="images[1]" :src='images[1].src' :alt='images[1].alt'
                 class='bg-white collage-left-side-item-above sm:w-1/6 rounded-3xl object-cover'>
          </div>
          <div class='collage-right-side'>
            <img v-if="images[2]" :src='images[2].src' :alt='images[2].alt'
                 class='bg-white collage-right-side-item rounded-3xl object-cover'>
            <img v-if="images[3]" :src='images[3].src' :alt='images[3].alt'
                 class='bg-white collage-right-side-item-above sm:w-1/6 rounded-3xl object-cover'>
          </div>
        </div>

        <!-- Zweite Reihe (wird nur angezeigt, wenn mehr als 4 Bilder vorhanden sind) -->
        <div v-if="images.length > 4" class='collage-row second-row'>
          <div class='collage-left-side'>
            <img v-if="images[4]" :src='images[4].src' :alt='images[4].alt'
                 class='bg-white collage-left-side-item rounded-3xl object-cover'>
            <img v-if="images[5]" :src='images[5].src' :alt='images[5].alt'
                 class='bg-white collage-left-side-item-above sm:w-1/6 rounded-3xl object-cover'>
          </div>
          <div class='collage-right-side'>
            <img v-if="images[6]" :src='images[6].src' :alt='images[6].alt'
                 class='bg-white collage-right-side-item rounded-3xl object-cover'>
            <img v-if="images[7]" :src='images[7].src' :alt='images[7].alt'
                 class='bg-white collage-right-side-item-above sm:w-1/6 rounded-3xl object-cover'>
          </div>
        </div>
      </div>
    </FadeInTransition>
  </section>
</template>

<script setup lang='ts'>
interface ImageInfo {
  src: string;
  alt: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  description: string;
  images: ImageInfo[];
}

const props = defineProps<Props>();
</script>

<style scoped>
@media (min-width: 320px) {
  .collage-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

.collage-row {
    display: flex;
    flex-direction: column;
  }

  .collage-left-side-item-above {
    margin-top: 2rem;
  }

  .collage-right-side-item {
    margin-top: 2rem;
  }

  .collage-right-side-item-above {
    margin-top: 2rem;
  }
}

@media (min-width: 640px) {
  .collage-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .collage-left-side {
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .collage-right-side {
    position: relative;
    width: 100%;
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 20%;
  }

  .collage-left-side-item {
    width: 70%;
    margin-top: 20%;
    margin-right: -17%;
    flex: 0 auto;
  }

  .collage-left-side-item-above {
    flex: 1;
  }

  .collage-right-side-item {
    width: 70%;
    margin-left: auto;
    flex: 0 auto;
  }

  .collage-right-side-item-above {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 45%;
  }
}

.collage-left-side-item-above, .collage-right-side-item-above {
  z-index: 10;
}
</style>
