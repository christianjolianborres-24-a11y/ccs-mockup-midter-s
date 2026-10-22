
<script setup>
import ProgramPage from '@/components/ProgramPage.vue'

const program = {
  code: 'BLIS',
  theme: 'blis',
  degree: 'Bachelor of Library and Information Science',

  intro:
    'Connect people with knowledge, information, and ideas. Learn how to organize resources, manage digital information, preserve knowledge, and help others find reliable answers.',

  overview:
    'The Bachelor of Library and Information Science prepares students to organize, manage, preserve, and provide access to information resources. The program explores library operations, information retrieval, research support, digital technologies, and records management. Students develop the skills needed to help individuals and communities discover, evaluate, and use information effectively.',

  learningAreas: [
    'Cataloging, classification, and organization of information resources',
    'Library management and collection development',
    'Reference services and information literacy',
    'Digital libraries and information technologies',
    'Information retrieval, research, and database searching',
    'Archives, records management, and preservation',
    'Ethical use of information, privacy, and intellectual property',
  ],

  careers: [
    'Librarian (subject to applicable licensure requirements)',
    'Library Assistant',
    'Records Management Assistant',
    'Information Research Assistant',
    'Digital Library Assistant',
    'Archives Assistant',
    'Knowledge Management Associate',
    'Information Services Specialist',
  ],

  whyChoose:
    'Library and Information Science combines organization, research, technology, and community service. Students learn how to manage information resources, support lifelong learning, preserve valuable records, and make reliable information more accessible. These skills can be valuable in libraries, schools, universities, government offices, and other information-focused organizations.',

  whoShouldEnroll:
    'This program may suit students who enjoy reading, researching, organizing information, working with digital tools, and helping others find trustworthy resources. Attention to detail, curiosity, patience, communication skills, and a commitment to responsible information sharing can help students thrive in this field.',
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

  box-sizing: border-box;
  width: 100%;
  min-width: 0;
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

  /* Keep letters and words from appearing cramped. */
  letter-spacing: normal;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
}

/* Consistent and readable heading styles. */
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

/* Improve paragraph readability. */
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

  margin-block: 0 1.15rem;
}

/* Make lists clean and easy to scan. */
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
  text-align: left;

  margin-block: 0.5rem;
  padding-inline-start: 0.25rem;
}

/* Prevent long text and media from overflowing the page. */
.program-page-shell :deep(p),
.program-page-shell :deep(li),
.program-page-shell :deep(a) {
  max-width: 100%;
}

.program-page-shell :deep(img),
.program-page-shell :deep(video),
.program-page-shell :deep(iframe) {
  max-width: 100%;
}

/* Comfortable spacing on mobile devices. */
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
