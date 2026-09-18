<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Experience {
  name: string
  slug: string
  description: string
  image: string
}

const experiences: Experience[] = [
  {
    name: 'Spiritual',
    slug: 'spiritual',
    description:
      'Journeys of meaning shaped by ancient traditions, sacred places and moments that invite a deeper connection.',
    image: '/images/experiences/spiritual.jpg'
  },
  {
    name: 'Wellness',
    slug: 'wellness',
    description:
      'Slow down, restore and reconnect through thoughtfully chosen retreats, healing traditions and restorative landscapes.',
    image: '/images/experiences/wellness.jpg'
  },
  {
    name: 'Adventure',
    slug: 'adventure',
    description:
      'Venture beyond the familiar through remarkable landscapes, remote places and experiences that awaken your sense of discovery.',
    image: '/images/experiences/adventure.jpg'
  },
  {
    name: 'Wildlife',
    slug: 'wildlife',
    description:
      'Encounter the natural world through extraordinary habitats, intimate safaris and carefully considered wildlife experiences.',
    image: '/images/experiences/wildlife.jpg'
  },
  {
    name: 'Culinary',
    slug: 'culinary',
    description:
      'Discover a destination through its flavours, people and traditions — from local kitchens to unforgettable dining experiences.',
    image: '/images/experiences/culinary.jpg'
  },
  {
    name: 'Cultural',
    slug: 'cultural',
    description:
      'Step inside living traditions, remarkable architecture and stories that reveal the true character of a place.',
    image: '/images/experiences/cultural.jpg'
  },
  {
    name: 'Luxury',
    slug: 'luxury',
    description:
      'Exceptional stays, private access and beautifully considered details create journeys defined by effortless comfort.',
    image: '/images/experiences/luxury.jpg'
  },
  {
    name: 'Romance',
    slug: 'romance',
    description:
      'Private moments, beautiful settings and journeys thoughtfully designed to be experienced together.',
    image: '/images/experiences/romance.jpg'
  },
  {
    name: 'Family',
    slug: 'family',
    description:
      'Meaningful adventures for every generation, shaped around shared discovery, comfort and time together.',
    image: '/images/experiences/family.jpg'
  }
]

// ============================================================
// REFS / STATE
// ============================================================

const sectionRef = ref<HTMLElement | null>(null)
const stageRef = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const descriptionRef = ref<HTMLElement | null>(null)
const counterRef = ref<HTMLElement | null>(null)

const activeIndex = ref(0)
const isAnimating = ref(false)

let ctx: gsap.Context | null = null
let mm: gsap.MatchMedia | null = null
let scrollTrigger: ScrollTrigger | null = null
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let autoplayResumeTimer: ReturnType<typeof setTimeout> | null = null

const activeExperience = computed<Experience>(() => {
  return experiences[activeIndex.value] ?? experiences[0]!
})

const activeNumber = computed(() =>
  String(activeIndex.value + 1).padStart(2, '0')
)

const totalNumber = String(experiences.length).padStart(2, '0')

// ============================================================
// AUTOPLAY
// ============================================================

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const startAutoplay = () => {
  stopAutoplay()

  autoplayTimer = setInterval(() => {
    if (
      document.hidden ||
      isAnimating.value
    ) {
      return
    }

    const nextIndex =
      (activeIndex.value + 1) %
      experiences.length

    changeExperience(nextIndex, 1, true)
  }, 2000)
}

const resetAutoplay = () => {
  stopAutoplay()

  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }

  autoplayResumeTimer = setTimeout(() => {
    startAutoplay()
  }, 2500)
}

// ============================================================
// CHANGE EXPERIENCE
// ============================================================

