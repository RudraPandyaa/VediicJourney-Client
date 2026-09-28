<template>
    <main v-if="category" class="category-page">
        <SiteHeader />

        <section class="category-hero" :style="{ backgroundImage: `url(${category.image})` }">
            <div class="category-hero__overlay"></div>

            <div class="category-hero__content">

                <h1 class="category-hero__title">
                    {{ category.name }}
                </h1>

                <p class="category-hero__description">
                    {{ category.description }}
                </p>
            </div>
        </section>

        <section class="category-tours">
            <div class="category-tours__header">

                <h2 class="category-tours__heading">
                    {{ category.name }} Journeys
                </h2>

                <p class="category-tours__description">
                    Thoughtfully planned journeys across remarkable destinations,
                    selected around the way you want to experience the world.
                </p>
            </div>

            <div class="category-tours__slider">
                <button
                    type="button"
                    class="category-tours__control category-tours__control--prev"
                    aria-label="Previous tours"
                    @click="previousTour"
                >
                    <Icon name="lucide:arrow-left" />
                </button>

                <div class="category-tours__viewport">
                    <div
                        class="category-tours__track"
                        :class="{ 'category-tours__track--reset': isResetting }"
                        :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
                        @transitionend="handleTransitionEnd"
                    >
                        <article
                            v-for="(tour, index) in sliderTours"
                            :key="`${tour.id}-${index}`"
                            class="tour-card"
                        >
                            <div class="tour-card__image">
                                <img :src="tour.image" :alt="tour.title" loading="lazy" />
                            </div>

                            <div class="tour-card__content">
                                <p class="tour-card__meta">
                                    {{ tour.duration }}
                                </p>

                                <h3 class="tour-card__title">
                                    {{ tour.title }}
                                </h3>

                                <p class="tour-card__route">
                                    {{ tour.route }}
                                </p>

                                <p class="tour-card__description">
                                    {{ tour.description }}
                                </p>

                                <NuxtLink
                                    :to="`/contact?experience=${category.slug}&tour=${tour.id}`"
                                    class="tour-card__button"
                                >
                                    <span>Plan This Journey</span>
                                    <Icon name="lucide:arrow-right" />
                                </NuxtLink>
                            </div>
                        </article>
                    </div>
                </div>

                <button
                    type="button"
                    class="category-tours__control category-tours__control--next"
                    aria-label="Next tours"
                    @click="nextTour"
                >
                    <Icon name="lucide:arrow-right" />
                </button>
            </div>
        </section>
    </main>
  <main v-else-if="support" ref="sectionRef" class="support-detail">
    <SiteHeader />
    <section
      class="support-detail__hero"
      :style="{ backgroundImage: `url(${support.image})` }"
    >
      <div class="support-detail__overlay"></div>

      <div class="support-detail__hero-content">
        <p class="support-detail__eyebrow">
          {{ support.eyebrow }}
        </p>

        <h1 class="support-detail__title">
          {{ support.title }}
        </h1>

        <p class="support-detail__description">
          {{ support.description }}
        </p>
      </div>
    </section>

    <section class="support-detail__content">
      <div class="support-detail__content-inner">
        <div class="support-detail__intro">
          <p class="support-detail__label">
            HOW WE HELP
          </p>

          <h2 class="support-detail__heading">
            Travel with every detail considered.
          </h2>

          <p class="support-detail__text">
            {{ support.intro }}
          </p>
        </div>

        <div class="support-detail__points">
          <article
            v-for="point in support.points"
            :key="point"
            class="support-detail__point"
          >
            <span class="support-detail__point-number">
              —
            </span>

            <h3>
              {{ point }}
            </h3>
          </article>
        </div>
      </div>
    </section>

    <section class="support-detail__cta">
      <h2>
        Ready to plan your journey?
      </h2>

      <NuxtLink to="/contact" class="support-detail__cta-link">
        <span>{{ support.cta }}</span>
        <Icon name="lucide:arrow-right" />
      </NuxtLink>
    </section>
  </main>

