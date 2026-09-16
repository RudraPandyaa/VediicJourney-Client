<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)

const points = [
  {
    number: '01',
    title: '25+ Years',
    text: 'Experience across travel, hospitality and aviation.'
  },
  {
    number: '02',
    title: 'Personally Designed',
    text: 'Every journey thoughtfully shaped around the individual.'
  },
  {
    number: '03',
    title: 'Global Perspective',
    text: 'India and the world, understood through experience and local insight.'
  }
]

let ctx: gsap.Context | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  ctx = gsap.context(() => {
    // --------------------------------------------------------
    // INITIAL STATES
    // --------------------------------------------------------

    gsap.set('.why-vedic__eyebrow', {
      opacity: 0,
      y: 20
    })

    gsap.set('.why-vedic__heading-text', {
      yPercent: 110
    })

    gsap.set('.why-vedic__intro', {
      opacity: 0,
      y: 28
    })

    gsap.set('.why-vedic__visual', {
      clipPath: 'inset(100% 0 0 0)'
    })

    gsap.set('.why-vedic__image', {
      scale: 1.12
    })

    gsap.set('.why-vedic__point', {
      opacity: 0,
      y: 30
    })

    gsap.set('.why-vedic__link', {
      opacity: 0,
      y: 18
    })

    // --------------------------------------------------------
    // INTRO
    // --------------------------------------------------------

    const intro = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 75%',
        once: true
      }
    })

    intro
      .to(
        '.why-vedic__eyebrow',
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power3.out'
        },
        0
      )
      .to(
        '.why-vedic__heading-text',
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out'
        },
        0.08
      )
      .to(
        '.why-vedic__intro',
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out'
        },
        0.32
      )

    // --------------------------------------------------------
    // IMAGE REVEAL
    // --------------------------------------------------------

    const visualTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.why-vedic__body',
        start: 'top 78%',
        toggleActions: 'play none none reverse'
      }
    })

    visualTimeline
      .to(
        '.why-vedic__visual',
        {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.25,
          ease: 'power3.inOut'
        },
        0
      )
      .to(
        '.why-vedic__image',
        {
          scale: 1,
          duration: 1.5,
          ease: 'power3.out'
        },
        0
      )
      .to(
        '.why-vedic__point',
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out'
        },
        0.45
      )
      .to(
        '.why-vedic__link',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        },
        0.72
      )

    // --------------------------------------------------------
    // IMAGE PARALLAX
    // --------------------------------------------------------

    gsap.fromTo(
      '.why-vedic__image',
      {
        yPercent: -3
      },
      {
        yPercent: 3,
        ease: 'none',
        scrollTrigger: {
          trigger: '.why-vedic__visual',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      }
    )
  }, sectionRef.value)
})

