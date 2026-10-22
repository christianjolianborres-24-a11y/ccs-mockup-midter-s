<script setup>
import quijanoPhoto from '@/assets/quijano-e1637132499305.png'
import saltarePhoto from '@/assets/saltareFull.png'
import balontongPhoto from '@/assets/balontong-754x1024.jpg'
import eregiaPhoto from '@/assets/eregia-754x1024.jpg'
import taasanPhoto from '@/assets/taasan-754x1024.jpg'
import cambroneroPhoto from '@/assets/cambronero-754x1024.jpg'
import warriorsLogo from '@/assets/Warriors-Logo-2.png'

// Edit these entries to update the text and portrait shown on each faculty card.
const departments = [
  {
    name: 'College Leadership',
    detail: 'Dean and College administration',
    icon: '01',
    personnel: 'Ma. Christina A. Quijano',
    attainment: 'Master of Science in Computer Science',
    photo: quijanoPhoto,
    photoAlt: 'Faculty portrait of Quijano',
  },
  {
    name: 'Information Technology',
    detail: 'BSIT program faculty fraud',
    icon: '02',
    personnel: 'Sal "Saltare" Tare',
    attainment: 'Avid User of ChatGPT and other AI tools',
    photo: saltarePhoto,
    photoAlt: 'Faculty portrait of Saltare',
  },
  {
    name: 'Department Head of IT',
    detail: 'Department Head',
    icon: '03',
    personnel: 'Rea P. Balontong',
    attainment: 'Master of Business Accountancy',
    photo: balontongPhoto,
    photoAlt: 'Faculty portrait of Balontong',
  },
  {
    name: 'BSIT Faculty',
    detail: 'Faculty',
    icon: '04',
    personnel: 'Rodolfo C. Eregia, Jr.',
    attainment: 'Awaiting verified information',
    photo: eregiaPhoto,
    photoAlt: 'Faculty portrait of Eregia',
  },
  {
    name: 'Computer Labratory Technician',
    detail: 'Staff',
    icon: '05',
    personnel: 'A.M.P. Latter P. Taasan',
    attainment: 'Awaiting verified information',
    photo: taasanPhoto,
    photoAlt: 'Faculty portrait of Taasan',
  },
  {
    name: 'BSCS Faculty',
    detail: 'Faculty',
    icon: '06',
    personnel: 'Pedro Peter Rhys B. Cambronero',
    attainment: 'Master of Science in Computer Science',
    photo: cambroneroPhoto,
    photoAlt: 'Faculty portrait of Cambronero',
  },
]
</script>

<template>
  <section id="people" class="people section-anchor">
    <div class="people-decoration" aria-hidden="true"></div>
    <div class="section-wrap people-wrap">
      <div class="section-heading people-heading">
        <div>
          <p class="eyebrow"><span class="eyebrow-dot"></span> THE PEOPLE BEHIND THE POSSIBILITIES</p>
          <h2>Good things<br />happen <span>together.</span></h2>
        </div>
        <div class="people-intro">
          <p>
            Meet the faculty and staff who make the College of Computer Studies a place to learn, question, and grow.
          </p>
          <span class="verification-note">Personnel names, credentials, and portraits are awaiting confirmation from the official CCS organizational chart.</span>
        </div>
      </div>
      <div class="department-grid">
        <article v-for="department in departments" :key="department.name" class="department-card">
          <div class="department-top">
            <span class="department-number">{{ department.icon }}</span>
          </div>
          <div class="portrait-placeholder">
            <img v-if="department.photo" :src="department.photo" :alt="department.photoAlt" />
            <template v-else>
              <svg viewBox="0 0 120 120" role="img" aria-label="Portrait placeholder">
                <circle cx="60" cy="60" r="60" fill="currentColor" opacity=".12" />
                <circle cx="60" cy="45" r="19" fill="currentColor" opacity=".68" />
                <path d="M24 108c2-22 16-36 36-36s34 14 36 36" fill="currentColor" opacity=".68" />
              </svg>
              <span>PHOTO PENDING</span>
            </template>
          </div>
          <div class="department-copy">
            <p class="department-label">{{ department.detail }}</p>
            <h3>{{ department.name }}</h3>
            <div class="person-detail"><span>PERSONNEL</span><strong>{{ department.personnel }}</strong></div>
            <div class="person-detail"><span>HIGHEST ATTAINMENT</span><strong>{{ department.attainment }}</strong></div>
          </div>
        </article>
      </div>
      <div class="people-footer">
        <img class="people-footer-mark" :src="warriorsLogo" alt="College of Computer Studies Warriors logo" />
        <p>Our community is always growing. Check back as we introduce the people shaping what's next.</p>
        <a href="#partners">Our community <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>
</template>

<style>
.portrait-placeholder > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.people-footer-mark {
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 0;
  object-fit: contain;
}
</style>
