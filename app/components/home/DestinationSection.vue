<template>
  <section ref="sectionRef" class="destinations">
    <div ref="stageRef" class="destinations__stage">

      <!-- ==================================================
           MAIN LAYOUT
      =================================================== -->

      <div class="destinations__layout">
        <!-- ==================================================
             LEFT CONTENT
        =================================================== -->

        <div class="destinations__content">
          <h2 class="destinations__heading heading-xl">
            <span class="destinations__heading-line">
              <span class="destinations__heading-text">
                Where will your
              </span>
            </span>

            <span class="destinations__heading-line">
              <span class="destinations__heading-text">
                journey take you?
              </span>
            </span>
          </h2>

          <!-- Active destination -->
          <div class="destinations__destination">
            <div class="destinations__name-mask">
              <h3 ref="nameRef" class="destinations__name">
                {{ activeDestination.name }}
              </h3>
            </div>

            <div class="destinations__description-mask">
              <p ref="descriptionRef" class="destinations__description body-large">
                {{ activeDestination.description }}
              </p>
            </div>
            <!-- Explore destination -->
            <div ref="exploreRef" class="destinations__explore-wrap">
              <NuxtLink :to="activeDestination.url" class="destinations__explore"
                :aria-label="`Explore ${activeDestination.name}`">
                <span>
                  Explore {{ activeDestination.name }}
                </span>

                <Icon name="lucide:arrow-right" />
              </NuxtLink>
            </div>

            <div class="destinations__counter">
              <!-- <span
                ref="counterRef"
                class="destinations__counter-current"
              >
                {{ activeNumber }}
              </span> -->

              <!-- <span class="destinations__counter-line" />

              <span class="destinations__counter-total">
                {{ totalNumber }}
              </span> -->
            </div>
          </div>
        </div>

        <!-- ==================================================
             RIGHT VISUAL
        =================================================== -->

        <div class="destinations__visual-wrap">
          <div ref="visualRef" class="destinations__visual">
            <div class="destinations__image-stage">
              <div v-for="(destination, index) in destinations" :key="`${destination.name}-image`"
                class="destinations__image-layer" :data-index="index">
                <img :src="destination.image" :alt="destination.name" class="destinations__image">
              </div>

              <div class="destinations__image-overlay" />

              <!-- Previous / Next -->
              <div class="destinations__controls">
                <button type="button" class="destinations__control" aria-label="Previous destination"
                  @click="previousDestination">
                  <Icon name="lucide:arrow-left" />
                </button>

                <span class="destinations__control-line" />

                <button type="button" class="destinations__control" aria-label="Next destination"
                  @click="nextDestination">
                  <Icon name="lucide:arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ==================================================
           BOTTOM NAVIGATION
      =================================================== -->

      <!-- <div class="destinations__navigation">
        <button
          v-for="(destination, index) in destinations"
          :key="`${destination.name}-navigation`"
          type="button"
          class="destinations__nav-item"
          :class="{
            'destinations__nav-item--active':
              activeIndex === index
          }"
          @click="goToDestination(index)"
        >
          <span class="destinations__nav-number">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <span class="destinations__nav-name">
            {{ destination.name }}
          </span>

          <span class="destinations__nav-line">
            <span
              class="destinations__nav-progress"
              :class="{
                'destinations__nav-progress--active':
                  activeIndex === index
              }"
            />
          </span>
        </button>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


// ============================================================
// TYPES
// ============================================================

interface Destination {
  name: string
  description: string
  image: string
  url: string
}


// ============================================================
// DATA
// ============================================================

