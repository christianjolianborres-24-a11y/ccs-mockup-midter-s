
<script setup>
import ProgramPage from '@/components/ProgramPage.vue'

const program = {
  code: 'BSDMIA',
  theme: 'bsdmia',
  degree: 'Bachelor of Science in Data Mining and Information Analytics',

  intro:
    'Turn data into meaningful insights. Discover how to identify patterns, interpret information, and use analytical thinking to support smarter decisions.',

  overview:
    'The Bachelor of Science in Data Mining and Information Analytics explores methods for collecting, analyzing, interpreting, and presenting data. Students develop analytical and problem-solving skills to uncover useful patterns, recognize trends, and transform complex information into insights that support evidence-based decisions.',

  learningAreas: [
    'Data analysis, interpretation, and visualization',
    'Data mining techniques and pattern discovery',
    'Statistical methods and analytical reasoning',
    'Database management and data preparation',
    'Business intelligence and reporting',
    'Predictive analytics and modeling fundamentals',
    'Data quality, ethics, and responsible data handling',
  ],

  careers: [
    'Data Analyst',
    'Business Intelligence Analyst',
    'Reporting Analyst',
    'Data Quality Analyst',
    'Research Analyst',
    'Market Research Analyst',
    'Junior Data Scientist',
    'Analytics Consultant',
  ],

  whyChoose:
    'Data Mining and Information Analytics connects analytical thinking with practical decision-making. The program helps students learn how to organize information, discover meaningful patterns, communicate findings, and use data to understand problems and identify potential opportunities across different industries.',

  whoShouldEnroll:
    'This program may suit students who enjoy mathematics, research, logical reasoning, and exploring how information can answer real-world questions. Curiosity, attention to detail, critical thinking, and a willingness to investigate evidence are valuable qualities for students interested in understanding data and communicating useful findings.',
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

  width: 100%;
  min-width: 0;
  min-height: 100vh;
  box-sizing: border-box;

  padding: clamp(1rem, 4vw, 3rem);

  color: var(--page-text);
  background: var(--page-background);

  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.75;

  /* Prevent compressed letters and irregular word spacing. */
  letter-spacing: normal !important;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
  font-kerning: normal;
}

/* Consistent, readable typography throughout ProgramPage. */
.program-page-shell :deep(*) {
  box-sizing: border-box;
  letter-spacing: normal !important;
  word-spacing: normal;
}

/* Clear hierarchy with comfortable heading spacing. */
.program-page-shell :deep(h1),
.program-page-shell :deep(h2),
.program-page-shell :deep(h3),
.program-page-shell :deep(h4) {
  color: var(--page-text);
  font-family: inherit;
  font-weight: 700;

  line-height: 1.3;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;

  margin-block: 0 0.85rem;
}

/* Prevent cramped paragraphs and forced justification. */
.program-page-shell :deep(p) {
  color: var(--page-muted);
  font-size: 1rem;
  line-height: 1.8;

  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;

  margin-block: 0 1.15rem;
}

/* Lists stay balanced and easy to scan. */
.program-page-shell :deep(ul),
.program-page-shell :deep(ol) {
  padding-inline-start: 1.5rem;
  margin-block: 0.75rem 1.5rem;
}

.program-page-shell :deep(li) {
  color: var(--page-muted);
  font-size: 1rem;
  line-height: 1.8;

  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;

  margin-block: 0.45rem;
  padding-inline-start: 0.25rem;
}

/* Prevent long content from stretching the layout. */
.program-page-shell :deep(img),
.program-page-shell :deep(video),
.program-page-shell :deep(iframe) {
  max-width: 100%;
}

.program-page-shell :deep(*) {
  min-width: 0;
}

/* Responsive design for smaller screens. */
@media (max-width: 640px) {
  .program-page-shell {
    padding: 1rem;
    font-size: 16px;
  }

  .program-page-shell :deep(h1) {
    font-size: clamp(1.75rem, 7vw, 2.3rem);
    line-height: 1.25;
  }

  .program-page-shell :deep(h2) {
    font-size: 1.4rem;
  }

  .program-page-shell :deep(h3) {
    font-size: 1.15rem;
  }

  .program-page-shell :deep(p),
  .program-page-shell :deep(li) {
    font-size: 1rem;
    line-height: 1.8;
  }
}
</style>