<main v-else class="slug-not-found">
    <SiteHeader />
    <section class="slug-not-found__content">
        <h1>404</h1>
        <p>Page not found</p>
        <NuxtLink to="/" class="support-detail__cta-link">
            <span>Go back home</span>
            <Icon name="lucide:arrow-right" />
        </NuxtLink>
    </section>
</main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SiteHeader from '~/components/layout/SiteHeader.vue'

interface Tour {
    id: string
    title: string
    duration: string
    route: string
    description: string
    image: string
}

interface Category {
    name: string
    slug: string
    description: string
    image: string
    tours: Tour[]
}


interface SupportPage {
    title: string
    eyebrow: string
    description: string
    image: string
    intro: string
    points: string[]
    cta: string
}

/*
 * Temporary CMS-shaped data.
 *
 * Everything is kept in this single file for now.
 * Later this entire object can come from Vendure.
 */
const categories: Category[] = [
    {
        name: 'Spiritual',
        slug: 'spiritual',
        description:
            'Journeys of meaning shaped by sacred places, living traditions and moments of reflection.',
        image: '/images/experiences/spiritual.jpg',
        tours: [
            {
                id: 'sacred-south-america',
                title: 'Sacred South America',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'Argentina · Bolivia · Brazil',
                description:
                    'A reflective journey through remarkable landscapes, cultural traditions and places of spiritual significance.',
                image: '/images/experiences/spiritual.jpg'
            },
            {
                id: 'japan-and-bali',
                title: 'Temples & Traditions',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Japan · Indonesia',
                description:
                    'Discover ancient temples, contemplative spaces and enduring traditions across Japan and Indonesia.',
                image: '/images/experiences/spiritual.jpg'
            },
            {
                id: 'sacred-asia',
                title: 'Sacred Asia',
                duration: '9 NIGHTS / 10 DAYS',
                route: 'Singapore · Malaysia · Japan',
                description:
                    'A cultural and spiritual journey through historic temples, rituals and extraordinary Asian cities.',
                image: '/images/experiences/spiritual.jpg'
            }
        ]
    },

    {
        name: 'Wellness',
        slug: 'wellness',
        description:
            'Slow down and reconnect through restorative landscapes, mindful stays and thoughtfully paced journeys.',
        image: '/images/experiences/wellness.jpg',
        tours: [
            {
                id: 'wellness-bali',
                title: 'Bali Wellness Escape',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Indonesia',
                description:
                    'A restorative escape combining peaceful landscapes, wellness traditions and time to slow down.',
                image: '/images/experiences/wellness.jpg'
            },
            {
                id: 'japan-wellness',
                title: 'Japan Renewal',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Japan',
                description:
                    'Experience a slower side of Japan through serene surroundings, traditional rituals and considered stays.',
                image: '/images/experiences/wellness.jpg'
            },
            {
                id: 'switzerland-wellness',
                title: 'Alpine Wellbeing',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Switzerland',
                description:
                    'Mountain landscapes, quiet retreats and restorative days create an unhurried Swiss escape.',
                image: '/images/experiences/wellness.jpg'
            }
        ]
    },

    {
        name: 'Adventure',
        slug: 'adventure',
        description:
            'Venture beyond the familiar through dramatic landscapes, active discoveries and unforgettable routes.',
        image: '/images/experiences/adventure.jpg',
        tours: [
            {
                id: 'patagonia-adventure',
                title: 'Patagonia Adventure',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'Argentina',
                description:
                    'Explore dramatic landscapes and remarkable wilderness on an immersive Argentine adventure.',
                image: '/images/experiences/adventure.jpg'
            },
            {
                id: 'bolivia-highlands',
                title: 'Bolivian Highlands',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Bolivia',
                description:
                    'Discover high-altitude landscapes, remote routes and extraordinary natural scenery across Bolivia.',
                image: '/images/experiences/adventure.jpg'
            },
            {
                id: 'alpine-adventure',
                title: 'Alpine Discovery',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Switzerland · France · Italy',
                description:
                    'A journey through dramatic Alpine scenery, historic towns and memorable mountain experiences.',
                image: '/images/experiences/adventure.jpg'
            }
        ]
    },

    {
        name: 'Wildlife',
        slug: 'wildlife',
        description:
            'Encounter extraordinary habitats and natural landscapes through carefully considered wildlife journeys.',
        image: '/images/experiences/wildlife.jpg',
        tours: [
            {
                id: 'patagonia-wildlife',
                title: 'Patagonia Wildlife',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Argentina',
                description:
                    'Discover remarkable landscapes and wildlife habitats across the wild southern reaches of Argentina.',
                image: '/images/experiences/wildlife.jpg'
            },
            {
                id: 'brazil-wildlife',
                title: 'Brazilian Wilderness',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'Brazil',
                description:
                    'Explore Brazil through extraordinary natural environments and immersive wildlife experiences.',
                image: '/images/experiences/wildlife.jpg'
            },
            {
                id: 'south-africa-wildlife',
                title: 'South Africa Wildlife',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'South Africa',
                description:
                    'A wildlife-focused journey through extraordinary landscapes and some of South Africa’s remarkable natural environments.',
                image: '/images/experiences/wildlife.jpg'
            },
            {
                id: 'wild-russia',
                title: 'Wild Russia',
                duration: '9 NIGHTS / 10 DAYS',
                route: 'Russia',
                description:
                    'Experience vast landscapes and remote natural environments across Russia.',
                image: '/images/experiences/wildlife.jpg'
            }
        ]
    },

    {
        name: 'Culinary',
        slug: 'culinary',
        description:
            'Discover destinations through their flavours, local traditions and unforgettable dining experiences.',
        image: '/images/experiences/culinary.jpg',
        tours: [
            {
                id: 'italian-table',
                title: 'The Italian Table',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Italy',
                description:
                    'Explore Italy through regional flavours, beautiful cities and memorable culinary experiences.',
                image: '/images/experiences/culinary.jpg'
            },
            {
                id: 'french-flavours',
                title: 'French Flavours',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'France',
                description:
                    'A journey through French food traditions, celebrated cities and intimate local experiences.',
                image: '/images/experiences/culinary.jpg'
            },
            {
                id: 'japan-at-the-table',
                title: 'Japan At The Table',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Japan',
                description:
                    'Experience Japanese culture through its food, markets, traditions and beautifully considered meals.',
                image: '/images/experiences/culinary.jpg'
            }
        ]
    },

    {
        name: 'Cultural',
        slug: 'cultural',
        description:
            'Step into living traditions, remarkable architecture and stories that reveal the character of a place.',
        image: '/images/experiences/cultural.jpg',
        tours: [
            {
                id: 'european-culture',
                title: 'European Cultural Journey',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'Spain · France · Italy',
                description:
                    'Experience iconic cities, historic architecture and living traditions across Europe.',
                image: '/images/experiences/cultural.jpg'
            },
            {
                id: 'japan-traditions',
                title: 'Japan Through Tradition',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Japan',
                description:
                    'Discover temples, craftsmanship, historic neighbourhoods and enduring Japanese traditions.',
                image: '/images/experiences/cultural.jpg'
            },
            {
                id: 'south-america-culture',
                title: 'South American Stories',
                duration: '8 NIGHTS / 9 DAYS',
                route: 'Argentina · Bolivia · Brazil',
                description:
                    'Explore diverse cultures, landscapes and stories across three remarkable South American countries.',
                image: '/images/experiences/cultural.jpg'
            }
        ]
    },

    {
        name: 'Luxury',
        slug: 'luxury',
        description:
            'Exceptional stays, private access and beautifully considered details create journeys defined by effortless comfort.',
        image: '/images/experiences/luxury.jpg',
        tours: [
            {
                id: 'dubai-abu-dhabi',
                title: 'Emirates In Style',
                duration: '5 NIGHTS / 6 DAYS',
                route: 'Dubai · Abu Dhabi',
                description:
                    'A refined UAE journey combining exceptional stays, remarkable architecture and private experiences.',
                image: '/images/experiences/luxury.jpg'
            },
            {
                id: 'alpine-luxury',
                title: 'Alpine Luxury',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Switzerland · France · Italy',
                description:
                    'An elegant journey through the Alps with exceptional stays and beautifully considered experiences.',
                image: '/images/experiences/luxury.jpg'
            },
            {
                id: 'singapore-luxury',
                title: 'Singapore & Beyond',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Singapore · Malaysia',
                description:
                    'A sophisticated Asian escape combining modern city life, distinctive stays and cultural discovery.',
                image: '/images/experiences/luxury.jpg'
            }
        ]
    },

    {
        name: 'Romance',
        slug: 'romance',
        description:
            'Private moments, beautiful settings and thoughtfully designed journeys created to be experienced together.',
        image: '/images/experiences/romance.jpg',
        tours: [
            {
                id: 'european-romance',
                title: 'European Romance',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'France · Switzerland · Italy',
                description:
                    'A romantic European journey through beautiful cities, scenic landscapes and intimate experiences.',
                image: '/images/experiences/romance.jpg'
            },
            {
                id: 'spain-and-france',
                title: 'Spanish & French Escape',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Spain · France',
                description:
                    'Slow days, beautiful settings and unforgettable moments across two iconic European destinations.',
                image: '/images/experiences/romance.jpg'
            },
            {
                id: 'dubai-romance',
                title: 'Desert & City Romance',
                duration: '5 NIGHTS / 6 DAYS',
                route: 'Dubai · Abu Dhabi',
                description:
                    'A refined escape combining dramatic desert landscapes, exceptional stays and city experiences.',
                image: '/images/experiences/romance.jpg'
            }
        ]
    },

    {
        name: 'Family',
        slug: 'family',
        description:
            'Meaningful adventures for every generation, shaped around shared discovery, comfort and time together.',
        image: '/images/experiences/family.jpg',
        tours: [
            {
                id: 'family-europe',
                title: 'European Family Discovery',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Spain · France · Switzerland',
                description:
                    'A comfortable family journey balancing iconic sights, shared experiences and time to explore.',
                image: '/images/experiences/family.jpg'
            },
            {
                id: 'family-singapore-malaysia',
                title: 'Singapore & Malaysia Family Escape',
                duration: '6 NIGHTS / 7 DAYS',
                route: 'Singapore · Malaysia',
                description:
                    'A family-friendly journey combining vibrant cities, cultural discovery and memorable experiences.',
                image: '/images/experiences/family.jpg'
            },
            {
                id: 'family-japan',
                title: 'Japan Family Adventure',
                duration: '7 NIGHTS / 8 DAYS',
                route: 'Japan',
                description:
                    'Discover Japan through a thoughtfully paced family journey filled with culture, food and discovery.',
                image: '/images/experiences/family.jpg'
            }
        ]
    }
]