const destinations: Destination[] = [
  {
    name: 'India',
    description:
      'Ancient traditions, soulful landscapes and extraordinary cultures come together in journeys shaped with depth, warmth and discovery.',
    image: '/images/destinations/india.jpg',
    url: '/destinations/india'
  },
  {
    name: 'Europe',
    description:
      'Timeless cities, beautiful countryside and enduring traditions unfold through journeys that reveal a more intimate side of Europe.',
    image: '/images/destinations/europe.jpg',
    url: '/destinations/europe'
  },
  {
    name: 'Africa',
    description:
      'Vast wilderness, remarkable wildlife and powerful landscapes create unforgettable journeys filled with wonder, stillness and connection.',
    image: '/images/destinations/africa.jpg',
    url: '/destinations/africa'
  },
  {
    name: 'South America',
    description:
      'Dramatic landscapes, vibrant cultures and ancient stories come alive through journeys filled with colour, rhythm and discovery.',
    image: '/images/destinations/south-america.jpg',
    url: '/destinations/south-america'
  },
  {
    name: 'Middle East',
    description:
      'Ancient heritage, striking landscapes and contemporary elegance meet in journeys shaped by culture, contrast and extraordinary hospitality.',
    image: '/images/destinations/middle-east.jpg',
    url: '/destinations/middle-east'
  }
]


// ============================================================
// REFS
// ============================================================

const sectionRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const visualRef = ref<HTMLElement | null>(null)

const nameRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const exploreRef = ref<HTMLElement | null>(null)
const counterRef = ref<HTMLElement | null>(null)


// ============================================================
// STATE
// ============================================================

const activeIndex = ref(0)

let ctx: gsap.Context | undefined
let mm: gsap.MatchMedia | undefined
let scrollTrigger: ScrollTrigger | undefined

let isChanging = false
let queuedIndex: number | null = null

let autoplayTimer: ReturnType<typeof setInterval> | undefined

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    let nextIndex = activeIndex.value + 1
    if (nextIndex >= destinations.length) {
      nextIndex = 0
    }
    changeDestination(nextIndex)
  }, 4000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = undefined
  }
}


// ============================================================
// COMPUTED
// ============================================================

const activeDestination = computed<Destination>(() => {
  return destinations[activeIndex.value] ?? destinations[0]!
})


const activeNumber = computed(() => {
  return String(activeIndex.value + 1).padStart(2, '0')
})


const totalNumber = computed(() => {
  return String(destinations.length).padStart(2, '0')
})


// ============================================================
// CHANGE DESTINATION
// ============================================================

