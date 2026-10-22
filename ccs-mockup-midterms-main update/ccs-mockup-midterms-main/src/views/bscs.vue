
<script setup>
import ProgramDetail from '@/components/programdetail.vue'

const program = {
  code: 'BSCS',
  title: 'Bachelor of Science in Computer Science',
  theme: 'bscs',
  icon: '{ }',

  intro:
    'Explore programming, algorithms, and the principles behind computing.',

  overview:
    'Computer Science focuses on computing principles, logical problem-solving, algorithms, data structures, and software development. Students learn how to design and improve computational solutions.',

  learning: [
    'Programming and software development',
    'Algorithms and data structures',
    'Logical and computational thinking',
    'Program testing and debugging',
    'Computing theory',
    'Foundations of artificial intelligence'
  ],

  careers: [
    'Software Engineer',
    'Computer Programmer',
    'Systems Developer',
    'Algorithms Developer',
    'AI or Machine Learning Associate',
    'Computing Research Assistant'
  ],

  why:
    'BSCS is a good choice for students who want to understand how computing works and how to design new solutions through programming and logical reasoning.',

  who:
    'Students interested in coding, mathematics, logic, puzzles, and understanding how computer programs work.',

  verification:
    'Confirm the official BSCS curriculum, course titles, and facilities with the college before publishing.'
}
</script>

<template>
  <ProgramDetail :program="program" />
</template>
