
<script setup>
import ProgramPage from '@/components/ProgramPage.vue'

const program = {
  code: 'BSIT',
  theme: 'bsit',
  degree: 'Bachelor of Science in Information Technology',

  intro:
    'Turn your interest in technology into practical skills. Explore software development, computer systems, networking, and digital solutions that help people and organizations.',

  overview:
    'The Bachelor of Science in Information Technology focuses on designing, developing, implementing, and maintaining technology-based solutions. Students explore how software, networks, databases, and information systems work together to solve real-world problems.',

  learningAreas: [
    'Programming and software development',
    'Web design and application development',
    'Database management and information systems',
    'Computer networks and IT infrastructure',
    'Systems analysis and troubleshooting',
    'Cybersecurity and information protection',
  ],

  careers: [
    'IT Support Specialist',
    'Web Developer',
    'Software Developer',
    'Systems Analyst',
    'Network Administrator',
    'Database Administrator',
    'Cybersecurity Analyst',
    'IT Project Coordinator',
  ],

  whyChoose:
    'Information Technology combines creativity, analytical thinking, and practical problem-solving. The program helps students build technical foundations, develop digital solutions, and adapt to evolving technologies across different industries.',

  whoShouldEnroll:
    'This program may suit students who enjoy working with computers, solving technical challenges, designing applications, exploring new technologies, and finding better ways to accomplish everyday tasks. Curiosity, persistence, logical thinking, and a willingness to keep learning are valuable qualities.',
}
</script>

<template>
  <main class="program-page-shell">
    <ProgramPage :program="program" />
  </main>
</template>

<style scoped>
.program-page-shell {
  --page-text: #1e293b;
  --page-muted: #475569;
  --page-background: #f8fafc;

  min-height: 100vh;
  padding: clamp(1rem, 4vw, 3rem);
  background: var(--page-background);
  color: var(--page-text);

  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  letter-spacing: normal;
  word-spacing: normal;
  text-align: left;
  font-kerning: normal;
}

/* Keep headings clear and comfortably spaced */
.program-page-shell :deep(h1),
.program-page-shell :deep(h2),
.program-page-shell :deep(h3),
.program-page-shell :deep(h4) {
  color: var(--page-text);
  letter-spacing: normal !important;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
  line-height: 1.3;
}

/* Make body text easier to read */
.program-page-shell :deep(p),
.program-page-shell :deep(li) {
  color: var(--page-muted);
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: normal !important;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
}

/* Add breathing room between list items */
.program-page-shell :deep(li) {
  margin-block: 0.4rem;
  padding-inline-start: 0.15rem;
}

/* Keep content readable on phones */
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
}
</style>
