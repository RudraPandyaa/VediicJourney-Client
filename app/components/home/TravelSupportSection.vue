<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Visa Assistance',
    description:
      'Clear guidance through visa requirements and documentation, helping make the process feel straightforward from the start.'
  },
  {
    title: 'Flights & Connections',
    description:
      'Thoughtfully considered routes and connections designed around comfort, timing and the rhythm of your journey.'
  },
  {
    title: 'Private Transfers',
    description:
      'Seamless arrivals, departures and private transfers arranged so every transition feels effortless.'
  },
  {
    title: 'On-ground Support',
    description:
      'Personal assistance throughout your journey, with trusted local support whenever and wherever it is needed.'
  }
]

const sectionRef = ref<HTMLElement | null>(null)

let ctx: gsap.Context | null = null

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (!sectionRef.value) return

  ctx = gsap.context(() => {
    // ========================================================
    // INITIAL STATES
    // ========================================================

    gsap.set('.travel-support__heading-text', {
      yPercent: 110
    })

    gsap.set('.travel-support__intro', {
      opacity: 0,
      y: 20
    })

    gsap.set('.travel-support__service', {
      opacity: 0,
      y: 30
    })

    gsap.set('.travel-support__cta', {
      opacity: 0,
      y: 30
    })

    // ========================================================
    // HEADER ANIMATION
    // ========================================================

    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 78%',
        once: true
      }
    })

    headerTimeline
      .to(
        '.travel-support__heading-text',
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out'
        }
      )
      .to(
        '.travel-support__intro',
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out'
        },
        0.2
      )

    // ========================================================
    // SERVICE BOXES
    // ========================================================

    const serviceCards =
      sectionRef.value.querySelectorAll<HTMLElement>(
        '.travel-support__service'
      )

    serviceCards.forEach((service, index) => {
      gsap.to(service, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: service,
          start: 'top 88%',
          once: true
        }
      })
    })

    // ========================================================
    // CTA
    // ========================================================

    gsap.to('.travel-support__cta', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.travel-support__cta',
        start: 'top 88%',
        once: true
      }
    })
  }, sectionRef.value)
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

      <!-- ==================================================
           HEADER
      =================================================== -->

      <header class="travel-support__header">

        <h2 class="travel-support__heading heading-xl">

          <span class="travel-support__heading-line">
            <span class="travel-support__heading-text">
              EVERY DETAIL
            </span>
          </span>

          <span class="travel-support__heading-line">
            <span
              class="travel-support__heading-text travel-support__heading-text--accent"
            >
              TAKEN CARE OF
            </span>
          </span>

        </h2>

        <p class="travel-support__intro body-large">
          From the practical to the personal, we help make
          every part of your journey feel considered,
          seamless and effortless.
        </p>

      </header>


      <!-- ==================================================
           SERVICES
      =================================================== -->

      <div class="travel-support__services">

        <article
          v-for="service in services"
          :key="service.title"
          class="travel-support__service"
        >

          <div class="travel-support__service-inner">

            <h3 class="travel-support__service-title">
              {{ service.title }}
            </h3>

            <p class="travel-support__description">
              {{ service.description }}
            </p>

          </div>

        </article>

      </div>


      <!-- ==================================================
           CTA
      =================================================== -->

      <div class="travel-support__cta">

        <div class="travel-support__cta-content">


          <h3 class="travel-support__cta-title">
            Let us take care
            <span>
              of the details.
            </span>
          </h3>

        </div>

        <NuxtLink
          to="/contact"
          class="travel-support__cta-link"
        >
          <span>
            Enquire Now
          </span>

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

.travel-support {
  position: relative;

  z-index: 2;

  overflow: hidden;

  background: $color-ivory-light;

  color: $color-charcoal;
}


// ============================================================
// INNER
// ============================================================

.travel-support__inner {
  width: 100%;

  max-width: 1600px;

  margin-inline: auto;

  padding:
    clamp(90px, 8vw, 140px)
    var(--page-padding)
    clamp(90px, 8vw, 140px);
}


