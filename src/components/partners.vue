<script setup>
import startupLogo from '@/assets/startupproject.jpg'
import mayadLogo from '@/assets/mayad-300x55.png'
import huaweiLogo from '@/assets/huawei-academy-logo-300x300.jpg'
import lasorTechLogo from '@/assets/LasorTech-300x89.jpg'
import acerLogo from '@/assets/acer-300x300.jpg'
import ciscoLogo from '@/assets/1024px-Cisco_academy_logo.svg_-300x300.png'
import oracleLogo from '@/assets/Oracle_Academy_rgb.png'
import govesmartLogo from '@/assets/govesmart-1-300x76.jpg'
import inalLogo from '@/assets/inal-black-300x127-1.png'

const partners = [
  { logo: startupLogo, alt: 'Startup Project' },
  { logo: mayadLogo, alt: 'MAYAD' },
  { logo: huaweiLogo, alt: 'Huawei Academy' },
  { logo: lasorTechLogo, alt: 'LasorTech' },
  { logo: acerLogo, alt: 'Acer' },
  { logo: ciscoLogo, alt: 'Cisco Networking Academy' },
  { logo: oracleLogo, alt: 'Oracle Academy' },
  { logo: govesmartLogo, alt: 'GoveSmart' },
  { logo: inalLogo, alt: 'INAL' },
]
</script>

<template>
  <section id="partners" class="partners section-anchor">
    <div class="section-wrap">
      <div class="partners-layout">
        <div class="partners-copy">
          <h2>Partners and Memberships</h2>
          <div class="partners-divider"></div>
        </div>

        <div class="partner-list">
          <div
            v-for="partner in partners"
            :key="partner.alt"
            class="partner-item"
          >
            <img
              :src="partner.logo"
              :alt="partner.alt"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: clamp(2.5rem, 6vw, 6rem);
}

.partners-copy {
  max-width: 30rem;
}

.partners-label {
  display: inline-block;
  margin-bottom: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #64748b;
}

.partners-copy h2 {
  margin: 0;
  font-size: clamp(2.25rem, 4.5vw, 3.75rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.045em;
  color: inherit;
}

.partners-divider {
  width: 20.5rem;
  height: 4px;
  margin-top: 1.75rem;
  border-radius: 999px;
  background: #4e9fe5;
}

/* Consistent partner logo gallery */
.partner-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  gap: 1rem;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  min-height: 112px;
  padding: 1.25rem;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgb(15 23 42 / 3%);
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease;
}

.partner-item img {
  display: block;
  width: 100%;
  max-width: 145px;
  height: 64px;
  object-fit: contain;
  object-position: center;
  transition: transform 200ms ease;
}

.partner-item:hover {
  transform: translateY(-3px);
  border-color: #cbd5e1;
  box-shadow: 0 8px 20px rgb(15 23 42 / 7%);
}

.partner-item:hover img {
  transform: scale(1.04);
}

@media (max-width: 850px) {
  .partners-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .partners-copy {
    max-width: 36rem;
  }

  .partner-list {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .partners-layout {
    gap: 2rem;
  }

  .partners-copy h2 {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  .partners-label {
    margin-bottom: 1rem;
  }

  .partner-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .partner-item {
    min-height: 96px;
    padding: 1rem;
    border-radius: 10px;
  }

  .partner-item img {
    max-width: 125px;
    height: 56px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partner-item,
  .partner-item img {
    transition: none;
  }

  .partner-item:hover,
  .partner-item:hover img {
    transform: none;
  }
}
</style>