const changeExperience = (
  nextIndex: number,
  forcedDirection?: 1 | -1,
  fromAutoplay = false
) => {
  if (
    nextIndex === activeIndex.value ||
    isAnimating.value ||
    !sectionRef.value
  ) {
    return
  }

  const oldIndex = activeIndex.value

  const direction =
    forcedDirection ??
    (nextIndex > oldIndex ? 1 : -1)

  const layers =
    sectionRef.value.querySelectorAll<HTMLElement>(
      '.experiences__image-layer'
    )

  const oldLayer = layers[oldIndex]
  const newLayer = layers[nextIndex]

  if (!newLayer) return

  isAnimating.value = true

  const oldImage =
    oldLayer?.querySelector<HTMLElement>(
      '.experiences__image'
    )

  const newImage =
    newLayer.querySelector<HTMLElement>(
      '.experiences__image'
    )

  // ==========================================================
  // PREPARE NEW IMAGE
  // ==========================================================

  gsap.set(newLayer, {
    zIndex: 3,
    yPercent: direction === 1 ? 100 : -100,
    opacity: 1
  })

  if (oldLayer) {
    gsap.set(oldLayer, {
      zIndex: 2,
      yPercent: 0,
      opacity: 1
    })
  }

  if (newImage) {
    gsap.set(newImage, {
      scale: 1.12,
      yPercent: direction === 1 ? -7 : 7
    })
  }

  // ==========================================================
  // CONTENT OUT
  // ==========================================================

  const timeline = gsap.timeline({
    onComplete: () => {
      layers.forEach((layer, index) => {
        gsap.set(layer, {
          zIndex: index === nextIndex ? 2 : 0,
          yPercent: 0,
          opacity: index === nextIndex ? 1 : 0
        })
      })

      isAnimating.value = false
    }
  })

  if (titleRef.value) {
    timeline.to(
      titleRef.value,
      {
        yPercent: direction === 1 ? -110 : 110,
        opacity: 0,
        duration: 0.42,
        ease: 'power2.in'
      },
      0
    )
  }

  if (descriptionRef.value) {
    timeline.to(
      descriptionRef.value,
      {
        y: direction === 1 ? -25 : 25,
        opacity: 0,
        duration: 0.32,
        ease: 'power2.in'
      },
      0.03
    )
  }

  if (counterRef.value) {
    timeline.to(
      counterRef.value,
      {
        y: direction === 1 ? -14 : 14,
        opacity: 0,
        duration: 0.25
      },
      0
    )
  }

  // ==========================================================
  // IMAGE TRANSITION
  // ==========================================================

  if (oldLayer) {
    timeline.to(
      oldLayer,
      {
        yPercent:
          direction === 1 ? -100 : 100,
        duration: 1.05,
        ease: 'power3.inOut'
      },
      0.08
    )
  }

  timeline.to(
    newLayer,
    {
      yPercent: 0,
      duration: 1.05,
      ease: 'power3.inOut'
    },
    0.08
  )

  if (oldImage) {
    timeline.to(
      oldImage,
      {
        scale: 1.08,
        duration: 1,
        ease: 'power2.inOut'
      },
      0.08
    )
  }

  if (newImage) {
    timeline.to(
      newImage,
      {
        scale: 1.04,
        yPercent: 0,
        duration: 1.15,
        ease: 'power3.out'
      },
      0.08
    )
  }

  // ==========================================================
  // UPDATE VUE CONTENT
  // ==========================================================

  timeline.call(
    () => {
      activeIndex.value = nextIndex
    },
    [],
    0.45
  )

  // ==========================================================
  // CONTENT IN
  // ==========================================================

  timeline.call(
    () => {
      if (titleRef.value) {
        gsap.set(titleRef.value, {
          yPercent:
            direction === 1 ? 110 : -110,
          opacity: 0
        })
      }

      if (descriptionRef.value) {
        gsap.set(descriptionRef.value, {
          y: direction === 1 ? 25 : -25,
          opacity: 0
        })
      }

      if (counterRef.value) {
        gsap.set(counterRef.value, {
          y: direction === 1 ? 14 : -14,
          opacity: 0
        })
      }
    },
    [],
    0.48
  )

  if (titleRef.value) {
    timeline.to(
      titleRef.value,
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.65,
        ease: 'power3.out'
      },
      0.58
    )
  }

  if (descriptionRef.value) {
    timeline.to(
      descriptionRef.value,
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        ease: 'power3.out'
      },
      0.67
    )
  }

  if (counterRef.value) {
    timeline.to(
      counterRef.value,
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: 'power3.out'
      },
      0.64
    )
  }

  if (!fromAutoplay) {
    resetAutoplay()
  }
}

