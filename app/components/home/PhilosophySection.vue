<template>
  <section
    ref="sectionRef"
    class="philosophy"
  >
    <!-- LEFT IMAGE -->
    <div class="philosophy__visual">
      <div class="philosophy__image-wrap">
        <img
          ref="imageRef"
          src="/images/home/philosophy.jpg"
          alt="A meaningful Vedic Journey travel experience"
          class="philosophy__image"
        >
      </div>
    </div>

    <!-- RIGHT CONTENT -->
    <div class="philosophy__panel">
      <div class="philosophy__content">

        <!-- Heading -->
        <h2 class="philosophy__title heading-xl">
          <span class="philosophy__title-line">
            <span class="philosophy__title-text">
              Travel shaped
            </span>
          </span>

          <span class="philosophy__title-line">
            <span class="philosophy__title-text">
              around <em>you.</em>
            </span>
          </span>
        </h2>

        <!-- Bottom copy -->
        <div class="philosophy__copy">
          <p class="philosophy__description body">
            We believe the most memorable journeys aren't chosen
            from a shelf. They begin with a conversation — your
            curiosity, your rhythm, and the experiences that move you.
            From India to the world beyond, every journey is thoughtfully
            shaped around the person taking it.
          </p>

          <NuxtLink
            to="/about"
            class="philosophy__link"
            aria-label="Discover the Vedic Journey approach"
          >
            <span class="philosophy__link-line" />

            <Icon name="lucide:arrow-right" />
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)

let ctx: gsap.Context | undefined

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  ctx = gsap.context(() => {
    const mm = gsap.matchMedia()

    // ========================================================
    // DESKTOP / TABLET
    // ========================================================

    mm.add('(min-width: 769px)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 82%',
          end: 'top -10%',
          scrub: 1.15
        }
      })

      // Dark panel
      timeline.from(
        '.philosophy__panel',
        {
          opacity: 0,
          duration: 0.35
        },
        0
      )

      // Image container reveals from left
      timeline.fromTo(
        '.philosophy__image-wrap',
        {
          clipPath: 'inset(0 100% 0 0)'
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'power3.inOut',
          duration: 2.5
        },
        0
      )

      // Image itself moves underneath mask
      timeline.fromTo(
        imageRef.value,
        {
          scale: 1.14,
          xPercent: -10
        },
        {
          scale: 1,
          xPercent: 0,
          ease: 'power3.out',
          duration: 1.3
        },
        0
      )

      // Heading line reveal
      timeline.from(
        '.philosophy__title-text',
        {
          yPercent: 115,
          stagger: 0.1,
          ease: 'power3.out',
          duration: 0.85
        },
        0.3
      )

      // Paragraph
      timeline.from(
        '.philosophy__description',
        {
          y: 30,
          opacity: 0,
          ease: 'power2.out',
          duration: 0.65
        },
        0.62
      )

      // Arrow
      timeline.from(
        '.philosophy__link',
        {
          x: -18,
          opacity: 0,
          ease: 'power2.out',
          duration: 0.55
        },
        0.72
      )

      // ------------------------------------------------------
      // IMAGE PARALLAX
      // ------------------------------------------------------

      gsap.fromTo(
        imageRef.value,
        {
          yPercent: -2
        },
        {
          yPercent: 3,
          ease: 'none',

          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      )
    })

    // ========================================================
    // MOBILE
    // ========================================================

    mm.add('(max-width: 768px)', () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 88%'
        }
      })

      timeline.fromTo(
        '.philosophy__image-wrap',
        {
          clipPath: 'inset(0 100% 0 0)'
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          ease: 'power3.inOut',
          duration: 1
        }
      )

      timeline.from(
        '.philosophy__title-text',
        {
          yPercent: 110,
          stagger: 0.1,
          ease: 'power3.out',
          duration: 0.8
        },
        '-=0.45'
      )

      timeline.from(
        '.philosophy__description',
        {
          y: 22,
          opacity: 0,
          duration: 0.65
        },
        '-=0.45'
      )

      timeline.from(
        '.philosophy__link',
        {
          opacity: 0,
          x: -15,
          duration: 0.5
        },
        '-=0.3'
      )
    })

    return () => {
      mm.revert()
    }
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;


// ============================================================
// SECTION
// ============================================================

