
<script setup>
import warriorsLogo from '@/assets/Warriors-Logo-2.png'
</script>

<template>
  <section id="home" class="hero section-anchor">
    <div class="hero-grid" aria-hidden="true"></div>

    <div class="hero-copy">
      <h1>Welcome to<br /><span>CCS.</span></h1>

      <p class="hero-description">
        The College of Computer Studies prepares students for the digital
        future through quality education in computing and technology.
        Discover opportunities to develop your skills, solve real-world
        problems, and create innovative technology solutions.
      </p>

      <div class="hero-actions">
        <a class="button button-primary" href="#programs">
          Explore our programs
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="hero-footnote">
        <span class="hero-footnote-rule"></span>
        <span>Ideas welcome. Potential unlimited.</span>
      </div>
    </div>

    <!-- Warriors Logo -->
    <div class="hero-art">
      <img
        :src="warriorsLogo"
        alt="College of Computer Studies Warriors Logo"
        class="warriors-logo"
      />
    </div>


    <a class="scroll-cue" href="#programs">
      <span></span> SCROLL TO EXPLORE
    </a>
  </section>
</template>

<style scoped>
.hero-art {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 400px;
}

.warriors-logo {
  display: block;
  width: 100%;
  max-width:800px;
  height: auto;
  object-fit: contain;
  transform: translate(200px, -20px);
}

@media (max-width: 768px) {
  .hero-art {
    min-height: 280px;
  }

  .warriors-logo {
    max-width: 320px;
  }
}
</style>
