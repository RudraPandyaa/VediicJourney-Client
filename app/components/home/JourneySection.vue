<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Journey {
  title: string
  slug: string
  region: string
  duration: string
  route: string
  image: string
}

const journeys: Journey[] = [
  {
    title: 'Europe',
    slug: 'europe',
    region: 'Europe',
    duration: '',
    route: '',
    image: '/images/destinations/europe.jpg'
  },
  {
    title: 'South Africa',
    slug: 'south-africa',
    region: 'South Africa',
    duration: '',
    route: '',
    image: '/images/destinations/south-africa.jpg'
  },
  {
    title: 'Asia',
    slug: 'asia',
    region: 'Asia',
    duration: '',
    route: '',
    image: '/images/destinations/asia.jpg'
  },
  {
    title: 'South America',
    slug: 'south-america',
    region: 'South America',
    duration: '',
    route: '',
    image: '/images/destinations/south-america.jpg'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null
let mm: gsap.MatchMedia | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  ctx = gsap.context(() => {
    mm = gsap.matchMedia()

    // ========================================================
    // DESKTOP
    // ========================================================

    mm.add('(min-width: 769px)', () => {
      if (!sectionRef.value) return

      // ------------------------------------------------------
      // HEADER
      // ------------------------------------------------------

      gsap.set('.journeys__eyebrow', {
        opacity: 0,
        y: 20
      })

      gsap.set('.journeys__heading-text', {
        yPercent: 110
      })

      gsap.set('.journeys__intro', {
        opacity: 0,
        y: 25
      })

      gsap.set('.journeys__all', {
        opacity: 0,
        y: 18
      })

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 78%',
          once: true
        }
      })

      headerTimeline
        .to(
          '.journeys__eyebrow',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out'
          },
          0
        )
        .to(
          '.journeys__heading-text',
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out'
          },
          0.08
        )
        .to(
          '.journeys__intro',
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out'
          },
          0.3
        )
        .to(
          '.journeys__all',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out'
          },
          0.42
        )

      // ------------------------------------------------------
      // JOURNEY CARDS
      // ------------------------------------------------------

      const cards =
        sectionRef.value.querySelectorAll<HTMLElement>(
          '.journeys__card'
        )

      cards.forEach((card, index) => {
        const visual =
          card.querySelector<HTMLElement>(
            '.journeys__visual'
          )

        const image =
          card.querySelector<HTMLElement>(
            '.journeys__image'
          )

        const content =
          card.querySelector<HTMLElement>(
            '.journeys__card-content'
          )

        if (!visual || !image || !content) return

        const fromLeft = index % 2 === 0

        gsap.set(visual, {
          clipPath: fromLeft
            ? 'inset(0 100% 0 0)'
            : 'inset(0 0 0 100%)'
        })

        gsap.set(image, {
          scale: 1.12,
          xPercent: fromLeft ? -5 : 5
        })

        gsap.set(content, {
          opacity: 0,
          y: 28
        })

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        })

        cardTimeline
          .to(
            visual,
            {
              clipPath: 'inset(0 0% 0 0%)',
              duration: 1.15,
              ease: 'power3.inOut'
            },
            0
          )
          .to(
            image,
            {
              scale: 1,
              xPercent: 0,
              duration: 1.35,
              ease: 'power3.out'
            },
            0
          )
          .to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out'
            },
            0.5
          )

        // ----------------------------------------------------
        // SUBTLE PARALLAX
        // ----------------------------------------------------

        gsap.fromTo(
          image,
          {
            yPercent: -3
          },
          {
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        )
      })

      return () => {
        headerTimeline.kill()
      }
    })

    // ========================================================
    // MOBILE
    // ========================================================

    mm.add('(max-width: 768px)', () => {
      if (!sectionRef.value) return

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 84%',
          once: true
        }
      })

      headerTimeline
        .from('.journeys__eyebrow', {
          opacity: 0,
          y: 18,
          duration: 0.5,
          ease: 'power3.out'
        })
        .from(
          '.journeys__heading-text',
          {
            yPercent: 105,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out'
          },
          0.05
        )
        .from(
          '.journeys__intro',
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power3.out'
          },
          0.25
        )

      const cards =
        sectionRef.value.querySelectorAll<HTMLElement>(
          '.journeys__card'
        )

      cards.forEach((card) => {
        const visual =
          card.querySelector<HTMLElement>(
            '.journeys__visual'
          )

        const image =
          card.querySelector<HTMLElement>(
            '.journeys__image'
          )

        const content =
          card.querySelector<HTMLElement>(
            '.journeys__card-content'
          )

        if (!visual || !image || !content) return

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
          }
        })

        timeline
          .from(
            visual,
            {
              clipPath: 'inset(0 100% 0 0)',
              duration: 0.95,
              ease: 'power3.inOut'
            },
            0
          )
          .from(
            image,
            {
              scale: 1.1,
              duration: 1.1,
              ease: 'power3.out'
            },
            0
          )
          .from(
            content,
            {
              opacity: 0,
              y: 24,
              duration: 0.6,
              ease: 'power3.out'
            },
            0.4
          )
      })

      return () => {
        headerTimeline.kill()
      }
    })
  }, sectionRef.value)
})

