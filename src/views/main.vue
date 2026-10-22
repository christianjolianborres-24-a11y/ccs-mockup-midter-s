```vue
<script setup>
import { ref } from 'vue'
import Home from '@/components/home.vue'
import Programs from '@/components/programs.vue'
import Partners from '@/components/partners.vue'
import Footer from '@/components/footer.vue'
import '@/assets/site.css'
import ccsLogo from '@/assets/cropped-CCS-Logov-new.png'

const menuOpen = ref(false)

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Partners', href: '#partners' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <a
        class="brand"
        href="#home"
        aria-label="College of Computer Studies home"
        @click="closeMenu"
      >
        <img
          class="brand-logo"
          :src="ccsLogo"
          alt="CCS Logo"
        />

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
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        class="main-navigation"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <a
          v-for="(item, index) in navigation"
          :key="item.href"
          :href="item.href"
          :class="{ 'nav-home': index === 0 }"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
      </nav>
    </header>

    <main>
      <Home />
      <Programs />
      <Partners />
    </main>

    <Footer />
  </div>
</template>

<style>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 16px clamp(20px, 5vw, 72px);
  background: rgba(108, 185, 101, 0.96);
  border-bottom: 1px solid #rgba;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex: 0 0 auto;
  color: #212121;
  text-decoration: none;
}

.brand-logo {
  display: block;
  width: 46px;
  height: 46px;
  object-fit: contain;
  flex: 0 0 auto;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.brand-copy strong {
  font-size: 11px;
  font-weight: 700;
  color: #777;
  letter-spacing: 1.5px;
}

.brand-copy span {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.7px;
}

.main-navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.main-navigation a {
  position: relative;
  padding: 10px 16px;
  border-radius: 8px;
  color: #555;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.main-navigation a:hover {
  color: #1e2a56;
  background: #bbc1ca;
}

.main-navigation a.nav-home {
  color: #1e2a56;
  background: #edf3fb;
}

.menu-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  width: 42px;
  height: 42px;
  padding: 0;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: #1e2a56;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.menu-toggle[aria-expanded='true'] span:first-child {
  transform: translateY(4px) rotate(45deg);
}

.menu-toggle[aria-expanded='true'] span:last-child {
  transform: translateY(-4px) rotate(-45deg);
}

@media (max-width: 700px) {
  .site-header {
    gap: 16px;
    padding: 12px 20px;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
  }

  .brand-copy strong {
    font-size: 10px;
  }

  .brand-copy span {
    font-size: 12px;
  }

  .menu-toggle {
    display: flex;
    flex: 0 0 auto;
  }

  .main-navigation {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    display: none;
    align-items: stretch;
    flex-direction: column;
    gap: 4px;
    padding: 12px 20px 18px;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
  }

  .main-navigation.is-open {
    display: flex;
  }

  .main-navigation a {
    padding: 13px 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-navigation a,
  .menu-toggle span {
    transition: none;
  }
}
</style>
```