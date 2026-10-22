<script setup>
defineProps({
  program: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <main
    class="program-page"
    :class="`theme-${program.theme}`"
  >
    <header class="program-hero">
      <div class="program-container">
        <RouterLink
          class="back-link"
          :to="{ path: '/', hash: '#programs' }"
        >
          ← Back to Programs
        </RouterLink>

        <p class="program-eyebrow">
          COLLEGE OF COMPUTER STUDIES · {{ program.code }}
        </p>

        <h1>{{ program.degree }}</h1>
        <p class="program-intro">{{ program.intro }}</p>
      </div>
    </header>

    <div class="program-container program-content">
      <section class="program-section">
        <h2>Program Overview</h2>
        <p>{{ program.overview }}</p>
      </section>

      <div class="program-columns">
        <section class="program-section">
          <h2>What You Will Learn</h2>
          <ul>
            <li
              v-for="item in program.learningAreas"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </section>

        <section class="program-section">
          <h2>Career Opportunities</h2>
          <ul>
            <li
              v-for="career in program.careers"
              :key="career"
            >
              {{ career }}
            </li>
          </ul>
        </section>

        <section class="program-section">
          <h2>Why Choose This Program?</h2>
          <p>{{ program.whyChoose }}</p>
        </section>

        <section class="program-section">
          <h2>Who Should Enroll?</h2>
          <p>{{ program.whoShouldEnroll }}</p>
        </section>
      </div>

      <section
        v-if="program.additionalInfo"
        class="program-section program-extra"
      >
        <h2>Other Relevant Information</h2>
        <p>{{ program.additionalInfo }}</p>
      </section>

      <RouterLink
        class="program-back-button"
        :to="{ path: '/', hash: '#programs' }"
      >
        Explore All Programs →
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.program-page {
  --accent: #28785f;
  --tint: #edf7f1;
  color: #20312d;
  min-height: 100vh;
  background: #fff;
}

.theme-bsit {
  --accent: rgb(40, 120, 95);
  --tint: #dcebd9;
}

.theme-bscs {
  --accent: #795fc5;
  --tint: #f1eefb;
}

.theme-bsdmia {
  --accent: #187c82;
  --tint: #f1dfd2;
}

.theme-blis {
  --accent: #956d20;
  --tint: #e9e8c8;
}

.program-container {
  width: min(1080px, 90%);
  margin: 0 auto;
}

.program-hero {
  padding: 70px 0;
  background: var(--tint);
  border-bottom: 4px solid var(--accent);
}

.back-link {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.program-eyebrow {
  margin-top: 48px;
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.program-hero h1 {
  max-width: 850px;
  margin: 16px 0;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.1;
}

.program-intro {
  max-width: 720px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.program-content {
  padding-top: 44px;
  padding-bottom: 64px;
}

.program-section {
  margin-bottom: 30px;
}

.program-section h2 {
  color: var(--accent);
  font-size: 1.45rem;
}

.program-section p,
.program-section li {
  line-height: 1.8;
}

.program-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.program-columns .program-section {
  padding: 24px;
  border: 1px solid #e2e8e5;
  border-radius: 16px;
}

.program-extra {
  padding: 20px;
  background: var(--tint);
  border-radius: 12px;
}

.program-back-button {
  display: inline-block;
  margin-top: 12px;
  padding: 13px 20px;
  border-radius: 8px;
  background: var(--accent);
  color: white;
  font-weight: 700;
  text-decoration: none;
}

@media (max-width: 650px) {
  .program-hero {
    padding: 42px 0;
  }

  .program-eyebrow {
    margin-top: 32px;
  }

  .program-columns {
    grid-template-columns: 1fr;
  }
}
</style>