// ============================================================
// CONTROLS
// ============================================================

const nextExperience = () => {
  const nextIndex =
    (activeIndex.value + 1) %
    experiences.length

  changeExperience(nextIndex, 1)
}

const previousExperience = () => {
  const previousIndex =
    activeIndex.value === 0
      ? experiences.length - 1
      : activeIndex.value - 1

  changeExperience(previousIndex, -1)
}

const selectExperience = (index: number) => {
  if (index === activeIndex.value) return

  const direction: 1 | -1 =
    index > activeIndex.value ? 1 : -1

  changeExperience(index, direction)
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
      if (
        !sectionRef.value ||
        !stageRef.value
      ) {
        return
      }

      const layers =
        sectionRef.value.querySelectorAll<HTMLElement>(
          '.experiences__image-layer'
        )

      // ======================================================
      // IMAGE INITIAL STATE
      // ======================================================

      layers.forEach((layer, index) => {
        gsap.set(layer, {
          zIndex: index === 0 ? 2 : 0,
          yPercent: 0,
          opacity: index === 0 ? 1 : 0
        })
      })

      // ======================================================
      // ENTRANCE STATES
      // ======================================================

      gsap.set(
        '.experiences__eyebrow',
        {
          opacity: 0,
          y: 20
        }
      )

      gsap.set(
        '.experiences__heading-text',
        {
          yPercent: 110
        }
      )

      gsap.set(
        '.experiences__visual',
        {
          clipPath:
            'inset(100% 0 0 0)'
        }
      )

      gsap.set(
        '.experiences__content-inner',
        {
          opacity: 0,
          y: 35
        }
      )

      gsap.set(
        '.experiences__navigation',
        {
          opacity: 0,
          y: 20
        }
      )

      // ======================================================
      // ENTRANCE
      // ======================================================

      const entrance =
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 78%',
            once: true
          }
        })

      entrance
        .to(
          '.experiences__eyebrow',
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out'
          },
          0
        )
        .to(
          '.experiences__heading-text',
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out'
          },
          0.08
        )
        .to(
          '.experiences__visual',
          {
            clipPath:
              'inset(0% 0 0 0)',
            duration: 1.25,
            ease: 'power3.inOut'
          },
          0.18
        )
        .to(
          '.experiences__content-inner',
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out'
          },
          0.45
        )
        .to(
          '.experiences__navigation',
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out'
          },
          0.58
        )

      startAutoplay()

      return () => {
        entrance.kill()
        scrollTrigger?.kill()
        scrollTrigger = null
        stopAutoplay()
      }
    })

    // ========================================================
    // MOBILE
    // ========================================================

    mm.add('(max-width: 768px)', () => {
      if (!sectionRef.value) return

      const layers =
        sectionRef.value.querySelectorAll<HTMLElement>(
          '.experiences__image-layer'
        )

      layers.forEach((layer, index) => {
        gsap.set(layer, {
          zIndex: index === 0 ? 2 : 0,
          yPercent: 0,
          opacity: index === 0 ? 1 : 0
        })
      })

      const mobileEntrance =
        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'top 82%',
            once: true
          }
        })

      mobileEntrance
        .from(
          '.experiences__eyebrow',
          {
            opacity: 0,
            y: 18,
            duration: 0.5
          }
        )
        .from(
          '.experiences__heading-text',
          {
            yPercent: 105,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out'
          },
          0.05
        )
        .from(
          '.experiences__visual',
          {
            clipPath:
              'inset(0 100% 0 0)',
            duration: 1,
            ease: 'power3.inOut'
          },
          0.2
        )
        .from(
          '.experiences__content-inner',
          {
            opacity: 0,
            y: 30,
            duration: 0.65,
            ease: 'power3.out'
          },
          0.35
        )

      startAutoplay()

      return () => {
        mobileEntrance.kill()
        stopAutoplay()
      }
    })
  }, sectionRef.value)
})