const changeDestination = (
  nextIndex: number,
  immediate = false
) => {
  if (!sectionRef.value) return

  if (
    nextIndex < 0 ||
    nextIndex >= destinations.length
  ) {
    return
  }

  if (
    nextIndex === activeIndex.value &&
    !immediate
  ) {
    return
  }

  const layers =
    sectionRef.value.querySelectorAll<HTMLElement>(
      '.destinations__image-layer'
    )

  const oldIndex = activeIndex.value
  const oldLayer = layers[oldIndex]
  const newLayer = layers[nextIndex]

  if (!newLayer) return


  // ==========================================================
  // IMMEDIATE STATE
  // ==========================================================

  if (immediate) {
    layers.forEach((layer, index) => {
      gsap.set(layer, {
        zIndex: index === nextIndex ? 2 : 0,
        xPercent: 0,
        clipPath: 'inset(0 0 0 0)'
      })
    })

    activeIndex.value = nextIndex
    return
  }


  // ==========================================================
  // QUEUE CHANGE DURING ACTIVE TRANSITION
  // ==========================================================

  if (isChanging) {
    queuedIndex = nextIndex
    return
  }

  isChanging = true


  // ==========================================================
  // DIRECTION
  // ==========================================================

  const movingForward =
    nextIndex > oldIndex ||
    (
      oldIndex === destinations.length - 1 &&
      nextIndex === 0
    )


  // ==========================================================
  // PREPARE NEW IMAGE
  // ==========================================================

  gsap.set(newLayer, {
    zIndex: 3,
    xPercent: movingForward ? 100 : -100,
    clipPath: 'inset(0 0 0 0)'
  })


  if (oldLayer) {
    gsap.set(oldLayer, {
      zIndex: 2,
      xPercent: 0,
      clipPath: 'inset(0 0 0 0)'
    })
  }

  const newImage =
    newLayer.querySelector<HTMLElement>(
      '.destinations__image'
    )

  const oldImage =
    oldLayer?.querySelector<HTMLElement>(
      '.destinations__image'
    )

  if (newImage) {
    gsap.set(newImage, {
      scale: 1.1,
      xPercent: movingForward ? -8 : 8
    })
  }


  // ==========================================================
  // TIMELINE
  // ==========================================================

  const tl = gsap.timeline({
    onComplete: () => {
      layers.forEach((layer, index) => {
        if (index !== nextIndex) {
          gsap.set(layer, {
            zIndex: 0,
            xPercent: 0,
            clipPath: 'inset(0 0 0 0)'
          })
        }
      })



      gsap.set(newLayer, {
        zIndex: 2,
        xPercent: 0,
        clipPath: 'inset(0 0 0 0)'
      })

      isChanging = false

      if (
        queuedIndex !== null &&
        queuedIndex !== activeIndex.value
      ) {
        const target = queuedIndex
        queuedIndex = null

        changeDestination(target)
      } else {
        queuedIndex = null
      }
    }
  })


  // ==========================================================
  // TEXT OUT
  // ==========================================================

  if (nameRef.value) {
    tl.to(
      nameRef.value,
      {
        x: movingForward ? -30 : 30,
        opacity: 0,

        duration: 0.28,

        ease: 'power2.in'
      },
      0
    )
  }


  if (descriptionRef.value) {
    tl.to(
      descriptionRef.value,
      {
        x: movingForward ? -20 : 20,
        opacity: 0,

        duration: 0.25,

        ease: 'power2.in'
      },
      0.02
    )
  }

  if (exploreRef.value) {
    tl.to(
      exploreRef.value,
      {
        x: movingForward ? -20 : 20,
        opacity: 0,

        duration: 0.25,

        ease: 'power2.in'
      },
      0.02
    )
  }


  if (counterRef.value) {
    tl.to(
      counterRef.value,
      {
        x: movingForward ? -12 : 12,
        opacity: 0,

        duration: 0.22,

        ease: 'power2.in'
      },
      0.02
    )
  }


  // ==========================================================
  // CINEMATIC HORIZONTAL SLIDE
  // ==========================================================

  if (oldLayer) {
    tl.to(
      oldLayer,
      {
        xPercent: movingForward ? -100 : 100,

        duration: 1.25,

        ease: 'power3.inOut'
      },
      0.05
    )
  }

  tl.to(
    newLayer,
    {
      xPercent: 0,

      duration: 1.05,

      ease: 'power3.inOut'
    },
    0.05
  )

  if (oldImage) {
    tl.to(
      oldImage,
      {
        scale: 1.08,
        xPercent: movingForward ? 6 : -6,

        duration: 1.05,

        ease: 'power2.inOut'
      },
      0.05
    )
  }

  if (newImage) {
    tl.to(
      newImage,
      {
        scale: 1.04,
        xPercent: 0,

        duration: 1.2,

        ease: 'power3.out'
      },
      0.05
    )
  }


  // ==========================================================
  // UPDATE CONTENT
  // ==========================================================

  tl.call(
    () => {
      activeIndex.value = nextIndex
    },
    [],
    0.34
  )


  // ==========================================================
  // PREPARE NEW TEXT
  // ==========================================================

  tl.call(
    () => {
      if (nameRef.value) {
        gsap.set(nameRef.value, {
          x: movingForward ? 30 : -30,
          opacity: 0
        })
      }

      if (descriptionRef.value) {
        gsap.set(descriptionRef.value, {
          x: movingForward ? 20 : -20,
          opacity: 0
        })
      }

      if (exploreRef.value) {
        gsap.set(exploreRef.value, {
          x: movingForward ? 20 : -20,
          opacity: 0
        })
      }

      if (counterRef.value) {
        gsap.set(counterRef.value, {
          x: movingForward ? 12 : -12,
          opacity: 0
        })
      }
    },
    [],
    0.35
  )


  // ==========================================================
  // TEXT IN
  // ==========================================================

  if (nameRef.value) {
    tl.to(
      nameRef.value,
      {
        x: 0,
        opacity: 1,

        duration: 0.48,

        ease: 'power3.out'
      },
      0.4
    )
  }


  if (descriptionRef.value) {
    tl.to(
      descriptionRef.value,
      {
        x: 0,
        opacity: 1,

        duration: 0.45,

        ease: 'power2.out'
      },
      0.46
    )
  }

  if (exploreRef.value) {
    tl.to(
      exploreRef.value,
      {
        x: 0,
        opacity: 1,

        duration: 0.45,

        ease: 'power2.out'
      },
      0.46
    )
  }


  if (counterRef.value) {
    tl.to(
      counterRef.value,
      {
        x: 0,
        opacity: 1,

        duration: 0.4,

        ease: 'power2.out'
      },
      0.48
    )
  }
}


