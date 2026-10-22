<script setup>
import cssLogo from '@/assets/CSS_PNG-150x150.png'
import itsoLogo from '@/assets/ITSO-150x150.png'
import lissoLogo from '@/assets/LISSO-150x150.png'
import midasLogo from '@/assets/MIDAS_PNG-150x150.png'

const partners = [
  { logo: cssLogo, alt: 'Computer Science Society logo', name: 'CSS', note: 'Computer Science Society' },
  { logo: itsoLogo, alt: 'ITSO logo', name: 'ITSO', note: 'Information Technology Students Organization' },
  { logo: lissoLogo, alt: 'LISSO logo', name: 'LISSO', note: 'Library and Information Science Students Organization' },
  { logo: midasLogo, alt: 'MIDAS logo', name: 'MIDAS', note: 'Media and Interactive Design Arts Society' },
]
</script>

<template>
  <section id="partners" class="partners section-anchor">
    <div class="section-wrap">
      <div class="partners-layout">
        <div class="partners-copy">
          <p class="eyebrow eyebrow-dark"><span class="eyebrow-dot"></span> BETTER, TOGETHER</p>
          <h2>Connected<br />to <span>possibility.</span></h2>
          <p>
            Learning doesn't happen in a vacuum. We build bridges to industry, academic networks, and professional communities so ideas can travel further.
          </p>
          <span class="verification-note partner-note">Official external partner and membership information can be added here when confirmed by CCS.</span>
        </div>
        <div class="partner-list">
          <article v-for="partner in partners" :key="partner.name" class="partner-item">
            <span class="partner-mark"><img :src="partner.logo" :alt="partner.alt" /></span>
            <span class="partner-name"><strong>{{ partner.name }}</strong><small>{{ partner.note }}</small></span>
            <span class="partner-arrow" aria-hidden="true">↗</span>
          </article>
          <a class="partner-cta" href="#home">Start your journey <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.partner-mark {
  width: 56px;
  height: 56px;
  padding: 3px;
  overflow: hidden;
}

.partner-mark img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