// ============================================================
// UNMOUNT
// ============================================================

onBeforeUnmount(() => {
  stopAutoplay()

  if (autoplayResumeTimer) {
    clearTimeout(autoplayResumeTimer)
  }

  scrollTrigger?.kill()
  mm?.revert()
  ctx?.revert()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="experiences"
  >
    <div
      ref="stageRef"
      class="experiences__stage"
    >
      <!-- ================================================
           TOP
      ================================================= -->

      <div class="experiences__top">
        <div>
          <p class="experiences__eyebrow eyebrow">
            Ways to travel
          </p>

          <h2
            class="experiences__heading heading-lg"
          >
            <span class="experiences__heading-line">
              <span class="experiences__heading-text">
                How do you want
              </span>
            </span>

            <span class="experiences__heading-line">
              <span class="experiences__heading-text">
                to experience
                <em>the world?</em>
              </span>
            </span>
          </h2>
        </div>

        <NuxtLink
          to="/experiences"
          class="experiences__all text-link"
        >
          <span>
            Explore all experiences
          </span>

          <Icon
            name="lucide:arrow-right"
          />
        </NuxtLink>
      </div>

      <!-- ================================================
           MAIN
      ================================================= -->

      <div class="experiences__main">
        <!-- IMAGE -->

        <div class="experiences__visual-wrap">
          <div class="experiences__visual">
            <div
              v-for="experience in experiences"
              :key="`${experience.slug}-image`"
              class="experiences__image-layer"
            >
              <img
                :src="experience.image"
                :alt="experience.name"
                class="experiences__image"
              >
            </div>

            <div
              class="experiences__image-overlay"
            />

            <!-- <div
              class="experiences__image-counter"
            >
              <span>
                {{ activeNumber }}
              </span>

              <span
                class="experiences__image-counter-line"
              />

              <span>
                {{ totalNumber }}
              </span>
            </div> -->
          </div>
        </div>

        <!-- CONTENT -->

        <div class="experiences__content">
          <div
            class="experiences__content-inner"
          >
            <!-- <div
              class="experiences__counter-mask"
            >
              <div
                ref="counterRef"
                class="experiences__counter"
              >
                <span>
                  {{ activeNumber }}
                </span>

                <span
                  class="experiences__counter-line"
                />

                <span>
                  {{ totalNumber }}
                </span>
              </div>
            </div> -->

            <div
              class="experiences__title-mask"
            >
              <h3
                ref="titleRef"
                class="experiences__title"
              >
                {{ activeExperience.name }}
              </h3>
            </div>

            <div
              class="experiences__description-mask"
            >
              <p
                ref="descriptionRef"
                class="experiences__description body-large"
              >
                {{
                  activeExperience.description
                }}
              </p>
            </div>

            <NuxtLink
              :to="`/experiences/${activeExperience.slug}`"
              class="experiences__explore"
            >
              <span>
                Explore
                {{ activeExperience.name }}
              </span>

              <Icon
                name="lucide:arrow-up-right"
              />
            </NuxtLink>

            <!-- CONTROLS -->

            <div class="experiences__controls">
              <button
                type="button"
                class="experiences__control"
                aria-label="Previous experience"
                @click="previousExperience"
              >
                <Icon
                  name="lucide:arrow-left"
                />
              </button>

              <span
                class="experiences__control-line"
              />

              <button
                type="button"
                class="experiences__control"
                aria-label="Next experience"
                @click="nextExperience"
              >
                <Icon
                  name="lucide:arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- ================================================
           BOTTOM NAVIGATION
      ================================================= -->

      <!-- <nav
        class="experiences__navigation"
        aria-label="Experience navigation"
      >
        <button
          v-for="(experience, index) in experiences"
          :key="experience.slug"
          type="button"
          class="experiences__nav-item"
          :class="{
            'experiences__nav-item--active':
              activeIndex === index
          }"
          @click="selectExperience(index)"
        >
          <span class="experiences__nav-number">
            {{
              String(index + 1).padStart(
                2,
                '0'
              )
            }}
          </span>

          <span class="experiences__nav-name">
            {{ experience.name }}
          </span>

          <span class="experiences__nav-line">
            <span
              class="experiences__nav-progress"
              :class="{
                'experiences__nav-progress--active':
                  activeIndex === index
              }"
            />
          </span>
        </button>
      </nav> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