.philosophy {
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100%;

  min-height: 100svh;

  overflow: hidden;

  background: $color-charcoal;
  color: $color-ivory-light;


  // ==========================================================
  // LEFT — IMAGE
  // ==========================================================

  &__visual {
    position: relative;

    min-width: 0;
    min-height: 100svh;

    overflow: hidden;
  }


  &__image-wrap {
    position: absolute;

    inset: 0;

    overflow: hidden;

    clip-path: inset(0 0 0 0);

    will-change: clip-path;
  }


  &__image {
    display: block;

    width: 100%;
    height: 106%;

    object-fit: cover;
    object-position: center;

    will-change: transform;
  }


  // ==========================================================
  // RIGHT — PANEL
  // ==========================================================

  &__panel {
    position: relative;

    min-width: 0;
    min-height: 100svh;

    background: $color-charcoal;
  }


  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    padding:
      clamp(70px, 6vw, 115px)
      clamp(45px, 7vw, 130px)
      clamp(70px, 7vw, 120px);
  }


  // ==========================================================
  // HEADING
  // ==========================================================

  &__title {
    position: relative;

    z-index: 2;

    width: min(920px, 62vw);

    /*
     * Pull the title across the image/panel boundary,
     * like the editorial reference you shared.
     */
    margin-left: clamp(-120px, -6.5vw, -70px);

    color: #cdb28d;
  }


  &__title-line {
    display: block;

    overflow: hidden;

    padding-bottom: 0.06em;
  }


  &__title-text {
    display: block;

    will-change: transform;
  }


  &__title em {
    font-weight: 400;
    font-style: italic;
  }


  // ==========================================================
  // COPY
  // ==========================================================

  &__copy {
    width: min(100%, 500px);

    margin-left: clamp(10px, 4vw, 75px);
  }


  &__description {
    margin: 0;

    color: rgba(250, 248, 243, 0.9);
  }


  // ==========================================================
  // LINK
  // ==========================================================

  &__link {
    display: inline-flex;
    align-items: center;

    gap: 0;

    width: fit-content;

    margin-top: 30px;

    color: $color-ivory-light;

    transition: gap $transition-medium;

    &:hover {
      gap: 12px;

      .philosophy__link-line {
        width: 56px;
      }
    }

    :deep(svg) {
      width: 20px;
      height: 20px;
    }
  }


  &__link-line {
    display: block;

    width: 42px;
    height: 1px;

    margin-right: -1px;

    background: currentColor;

    transition: width $transition-medium;
  }


  // ==========================================================
  // SECTION NUMBER
  // ==========================================================

  &__marker {
    position: absolute;

    right: clamp(24px, 3vw, 55px);
    bottom: clamp(22px, 3vw, 45px);

    font-family: 'Manrope', sans-serif;
    font-size: var(--fs-body-sm);
    font-weight: 500;

    letter-spacing: 0.14em;

    color: rgba(250, 248, 243, 0.45);
  }
}


// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1366px) {

  .philosophy {

    &__content {
      padding:
        65px
        clamp(40px, 6vw, 85px)
        65px;
    }


    &__title {
      width: min(800px, 64vw);

      margin-left: -70px;
    }


    &__copy {
      max-width: 460px;

      margin-left: 20px;
    }
  }
}


// ============================================================
// TABLET
// ============================================================

@media (max-width: 1024px) {

  .philosophy {
    grid-template-columns: 48% 52%;


    &__content {
      padding:
        60px
        40px
        60px;
    }


    &__title {
      width: min(700px, 72vw);

      margin-left: -65px;
    }


    &__copy {
      margin-left: 0;
    }
  }
}


// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {

  .philosophy {
    display: block;

    min-height: auto;


    // --------------------------------------------------------
    // IMAGE
    // --------------------------------------------------------

    &__visual {
      width: 100%;
      min-height: auto;
      height: 62svh;

      background: $color-charcoal;
    }


    &__image-wrap {
      position: absolute;
    }


    &__image {
      height: 105%;

      object-position: center;
    }


    // --------------------------------------------------------
    // PANEL
    // --------------------------------------------------------

    &__panel {
      min-height: auto;
    }


    &__content {
      min-height: 72svh;

      padding:
        55px
        var(--page-padding)
        80px;
    }


    // --------------------------------------------------------
    // TITLE
    // --------------------------------------------------------

    &__title {
      width: 100%;

      margin-left: 0;
    }


    // --------------------------------------------------------
    // COPY
    // --------------------------------------------------------

    &__copy {
      width: 100%;
      max-width: 500px;

      margin-top: 80px;
      margin-left: 0;
    }


    &__description {
      max-width: 430px;
    }


    &__marker {
      right: var(--page-padding);
      bottom: 28px;
    }
  }
}


// ============================================================
// SMALL MOBILE
// ============================================================

@media (max-width: 480px) {

  .philosophy {

    &__visual {
      height: 55svh;
    }


    &__content {
      min-height: 68svh;

      padding-top: 45px;
      padding-bottom: 70px;
    }


    &__copy {
      margin-top: 60px;
    }
  }
}


// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {

  .philosophy {

    &__image-wrap {
      clip-path: none !important;
    }


    &__image,
    &__title-text,
    &__description,
    &__link {
      transform: none !important;
    }
  }
}
</style>