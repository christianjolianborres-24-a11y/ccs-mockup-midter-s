
<script setup>
import ProgramPage from '@/components/ProgramPage.vue'

const program = {
  code: 'BSCS',
  theme: 'bscs',
  degree: 'Bachelor of Science in Computer Science',

  intro:
    'Discover the science behind modern technology. Develop your programming skills, strengthen your logical thinking, and learn how to design intelligent and efficient solutions to complex problems.',

  overview:
    'The Bachelor of Science in Computer Science focuses on the foundations of computing, algorithms, programming, and software design. Students learn to analyze complex problems, develop computational solutions, and understand the principles behind the technologies used in today’s digital world.',

  learningAreas: [
    'Programming and software development',
    'Algorithms and data structures',
    'Discrete mathematics and computational logic',
    'Database systems and data management',
    'Operating systems and computer architecture',
    'Artificial intelligence and machine learning fundamentals',
    'Software engineering and quality assurance',
  ],

  careers: [
    'Software Developer',
    'Software Engineer',
    'Quality Assurance Engineer',
    'Systems Analyst',
    'Web Application Developer',
    'Data Analyst',
    'AI and Machine Learning Associate',
    'Research and Development Assistant',
  ],

  whyChoose:
    'Computer Science develops analytical thinking, creativity, and a deep understanding of how computing works. Through programming, algorithm design, and computational problem-solving, students build a foundation for creating software, exploring emerging technologies, and adapting to new challenges in the technology industry.',

  whoShouldEnroll:
    'This program may be a good fit for students who enjoy logic, mathematics, puzzles, programming, and breaking complex problems into manageable steps. Curiosity, patience, attention to detail, and a willingness to experiment and learn from mistakes can help students grow throughout the program.',
}
</script>

<template>
  <main class="program-page-shell">
    <ProgramPage :program="program" />
  </main>
</template>

<style scoped>
.program-page-shell {
  --page-text: #172033;
  --page-muted: #475569;
  --page-background: #f8fafc;

  min-height: 100vh;
  padding: clamp(1rem, 4vw, 3rem);

  background: var(--page-background);
  color: var(--page-text);

  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;

  /* Prevent compressed or crowded typography */
  letter-spacing: normal !important;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
  font-kerning: normal;
}

/* Clear, consistent headings */
.program-page-shell :deep(h1),
.program-page-shell :deep(h2),
.program-page-shell :deep(h3),
.program-page-shell :deep(h4) {
  color: var(--page-text);

  font-family: inherit;
  font-weight: 700;
  letter-spacing: normal !important;
  word-spacing: normal;
  line-height: 1.3;

  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;

  margin-block: 0 0.85rem;
}

/* Comfortable paragraph readability */
.program-page-shell :deep(p) {
  color: var(--page-muted);

  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: normal !important;
  word-spacing: normal;

  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;

  margin-block: 0 1rem;
}

/* Well-spaced lists */
.program-page-shell :deep(ul),
.program-page-shell :deep(ol) {
  padding-inline-start: 1.5rem;
  margin-block: 0.75rem 1.5rem;
}

.program-page-shell :deep(li) {
  color: var(--page-muted);

  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: normal !important;
  word-spacing: normal;

  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;

  margin-block: 0.5rem;
  padding-inline-start: 0.25rem;
}

/* Improve text flow inside common content containers */
.program-page-shell :deep(p),
.program-page-shell :deep(li),
.program-page-shell :deep(a),
.program-page-shell :deep(span) {
  hyphens: auto;
}

/* Responsive typography and spacing */
@media (max-width: 640px) {
  .program-page-shell {
    padding: 1rem;
    font-size: 16px;
  }

  .program-page-shell :deep(h1) {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    line-height: 1.25;
  }

  .program-page-shell :deep(h2) {
    font-size: 1.4rem;
  }

  .program-page-shell :deep(p),
  .program-page-shell :deep(li) {
    font-size: 1rem;
    line-height: 1.8;
  }
}
</style>
