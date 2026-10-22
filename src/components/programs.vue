
<script setup>
import cssLogo from '@/assets/CSS_PNG-150x150.png'
import itsoLogo from '@/assets/ITSO-150x150.png'
import lissoLogo from '@/assets/LISSO-150x150.png'
import midasLogo from '@/assets/MIDAS_PNG-150x150.png'

const programs = [
  {
    code: 'BSIT',
    name: 'Information Technology',
    route: '/programs/bsit',
    logo: itsoLogo,
    description:
      'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
    icon: '01',
    color: 'mint',
    tags: ['Software development', 'Networks', 'IT solutions'],
  },
  {
    code: 'BSCS',
    name: 'Computer Science',
    route: '/programs/bscs',
    logo: cssLogo,
    description:
      'The Computer Science (CS) Program is designed for students who wants to study computing in depth, focusing in the software, the hardware.',
    icon: '02',
    color: 'lavender',
    tags: ['Algorithms', 'AI & data', 'Computing theory'],
  },
  {
    code: 'BSDMIA',
    name: 'Data Media and Interactive Arts',
    route: '/programs/bsdmia',
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
    route: '/programs/blis',
    logo: lissoLogo,
    description:
      'The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development',
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
          <p class="eyebrow eyebrow-dark">
            <span class="eyebrow-dot"></span>
            FIND YOUR FIELD
          </p>
          <h2>Big ideas start<br />with <span>what if.</span></h2>
        </div>

        <p class="section-intro">
          Four paths into the digital world. One place to turn your curiosity into a career.
        </p>
      </div>

      <div class="program-grid">
        <RouterLink
          v-for="program in programs"
          :key="program.code"
          :to="program.route"
          class="program-card"
          :class="`program-${program.color}`"
          :aria-label="`Explore ${program.name}`"
        >
          <div class="program-topline">
            <span class="program-index">
              {{ program.icon }} / PROGRAM
            </span>
            <span class="program-arrow" aria-hidden="true">↗</span>
          </div>

          <div class="program-logo">
            <img
              :src="program.logo"
              :alt="`${program.code} program logo`"
            />
          </div>

          <h3>{{ program.name }}</h3>

          <p>{{ program.description }}</p>

          <ul class="program-tags">
            <li v-for="tag in program.tags" :key="tag">
              {{ tag }}
            </li>
          </ul>

          <!-- Read More link-style label -->
          <span class="program-read-more">
            Read More
            <span aria-hidden="true">→</span>
          </span>
        </RouterLink>
      </div>

      <div class="program-note">
        <span class="note-icon">✳</span>
        <p>
          Not sure which way to go?
          <strong>Start with what excites you.</strong>
          The rest follows.
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.program-card {
  color: inherit;
  text-decoration: none;
}

.program-card:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

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

/* Read More styling */
.program-read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.2s ease;
}

.program-card:hover .program-read-more {
  gap: 14px;
}

.program-card:focus-visible .program-read-more {
  text-decoration: underline;
}
</style>