onBeforeUnmount(() => {
  mm?.revert()
  ctx?.revert()
})
</script>

<template>
  <section ref="sectionRef" class="journeys">
    <div class="journeys__inner">

      <div class="journeys__layout">

        <!-- LEFT: SECTION HEADING -->
        <header class="journeys__header">
          <h2 class="journeys__heading heading-xl">
            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                LET'S
              </span>
            </span>

            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                MAKE
              </span>
            </span>

            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                SOMETHING
              </span>
            </span>

            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                GREAT
              </span>
            </span>

            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                TOGETHER!
              </span>
            </span>
          </h2>
        </header>

        <!-- RIGHT: DESTINATION CARDS -->
        <div class="journeys__grid">
          <article v-for="(journey, index) in journeys" :key="journey.slug" class="journeys__card"
            :class="`journeys__card--${index + 1}`">
            <NuxtLink :to="`/destinations/${journey.slug}`" class="journeys__visual-link"
              :aria-label="`Explore ${journey.title}`">
              <div class="journeys__visual">
                <img :src="journey.image" :alt="journey.title" class="journeys__image">

                <div class="journeys__overlay" />

                <span class="journeys__image-arrow">
                  <Icon name="lucide:arrow-up-right" />
                </span>
              </div>
            </NuxtLink>

            <div class="journeys__card-content">
              <NuxtLink :to="`/destinations/${journey.slug}`" class="journeys__title-link">
                <h3 class="journeys__title">
                  {{ journey.title }}
                </h3>
              </NuxtLink>

              <NuxtLink :to="`/destinations/${journey.slug}`" class="journeys__explore">
                <span>SEE MORE</span>
                <Icon name="lucide:arrow-right" />
              </NuxtLink>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

// ============================================================
// SECTION
// ============================================================

