<template>
  <header
    class="site-header"
    :class="{
      'site-header--dark': useDarkHeroHeader  && !isFixed,
      'site-header--fixed': isFixed
    }"
  >
    <div class="site-header__inner">

      <NuxtLink
        to="/"
        class="site-header__brand"
        aria-label="Vedic Journey home"
      >
        <img
          src="/images/logo/logo.png"
          alt="Vedic Journey"
          class="site-header__logo"
        >
      </NuxtLink>

      <nav
        class="site-header__nav"
        aria-label="Main navigation"
      >
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/destinations">Destinations</NuxtLink>
        <NuxtLink to="/about">About Us</NuxtLink>
        <NuxtLink to="/contact">Contact Us</NuxtLink>
        <NuxtLink to="/blogs">Blogs</NuxtLink>
      </nav>

      <button
        class="site-header__menu"
        type="button"
        aria-label="Open navigation"
      >
        <span />
        <span />
      </button>

    </div>
  </header>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch
} from 'vue'

const route = useRoute()

const isFixed = ref(false)

const useDarkHeroHeader = computed(() => {
  return (
    route.path === '/destinations' ||
    route.path === '/contact'
  )
})

const updateHeader = () => {
  if (typeof window === 'undefined') return

  const hero =
    document.querySelector<HTMLElement>('[data-header-hero]')

  if (!hero) {
    isFixed.value = false
    return
  }

  isFixed.value =
    hero.getBoundingClientRect().bottom <= 0
}

const setupPage = async () => {
  await nextTick()

  requestAnimationFrame(() => {
    updateHeader()
  })
}

onMounted(() => {
  setupPage()

  window.addEventListener(
    'scroll',
    updateHeader,
    { passive: true }
  )

  window.addEventListener(
    'resize',
    updateHeader,
    { passive: true }
  )
})

watch(
  () => route.fullPath,
  () => {
    isFixed.value = false
    setupPage()
  }
)

onUnmounted(() => {
  window.removeEventListener(
    'scroll',
    updateHeader
  )

  window.removeEventListener(
    'resize',
    updateHeader
  )
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables' as *;

.site-header {
  position: absolute;
  z-index: $z-header;
  top: 0;
  left: 0;

  width: 100%;

  padding:
    clamp(22px, 2.2vw, 32px)
    var(--page-padding);

  color: $color-ivory-light;


  &--dark {
    color: $color-charcoal;
    font-weight: 500;
  }

  // ==========================================================
  // FIXED HEADER
  // ==========================================================

  &--fixed {
    position: fixed;

    z-index: 9998;

    padding:
      12px
      var(--page-padding);

    background: rgba(248, 245, 238, 0.96);

    color: $color-charcoal;

    box-shadow:
      0 1px 0 rgba(20, 20, 18, 0.08),
      0 8px 30px rgba(20, 20, 18, 0.06);

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    animation: headerReveal 300ms ease both;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: $container-max;

    margin-inline: auto;
  }

  // ==========================================================
  // BRAND
  // ==========================================================

  &__brand {
    display: inline-flex;
    align-items: center;

    width: fit-content;
  }

  &__logo {
    display: block;

    width: clamp(140px, 10vw, 175px);
    height: auto;

    object-fit: contain;

    transition: width 300ms ease;
  }

  &--fixed &__logo {
    width: clamp(120px, 8vw, 145px);
  }

  // ==========================================================
  // NAVIGATION
  // ==========================================================

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: clamp(30px, 3vw, 55px);

    a {
      position: relative;

      padding-block: 10px;

      color: inherit;
      text-decoration: none;

      font-family: 'Manrope', sans-serif;
      font-size: var(--fs-nav);
      font-weight: 500;

      letter-spacing: 0.13em;
      text-transform: uppercase;

      &::after {
        position: absolute;

        bottom: 2px;
        left: 0;

        width: 100%;
        height: 1px;

        background: currentColor;

        content: '';

        transform: scaleX(0);
        transform-origin: right center;

        transition:
          transform $transition-fast;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }

  // ==========================================================
  // MOBILE MENU
  // ==========================================================

  &__menu {
    display: none;

    width: 34px;

    padding: 0;
    border: 0;

    background: transparent;
    color: inherit;

    cursor: pointer;

    span {
      display: block;

      width: 100%;
      height: 1px;

      background: currentColor;

      &:last-child {
        width: 70%;

        margin-top: 7px;
        margin-left: auto;
      }
    }
  }
}

// ============================================================
// FIXED HEADER REVEAL
// ============================================================

@keyframes headerReveal {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ============================================================
// TABLET
// ============================================================

@media (max-width: 1024px) {
  .site-header {
    padding-top: 24px;

    &--fixed {
      padding-top: 12px;
      padding-bottom: 12px;
    }

    &__nav {
      display: none;
    }

    &__menu {
      display: block;
    }
  }
}

// ============================================================
// MOBILE
// ============================================================

@media (max-width: 600px) {
  .site-header {
    padding-top: 22px;

    &--fixed {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &__logo {
      width: 155px;
    }

    &--fixed &__logo {
      width: 125px;
    }
  }
}
</style>