const supportPages: Record<string, SupportPage> = {
    visa: {
        title: 'Visa Assistance',
        eyebrow: 'TRAVEL SUPPORT',
        description:
            'Clear guidance through visa requirements and documentation, helping make the process feel straightforward from the start.',
        image: '/images/support/visa.jpg',
        intro:
            'From documentation to application requirements, we help you understand the visa process before your journey begins.',
        points: [
            'Visa requirement guidance',
            'Documentation support',
            'Application preparation',
            'Travel-specific visa assistance'
        ],
        cta: 'Plan your journey'
    },

    flights: {
        title: 'Flights & Connections',
        eyebrow: 'TRAVEL SUPPORT',
        description:
            'Thoughtfully considered routes and connections designed around comfort, timing and the rhythm of your journey.',
        image: '/images/support/flights.jpg',
        intro:
            'We help shape your flight plan around your itinerary, preferred timing and the connections that make your journey feel seamless.',
        points: [
            'Route planning',
            'Flight connection guidance',
            'Schedule coordination',
            'Journey-focused flight planning'
        ],
        cta: 'Plan your journey'
    },

    'private-chauffeur': {
        title: 'Private Transfers',
        eyebrow: 'TRAVEL SUPPORT',
        description:
            'Seamless arrivals, departures and private transfers arranged so every transition feels effortless.',
        image: '/images/support/transfers.jpg',
        intro:
            'From airport arrivals to city transfers, private chauffeur services keep every transition comfortable and considered.',
        points: [
            'Airport transfers',
            'Private chauffeur services',
            'Inter-city transfers',
            'Arrival and departure coordination'
        ],
        cta: 'Plan your journey'
    },

    'on-ground-support': {
        title: 'On-ground Support',
        eyebrow: 'TRAVEL SUPPORT',
        description:
            'Personal assistance throughout your journey, with trusted local support whenever and wherever it is needed.',
        image: '/images/support/support.jpg',
        intro:
            'Travel with the reassurance of local assistance throughout your journey, whenever support is needed on the ground.',
        points: [
            'Local assistance',
            'Journey coordination',
            'Destination support',
            'Personal travel assistance'
        ],
        cta: 'Plan your journey'
    }
}

