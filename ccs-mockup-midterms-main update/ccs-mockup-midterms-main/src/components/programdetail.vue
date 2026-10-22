
<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  program: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="program-page" :class="`theme-${program.theme}`">
    <header class="navbar">
      <RouterLink to="/" class="back-link">
        ← CCS Home
      </RouterLink>
      <span>COLLEGE OF COMPUTER STUDIES</span>
    </header>

    <main>
      <section class="hero">
        <div class="program-icon">{{ program.icon }}</div>

        <p class="eyebrow">
          {{ program.code }} · UNDERGRADUATE PROGRAM
        </p>

        <h1>{{ program.title }}</h1>
        <p class="intro">{{ program.intro }}</p>

        <a href="#overview" class="button">
          Explore the program ↓
        </a>
      </section>

      <section id="overview" class="section">
        <p class="label">01 / THE PROGRAM</p>
        <h2>Program Overview</h2>
        <p>{{ program.overview }}</p>
      </section>

      <section class="section tinted">
        <p class="label">02 / YOUR LEARNING</p>
        <h2>What You Will Learn</h2>

        <ul class="learning-list">
          <li v-for="item in program.learning" :key="item">
            <span>✓</span> {{ item }}
          </li>
        </ul>
      </section>

      <section class="section">
        <p class="label">03 / YOUR FUTURE</p>
        <h2>Career Opportunities</h2>

        <div class="careers">
          <span v-for="career in program.careers" :key="career">
            {{ career }}
          </span>
        </div>
      </section>

      <section class="section why-grid">
        <div>
          <p class="label">04 / WHY THIS PROGRAM</p>
          <h2>Why Choose {{ program.code }}?</h2>
          <p>{{ program.why }}</p>
        </div>

        <div class="enroll-card">
          <span class="small-icon">◎</span>
          <h3>Who Should Enroll?</h3>
          <p>{{ program.who }}</p>
        </div>
      </section>

      <section class="section notice">
        <p class="label">PLEASE NOTE</p>
        <h2>Curriculum and Facilities</h2>
        <p>{{ program.verification }}</p>
      </section>
    </main>

    <footer class="footer">
      <span>CCS · {{ program.code }}</span>
      <RouterLink to="/">Return to Home ↑</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
.program-page {
  --accent: #b9dc75;
  --accent-ink: #203b2d;

  min-height: 100vh;
  background: #f4f3ec;
  color: #18332f;
  font-family: Arial, Helvetica, sans-serif;
}

.theme-bscs {
  --accent: #c9baf5;
  --accent-ink: #30254d;
}

.navbar,
.footer {
  padding: 22px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.navbar {
  border-bottom: 1px solid #ddddcf;
  font-size: 12px;
  font-weight: bold;
}

.back-link,
.footer a {
  text-decoration: none;
  color: inherit;
}

.hero {
  padding: 75px 7%;
  background: #17352f;
  color: #f5f4eb;
}

.theme-bscs .hero {
  background: #28233e;
}

.program-icon {
  display: grid;
  place-items: center;
  width: 68px;
  height: 68px;
  margin-bottom: 25px;
  border-radius: 16px;
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 26px;
  font-weight: bold;
}

.eyebrow,
.label {
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1.5px;
}

.eyebrow {
  color: var(--accent);
}

h1 {
  max-width: 850px;
  font-size: clamp(36px, 6vw, 68px);
  line-height: 1.1;
}

h2 {
  font-size: clamp(25px, 4vw, 36px);
}

.intro {
  max-width: 650px;
  color: #d0d9cf;
  font-size: 18px;
  line-height: 1.7;
}

.button {
  display: inline-block;
  margin-top: 15px;
  padding: 13px 17px;
  background: var(--accent);
  color: var(--accent-ink);
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.section {
  max-width: 1100px;
  margin: auto;
  padding: 55px 7%;
  line-height: 1.8;
}

.label {
  color: #65874b;
}

.section > p:not(.label) {
  color: #607168;
}

.tinted,
.notice {
  background: #e9ebe1;
}

.learning-list {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.learning-list li {
  padding: 15px;
  background: #f7f7f1;
  border-radius: 6px;
}

.learning-list li span {
  color: #65874b;
  font-weight: bold;
}

.theme-bscs .learning-list li span {
  color: #7865a8;
}

.careers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.careers span {
  padding: 8px 13px;
  border: 1px solid #b8c5b4;
  border-radius: 25px;
  font-size: 14px;
}

.theme-bscs .careers span {
  border-color: #c7bce0;
}

.why-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
}

.enroll-card {
  padding: 25px;
  background: #e8ebdf;
  border-radius: 8px;
}

.theme-bscs .enroll-card {
  background: #ebe7f4;
}

.small-icon {
  font-size: 25px;
  color: #65874b;
}

.theme-bscs .small-icon {
  color: #7865a8;
}

.notice {
  max-width: none;
}

.footer {
  font-size: 13px;
  font-weight: bold;
}

@media (max-width: 650px) {
  .navbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .learning-list,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 50px;
    padding-bottom: 55px;
  }

  .footer {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
