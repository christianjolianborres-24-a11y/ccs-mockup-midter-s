
<script setup>
import ProgramDetail from '@/components/programdetail.vue'

const program = {
  code: 'BSIT',
  title: 'Bachelor of Science in Information Technology',
  theme: 'bsit',
  icon: '</>',

  intro: 'Learn how technology can solve real-world problems.',

  overview:
    'Information Technology focuses on using and managing computer systems, software, networks, databases, and other digital tools to support people and organizations.',

  learning: [
    'Website and software development',
    'Computer networks and administration',
    'Database management',
    'IT troubleshooting',
    'Information systems',
    'Technical communication and teamwork'
  ],

  careers: [
    'IT Support Specialist',
    'Web Developer',
    'Systems Analyst',
    'Network Administrator',
    'Software Developer',
    'Database Support Specialist'
  ],

  why:
    'BSIT is suitable for students who want to apply technology to practical problems and help organizations use computer systems effectively.',

  who:
    'Students interested in computers, applications, networks, troubleshooting, and practical technology solutions.',

  verification:
    'Confirm the official BSIT curriculum, course titles, and facilities with the college before publishing.'
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>