const route = useRoute()

const category = computed(() => {
    return categories.find(
        item => item.slug === String(route.params.slug).toLowerCase()
    )
})

const support = computed(() => {
    return supportPages[String(route.params.slug).toLowerCase()] ?? null
})

const sectionRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

const visibleSlides = ref(3)
const currentIndex = ref(0)

// Keep the UI data local for now. Every category is normalized to five
// tours so the slider can always be tested with multiple cards.
const categoryWithTours = computed(() => {
  if (!category.value) return null

  const baseTours = category.value.tours ?? []
  const fallbacks = [
    {
      id: 'journey-4',
      title: `${category.value.name} Discovery`,
      duration: '7 NIGHTS / 6 DAYS',
      route: category.value.tours?.[0]?.route ?? '',
      description: `A curated ${String(category.value.name).toLowerCase()} journey across remarkable destinations.`,
      image: category.value.image
    },
    {
      id: 'journey-5',
      title: `${category.value.name} Escape`,
      duration: '5 NIGHTS / 4 DAYS',
      route: category.value.tours?.[category.value.tours.length - 1]?.route ?? '',
      description: `A thoughtfully planned ${String(category.value.name).toLowerCase()} escape with memorable experiences.`,
      image: category.value.image
    }
  ]

  return {
    ...category.value,
    tours: [...baseTours, ...fallbacks].slice(0, 5)
  }
})
const isResetting = ref(false)

