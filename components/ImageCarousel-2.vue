<!-- components/ImageCarousel.vue -->
<!-- components/ImageCarousel.vue -->
<template>
  <div
      class="relative w-full overflow-hidden bg-white"
      :style="{ height: carouselHeight }"
  >
    <!-- Carousel Container -->
    <div ref="carouselContainer" class="relative w-full h-full flex items-center justify-center">
      <div
          v-for="(image, index) in images"
          :key="index"
          :ref="el => slideRefs[index] = el"
          class="absolute opacity-0 w-64 h-64"
      >
        <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="w-full h-full object-contain"
        />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-20"> <!-- Erhöhter gap-Wert -->
      <button
          @click="prevSlide"
          class="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors w-10 h-10 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
          @click="nextSlide"
          class="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors w-10 h-10 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Dots Navigation -->
    <div class="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
      <button
          v-for="(_, index) in images"
          :key="index"
          @click="goToSlide(index)"
          :class="[
          'w-3 h-3 rounded-full transition-colors',
          currentIndex === index ? 'bg-black' : 'bg-black/50 hover:bg-black/70'
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
import gsap from 'gsap'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  },
  height: {
    type: [String, Number],
    default: '400px' // Reduzierte Standardhöhe
  },
  imageSize: {
    type: [String, Number],
    default: '256' // Größe der SVGs in Pixeln
  }
})

// Computed
const carouselHeight = computed(() => {
  if (typeof props.height === 'number') {
    return `${props.height}px`
  }
  return props.height
})

// Refs
const carouselContainer = ref(null)
const slideRefs = ref([])
const currentIndex = ref(0)
let autoplayInterval = null

// Methods
const animateSlide = (fromIndex, toIndex) => {
  // Fade out mit zusätzlicher Scale-Animation
  gsap.to(slideRefs.value[fromIndex], {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    ease: 'power2.inOut'
  })

  // Fade in mit Scale-Animation
  gsap.to(slideRefs.value[toIndex], {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
}

const nextSlide = () => {
  const fromIndex = currentIndex.value
  currentIndex.value = (currentIndex.value + 1) % props.images.length
  animateSlide(fromIndex, currentIndex.value)
}

const prevSlide = () => {
  const fromIndex = currentIndex.value
  currentIndex.value = currentIndex.value === 0
      ? props.images.length - 1
      : currentIndex.value - 1
  animateSlide(fromIndex, currentIndex.value)
}

const goToSlide = (index) => {
  if (index === currentIndex.value) return
  const fromIndex = currentIndex.value
  currentIndex.value = index
  animateSlide(fromIndex, currentIndex.value)
}

// Lifecycle hooks
onMounted(() => {
  // Initial state
  gsap.set(slideRefs.value[0], {
    opacity: 1,
    scale: 1
  })

  // Set initial scale for other slides
  slideRefs.value.forEach((slide, index) => {
    if (index !== 0) {
      gsap.set(slide, {
        opacity: 0,
        scale: 0.8
      })
    }
  })

  if (props.autoplay) {
    autoplayInterval = setInterval(nextSlide, props.interval)
  }
})

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>
