<script setup>
import cssLogo from '@/assets/CSS_PNG-150x150.png'
import itsoLogo from '@/assets/ITSO-150x150.png'
import lissoLogo from '@/assets/LISSO-150x150.png'
import midasLogo from '@/assets/MIDAS_PNG-150x150.png'

const programs = [
  {
    code: 'BSIT',
    name: 'Information Technology',
    logo: itsoLogo,
    description:
      'Build the skills to design, develop, and manage technology that helps people and organizations thrive.',
    icon: '01',
    color: 'mint',
    tags: ['Software development', 'Networks', 'IT solutions'],
  },
  {
    code: 'BSCS',
    name: 'Computer Science',
    logo: cssLogo,
    description:
      'Explore the science behind computing and create intelligent, efficient solutions to complex problems.',
    icon: '02',
    color: 'lavender',
    tags: ['Algorithms', 'AI & data', 'Computing theory'],
  },
  {
    code: 'BSDMIA',
    name: 'Data Media and Interactive Arts',
    logo: midasLogo,
    description:
      'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
    icon: '03',
    color: 'peach',
    tags: ['Arts', '3D Design', 'UI'],
  },
  {
    code: 'BLIS',
    name: 'Library and Information Science',
    logo: lissoLogo,
    description:
      'Organize, preserve, and connect people with information in a changing digital world.',
    icon: '04',
    color: 'butter',
    tags: ['Digital libraries', 'Information services', 'Archiving'],
  },
]
</script>

<template>
  <section id="programs" class="programs section-anchor">
    <div class="section-wrap">
      <div class="section-heading">
        <div>
          <p class="eyebrow eyebrow-dark"><span class="eyebrow-dot"></span> FIND YOUR FIELD</p>
          <h2>Big ideas start<br />with <span>what if.</span></h2>
        </div>
        <p class="section-intro">
          Four paths into the digital world. One place to turn your curiosity into a career.
        </p>
      </div>
      <div class="program-grid">
        <article
          v-for="program in programs"
          :key="program.code"
          class="program-card"
          :class="`program-${program.color}`"
        >
          <div class="program-topline">
            <span class="program-index">{{ program.icon }} / PROGRAM</span>
            <span class="program-arrow" aria-hidden="true">↗</span>
          </div>
          <div class="program-logo">
            <img :src="program.logo" :alt="`${program.code} program logo`" />
          </div>
          <h3>{{ program.name }}</h3>
          <p>{{ program.description }}</p>
          <ul class="program-tags">
            <li v-for="tag in program.tags" :key="tag">{{ tag }}</li>
          </ul>
        </article>
      </div>
      <div class="program-note">
        <span class="note-icon">✳</span>
        <p>Not sure which way to go? <strong>Start with what excites you.</strong> The rest follows.</p>
        <a href="#people" aria-label="Meet our people">Meet our people <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
</template>

<style>
.program-logo {
  overflow: hidden;
  border: 0;
  border-radius: 0;
}

.program-logo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