const sliderTours = computed(() => {
    const tours = categoryWithTours.value?.tours ?? []

    if (tours.length <= visibleSlides.value) {
        return tours
    }

    return [
        ...tours,
        ...tours.slice(0, visibleSlides.value)
    ]
})

const slideWidth = computed(() => {
    if (visibleSlides.value === 1) return 100
    if (visibleSlides.value === 2) return 50
    return 33.333333
})

const updateVisibleSlides = () => {
    if (typeof window === 'undefined') return

    if (window.innerWidth <= 700) {
        visibleSlides.value = 1
    } else if (window.innerWidth <= 1000) {
        visibleSlides.value = 2
    } else {
        visibleSlides.value = 3
    }

    currentIndex.value = 0
}

const nextTour = () => {
    if ((categoryWithTours.value?.tours.length ?? 0) <= visibleSlides.value) return

    isResetting.value = false
    currentIndex.value += 1
}

const previousTour = () => {
    const totalTours = categoryWithTours.value?.tours.length ?? 0

    if (totalTours <= visibleSlides.value) return

    if (currentIndex.value === 0) {
        isResetting.value = true
        currentIndex.value = totalTours

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isResetting.value = false
                currentIndex.value = totalTours - 1
            })
        })

        return
    }

    isResetting.value = false
    currentIndex.value -= 1
}

