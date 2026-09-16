<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Service {
  number: string
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'Visa Assistance',
    description:
      'Clear guidance through visa requirements and documentation, helping make the process feel straightforward from the start.',
    image: '/images/support/visa.jpg'
  },
  {
    number: '02',
    title: 'Flights & Connections',
    description:
      'Thoughtfully considered routes and connections designed around comfort, timing and the rhythm of your journey.',
    image: '/images/support/flights.jpg'
  },
  {
    number: '03',
    title: 'Private Transfers',
    description:
      'Seamless arrivals, departures and private transfers arranged so every transition feels effortless.',
    image: '/images/support/transfers.jpg'
  },
  {
    number: '04',
    title: 'On-ground Support',
    description:
      'Personal assistance throughout your journey, with trusted local support whenever and wherever it is needed.',
    image: '/images/support/support.jpg'
  }
]

const sectionRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)

let ctx: gsap.Context | null = null

const setActiveService = (index: number) => {
  activeIndex.value = index
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  const section = sectionRef.value

    if (!section) return

    ctx = gsap.context(() => {
    // HEADER

    gsap.set('.travel-support__eyebrow', {
      opacity: 0,
      y: 18
    })

    gsap.set('.travel-support__heading-text', {
      yPercent: 110
    })

    gsap.set('.travel-support__intro', {
      opacity: 0,
      y: 25
    })

    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 78%',
        once: true
      }
    })

    headerTl
      .to(
        '.travel-support__eyebrow',
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        },
        0
      )
      .to(
        '.travel-support__heading-text',
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out'
        },
        0.08
      )
      .to(
        '.travel-support__intro',
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out'
        },
        0.3
      )

    // BODY IMAGE

    gsap.fromTo(
      '.travel-support__visual',
      {
        clipPath: 'inset(0 100% 0 0)'
      },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.travel-support__body',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    // SERVICE ROWS

    const rows =
        section.querySelectorAll<HTMLElement>(
        '.travel-support__service'
      )

    rows.forEach((row) => {
      const line =
        row.querySelector<HTMLElement>(
          '.travel-support__service-line'
        )

      const content =
        row.querySelector<HTMLElement>(
          '.travel-support__service-content'
        )

      if (!line || !content) return

      gsap.set(line, {
        scaleX: 0,
        transformOrigin: 'left center'
      })

      gsap.set(content, {
        opacity: 0,
        y: 22
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 86%',
          once: true
        }
      })

      tl
        .to(line, {
          scaleX: 1,
          duration: 0.9,
          ease: 'power3.inOut'
        })
        .to(
          content,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out'
          },
          0.18
        )
    })

    // CTA

    gsap.from('.travel-support__cta', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.travel-support__cta',
        start: 'top 88%',
        once: true
      }
    })
  }, section)
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="travel-support"
  >
    <div class="travel-support__inner">

      <!-- HEADER -->

      <header class="travel-support__header">
        <div>
          <p class="travel-support__eyebrow eyebrow">
            Every detail, taken care of
          </p>

          <h2 class="travel-support__heading heading-xl">
            <span class="travel-support__heading-line">
              <span class="travel-support__heading-text">
                The journey begins
              </span>
            </span>

            <span class="travel-support__heading-line">
              <span class="travel-support__heading-text">
                long before
                <em>you leave.</em>
              </span>
            </span>
          </h2>
        </div>

        <p class="travel-support__intro body-large">
          From the practical to the personal, we help make
          every part of your journey feel considered,
          seamless and effortless.
        </p>
      </header>

      <!-- BODY -->

      <div class="travel-support__body">

        <!-- IMAGE -->

        <div class="travel-support__visual">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="travel-support__image-layer"
            :class="{
              'travel-support__image-layer--active':
                activeIndex === index
            }"
          >
            <img
              :src="service.image"
              :alt="service.title"
              class="travel-support__image"
            >
          </div>

          <div class="travel-support__visual-overlay" />

          <div class="travel-support__visual-caption">
            <span>
              {{ services[activeIndex]?.number }}
            </span>

            <span>
              {{ services[activeIndex]?.title }}
            </span>
          </div>
        </div>

        <!-- SERVICES -->

        <div class="travel-support__services">
          <article
            v-for="(service, index) in services"
            :key="service.number"
            class="travel-support__service"
            :class="{
              'travel-support__service--active':
                activeIndex === index
            }"
            @mouseenter="setActiveService(index)"
            @focusin="setActiveService(index)"
          >
            <span class="travel-support__service-line" />

            <div class="travel-support__service-content">
              <span class="travel-support__number">
                {{ service.number }}
              </span>

              <div class="travel-support__service-main">
                <h3 class="travel-support__service-title">
                  {{ service.title }}
                </h3>

                <p class="travel-support__description">
                  {{ service.description }}
                </p>
              </div>

              <span class="travel-support__arrow">
                <Icon name="lucide:arrow-up-right" />
              </span>
            </div>
          </article>

          <span class="travel-support__services-bottom-line" />
        </div>
      </div>

      <!-- CTA -->

      <div class="travel-support__cta">
        <div>
          <p class="travel-support__cta-label eyebrow">
            Planning something extraordinary?
          </p>

          <h3 class="travel-support__cta-title">
            Let us take care
            <em>of the details.</em>
          </h3>
        </div>

        <NuxtLink
          to="/plan-your-journey"
          class="travel-support__cta-link"
        >
          <span>Talk to a journey specialist</span>
          <Icon name="lucide:arrow-right" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.travel-support {
  position: relative;
  z-index: 2;

  overflow: hidden;

  background: $color-ivory-light;
  color: $color-charcoal;

  &__inner {
    padding:
      clamp(110px, 10vw, 180px)
      var(--page-padding)
      clamp(100px, 9vw, 160px);
  }

  // ==========================================================
  // HEADER
  // ==========================================================

  &__header {
    display: grid;

    grid-template-columns:
      minmax(0, 1.25fr)
      minmax(320px, 0.55fr);

    align-items: end;

    gap: clamp(70px, 9vw, 160px);
  }

  &__eyebrow {
    margin: 0 0 26px;

    color: $color-text-muted;
  }

  &__heading {
    max-width: 850px;
    margin: 0;

    color: $color-charcoal;

    line-height: 0.95;
    letter-spacing: -0.045em;
  }

  &__heading-line {
    display: block;

    overflow: hidden;

    padding:
      0.06em
      0.15em
      0.18em
      0.04em;
  }

  &__heading-text {
    display: block;

    will-change: transform;
  }

  &__heading em {
    color: $color-plum;

    font-weight: 400;
    font-style: italic;
  }

  &__intro {
    max-width: 450px;
    margin: 0 0 8px;

    color: $color-text-muted;

    line-height: 1.65;
  }

  // ==========================================================
  // BODY
  // ==========================================================

  &__body {
    display: grid;

    grid-template-columns:
      minmax(450px, 0.9fr)
      minmax(500px, 1.1fr);

    align-items: center;

    gap: clamp(70px, 8vw, 145px);

    margin-top:
      clamp(85px, 8vw, 135px);
  }

  // ==========================================================
  // VISUAL
  // ==========================================================

  &__visual {
    position: relative;

    width: 100%;

    aspect-ratio: 0.92;

    overflow: hidden;

    background: $color-sand;

    will-change: clip-path;
  }

  &__image-layer {
    position: absolute;

    inset: 0;

    opacity: 0;

    transform: scale(1.04);

    transition:
      opacity 750ms
        cubic-bezier(0.22, 1, 0.36, 1),
      transform 1.2s
        cubic-bezier(0.22, 1, 0.36, 1);

    &--active {
      z-index: 2;

      opacity: 1;

      transform: scale(1);
    }
  }

  &__image {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  &__visual-overlay {
    position: absolute;
    z-index: 3;

    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        to top,
        rgba(15, 15, 12, 0.46),
        transparent 45%
      );
  }

  &__visual-caption {
    position: absolute;
    z-index: 5;

    right: 24px;
    bottom: 22px;
    left: 24px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;

    color: $color-ivory-light;

    font-family:
      'Manrope',
      sans-serif;

    font-size:
      clamp(0.65rem, 0.7vw, 0.78rem);

    font-weight: 500;
    letter-spacing: 0.1em;

    text-transform: uppercase;
  }

  // ==========================================================
  // SERVICES
  // ==========================================================

  &__services {
    position: relative;

    width: 100%;
  }

  &__service {
    position: relative;

    cursor: default;
  }

  &__service-line,
  &__services-bottom-line {
    display: block;

    width: 100%;
    height: 1px;

    background:
      rgba(23, 23, 21, 0.22);
  }

  &__service-line {
    will-change: transform;
  }

  &__service-content {
    display: grid;

    grid-template-columns:
      42px
      minmax(0, 1fr)
      30px;

    align-items: start;

    gap: 20px;

    padding:
      clamp(25px, 2.2vw, 36px)
      0;

    transition:
      padding-left 600ms
        cubic-bezier(0.22, 1, 0.36, 1);

    will-change:
      transform,
      opacity;
  }

  &__number {
    padding-top: 8px;

    color: $color-stone;

    font-family:
      'Manrope',
      sans-serif;

    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.12em;
  }

  &__service-main {
    min-width: 0;
  }

  &__service-title {
    margin: 0;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size:
      clamp(2.4rem, 3.2vw, 4.2rem);

    font-weight: 400;
    line-height: 0.98;
    letter-spacing: -0.035em;

    transition:
      color $transition-medium;
  }

  &__description {
    max-width: 500px;

    margin: 12px 0 0;

    color: $color-text-muted;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-body-sm);
    line-height: 1.65;
  }

  &__arrow {
    display: flex;

    justify-content: flex-end;

    padding-top: 10px;

    color: $color-charcoal;

    opacity: 0.3;

    transition:
      opacity $transition-medium,
      transform $transition-medium;

    :deep(svg) {
      width: 17px;
      height: 17px;
    }
  }

  &__service {
    &::after {
      content: '';

      position: absolute;

      right: 0;
      bottom: 0;
      left: 0;

      height: 1px;

      background: $color-plum;

      transform: scaleX(0);
      transform-origin: left center;

      transition:
        transform 700ms
          cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover,
    &--active {
      &::after {
        transform: scaleX(1);
      }

      .travel-support__service-content {
        padding-left: 10px;
      }

      .travel-support__service-title {
        color: $color-plum;
      }

      .travel-support__arrow {
        opacity: 1;

        transform:
          translate(3px, -3px);
      }
    }
  }

  // ==========================================================
  // CTA
  // ==========================================================

  &__cta {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;

    gap: 60px;

    margin-top:
      clamp(90px, 9vw, 150px);

    padding-top:
      clamp(50px, 5vw, 80px);

    border-top:
      1px solid
      rgba(23, 23, 21, 0.2);
  }

  &__cta-label {
    margin: 0 0 18px;

    color: $color-text-muted;
  }

  &__cta-title {
    max-width: 700px;
    margin: 0;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size:
      clamp(3rem, 4.5vw, 5.8rem);

    font-weight: 400;
    line-height: 0.93;
    letter-spacing: -0.04em;

    em {
      color: $color-plum;

      font-weight: 400;
      font-style: italic;
    }
  }

  &__cta-link {
    display: inline-flex;

    flex: 0 0 auto;

    align-items: center;
    justify-content: center;

    gap: 12px;

    min-height: 54px;

    padding: 0 24px;

    border:
      1px solid
      $color-charcoal;

    border-radius: 100px;

    background: transparent;

    color: $color-charcoal;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-link);
    font-weight: 500;
    letter-spacing: 0.07em;

    text-decoration: none;
    text-transform: uppercase;

    transition:
      background $transition-medium,
      color $transition-medium;

    :deep(svg) {
      width: 15px;
      height: 15px;

      transition:
        transform $transition-medium;
    }

    &:hover {
      background: $color-charcoal;
      color: $color-ivory-light;
    }

    &:hover :deep(svg) {
      transform: translateX(4px);
    }
  }
}

// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1280px) {
  .travel-support {
    &__body {
      grid-template-columns:
        minmax(390px, 0.85fr)
        minmax(460px, 1.15fr);

      gap: 65px;
    }

    &__visual {
      aspect-ratio: 0.85;
    }
  }
}

// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {
  .travel-support {
    &__header {
      grid-template-columns: 1fr;

      gap: 36px;
    }

    &__intro {
      max-width: 560px;
    }

    &__body {
      grid-template-columns: 1fr;

      gap: 55px;
    }

    &__visual {
      max-width: none;

      aspect-ratio: 1.35;
    }

    &__cta {
      align-items: flex-start;

      flex-direction: column;

      gap: 35px;
    }
  }
}

// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {
  .travel-support {
    &__inner {
      padding:
        82px
        var(--page-padding)
        90px;
    }

    &__eyebrow {
      margin-bottom: 20px;
    }

    &__heading {
      line-height: 0.97;
    }

    &__body {
      margin-top: 65px;
    }

    &__visual {
      aspect-ratio: 4 / 5;
    }

    &__visual-caption {
      right: 18px;
      bottom: 18px;
      left: 18px;
    }

    &__service-content {
      grid-template-columns:
        32px
        minmax(0, 1fr)
        22px;

      gap: 12px;

      padding: 25px 0;
    }

    &__service {
      &:hover,
      &--active {
        .travel-support__service-content {
          padding-left: 0;
        }
      }
    }

    &__service-title {
      font-size:
        clamp(2.3rem, 9vw, 3.2rem);
    }

    &__description {
      margin-top: 9px;
    }

    &__cta {
      margin-top: 75px;

      padding-top: 48px;
    }

    &__cta-title {
      font-size:
        clamp(3rem, 12vw, 4.2rem);
    }

    &__cta-link {
      width: 100%;
    }
  }
}

// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {
  .travel-support {
    &__eyebrow,
    &__heading-text,
    &__intro,
    &__visual,
    &__service-content,
    &__service-line,
    &__cta {
      opacity: 1 !important;

      transform: none !important;

      transition: none !important;
    }
  }
}
</style>