// ============================================================
// SECTION
// ============================================================

.experiences {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: $color-charcoal;
  color: $color-ivory;

  // ==========================================================
  // STAGE
  // ==========================================================

  &__stage {
    position: relative;
    width: 100%;
    min-height: 100svh;
    overflow: hidden;
    padding:
      clamp(38px, 3.5vw, 58px)
      var(--page-padding)
      clamp(30px, 2.8vw, 44px);
  }

  // ==========================================================
  // TOP
  // ==========================================================

  &__top {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
  }

  &__eyebrow {
    margin: 0 0 18px;
    color:
      rgba(244, 240, 232, 0.5);
  }

  &__heading {
    max-width: 700px;
    margin: 0;
    color: $color-ivory;
    line-height: 0.9;
    letter-spacing: -0.04em;
  }

  &__heading-line {
    display: block;
    overflow: hidden;
    padding: 0 0.16em 0.12em 0;
  }

  &__heading-text {
    display: block;
    will-change: transform;
  }

  &__heading em {
    color: #cdb28d;
    font-weight: 400;
    font-style: italic;
  }

  &__all {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 11px;
    margin-top: 12px;
    color: $color-ivory;
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
  // MAIN
  // ==========================================================

    &__main {
    position: absolute;
    z-index: 4;

    top: clamp(250px, 27vh, 310px);

    right: var(--page-padding);
    left: var(--page-padding);

    display: grid;
    grid-template-columns:
        minmax(500px, 1.12fr)
        minmax(390px, 0.88fr);

    align-items: center;
    gap: clamp(70px, 8vw, 150px);


    bottom: clamp(105px, 11vh, 130px);

    transform: none;
    }

  // ==========================================================
  // VISUAL
  // ==========================================================

    &__visual-wrap {
    width: 100%;
    height: 100%;
    max-width: 850px;

    display: flex;
    align-items: center;
    }

    &__visual {
    position: relative;

    width: 100%;
    height: 100%;
    max-height: 560px;

    overflow: hidden;
    background: #2a2925;

    will-change: clip-path;
    }

  &__image-layer {
    position: absolute;
    inset: 0;
    overflow: hidden;
    opacity: 0;
    will-change:
      transform,
      opacity;

    &:first-child {
      z-index: 2;
      opacity: 1;
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.04);
    will-change: transform;
  }

  &__image-overlay {
    position: absolute;
    z-index: 5;
    inset: 0;
    pointer-events: none;

    background:
      linear-gradient(
        to top,
        rgba(10, 10, 8, 0.38) 0%,
        rgba(10, 10, 8, 0.08) 32%,
        transparent 58%
      );
  }

//   &__image-counter {
//     position: absolute;
//     z-index: 8;
//     right: 24px;
//     bottom: 20px;

//     display: flex;
//     align-items: center;
//     gap: 10px;

//     color:
//       rgba(250, 248, 243, 0.8);

//     font-family:
//       'Manrope',
//       sans-serif;

//     font-size: 0.68rem;
//     letter-spacing: 0.12em;
//   }

//   &__image-counter-line {
//     display: block;
//     width: 30px;
//     height: 1px;
//     background:
//       rgba(250, 248, 243, 0.45);
//   }

  // ==========================================================
  // CONTENT
  // ==========================================================

  &__content {
    position: relative;
    z-index: 6;
    min-width: 0;
  }

  &__content-inner {
    width: 100%;
    max-width: 510px;
  }

  // ==========================================================
  // COUNTER
  // ==========================================================

  &__counter-mask {
    overflow: hidden;
  }

  &__counter {
    display: flex;
    align-items: center;
    gap: 13px;

    color:
      rgba(244, 240, 232, 0.48);

    font-family:
      'Manrope',
      sans-serif;

    font-size: var(--fs-body-sm);
    letter-spacing: 0.12em;

    will-change:
      transform,
      opacity;
  }

  &__counter-line {
    display: block;
    width: 45px;
    height: 1px;
    background:
      rgba(244, 240, 232, 0.25);
  }

  // ==========================================================
  // TITLE
  // ==========================================================

  &__title-mask {
    overflow: hidden;
    margin-top: 0;
    padding-bottom: 0.08em;
  }

  &__title {
    margin: 0;

    color: $color-ivory;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size:
      clamp(4.6rem, 6.2vw, 7.5rem);

    font-weight: 400;
    line-height: 0.88;
    letter-spacing: -0.045em;

    will-change:
      transform,
      opacity;
  }

  // ==========================================================
  // DESCRIPTION
  // ==========================================================

  &__description-mask {
    overflow: hidden;
    margin-top:
      clamp(30px, 3vw, 44px);
  }

  &__description {
    width: 100%;
    max-width: 470px;
    margin: 0;

    color:
      rgba(244, 240, 232, 0.64);

    line-height: 1.6;

    will-change:
      transform,
      opacity;
  }

  // ==========================================================
  // EXPLORE BUTTON
  // ==========================================================

  &__explore {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    min-height: 48px;
    margin-top: 32px;
    padding: 0 20px;

    border:
      1px solid
      rgba(244, 240, 232, 0.45);

    border-radius: 100px;

    color: $color-ivory;

    font-family:
      'Manrope',
      sans-serif;

    font-size:
      clamp(
        0.72rem,
        0.72vw,
        0.84rem
      );

    font-weight: 500;
    letter-spacing: 0.09em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;

    transition:
      background 450ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        ),
      color 450ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        ),
      border-color 450ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        );

    :deep(svg) {
      width: 15px;
      height: 15px;

      transition:
        transform 450ms
          cubic-bezier(
            0.22,
            1,
            0.36,
            1
          );
    }

    &:hover {
      border-color:
        $color-ivory;

      background:
        $color-ivory;

      color:
        $color-charcoal;
    }

    &:hover :deep(svg) {
      transform:
        translate(3px, -3px);
    }
  }

  // ==========================================================
  // CONTROLS
  // ==========================================================

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 32px;
  }

  &__control {
    appearance: none;

    display: grid;
    width: 42px;
    height: 42px;
    place-items: center;

    padding: 0;

    border:
      1px solid
      rgba(244, 240, 232, 0.32);

    border-radius: 50%;

    background: transparent;
    color: $color-ivory;

    cursor: pointer;

    transition:
      background $transition-medium,
      color $transition-medium,
      border-color $transition-medium,
      transform $transition-medium;

    &:hover {
      border-color:
        $color-ivory;

      background:
        $color-ivory;

      color:
        $color-charcoal;

      transform:
        scale(1.06);
    }

    :deep(svg) {
      width: 15px;
      height: 15px;
    }
  }

  &__control-line {
    display: block;
    width: 22px;
    height: 1px;

    background:
      rgba(244, 240, 232, 0.28);
  }

  // ==========================================================
  // NAVIGATION
  // ==========================================================

    &__navigation {
    position: absolute;
    z-index: 12;

    right: var(--page-padding);
    bottom: clamp(28px, 3vw, 38px);
    left: var(--page-padding);

    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: clamp(12px, 1.5vw, 28px);
    }

  &__nav-item {
    appearance: none;

    display: flex;
    min-width: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

    padding: 0;
    border: 0;

    background: transparent;

    color:
      rgba(244, 240, 232, 0.35);

    text-align: left;
    cursor: pointer;

    transition:
      color $transition-medium;

    &:hover,
    &--active {
      color: $color-ivory;
    }
  }

  &__nav-number {
    font-family:
      'Manrope',
      sans-serif;

    font-size: 0.62rem;
    letter-spacing: 0.1em;
  }

  &__nav-name {
    overflow: hidden;
    width: 100%;

    font-family:
      'Manrope',
      sans-serif;

    font-size:
      clamp(
        0.62rem,
        0.65vw,
        0.78rem
      );

    font-weight: 500;
    letter-spacing: 0.07em;

    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  &__nav-line {
    position: relative;

    display: block;
    width: 100%;
    height: 1px;

    margin-top: 2px;

    overflow: hidden;

    background:
      rgba(244, 240, 232, 0.14);
  }

  &__nav-progress {
    position: absolute;
    inset: 0;

    background: #cdb28d;

    transform: scaleX(0);
    transform-origin: left center;

    transition:
      transform 600ms
        cubic-bezier(
          0.22,
          1,
          0.36,
          1
        );

    &--active {
      transform: scaleX(1);
    }
  }
}