// ============================================================
// PREVIOUS / NEXT
// ============================================================

const previousDestination = () => {
  const previousIndex =
    activeIndex.value === 0
      ? destinations.length - 1
      : activeIndex.value - 1

  goToDestination(previousIndex)
}


const nextDestination = () => {
  const nextIndex =
    activeIndex.value === destinations.length - 1
      ? 0
      : activeIndex.value + 1

  goToDestination(nextIndex)
}


// ============================================================
// NAVIGATION
// ============================================================

const goToDestination = (index: number) => {
  if (
    index < 0 ||
    index >= destinations.length
  ) {
    return
  }

  changeDestination(index)
  startAutoplay()
}


// ============================================================
// MOUNT
// ============================================================

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  if (
    !sectionRef.value ||
    !stageRef.value
  ) {
    return
  }


  ctx = gsap.context(() => {
    mm = gsap.matchMedia()


    // ========================================================
    // DESKTOP
    // ========================================================

    mm.add('(min-width: 769px)', () => {
      if (!sectionRef.value) return

      const layers =
        sectionRef.value
          .querySelectorAll<HTMLElement>(
            '.destinations__image-layer'
          )


      // ======================================================
      // INITIAL IMAGE STATE
      // ======================================================
      layers.forEach((layer, index) => {
        gsap.set(layer, {
          zIndex: index === 0 ? 2 : 0,

          xPercent: 0,

          clipPath: 'inset(0 0 0 0)'
        })
      })

      gsap.set('.destinations__visual', {
        clipPath: 'inset(0 100% 0 0)'
      })


      // ======================================================
      // ENTRANCE STATES
      // ======================================================

      gsap.set(
        '.destinations__heading-text',
        {
          yPercent: 115
        }
      )


      gsap.set(
        '.destinations__visual',
        {
          clipPath:
            'inset(0 100% 0 0%)'
        }
      )


      gsap.set(
        '.destinations__destination',
        {
          opacity: 0,
          y: 30
        }
      )


      gsap.set(
        '.destinations__navigation',
        {
          opacity: 0,
          y: 20
        }
      )


      gsap.set(
        '.destinations__all',
        {
          opacity: 0,
          y: -10
        }
      )


      // ======================================================
      // ENTRANCE TIMELINE
      // ======================================================

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 82%',
          toggleActions: 'play none none reverse'
        }
      })


      entrance.to(
        '.destinations__heading-text',
        {
          yPercent: 0,

          duration: 0.85,

          stagger: 0.1,

          ease: 'power3.out'
        },
        0
      )

      entrance.to(
        '.destinations__visual',
        {
          clipPath: 'inset(0 0% 0 0%)',

          duration: 1.4,

          ease: 'power3.inOut'
        },
        0.1
      )

      entrance.fromTo(
        '.destinations__image-layer:first-child .destinations__image',
        {
          scale: 1.12,
          xPercent: -8
        },
        {
          scale: 1.04,
          xPercent: 0,
          duration: 1.5,
          ease: 'power3.out'
        },
        0.1
      )

      entrance.to(
        '.destinations__destination',
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: 'power3.out'
        },
        0.45
      )

      entrance.to(
        '.destinations__navigation',
        {
          opacity: 1,
          y: 0,

          duration: 0.65,

          ease: 'power3.out'
        },
        0.55
      )

      entrance.to(
        '.destinations__all',
        {
          opacity: 1,
          y: 0,

          duration: 0.55,

          ease: 'power3.out'
        },
        0.65
      )



    })


    // ========================================================
    // MOBILE
    // ========================================================

    mm.add('(max-width: 768px)', () => {
      if (!sectionRef.value) return

      const layers =
        sectionRef.value
          .querySelectorAll<HTMLElement>(
            '.destinations__image-layer'
          )


      layers.forEach((layer, index) => {
        gsap.set(layer, {
          zIndex: index === 0 ? 2 : 0,
          xPercent: 0,
          clipPath: 'inset(0 0 0 0)'
        })
      })


      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,

          start: 'top 82%'
        }
      })


      entrance.from(
        '.destinations__heading-text',
        {
          yPercent: 110,

          duration: 0.75,

          stagger: 0.08,

          ease: 'power3.out'
        }
      )


      entrance.from(
        '.destinations__destination',
        {
          opacity: 0,
          y: 25,

          duration: 0.55
        },
        '-=0.4'
      )


      entrance.from(
        '.destinations__visual',
        {
          clipPath:
            'inset(0 100% 0 0)',

          duration: 1,

          ease: 'power3.inOut'
        },
        '-=0.35'
      )


      entrance.from(
        '.destinations__navigation',
        {
          opacity: 0,
          y: 15,

          duration: 0.5
        },
        '-=0.3'
      )


      entrance.from(
        '.destinations__all',
        {
          opacity: 0,
          y: 10,

          duration: 0.4
        },
        '-=0.25'
      )
    })
  }, sectionRef.value)


  requestAnimationFrame(() => {
    ScrollTrigger.refresh()
  })

  startAutoplay()
})