.journeys {
  position: relative;
  z-index: 2;

  overflow: hidden;

  background: $color-ivory-light;
  color: $color-charcoal;

  &__inner {
    width: 100%;

    padding:
      clamp(100px, 8vw, 160px) var(--page-padding) clamp(90px, 8vw, 160px);
  }

  // ==========================================================
  // MAIN LAYOUT
  // ==========================================================

  &__layout {
    display: grid;
    grid-template-columns: minmax(620px, 1.15fr) minmax(0, 1.6fr);
    align-items: center;
    gap: clamp(50px, 6vw, 100px);
    width: 100%;
    max-width: 1500px;
    margin-inline: auto;
  }

  // ==========================================================
  // LEFT HEADING
  // ==========================================================

  &__header {
    position: relative;
    top: auto;
    align-self: center;
    padding-top: 0;
  }

  &__eyebrow {
    margin: 0 0 58px;
    color: $color-text-muted;
  }

  &__heading {
    width: fit-content;
    min-width: max-content;
    max-width: none;
    margin: 0;

    color: #000000;

    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(7rem, 11vw, 12rem);
    font-weight: 400;
    line-height: 0.84;
    letter-spacing: 0.02em;
  }

  &__heading-line {
    display: block;
    overflow: visible;
    padding: 0.02em 0.08em 0.08em 0;
  }

  &__heading-text {
    display: block;
    white-space: nowrap;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.02em;
    will-change: transform;
  }

  // ==========================================================
  // DESTINATION GRID
  // ==========================================================

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: clamp(18px, 2vw, 32px);
    row-gap: clamp(70px, 7vw, 115px);
    align-items: start;
  }

  // ==========================================================
  // CARD POSITIONS — STAGGERED LIKE REFERENCE
  // ==========================================================

  &__card {
    position: relative;
    min-width: 0;

    &--1 {
      grid-column: 1;
      margin-top: 0;
    }

    &--2 {
      grid-column: 2;
      margin-top: clamp(75px, 7vw, 115px);
    }

    &--3 {
      grid-column: 1;
      margin-top: clamp(0px, 0vw, 0px);
    }

    &--4 {
      grid-column: 2;
      margin-top: clamp(75px, 7vw, 115px);
    }
  }

  // ==========================================================
  // IMAGE
  // ==========================================================

  &__visual-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }

  &__visual {
    position: relative;
    width: 100%;
    aspect-ratio: 0.78;
    overflow: hidden;
    background: $color-sand;
    will-change: clip-path;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    will-change: transform;
    transition:
      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &__overlay {
    position: absolute;
    z-index: 2;
    inset: 0;
    pointer-events: none;

    background:
      linear-gradient(to top,
        rgba(15, 15, 12, 0.28) 0%,
        rgba(15, 15, 12, 0.02) 45%,
        transparent 70%);

    opacity: 0.35;

    transition:
      opacity 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  // ==========================================================
  // IMAGE ARROW
  // ==========================================================

  &__image-arrow {
    position: absolute;
    z-index: 5;
    top: 50%;
    right: 18px;

    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;

    border: 1px solid rgba(250, 248, 243, 0.75);
    border-radius: 50%;

    color: $color-ivory-light;
    background: rgba(15, 15, 12, 0.12);
    backdrop-filter: blur(5px);

    opacity: 0;
    transform: translate(10px, -50%);

    transition:
      opacity $transition-medium,
      transform $transition-medium,
      background $transition-medium,
      color $transition-medium;

    :deep(svg) {
      width: 17px;
      height: 17px;
    }
  }

  &__visual-link:hover {
    .journeys__image {
      transform: scale(1.045);
    }

    .journeys__overlay {
      opacity: 0.8;
    }

    .journeys__image-arrow {
      opacity: 1;
      transform: translate(0, -50%);
      background: $color-ivory-light;
      color: $color-charcoal;
    }
  }

  // ==========================================================
  // CONTENT BELOW IMAGE
  // ==========================================================

  &__card-content {
    padding-top: 18px;
    will-change: transform, opacity;
  }

  &__title-link {
    display: block;
    color: $color-plum;
    text-decoration: none;
  }

  &__title {
    margin: 0;

    color: $color-plum;

    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.65rem, 2vw, 2.15rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &__explore {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    margin-top: 13px;

    color: $color-charcoal;

    font-family: 'Manrope', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    letter-spacing: 0.04em;

    text-decoration: none;

    :deep(svg) {
      width: 14px;
      height: 14px;
      transition: transform $transition-medium;
    }

    &:hover :deep(svg) {
      transform: translateX(4px);
    }
  }
}

// ============================================================
// LARGE DESKTOP
// ============================================================

@media (min-width: 1600px) {
  .journeys {
    &__layout {
      max-width: 1600px;
      grid-template-columns: minmax(520px, 1.15fr) minmax(0, 1.6fr);
    }

    &__visual {
      aspect-ratio: 0.82;
    }
  }
}

// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1200px) {
  .journeys {
    &__layout {
      gap: 70px;
      grid-template-columns: minmax(560px, 0.9fr) minmax(0, 1.6fr);
    }

    &__header {
      padding-top: 45px;
    }

    &__eyebrow {
      margin-bottom: 42px;
    }

    &__grid {
      column-gap: 22px;
    }

    &__card {

      &--2,
      &--4 {
        margin-top: 65px;
      }
    }
  }
}

// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {
  .journeys {
    &__inner {
      padding:
        90px var(--page-padding) 110px;
    }

    &__layout {
      grid-template-columns: 1fr;
      gap: 70px;
    }

    &__header {
      position: relative;
      top: auto;
      padding-top: 0;
    }

    &__heading {
      max-width: 700px;
    }

    &__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &__card {

      &--1,
      &--2,
      &--3,
      &--4 {
        grid-column: auto;
        margin-top: 0;
      }

      &--2,
      &--4 {
        margin-top: 70px;
      }
    }
  }
}

// ============================================================
// MOBILE
// ============================================================

@media (max-width: 600px) {
  .journeys {
    &__inner {
      padding:
        72px var(--page-padding) 80px;
    }

    &__layout {
      gap: 55px;
    }

    &__eyebrow {
      margin-bottom: 28px;
    }

    &__heading {
      width: 100%;
      max-width: 100%;
      color: #000000;
      font-size: clamp(4.2rem, 18vw, 6rem);
      line-height: 0.88;
    }

    &__grid {
      display: block;
    }

    &__card,
    &__card--1,
    &__card--2,
    &__card--3,
    &__card--4 {
      width: 100%;
      margin: 0 0 60px;
    }

    &__card:last-child {
      margin-bottom: 0;
    }

    &__visual {
      aspect-ratio: 0.9;
    }

    &__image-arrow {
      top: auto;
      right: 14px;
      bottom: 14px;

      width: 42px;
      height: 42px;

      opacity: 1;
      transform: none;
    }

    &__title {
      font-size: 2rem;
    }
  }
}

// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {
  .journeys {

    &__eyebrow,
    &__heading-text,
    &__visual,
    &__image,
    &__card-content {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
}
</style>