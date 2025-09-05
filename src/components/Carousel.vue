<template>
  <div class="carousel-container">
    <button class="arrow prev" @click="prevSlide">❮</button>
    <div class="carousel-slide">
      <img 
        v-for="(image, imgIndex) in images" 
        :key="imgIndex" 
        :src="image" 
        :alt="'Evento ' + (imgIndex + 1)"
        :class="{ active: currentSlide === imgIndex }"
      >
    </div>
    <button class="arrow next" @click="nextSlide">❯</button>
    <div class="carousel-controls">
      <span 
        v-for="(image, dotIndex) in images" 
        :key="dotIndex" 
        class="dot" 
        :class="{ active: currentSlide === dotIndex }"
        @click="setSlide(dotIndex)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: Array,
    index: Number
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length
    },
    setSlide(index) {
      this.currentSlide = index
    }
  }
}
</script>

<style scoped>
/* Estilos do carousel */
</style>