// ============================================================
// CLEANUP
// ============================================================

onUnmounted(() => {
  stopAutoplay()
  scrollTrigger?.kill()

  mm?.revert()

  ctx?.revert()
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;


// ============================================================
// SECTION
// ============================================================

.destinations {
  position: relative;

  min-height: 100svh;

  overflow: hidden;

  background: $color-ivory;

  color: $color-charcoal;


  // ==========================================================
  // STAGE
  // ==========================================================

  &__stage {
    position: relative;

    width: 100%;
    min-height: 100svh;

    overflow: hidden;

    padding:
      clamp(42px, 4vw, 64px) var(--page-padding) clamp(28px, 3vw, 46px);
  }


  // ==========================================================
  // EXPLORE ALL
  // ==========================================================

  &__all {
    position: absolute;

    z-index: 20;

    top: clamp(28px, 2.4vw, 42px);
    right: clamp(35px, 3.5vw, 68px);

    display: inline-flex;

    align-items: center;

    gap: 12px;

    color: $color-charcoal;

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
  // MAIN LAYOUT
  // ==========================================================

  &__layout {
    position: absolute;

    z-index: 2;

    top: 49%;

    left: clamp(35px, 3.5vw, 68px);
    right: clamp(35px, 3.5vw, 68px);

    display: grid;

    grid-template-columns:
      minmax(430px, 0.82fr) minmax(580px, 1.18fr);

    align-items: center;

    gap: clamp(55px, 5vw, 95px);

    width: auto;

    max-width: none;

    margin-inline: 0;

    transform: translateY(-50%);
  }


  // ==========================================================
  // LEFT CONTENT
  // ==========================================================

  &__content {
    position: relative;

    z-index: 6;

    min-width: 0;

    overflow: visible;
  }


  // ==========================================================
  // HEADING
  // ==========================================================

  &__heading {
    position: relative;

    z-index: 7;

    width: clamp(620px, 43vw, 800px);
    max-width: none;

    margin: 0;

    color: $color-charcoal;

    line-height: 1.05;

    letter-spacing: -0.045em;

    pointer-events: none;
  }


  &__heading-line {
    display: block;

    overflow: hidden;

    padding:
      0 0 0.09em;
  }


  &__heading-text {
    display: block;

    width: max-content;

    white-space: nowrap;

    will-change: transform;

    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.02em;
  }


  // ==========================================================
  // DESTINATION CONTENT
  // ==========================================================

  &__destination {
    position: relative;

    z-index: 7;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 0.02em;
    margin-top:
      clamp(42px, 5vh, 66px);
  }


  // ==========================================================
  // NAME
  // ==========================================================

  &__name-mask {
    overflow: hidden;

    padding:
      0 10px 8px 0;
  }


  &__name {
    max-width: 100%;

    margin: 0;

    font-family: 'Bebas Neue', sans-serif;

    font-size:
      clamp(3.2rem, 4.1vw, 5.25rem);

    font-weight: 400;

    line-height: 0.95;

    letter-spacing: 0.02em;

    text-transform: uppercase;

    will-change:
      transform,
      opacity;
  }


  // ==========================================================
  // DESCRIPTION
  // ==========================================================

  &__description-mask {
    overflow: hidden;

    margin-top: 22px;
  }


  &__description {
    width: 100%;
    max-width: 430px;

    margin: 0;

    color: $color-text-muted;

    line-height: 1.55;

    will-change:
      transform,
      opacity;
  }


  // ==========================================================
  // COUNTER
  // ==========================================================

  &__counter {
    display: flex;

    align-items: center;

    gap: 14px;

    margin-top: 28px;

    overflow: hidden;

    color: $color-text-muted;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-body-sm);

    font-weight: 400;

    letter-spacing: 0.12em;
  }


  &__counter-current {
    display: inline-block;

    will-change:
      transform,
      opacity;
  }


  &__counter-total {
    opacity: 0.65;
  }


  &__counter-line {
    display: block;

    width: 48px;
    height: 1px;

    background:
      rgba(23, 23, 21, 0.28);
  }


  // ==========================================================
  // VISUAL WRAPPER
  // ==========================================================

  &__visual-wrap {
    position: relative;

    z-index: 3;

    width: 100%;
    max-width: 860px;

    margin-left: auto;
  }


  // ==========================================================
  // VISUAL
  // ==========================================================

  &__visual {
    position: relative;

    width: 100%;

    aspect-ratio: 1.24;

    overflow: hidden;

    background: $color-sand;

    clip-path:
      inset(0 0 0 0);

    will-change:
      clip-path,
      transform;
  }


  &__image-stage {
    position: absolute;

    inset: -2%;

    overflow: hidden;

    will-change: transform;
  }


  &__image-layer {
    position: absolute;

    z-index: 0;

    inset: 0;

    overflow: hidden;

    clip-path: inset(0 0 0 0);

    will-change:
      transform;

    &:first-child {
      z-index: 2;
    }
  }


  &__image {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transform:
      scale(1.04);

    will-change:
      transform;
  }


  &__image-overlay {
    position: absolute;

    z-index: 5;

    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(to top,
        rgba(10, 10, 8, 0.42) 0%,
        rgba(10, 10, 8, 0.16) 22%,
        rgba(10, 10, 8, 0.03) 44%,
        transparent 62%);
  }


  // ==========================================================
  // EXPLORE DESTINATION CTA
  // ==========================================================

  &__explore {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 12px;

    width: fit-content;

    min-height: 54px;

    margin-top: 26px;

    padding: 0 25px;

    border: 1px solid $color-charcoal;

    background: $color-charcoal;

    color: $color-ivory-light;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-link);

    font-weight: 500;

    letter-spacing: 0.07em;

    line-height: 1;

    text-decoration: none;

    text-transform: uppercase;

    transition:
      background $transition-medium,
      color $transition-medium;

    :deep(svg) {
      width: 16px;
      height: 16px;

      /*
     * No transform or transition on arrow.
     */
    }

    &:hover {
      background: transparent;

      color: $color-charcoal;
    }
  }


  // ==========================================================
  // PREVIOUS / NEXT CONTROLS
  // ==========================================================

  &__controls {
    position: absolute;

    z-index: 12;

    right: 26px;
    bottom: 22px;

    display: flex;

    align-items: center;

    gap: 9px;
  }


  &__control {
    appearance: none;

    display: grid;

    width: 42px;
    height: 42px;

    place-items: center;

    padding: 0;

    border: 1px solid $color-charcoal;

    border-radius: 0;

    background: $color-charcoal;

    color: $color-ivory-light;

    cursor: pointer;

    backdrop-filter: blur(7px);

    transition:
      background $transition-medium,
      color $transition-medium,
      border-color $transition-medium;

    &:hover {
      background: $color-ivory-light;

      color: $color-charcoal;

      border-color: $color-ivory-light;
    }

    :deep(svg) {
      width: 14px;
      height: 14px;
    }
  }


  &__control-line {
    display: block;

    width: 18px;
    height: 1px;

    background:
      rgba(250, 248, 243, 0.5);
  }


  // ==========================================================
  // BOTTOM NAVIGATION
  // ==========================================================

  &__navigation {
    position: absolute;

    z-index: 20;

    left: clamp(35px, 3.5vw, 68px);
    right: clamp(35px, 3.5vw, 68px);

    bottom: clamp(28px, 2.6vw, 44px);

    display: grid;

    grid-template-columns:
      repeat(5, minmax(0, 1fr));

    gap: clamp(20px, 3vw, 52px);

    width: auto;

    max-width: none;

    margin-inline: 0;
  }


  &__nav-item {
    appearance: none;

    display: flex;

    min-width: 0;

    flex-direction: column;

    align-items: flex-start;

    gap: 7px;

    padding: 0;

    border: 0;

    background: transparent;

    color:
      rgba(23, 23, 21, 0.42);

    text-align: left;

    cursor: pointer;

    transition:
      color $transition-medium;

    &:hover,
    &--active {
      color:
        $color-charcoal;
    }
  }


  &__nav-number {
    font-family:
      'Manrope',
      sans-serif;

    font-size: 0.68rem;

    font-weight: 400;

    letter-spacing: 0.12em;
  }


  &__nav-name {
    overflow: hidden;

    width: 100%;

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-nav);

    font-weight: 500;

    letter-spacing: 0.09em;

    text-overflow: ellipsis;

    text-transform: uppercase;

    white-space: nowrap;
  }


  &__nav-line {
    position: relative;

    display: block;

    width: 100%;
    height: 1px;

    margin-top: 3px;

    overflow: hidden;

    background:
      rgba(23, 23, 21, 0.16);
  }


  &__nav-progress {
    position: absolute;

    inset: 0;

    background:
      $color-charcoal;

    transform:
      scaleX(0);

    transform-origin:
      left center;

    transition:
      transform 700ms cubic-bezier(0.22,
        1,
        0.36,
        1);

    &--active {
      transform:
        scaleX(1);
    }
  }
}