// ============================================================
// LAPTOP
// ============================================================

@media (max-width: 1280px) {
  .experiences {
    &__main {
      grid-template-columns:
        minmax(430px, 1.08fr)
        minmax(340px, 0.92fr);

      gap:
        clamp(50px, 6vw, 90px);
    }

    &__visual-wrap {
      max-width: 680px;
    }

    &__title {
      font-size:
        clamp(
          4rem,
          6vw,
          6rem
        );
    }

    &__navigation {
      gap: 12px;
    }
  }
}

// ============================================================
// TABLET / MOBILE
// ============================================================

@media (max-width: 768px) {
  .experiences {
    min-height: auto;
    overflow: hidden;

    &__stage {
      min-height: auto;

      padding:
        78px
        var(--page-padding)
        70px;
    }

    &__top {
      display: block;
    }

    &__eyebrow {
      margin-bottom: 16px;
    }

    &__heading {
      max-width: 520px;
    }

    &__all {
      margin-top: 28px;
    }

    // ========================================================
    // MAIN
    // ========================================================

    &__main {
      position: relative;

      top: auto;
      right: auto;
      left: auto;

      display: flex;
      flex-direction: column;
      gap: 42px;

      margin-top: 58px;

      transform: none;
    }

    &__visual-wrap {
      width: 100%;
      max-width: none;
    }

    &__visual {
      aspect-ratio: 4 / 5;
    }

    &__content-inner {
      max-width: 100%;
    }

    &__title-mask {
      margin-top: 18px;
    }

    &__title {
      font-size:
        clamp(
          3.8rem,
          16vw,
          5.5rem
        );
    }

    &__description-mask {
      margin-top: 24px;
    }

    &__description {
      max-width: 480px;
    }

    &__explore {
      margin-top: 26px;
    }

    &__controls {
      margin-top: 26px;
    }

    // ========================================================
    // NAV
    // ========================================================

    &__navigation {
      position: relative;

      right: auto;
      bottom: auto;
      left: auto;

      display: flex;
      gap: 26px;

      width:
        calc(
          100% +
          var(--page-padding)
        );

      margin-top: 54px;

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
      min-width: 115px;
      flex: 0 0 115px;
    }

    &__nav-name {
      font-size: 0.72rem;
    }
  }
}

// ============================================================
// SMALL MOBILE
// ============================================================

@media (max-width: 480px) {
  .experiences {
    &__stage {
      padding:
        66px
        var(--page-padding)
        62px;
    }

    &__main {
      margin-top: 48px;
    }

    &__title {
      font-size:
        clamp(
          3.4rem,
          16vw,
          4.7rem
        );
    }

    &__navigation {
      margin-top: 46px;
    }
  }
}

// ============================================================
// REDUCED MOTION
// ============================================================

@media (prefers-reduced-motion: reduce) {
  .experiences {
    &__eyebrow,
    &__heading-text,
    &__visual,
    &__content-inner,
    &__navigation,
    &__title,
    &__description,
    &__counter,
    &__image {
      transition: none !important;
    }
  }
}
</style>