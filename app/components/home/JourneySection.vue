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
    title: 'Sacred India',
    slug: 'sacred-india',
    region: 'India',
    duration: '12 Days',
    route: 'Delhi · Rishikesh · Varanasi',
    image: '/images/journeys/sacred-india.jpg'
  },
  {
    title: 'The Italian Art of Slow Travel',
    slug: 'italian-art-of-slow-travel',
    region: 'Europe',
    duration: '10 Days',
    route: 'Rome · Tuscany · Florence',
    image: '/images/journeys/italy.jpg'
  },
  {
    title: 'Into the Wild',
    slug: 'into-the-wild',
    region: 'Africa',
    duration: '11 Days',
    route: 'Cape Town · Kruger · Sabi Sands',
    image: '/images/journeys/africa-wild.jpg'
  },
  {
    title: 'Peru Beyond the Icons',
    slug: 'peru-beyond-the-icons',
    region: 'South America',
    duration: '13 Days',
    route: 'Lima · Sacred Valley · Cusco',
    image: '/images/journeys/peru.jpg'
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
  <section
    ref="sectionRef"
    class="journeys"
  >
    <div class="journeys__inner">

      <!-- ==================================================
           HEADER
      =================================================== -->

      <header class="journeys__header">
        <div class="journeys__header-left">
          <p class="journeys__eyebrow eyebrow">
            Journey inspiration
          </p>

          <h2 class="journeys__heading heading-xl">
            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                A glimpse of what
              </span>
            </span>

            <span class="journeys__heading-line">
              <span class="journeys__heading-text">
                your journey
                <em>could be.</em>
              </span>
            </span>
          </h2>
        </div>

        <div class="journeys__header-right">
          <p class="journeys__intro body-large">
            Ideas to inspire, never itineraries set in
            stone. Every journey can be thoughtfully
            shaped around you.
          </p>

          <NuxtLink
            to="/journeys"
            class="journeys__all text-link"
          >
            <span>View all journeys</span>
            <Icon name="lucide:arrow-right" />
          </NuxtLink>
        </div>
      </header>

      <!-- ==================================================
           JOURNEY GRID
      =================================================== -->

      <div class="journeys__grid">
        <article
          v-for="(journey, index) in journeys"
          :key="journey.slug"
          class="journeys__card"
          :class="`journeys__card--${index + 1}`"
        >
          <NuxtLink
            :to="`/journeys/${journey.slug}`"
            class="journeys__visual-link"
            :aria-label="`Explore ${journey.title}`"
          >
            <div class="journeys__visual">
              <img
                :src="journey.image"
                :alt="journey.title"
                class="journeys__image"
              >

              <div class="journeys__overlay" />

              <span class="journeys__image-index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <span class="journeys__hover-label">
                <span>Explore journey</span>
                <Icon name="lucide:arrow-up-right" />
              </span>

              <span class="journeys__image-arrow">
                <Icon name="lucide:arrow-up-right" />
              </span>
            </div>
          </NuxtLink>

          <div class="journeys__card-content">
            <div class="journeys__meta">
              <span>{{ journey.region }}</span>

              <span class="journeys__meta-dot" />

              <span>{{ journey.duration }}</span>
            </div>

            <NuxtLink
              :to="`/journeys/${journey.slug}`"
              class="journeys__title-link"
            >
              <h3 class="journeys__title">
                {{ journey.title }}
              </h3>

            </NuxtLink>

            <div class="journeys__route-row">
                <p class="journeys__route">
                    {{ journey.route }}
                </p>

                <Icon name="lucide:arrow-up-right" />
            </div>
          </div>
        </article>
      </div>

      <!-- ==================================================
           MOBILE / BOTTOM CTA
      =================================================== -->

      <div class="journeys__footer">
        <NuxtLink
          to="/journeys"
          class="journeys__footer-link"
        >
          <span>Discover all journeys</span>
          <Icon name="lucide:arrow-right" />
        </NuxtLink>
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
      clamp(110px, 7vw, 190px)
      var(--page-padding)
      clamp(55px, 4vw, 210px);
  }

  // ==========================================================
  // HEADER
  // ==========================================================

  &__header {
    display: grid;

    grid-template-columns:
      minmax(0, 1.35fr)
      minmax(320px, 0.65fr);

    align-items: end;

    gap:
      clamp(70px, 9vw, 170px);

    width: 100%;
  }

  &__header-left {
    min-width: 0;
  }

  &__header-right {
    width: 100%;
    max-width: 470px;

    padding-bottom: 8px;
  }

  &__eyebrow {
    margin: 0 0 26px;

    color: $color-text-muted;
  }

  &__heading {
    max-width: 900px;
    margin: 0;

    color: $color-charcoal;

    line-height: 1;
    letter-spacing: -0.045em;
  }

    &__heading-line {
    display: block;
    overflow: hidden;

    padding: 0.08em 0.16em 0.22em 0.06em;
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
    margin: 0;

    color: $color-text-muted;

    line-height: 1.6;
  }

  &__all {
    display: inline-flex;

    align-items: center;
    gap: 12px;

    margin-top: 30px;

    color: $color-charcoal;

    text-decoration: none;

    :deep(svg) {
      width: 15px;
      height: 15px;

        transition:
        transform $transition-medium;
    }

    &:hover :deep(svg) {
      transform: translateX(4px);
    }
  }

  // ==========================================================
  // GRID
  // ==========================================================

  &__grid {
    position: relative;

    display: grid;

    grid-template-columns:
      repeat(12, minmax(0, 1fr));

    column-gap:
      clamp(24px, 3vw, 54px);

    row-gap: clamp(60px, 6vw, 100px);

    margin-top:
      clamp(110px, 7vw, 190px);
  }

  // ==========================================================
  // CARD
  // ==========================================================

    &__card {
  position: relative;
  min-width: 0;

  // JOURNEY 01
  &--1 {
    grid-column-start: 1;
    grid-column-end: 8;
  }

  // JOURNEY 02
  &--2 {
    grid-column-start: 8;
    grid-column-end: 13;

    margin-top: clamp(70px, 7vw, 110px);
  }

  // JOURNEY 03
  &--3 {
    grid-column-start: 2;
    grid-column-end: 8;

    margin-top: clamp(-30px, -2vw, -10px);
  }

  // JOURNEY 04
  &--4 {
    grid-column-start: 8;
    grid-column-end: 13;

    margin-top: clamp(60px, 6vw, 100px);
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

    overflow: hidden;

    background: $color-sand;

    will-change: clip-path;

    .journeys__card--1 & {
      aspect-ratio: 1.35;
    }

    .journeys__card--2 & {
      aspect-ratio: 0.92;
    }

    .journeys__card--3 & {
      aspect-ratio: 1.22;
    }

    .journeys__card--4 & {
      aspect-ratio: 0.95;
    }
  }

  &__image {
    display: block;

    width: 100%;
    height: 106%;

    object-fit: cover;

    transform: scale(1);

    will-change: transform;

    transition:
      transform 1.2s
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        );
  }

  &__overlay {
    position: absolute;
    z-index: 2;

    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        to top,
        rgba(15, 15, 12, 0.32) 0%,
        rgba(15, 15, 12, 0.04) 45%,
        transparent 68%
      );

    opacity: 0.55;

    transition:
      opacity 700ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        );
  }

  // ==========================================================
  // IMAGE INDEX
  // ==========================================================

  &__image-index {
    position: absolute;
    z-index: 5;

    top: 22px;
    left: 24px;

    color:
      rgba(250, 248, 243, 0.82);

    font-family:
      'Manrope',
      sans-serif;

    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.14em;
  }

  // ==========================================================
  // IMAGE ARROW
  // ==========================================================

  &__image-arrow {
    position: absolute;
    z-index: 5;

    top: 18px;
    right: 18px;

    display: grid;

    width: 44px;
    height: 44px;

    place-items: center;

    border:
      1px solid
      rgba(250, 248, 243, 0.58);

    border-radius: 50%;

    color: $color-ivory-light;

    transition:
      background $transition-medium,
      color $transition-medium,
      transform $transition-medium;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }

  // ==========================================================
  // HOVER LABEL
  // ==========================================================

  &__hover-label {
    position: absolute;
    z-index: 5;

    right: 24px;
    bottom: 22px;

    display: inline-flex;

    align-items: center;
    gap: 10px;

    color: $color-ivory-light;

    font-family:
      'Manrope',
      sans-serif;

    padding: 12px 18px;

    border: 1px solid rgba(250, 248, 243, 0.7);
    border-radius: 100px;

    background: rgba(15, 15, 12, 0.25);
    backdrop-filter: blur(8px);

    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;

    text-transform: uppercase;

    opacity: 0;

    transform: translateY(12px);

    transition:
      opacity 500ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        ),
      transform 600ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        );

    :deep(svg) {
      width: 14px;
      height: 14px;
    }
  }

  &__visual-link:hover {
    .journeys__image {
      transform: scale(1.045);
    }

    .journeys__overlay {
      opacity: 1;
    }

    .journeys__image-arrow {
      background: $color-ivory-light;
      color: $color-charcoal;

      transform:
        translate(2px, -2px);
    }

    .journeys__hover-label {
        opacity: 1;
        transform: translateY(0);

        background: $color-ivory-light;
        color: $color-charcoal;
    }
  }

  // ==========================================================
  // CARD CONTENT
  // ==========================================================

  &__card-content {
    padding-top:
      clamp(22px, 2vw, 30px);

    will-change:
      transform,
      opacity;
  }

  &__meta {
    display: flex;

    align-items: center;
    gap: 10px;

    color: $color-text-muted;

    font-family:
      'Manrope',
      sans-serif;

    font-size:
      clamp(
        0.68rem,
        0.68vw,
        0.78rem
      );

    font-weight: 500;
    letter-spacing: 0.1em;

    text-transform: uppercase;
  }

  &__meta-dot {
    display: block;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: $color-stone;
  }

  // ==========================================================
  // TITLE
  // ==========================================================

  &__title-link {
    display: flex;

    align-items: flex-end;
    justify-content: space-between;

    gap: 25px;

    margin-top: 12px;

    color: $color-charcoal;

    text-decoration: none;

    :deep(svg) {
      width: 20px;
      height: 20px;

      flex: 0 0 auto;

      margin-bottom: 8px;

      transition:
        transform $transition-medium;
    }

    &:hover :deep(svg) {
      transform:
        translate(4px, -4px);
    }
  }

  &__title {
    max-width: 650px;
    margin: 0;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size:
      clamp(
        2.5rem,
        3.7vw,
        4.8rem
      );

    font-weight: 400;
    line-height: 0.98;
    letter-spacing: -0.035em;
  }

  &__route {
    margin: 14px 0 0;

    color: $color-text-muted;

    font-family:
      'Manrope',
      sans-serif;

    font-size:
      var(--fs-body-sm);

    line-height: 1.6;
  }

  &__route-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 14px;

    :deep(svg) {
        width: 15px;
        height: 15px;
    }
    }

    &__route {
    margin: 0;
    }

  // ==========================================================
  // FOOTER
  // ==========================================================

  &__footer {
    display: flex;

    justify-content: center;

    margin-top:
      clamp(70px, 5vw, 190px);
  }

  &__footer-link {
    display: inline-flex;

    align-items: center;
    justify-content: center;
    gap: 12px;

    min-height: 52px;

    padding: 0 24px;

    border:
      1px solid
      rgba(23, 23, 21, 0.4);

    border-radius: 100px;

    color: $color-charcoal;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-link);
    font-weight: 500;
    letter-spacing: 0.08em;

    text-decoration: none;
    text-transform: uppercase;

    transition:
      background $transition-medium,
      color $transition-medium,
      border-color $transition-medium;

    :deep(svg) {
      width: 15px;
      height: 15px;

      transition:
        transform $transition-medium;
    }

    &:hover {
      border-color:
        $color-charcoal;

      background:
        $color-charcoal;

      color:
        $color-ivory-light;
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
    &__grid {
      column-gap: 64px;
    }

    &__card {
    &--1 {
        grid-column-start: 1;
        grid-column-end: 8;
    }

    &--2 {
        grid-column-start: 9;
        grid-column-end: 13;
    }

    &--3 {
        grid-column-start: 2;
        grid-column-end: 8;
    }

    &--4 {
        grid-column-start: 8;
        grid-column-end: 13;
    }
    }
  }
}

// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1280px) {
  .journeys {
    &__header {
      grid-template-columns:
        minmax(0, 1.15fr)
        minmax(300px, 0.65fr);

      gap: 60px;
    }

    &__grid {
      row-gap: 130px;
    }

    &__card {
    &--1 {
        grid-column-start: 1;
        grid-column-end: 8;
    }

    &--2 {
        grid-column-start: 8;
        grid-column-end: 13;
        margin-top: 120px;
    }

    &--3 {
        grid-column-start: 1;
        grid-column-end: 8;
    }

    &--4 {
        grid-column-start: 8;
        grid-column-end: 13;
        margin-top: 90px;
    }
    }
  }
}

// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {
  .journeys {
    &__header {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    &__header-right {
      max-width: 560px;
    }

    &__grid {
      grid-template-columns:
        repeat(2, minmax(0, 1fr));

      gap: 80px 28px;

      margin-top: 90px;
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
        margin-top: 90px;
      }
    }

    &__visual {
      .journeys__card--1 &,
      .journeys__card--2 &,
      .journeys__card--3 &,
      .journeys__card--4 & {
        aspect-ratio: 0.95;
      }
    }
  }
}

// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {
  .journeys {
    &__inner {
      padding:
        82px
        var(--page-padding)
        90px;
    }

    &__header {
      gap: 32px;
    }

    &__eyebrow {
      margin-bottom: 20px;
    }

    &__heading {
      width: 100%;
      max-width: 560px;

      line-height: 0.94;
    }

    &__header-right {
      max-width: 480px;
    }

    &__all {
      margin-top: 24px;
    }

    // ========================================================
    // MOBILE CARDS
    // ========================================================

    &__grid {
      display: block;

      margin-top: 76px;
    }

    &__card {
      width: 100%;

      margin: 0 0 82px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__visual {
      .journeys__card--1 &,
      .journeys__card--2 &,
      .journeys__card--3 &,
      .journeys__card--4 & {
        aspect-ratio: 0.8;
      }
    }

    &__image {
      height: 105%;
    }

    &__image-index {
      top: 18px;
      left: 18px;
    }

    &__image-arrow {
      top: 14px;
      right: 14px;

      width: 40px;
      height: 40px;
    }

    &__hover-label {
      display: none;
    }

    &__card-content {
      padding-top: 20px;
    }

    &__title {
      font-size:
        clamp(
          2.8rem,
          11vw,
          4rem
        );
    }

    &__footer {
      margin-top: 82px;
    }
  }
}

// ============================================================
// SMALL MOBILE
// ============================================================

@media (max-width: 480px) {
  .journeys {
    &__inner {
      padding-top: 70px;
      padding-bottom: 76px;
    }

    &__grid {
      margin-top: 64px;
    }

    &__card {
      margin-bottom: 70px;
    }

    &__title {
      font-size:
        clamp(
          2.55rem,
          11vw,
          3.6rem
        );
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
    &__intro,
    &__all,
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