const handleTransitionEnd = () => {
    const totalTours = categoryWithTours.value?.tours.length ?? 0

    if (totalTours <= visibleSlides.value) return

    if (currentIndex.value >= totalTours) {
        isResetting.value = true
        currentIndex.value = 0

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                isResetting.value = false
            })
        })
    }
}


watch(() => route.params.slug, () => {
  currentIndex.value = 0
})

onMounted(() => {
    updateVisibleSlides()
    window.addEventListener('resize', updateVisibleSlides)

    if (typeof window !== 'undefined' && support.value && sectionRef.value) {
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
            gsap.from('.support-detail__eyebrow', {
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            })

            gsap.from('.support-detail__title', {
                y: 50,
                opacity: 0,
                duration: 0.9,
                delay: 0.1,
                ease: 'power3.out'
            })

            gsap.from('.support-detail__description', {
                y: 25,
                opacity: 0,
                duration: 0.7,
                delay: 0.2,
                ease: 'power3.out'
            })

            gsap.from('.support-detail__point', {
                y: 25,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.support-detail__points',
                    start: 'top 85%',
                    once: true
                }
            })
        }, sectionRef.value)
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', updateVisibleSlides)
    ctx?.revert()
})

if (!category.value && !support.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
    })
}

useSeoMeta({
    title: () =>
        category.value
            ? `${category.value.name} Journeys | Vedic Journey`
            : `${support.value?.title ?? 'Travel Support'} | Vedic Journey`,
    description: () =>
        category.value?.description ??
        support.value?.description ??
        'Explore curated journeys and travel support with Vedic Journey.'
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.category-page {
    min-height: 100svh;
    background: $color-ivory;
    color: $color-charcoal;
}

.category-hero {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 68svh;
    padding:
        150px var(--page-padding) 90px;

    overflow: hidden;

    background:
        $color-charcoal url('/images/experiences/wildlife.jpg') center / cover no-repeat;

    color: $color-ivory-light;
    isolation: isolate;

    &__overlay {
        position: absolute;
        inset: 0;
        z-index: 0;

        background: rgba(7, 7, 6, 0.56);
    }

    &__content {
        position: relative;
        z-index: 1;

        width: 100%;
        max-width: 900px;

        margin-inline: auto;

        text-align: center;
    }

    &__eyebrow {
        margin: 0 0 20px;

        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.16em;
        text-transform: uppercase;

        color: rgba(250, 248, 243, 0.72);
    }

    &__title {
        margin: 0;

        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(5rem, 11vw, 10rem);
        font-weight: 400;
        line-height: 0.82;
        letter-spacing: 0.02em;

        color: #fff;
    }

    &__description {
        max-width: 650px;

        margin: 38px auto 0;

        font-family: 'Manrope', sans-serif;
        font-size: var(--fs-body);
        font-weight: 400;
        line-height: 1.7;

        color: rgba(250, 248, 243, 0.9);
    }
}

.category-tours {
    padding:
        clamp(90px, 10vw, 140px) var(--page-padding) clamp(100px, 12vw, 170px);

    &__header {
        width: 100%;
        max-width: 760px;

        margin:
            0 auto clamp(50px, 6vw, 75px);

        text-align: center;
    }

    &__eyebrow {
        margin: 0 0 18px;

        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.16em;
        text-transform: uppercase;

        color: $color-text-muted;
    }

    &__heading {
        margin: 0;

        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(3.8rem, 6vw, 6.8rem);
        font-weight: 400;
        line-height: 0.86;
        letter-spacing: 0.02em;

        color: $color-charcoal;
    }

    &__description {
        max-width: 620px;

        margin: 25px auto 0;

        font-family: 'Manrope', sans-serif;
        font-size: var(--fs-body);
        font-weight: 400;
        line-height: 1.7;

        color: $color-text-muted;
    }

    &__slider {
        position: relative;

        width: 100%;
        max-width: 1280px;

        margin-inline: auto;

        padding-inline: 58px;
    }

    &__viewport {
        width: 100%;
        overflow: hidden;
    }

    &__track {
        display: flex;

        width: 100%;

        transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);

        &--reset {
            transition: none;
        }
    }

    &__control {
        position: absolute;
        z-index: 3;
        top: 50%;

        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        padding: 0;

        border: 1px solid rgba($color-charcoal, 0.3);
        border-radius: 0;

        background: transparent;
        color: $color-charcoal;

        cursor: pointer;

        transform: translateY(-50%);

        transition:
            background $transition-fast,
            color $transition-fast,
            border-color $transition-fast;

        :deep(svg) {
            width: 16px;
            height: 16px;
        }

        &:hover {
            background: $color-charcoal;
            color: $color-ivory;
            border-color: $color-charcoal;
        }

        &--prev {
            left: 0;
        }

        &--next {
            right: 0;
        }
    }
}

.tour-card {
    flex: 0 0 33.333333%;

    box-sizing: border-box;

    padding: 0 12px;

    overflow: hidden;

    border: 1px solid rgba($color-charcoal, 0.14);

    background: $color-ivory-light;

    &__image {
        width: 100%;
        aspect-ratio: 1.35 / 1;
        overflow: hidden;

        background: $color-charcoal;

        img {
            display: block;

            width: 100%;
            height: 100%;

            object-fit: cover;

            transition: transform $transition-fast;
        }
    }

    &__content {
        padding: 30px;
    }

    &__meta {
        margin: 0 0 14px;

        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.12em;
        text-transform: uppercase;

        color: $color-text-muted;
    }

    &__title {
        margin: 0;

        font-family: 'Bebas Neue', sans-serif;
        font-size: clamp(2.5rem, 3.4vw, 3.8rem);
        font-weight: 400;
        line-height: 0.9;
        letter-spacing: 0.02em;

        color: $color-charcoal;
    }

    &__route {
        margin: 18px 0 0;

        font-family: 'Manrope', sans-serif;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;

        color: $color-charcoal;
    }

    &__description {
        margin: 16px 0 0;

        font-family: 'Manrope', sans-serif;
        font-size: var(--fs-body);
        font-weight: 400;
        line-height: 1.7;

        color: $color-text-muted;
    }

    &__button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        margin-top: 26px;
        padding: 14px 20px;

        border: 1px solid $color-charcoal;
        border-radius: 0;

        background: $color-charcoal;
        color: $color-ivory;

        font-family: 'Manrope', sans-serif;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-decoration: none;

        transition:
            background $transition-fast,
            color $transition-fast,
            border-color $transition-fast;

        :deep(svg) {
            width: 16px;
            height: 16px;
        }

        &:hover {
            background: transparent;
            color: $color-charcoal;
            border-color: $color-charcoal;
        }
    }

    &:hover {
        .tour-card__image img {
            transform: scale(1.03);
        }
    }
}

