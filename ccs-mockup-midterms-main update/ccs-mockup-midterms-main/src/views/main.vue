<script setup>
import { ref } from 'vue'
import Home from '@/components/home.vue'
import Programs from '@/components/programs.vue'
import People from '@/components/people.vue'
import Partners from '@/components/partners.vue'
import Footer from '@/components/footer.vue'
import '@/assets/site.css'
import ccsLogo from '@/assets/cropped-CCS-Logov-new.png'

const menuOpen = ref(false)

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'People', href: '#people' },
  { label: 'Partners', href: '#partners' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#home" aria-label="CCS home" @click="closeMenu">
        <img class="brand-logo" :src="ccsLogo" alt="" />
        <span class="brand-copy">
          <strong>COLLEGE OF</strong>
          <span>COMPUTER STUDIES</span>
        </span>
      </a>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-navigation" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <a
          v-for="(item, index) in navigation"
          :key="item.href"
          :href="item.href"
          :class="{ 'nav-home': index === 0 }"
          @click="closeMenu"
        >{{ item.label }}</a>
        <a class="nav-cta" href="#programs" @click="closeMenu">Explore programs <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main>
      <Home />
      <Programs />
      <People />
      <Partners />
    </main>

    <Footer />
  </div>
</template>

<style>
.brand-logo {
  display: block;
  width: 42px;
  height: 42px;
  object-fit: contain;
  flex: 0 0 auto;
}
</style>