onBeforeUnmount(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="why-vedic"
  >
    <!-- subtle decorative number -->
    <span
      class="why-vedic__background-number"
      aria-hidden="true"
    >
      25
    </span>

    <div class="why-vedic__inner">
      <!-- ================================================
           INTRO
      ================================================= -->

      <header class="why-vedic__header">
        <div class="why-vedic__header-left">
          <p class="why-vedic__eyebrow eyebrow">
            Why Vedic Journey
          </p>

          <h2 class="why-vedic__heading heading-xl">
            <span class="why-vedic__heading-line">
              <span class="why-vedic__heading-text">
                Travel designed with
              </span>
            </span>

            <span class="why-vedic__heading-line">
              <span class="why-vedic__heading-text">
                knowledge, instinct
              </span>
            </span>

            <span class="why-vedic__heading-line">
              <span class="why-vedic__heading-text">
                and <em>genuine care.</em>
              </span>
            </span>
          </h2>
        </div>

        <div class="why-vedic__header-right">
          <p class="why-vedic__intro body-large">
            More than an itinerary. We bring decades of
            experience, personal understanding and thoughtful
            attention to every journey we create.
          </p>
        </div>
      </header>

      <!-- ================================================
           BODY
      ================================================= -->

      <div class="why-vedic__body">
        <!-- IMAGE -->

        <div class="why-vedic__visual-column">
          <div class="why-vedic__visual">
            <img
              src="/images/home/why-vedic.jpg"
              alt="Vedic Journey travel experience"
              class="why-vedic__image"
            >

            <div class="why-vedic__image-overlay" />

            <div class="why-vedic__image-caption">
              <span>Experience</span>
              <span>built over decades</span>
            </div>
          </div>
        </div>

        <!-- CONTENT -->

        <div class="why-vedic__content">
          <div class="why-vedic__points">
            <article
              v-for="point in points"
              :key="point.number"
              class="why-vedic__point"
            >
              <span class="why-vedic__point-number">
                {{ point.number }}
              </span>

              <div class="why-vedic__point-main">
                <h3 class="why-vedic__point-title">
                  {{ point.title }}
                </h3>

                <p class="why-vedic__point-text">
                  {{ point.text }}
                </p>
              </div>

              <span class="why-vedic__point-arrow">
                <Icon name="lucide:arrow-up-right" />
              </span>
            </article>
          </div>

          <NuxtLink
            to="/about"
            class="why-vedic__link"
          >
            <span>Discover our story</span>
            <Icon name="lucide:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.why-vedic {
  position: relative;
  z-index: 2;

  overflow: hidden;

  background: $color-charcoal;
  color: $color-ivory;

  // ==========================================================
  // DECORATIVE 25
  // ==========================================================

  &__background-number {
    position: absolute;
    z-index: 0;

    top: 31%;
    right: -0.04em;

    color: rgba(244, 240, 232, 0.025);

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size: clamp(22rem, 39vw, 48rem);
    font-weight: 400;
    line-height: 0.7;
    letter-spacing: -0.08em;

    pointer-events: none;
    user-select: none;
  }

  &__inner {
    position: relative;
    z-index: 2;

    padding:
      clamp(110px, 10vw, 180px)
      var(--page-padding)
      clamp(110px, 11vw, 190px);
  }

  // ==========================================================
  // HEADER
  // ==========================================================

  &__header {
    display: grid;

    grid-template-columns:
      minmax(0, 1.25fr)
      minmax(320px, 0.6fr);

    align-items: end;

    gap: clamp(70px, 9vw, 160px);
  }

  &__eyebrow {
    margin: 0 0 26px;

    color: $color-stone;
  }

  &__heading {
    max-width: 850px;
    margin: 0;

    color: $color-ivory-light;

    line-height: 0.93;
    letter-spacing: -0.045em;
  }

  &__heading-line {
    display: block;
    overflow: hidden;

    padding:
      0.06em
      0.12em
      0.15em
      0.04em;
  }

  &__heading-text {
    display: block;

    will-change: transform;
  }

  &__heading em {
    color: $color-sand;

    font-weight: 400;
    font-style: italic;
  }

  &__header-right {
    max-width: 470px;

    padding-bottom: 10px;
  }

  &__intro {
    margin: 0;

    color: rgba(244, 240, 232, 0.58);

    line-height: 1.65;
  }

  // ==========================================================
  // BODY
  // ==========================================================

  &__body {
    display: grid;

    grid-template-columns:
      minmax(500px, 1.15fr)
      minmax(380px, 0.65fr);

    align-items: center;

    gap: clamp(70px, 9vw, 170px);

    margin-top:
      clamp(90px, 9vw, 150px);
  }

  // ==========================================================
  // IMAGE
  // ==========================================================

  &__visual-column {
    min-width: 0;
  }

  &__visual {
    position: relative;

    width: 100%;
    max-width: 900px;

    aspect-ratio: 1.18;

    overflow: hidden;

    background: #272622;

    will-change: clip-path;
  }

  &__image {
    display: block;

    width: 100%;
    height: 106%;

    object-fit: cover;

    will-change: transform;
  }

  &__image-overlay {
    position: absolute;
    z-index: 2;

    inset: 0;

    background:
      linear-gradient(
        to top,
        rgba(15, 15, 13, 0.55) 0%,
        rgba(15, 15, 13, 0.05) 50%,
        transparent 75%
      );

    pointer-events: none;
  }

  &__image-caption {
    position: absolute;
    z-index: 4;

    right: 26px;
    bottom: 24px;
    left: 26px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    color: rgba(250, 248, 243, 0.8);

    font-family:
      'Manrope',
      sans-serif;

    font-size: clamp(0.66rem, 0.7vw, 0.78rem);
    font-weight: 500;
    letter-spacing: 0.1em;

    text-transform: uppercase;
  }

  // ==========================================================
  // CONTENT
  // ==========================================================

  &__content {
    width: 100%;
    max-width: 550px;
  }

  &__points {
    border-top:
      1px solid
      rgba(244, 240, 232, 0.18);
  }

  &__point {
    position: relative;

    display: grid;

    grid-template-columns:
      42px
      minmax(0, 1fr)
      28px;

    gap: 18px;

    align-items: start;

    padding:
      clamp(25px, 2.3vw, 38px)
      0;

    border-bottom:
      1px solid
      rgba(244, 240, 232, 0.18);

    cursor: default;

    transition:
      padding-left 600ms
        cubic-bezier(0.22, 1, 0.36, 1);

    &::before {
      content: '';

      position: absolute;

      right: 0;
      bottom: -1px;
      left: 0;

      height: 1px;

      background: $color-sand;

      transform: scaleX(0);
      transform-origin: left center;

      transition:
        transform 700ms
          cubic-bezier(0.22, 1, 0.36, 1);
    }

    &:hover {
      padding-left: 10px;
    }

    &:hover::before {
      transform: scaleX(1);
    }

    &:hover .why-vedic__point-arrow {
      opacity: 1;

      transform: translate(3px, -3px);
    }
  }

  &__point-number {
    padding-top: 5px;

    color: $color-stone;

    font-family:
      'Manrope',
      sans-serif;

    font-size: 0.67rem;
    font-weight: 500;
    letter-spacing: 0.12em;
  }

  &__point-title {
    margin: 0;

    color: $color-ivory-light;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size: clamp(2rem, 2.5vw, 3.25rem);
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  &__point-text {
    max-width: 350px;

    margin: 10px 0 0;

    color: rgba(244, 240, 232, 0.5);

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-body-sm);
    line-height: 1.65;
  }

  &__point-arrow {
    display: flex;

    justify-content: flex-end;

    padding-top: 6px;

    color: $color-sand;

    opacity: 0.35;

    transition:
      opacity $transition-medium,
      transform $transition-medium;

    :deep(svg) {
      width: 16px;
      height: 16px;
    }
  }

  // ==========================================================
  // LINK
  // ==========================================================

  &__link {
    display: inline-flex;

    align-items: center;
    gap: 12px;

    margin-top: 40px;

    padding-bottom: 7px;

    border-bottom:
      1px solid
      rgba(244, 240, 232, 0.4);

    color: $color-ivory-light;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-link);
    font-weight: 500;
    letter-spacing: 0.08em;

    text-decoration: none;
    text-transform: uppercase;

    :deep(svg) {
      width: 15px;
      height: 15px;

      transition:
        transform $transition-medium;
    }

    &:hover :deep(svg) {
      transform: translateX(5px);
    }
  }
}

// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1280px) {
  .why-vedic {
    &__header {
      grid-template-columns:
        minmax(0, 1.1fr)
        minmax(300px, 0.6fr);

      gap: 60px;
    }

    &__body {
      grid-template-columns:
        minmax(450px, 1.05fr)
        minmax(340px, 0.65fr);

      gap: 65px;
    }

    &__visual {
      aspect-ratio: 1.05;
    }
  }
}

// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {
  .why-vedic {
    &__header {
      grid-template-columns: 1fr;

      gap: 40px;
    }

    &__header-right {
      max-width: 570px;
    }

    &__body {
      grid-template-columns: 1fr;

      gap: 65px;
    }

    &__visual {
      max-width: none;

      aspect-ratio: 1.25;
    }

    &__content {
      max-width: none;
    }

    &__background-number {
      top: 47%;

      font-size: 60vw;
    }
  }
}

// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {
  .why-vedic {
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
      line-height: 0.96;
    }

    &__header {
      gap: 30px;
    }

    &__body {
      gap: 52px;

      margin-top: 65px;
    }

    &__visual {
      aspect-ratio: 4 / 5;
    }

    &__image-caption {
      right: 18px;
      bottom: 18px;
      left: 18px;

      font-size: 0.62rem;
    }

    &__point {
      grid-template-columns:
        34px
        minmax(0, 1fr)
        22px;

      gap: 12px;

      padding: 26px 0;

      &:hover {
        padding-left: 0;
      }
    }

    &__point-title {
      font-size:
        clamp(2.25rem, 9vw, 3rem);
    }

    &__point-text {
      margin-top: 8px;
    }

    &__link {
      margin-top: 34px;
    }

    &__background-number {
      display: none;
    }
  }
}

// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {
  .why-vedic {
    &__eyebrow,
    &__heading-text,
    &__intro,
    &__visual,
    &__image,
    &__point,
    &__link {
      opacity: 1 !important;

      transform: none !important;

      transition: none !important;
    }
  }
}
</style>