// ============================================================
// HEADER
// ============================================================

.travel-support__header {
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  text-align: center;
}


// ============================================================
// MAIN HEADING
// ============================================================

.travel-support__heading {
  width: 100%;

  max-width: 850px;

  margin: 0;

  color: $color-charcoal;

  font-family:
    'Bebas Neue',
    sans-serif;

  /*
   * Smaller than the previous version.
   * This keeps the heading closer to the scale
   * used by the other sections.
   */
  font-size:
    clamp(
      3.8rem,
      6vw,
      6.8rem
    );

  font-weight: 400;

  line-height: 0.86;

  letter-spacing: 0.02em;

  text-align: center;
}


.travel-support__heading-line {
  display: block;

  overflow: hidden;

  padding:
    0.02em
    0.06em
    0.08em;
}


.travel-support__heading-text {
  display: block;

  will-change: transform;
}


/*
 * Keep the color you already changed.
 * No plum color is introduced here.
 */
.travel-support__heading-text--accent {
  color: #000;
}


// ============================================================
// INTRO / SUBTEXT
// ============================================================

.travel-support__intro {
  width: 100%;

  max-width: 610px;

  margin:
    clamp(28px, 3vw, 42px)
    auto
    0;

  color: $color-text-muted;

  line-height: 1.7;

  text-align: center;
}


// ============================================================
// SERVICES
// ============================================================

.travel-support__services {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    22px;

  width: 100%;

  margin-top:
    clamp(65px, 7vw, 105px);
}


// ============================================================
// SERVICE BOX
// ============================================================

.travel-support__service {
  position: relative;

  min-height:
    clamp(
      250px,
      20vw,
      320px
    );

  padding:
    clamp(35px, 4vw, 58px);

  border:
    1px solid
    rgba(
      23,
      23,
      21,
      0.18
    );

  background: transparent;

  opacity: 0;

  overflow: hidden;

  transition:
    transform 500ms
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    ),

    background 500ms
    ease,

    border-color 500ms
    ease;
}


// ============================================================
// SERVICE INNER
// ============================================================

.travel-support__service-inner {
  position: relative;

  z-index: 2;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  height: 100%;
}


// ============================================================
// SERVICE TITLE
// ============================================================

.travel-support__service-title {
  margin: 0;

  /*
   * Same font family as the main heading.
   */
  font-family:
    'Bebas Neue',
    sans-serif;

  font-size:
    clamp(
      2.8rem,
      4vw,
      4.5rem
    );

  font-weight: 400;

  line-height: 0.9;

  letter-spacing: 0.015em;

  color: $color-charcoal;
}


// ============================================================
// SERVICE DESCRIPTION
// ============================================================

.travel-support__description {
  max-width: 500px;

  margin:
    30px
    0
    0;

  /*
   * Same typography family as the main heading's subtext.
   */
  font-family:
    'Manrope',
    sans-serif;

  font-size:
    var(--fs-body-sm);

  font-weight: 400;

  line-height: 1.7;

  color: $color-text-muted;
}


// ============================================================
// BOX HOVER
// ============================================================

.travel-support__service::before {
  content: '';

  position: absolute;

  right: 0;

  bottom: 0;

  left: 0;

  height: 3px;

  background:
    $color-charcoal;

  transform:
    scaleX(0);

  transform-origin:
    left center;

  transition:
    transform 600ms
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}


.travel-support__service:hover {
  transform:
    translateY(-6px);

  border-color:
    rgba(
      23,
      23,
      21,
      0.35
    );
}


.travel-support__service:hover::before {
  transform:
    scaleX(1);
}


// ============================================================
// CTA
// ============================================================

.travel-support__cta {
  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 60px;

  margin-top:
    clamp(
      85px,
      9vw,
      140px
    );

  padding-top:
    clamp(
      50px,
      5vw,
      75px
    );

  border-top:
    1px solid
    rgba(
      23,
      23,
      21,
      0.2
    );

  opacity: 0;
}