@media (max-width: 1000px) {
    .category-tours__slider {
        padding-inline: 52px;
    }

    .tour-card {
        flex-basis: 50%;
    }
}

@media (max-width: 700px) {
    .category-hero {
        min-height: 62svh;
        padding:
            130px var(--page-padding) 70px;
    }

    .category-tours__slider {
        padding-inline: 48px;
    }

    .tour-card {
        flex-basis: 100%;
        padding-inline: 0;
    }

    .tour-card__content {
        padding: 26px;
    }
}

.support-detail {
  background: $color-ivory-light;
  color: $color-charcoal;
}

.support-detail__hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 100svh;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  isolation: isolate;
}

.support-detail__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.32) 45%,
    rgba(0, 0, 0, 0.78) 100%
  );
  z-index: -1;
}

.support-detail__hero-content {
  width: 100%;
  max-width: $container-max;
  margin-inline: auto;
  padding:
    0
    var(--page-padding)
    clamp(70px, 9vw, 130px);
  color: #fff;
}

.support-detail__eyebrow,
.support-detail__label {
  margin: 0 0 18px;
  font-family: 'Manrope', sans-serif;
  font-size: var(--fs-link);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.support-detail__title {
  max-width: 1100px;
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(5rem, 10vw, 10rem);
  font-weight: 400;
  line-height: 0.82;
  letter-spacing: 0.015em;
}

.support-detail__description {
  max-width: 650px;
  margin: 28px 0 0;
  font-family: 'Manrope', sans-serif;
  font-size: var(--fs-body-lg);
  line-height: 1.65;
}

.support-detail__content {
  padding:
    clamp(90px, 9vw, 150px)
    var(--page-padding);
}

.support-detail__content-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.8fr);
  gap: clamp(60px, 9vw, 150px);
  max-width: $container-max;
  margin-inline: auto;
}