// ============================================================
// LARGE DESKTOP
// ============================================================

@media (min-width: 1600px) {
  .destinations {
    &__layout {
      grid-template-columns:
        minmax(430px, 0.82fr) minmax(640px, 1.18fr);

      gap: 120px;
    }

    &__visual-wrap {
      max-width: 900px;
    }

    &__heading {
      width:
        clamp(680px,
          42vw,
          850px);
    }
  }
}


// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1280px) {
  .destinations {
    &__layout {
      grid-template-columns:
        minmax(350px, 0.84fr) minmax(440px, 1.16fr);

      gap:
        clamp(45px,
          5vw,
          75px);
    }

    &__heading {
      width:
        clamp(550px,
          48vw,
          680px);
    }

    &__destination {
      margin-top: 38px;
    }

    &__description {
      max-width: 380px;
    }

    &__visual-wrap {
      max-width: 630px;
    }
  }
}


// ============================================================
// SMALL LAPTOP
// ============================================================

@media (max-width: 1100px) {
  .destinations {
    &__layout {
      grid-template-columns:
        minmax(310px, 0.88fr) minmax(390px, 1.12fr);

      gap: 38px;
    }

    &__heading {
      width:
        clamp(500px,
          49vw,
          590px);

      line-height: 0.94;
    }

    &__destination {
      margin-top: 34px;
    }

    &__description {
      max-width: 340px;

      line-height: 1.5;
    }
  }
}