// ============================================================
// CTA LABEL
// ============================================================

.travel-support__cta-label {
  margin:
    0
    0
    18px;

  color: $color-text-muted;
}


// ============================================================
// CTA TITLE
// ============================================================

.travel-support__cta-title {
  max-width: 700px;

  margin: 0;

  color: $color-charcoal;

  font-family:
    'Bebas Neue',
    sans-serif;

  font-size:
    clamp(
      3.8rem,
      6vw,
      6.8rem
    );

  font-weight: 400;

  line-height: 0.86;

  letter-spacing: 0.02em;
}


/*
 * No plum.
 * Keep the CTA within the existing text color.
 */
.travel-support__cta-title span {
  color: inherit;
}


// ============================================================
// CTA BUTTON
// ============================================================

.travel-support__cta-link {
  display: inline-flex;

  flex: 0 0 auto;

  align-items: center;

  justify-content: center;

  gap: 12px;

  min-height: 54px;

  padding:
    0 25px;

  border:
    1px solid
    $color-charcoal;

  

  background: #000;

  color: #fff;

  font-family:
    'Manrope',
    sans-serif;

  font-size:
    var(--fs-link);

  font-weight: 500;

  letter-spacing: 0.07em;

  text-decoration: none;

  text-transform: uppercase;

  transition:
    background
    $transition-medium,

    color
    $transition-medium;
}


.travel-support__cta-link :deep(svg) {
  width: 16px;

  height: 16px;

  transition:
    transform
    $transition-medium;
}


.travel-support__cta-link:hover {
  background:
    transparent;

  color:
    #000;
}


.travel-support__cta-link:hover :deep(svg) {
  transform:
    translateX(4px);
}


// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {

  .travel-support__services {
    gap: 16px;
  }


  .travel-support__service {
    min-height: 270px;

    padding:
      35px;
  }


  .travel-support__cta {
    align-items: flex-start;

    flex-direction: column;

    gap: 35px;
  }

}


// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {

  .travel-support__inner {
    padding:
      75px
      var(--page-padding)
      85px;
  }


  .travel-support__heading {
    max-width: 600px;

    font-size:
      clamp(
        3.5rem,
        12vw,
        5.5rem
      );

    line-height: 0.88;
  }


  .travel-support__intro {
    max-width: 500px;

    margin-top: 26px;
  }


  .travel-support__services {
    grid-template-columns: 1fr;

    gap: 14px;

    margin-top: 60px;
  }


  .travel-support__service {
    min-height: 230px;

    padding:
      32px;
  }


  .travel-support__service-title {
    font-size:
      clamp(
        2.8rem,
        10vw,
        4rem
      );
  }


  .travel-support__description {
    margin-top: 25px;
  }


  .travel-support__cta {
    margin-top: 75px;

    padding-top: 45px;
  }


  .travel-support__cta-title {
    font-size:
      clamp(
        3.5rem,
        13vw,
        5.5rem
      );
  }


  .travel-support__cta-link {
    width: 100%;
  }

}


// ============================================================
// SMALL MOBILE
// ============================================================

@media (max-width: 480px) {

  .travel-support__inner {
    padding-top: 65px;

    padding-bottom: 70px;
  }


  .travel-support__heading {
    font-size:
      clamp(
        3.2rem,
        12vw,
        4.8rem
      );
  }


  .travel-support__service {
    min-height: 215px;

    padding:
      28px;
  }


  .travel-support__service-title {
    font-size:
      2.7rem;
  }


  .travel-support__description {
    font-size:
      0.88rem;

    line-height: 1.65;
  }


  .travel-support__cta-title {
    font-size:
      3.5rem;
  }

}


// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {

  .travel-support__heading-text,
  .travel-support__intro,
  .travel-support__service,
  .travel-support__cta {
    opacity: 1 !important;

    transform: none !important;

    transition: none !important;
  }

}
</style>