.support-detail__heading {
  max-width: 800px;
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.8rem, 6vw, 6.8rem);
  font-weight: 400;
  line-height: 0.86;
  letter-spacing: 0.02em;
}

.support-detail__text {
  max-width: 650px;
  margin: 30px 0 0;
  color: $color-text-muted;
  font-family: 'Manrope', sans-serif;
  line-height: 1.7;
}

.support-detail__points {
  display: flex;
  flex-direction: column;
}

.support-detail__point {
  display: flex;
  align-items: baseline;
  gap: 18px;
  padding: 24px 0;
  border-top: 1px solid rgba(23, 23, 21, 0.2);
}

.support-detail__point:last-child {
  border-bottom: 1px solid rgba(23, 23, 21, 0.2);
}

.support-detail__point-number {
  font-family: 'Manrope', sans-serif;
  color: $color-text-muted;
}

.support-detail__point h3 {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.support-detail__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: $container-max;
  margin-inline: auto;
  padding:
    clamp(70px, 8vw, 120px)
    var(--page-padding);
  border-top: 1px solid rgba(23, 23, 21, 0.2);
}

.support-detail__cta h2 {
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.8rem, 6vw, 6.8rem);
  font-weight: 400;
  line-height: 0.86;
}

.support-detail__cta-link {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 54px;
  padding: 0 25px;
  border: 1px solid $color-charcoal;
  background: #000;
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: var(--fs-link);
  font-weight: 500;
  letter-spacing: 0.07em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background $transition-medium,
    color $transition-medium;
}

.support-detail__cta-link :deep(svg) {
  width: 16px;
  height: 16px;
  transition: transform $transition-medium;
}

.support-detail__cta-link:hover {
  background: transparent;
  color: #000;
}

.support-detail__cta-link:hover :deep(svg) {
  transform: translateX(4px);
}

.support-detail--not-found {
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 40px var(--page-padding);
  text-align: center;
}

@media (max-width: 900px) {
  .support-detail__content-inner {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .support-detail__cta {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .support-detail__hero-content {
    padding-bottom: 70px;
  }

  .support-detail__title {
    font-size: clamp(4rem, 15vw, 7rem);
  }

  .support-detail__description {
    font-size: 0.95rem;
  }

  .support-detail__content {
    padding-top: 75px;
    padding-bottom: 85px;
  }

  .support-detail__cta {
    padding-top: 70px;
    padding-bottom: 80px;
  }

  .support-detail__cta-link {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .support-detail__title {
    font-size: clamp(3.5rem, 16vw, 5.5rem);
  }

  .support-detail__heading,
  .support-detail__cta h2 {
    font-size: 3.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .support-detail__eyebrow,
  .support-detail__title,
  .support-detail__description,
  .support-detail__image,
  .support-detail__point {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

.slug-not-found {
    min-height: 100svh;
    background: $color-ivory-light;
    color: $color-charcoal;
}

.slug-not-found__content {
    min-height: calc(100svh - 80px);
    display: grid;
    place-items: center;
    align-content: center;
    gap: 18px;
    padding: 120px var(--page-padding) 80px;
    text-align: center;
}

.slug-not-found__content h1 {
    margin: 0;
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(6rem, 14vw, 12rem);
    font-weight: 400;
    line-height: 0.8;
}

.slug-not-found__content p {
    margin: 0 0 18px;
    font-family: 'Manrope', sans-serif;
}

</style>