// ============================================================
// TABLET
// ============================================================

@media (max-width: 900px) {
  .destinations {
    &__layout {
      grid-template-columns:
        minmax(280px, 0.9fr) minmax(330px, 1.1fr);

      gap: 28px;
    }

    &__heading {
      width:
        clamp(440px,
          51vw,
          520px);

      font-size:
        clamp(2.8rem,
          6vw,
          4rem);
    }

    &__name {
      font-size:
        clamp(2.8rem,
          6vw,
          4rem);
    }

    &__description {
      max-width: 300px;

      font-size:
        var(--fs-body);
    }

    &__visual {
      aspect-ratio:
        1 / 1.06;
    }
  }
}


// ============================================================
// MOBILE
// ============================================================

@media (max-width: 768px) {
  .destinations {
    min-height: auto;

    overflow: hidden;


    &__stage {
      display: flex;

      min-height: auto;

      flex-direction: column;

      overflow: hidden;

      padding:
        76px var(--page-padding) 70px;
    }


    &__layout {
      position: relative;

      top: auto;
      right: auto;
      left: auto;

      order: 1;

      display: flex;

      width: 100%;
      max-width: none;

      flex-direction: column;

      align-items: stretch;

      gap: 42px;

      margin: 0;

      transform: none;
    }


    &__content {
      width: 100%;
    }


    &__heading {
      width: 100%;
      max-width: none;

      line-height: 0.94;

      pointer-events: auto;
    }


    &__heading-text {
      width: auto;

      white-space: normal;
    }


    &__destination {
      margin-top: 42px;
    }


    &__name {
      font-size:
        clamp(3.6rem,
          15vw,
          5.5rem);
    }


    &__description-mask {
      margin-top: 18px;
    }


    &__description {
      max-width: 440px;

      line-height: 1.55;
    }


    &__counter {
      margin-top: 24px;
    }


    // --------------------------------------------------------
    // IMAGE
    // --------------------------------------------------------

    &__visual-wrap {
      width: 100%;
      max-width: none;

      margin: 0;
    }


    &__visual {
      width: 100%;

      aspect-ratio: 4 / 5;
    }


    &__image-link {
      right: 18px;
      bottom: 76px;
      left: auto;

      max-width:
        calc(100% - 36px);

      font-size: 0.78rem;
    }


    &__controls {
      top: auto;
      right: 16px;
      bottom: 18px;

      flex-direction: row;

      transform: none;
    }


    &__control {
      width: 40px;
      height: 40px;
    }


    // --------------------------------------------------------
    // NAVIGATION
    // --------------------------------------------------------

    &__navigation {
      position: relative;

      right: auto;
      bottom: auto;
      left: auto;

      order: 2;

      display: flex;

      width:
        calc(100% + var(--page-padding));

      max-width: none;

      gap: 28px;

      margin:
        48px 0 0;

      overflow-x: auto;

      padding-right:
        var(--page-padding);

      scrollbar-width: none;

      -webkit-overflow-scrolling:
        touch;

      &::-webkit-scrollbar {
        display: none;
      }
    }


    &__nav-item {
      min-width: 125px;

      flex:
        0 0 125px;
    }


    // --------------------------------------------------------
    // EXPLORE ALL
    // --------------------------------------------------------

    &__all {
      position: relative;

      top: auto;
      right: auto;

      order: 3;

      width: fit-content;

      margin-top: 46px;
    }
  }
}


// ============================================================
// SMALL MOBILE
// ============================================================

@media (max-width: 480px) {
  .destinations {
    &__stage {
      padding:
        64px var(--page-padding) 62px;
    }

    &__heading {
      font-size:
        clamp(2.9rem,
          13vw,
          4rem);
    }

    &__destination {
      margin-top: 34px;
    }

    &__name {
      font-size:
        clamp(3.3rem,
          16vw,
          4.7rem);
    }

    &__description {
      max-width: 100%;
    }

    &__visual {
      aspect-ratio: 0.84;
    }

    &__navigation {
      margin-top: 40px;
    }

    &__all {
      margin-top: 40px;
    }
  }
}


// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {
  .destinations {

    &__heading-text,
    &__name,
    &__description,
    &__counter-current,
    &__visual,
    &__image,
    &__image-stage,
    &__navigation,
    &__all {
      opacity: 1 !important;

      transform: none !important;

      transition: none !important;
    }

    &__visual,
    &__image-layer {
      clip-path: none !important;
    }
  }
}
</style>