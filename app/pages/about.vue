<template>
  <main class="about-page">
    <SiteHeader />

    <section class="about-hero">
      <div class="about-hero__content">
        <p class="about-hero__eyebrow eyebrow">About Vedic Journey</p>
        <h1 class="about-hero__title">
          WE ARE LEADING<br />
          INTERNATIONAL<br />
          TRAVEL COMPANY
        </h1>
        <p class="about-hero__intro body-large">
          Your journey begins now. Are you ready to explore, learn,
          and connect with the world on this remarkable expedition?
          Welcome to the Vedic Journey community.
        </p>
      </div>
      <div class="about-hero__image">
        <img src="/images/destinations/middle-east.jpg" alt="Travel destination" />
      </div>
    </section>

    <section class="about-story">
      <div class="about-story__grid">
        <div class="about-story__image">
          <img src="/images/destinations/middle-east.jpg" alt="Cultural travel experience" />
        </div>
        <div class="about-story__content">
          <p class="about-story__eyebrow eyebrow">Our Culture</p>
          <h2 class="about-story__title">OUR<br />CULTURE.</h2>
          <div class="about-story__line"></div>
          <div class="about-story__text">
            <p>
              Whether you’re an intrepid explorer seeking new horizons,
              a seeker of spiritual insight, or someone who simply craves
              the thrill of discovering the unfamiliar, “Vedic Journey”
              is your partner in traversing this extraordinary planet.
            </p>
            <p>
              Allow us to be your cultural compass, your mentor for
              cross-cultural understanding, and your storyteller of the
              world’s most intriguing narratives.
            </p>
            <p>
              Join us in celebrating the timeless teachings and awe-inspiring
              beauty that the world has to offer, where every step becomes
              a “Vedic Journey” unto itself.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-beliefs">
      <div class="about-beliefs__header">
        <p class="eyebrow">Our Purpose</p>
        <h2>MISSION,<br /><em>VISION &amp; VALUES.</em></h2>
      </div>
      <div class="about-beliefs__list">
        <article class="about-belief">
          <div class="about-belief__number">01</div>
          <div class="about-belief__content">
            <h3>MISSION</h3>
            <p>
              To inspire transformative journeys that connect travelers
              with the ancient wisdom and diverse cultures of the world,
              fostering personal growth and a deeper understanding of our
              shared human heritage.
            </p>
          </div>
        </article>
        <article class="about-belief">
          <div class="about-belief__number">02</div>
          <div class="about-belief__content">
            <h3>VISION</h3>
            <p>
              Vedic Journey provides immersive travel experiences that
              blend modern comfort with ancient traditions. Our unique
              itineraries, led by local experts, aim to foster mindfulness
              and a sense of unity in our clients.
            </p>
          </div>
        </article>
        <article class="about-belief">
          <div class="about-belief__number">03</div>
          <div class="about-belief__content">
            <h3>VALUES</h3>
            <p>
              Vedic Journey’s values are rooted in heritage preservation,
              authenticity, sustainability, and mindful exploration. We
              prioritize our customers, delivering exceptional service,
              and embrace inclusivity by welcoming travelers from all
              backgrounds.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="about-difference">
      <div class="about-difference__image">
        <img src="/images/owner.jpg" alt="Subrata Chatterjee, Founder of Vedic Journey" />
      </div>
      <div class="about-difference__content">
        <p class="about-difference__eyebrow eyebrow">Meet the Founder</p>
        <h2>SUBRATA<br /><em>CHATTERJEE.</em></h2>
        <div class="about-difference__line"></div>
        <p class="about-difference__description body-large">
          With a vast experience of more than 25 years in the travel,
          hospitality &amp; aviation industry, we are well-versed with all
          its aspects, including but not limited to logistics,
          administration and the industry’s backbone – the people we serve
          and the people who help to provide the services.
        </p>
        <div class="about-difference__features">
          <div class="about-difference__feature"><span>01</span><strong>25+ Years Experience</strong></div>
          <div class="about-difference__feature"><span>02</span><strong>Travel &amp; Hospitality</strong></div>
          <div class="about-difference__feature"><span>03</span><strong>Corporate Events</strong></div>
          <div class="about-difference__feature"><span>04</span><strong>Personal Journeys</strong></div>
        </div>
      </div>
    </section>

    <section class="about-philosophy">
      <div class="about-philosophy__inner">
        <p class="about-philosophy__eyebrow eyebrow">Our Purpose</p>
        <blockquote>
          “Allow us to be your cultural compass, your mentor for<br />
          cross-cultural understanding, and your storyteller of the<br />
          world’s most intriguing narratives.”
        </blockquote>
        <p class="about-philosophy__text">
          We carved memorable experiences for various large-scale corporate
          events, team-building and goal-setting seminars for smaller teams
          of big corporate houses and even for individuals who have travelled
          solo or with a select group of their chosen friends, family members
          and acquaintances.
        </p>
      </div>
    </section>

    <section class="about-destinations">
      <div class="about-destinations__content">
        <p class="eyebrow">Your Journey Begins Now</p>
        <h2>EXPLORE<br />THE <em>WORLD.</em></h2>
        <p class="body-large">
          Whether you are seeking new horizons, spiritual insight,
          or the thrill of discovering the unfamiliar, join us on
          a remarkable expedition across the world.
        </p>
        <NuxtLink to="/destinations" class="about-destinations__link">
          <span>Explore Destinations</span>
          <span class="about-destinations__arrow"><Icon name="lucide:arrow-right" /></span>
        </NuxtLink>
      </div>
      <div class="about-destinations__image">
        <img src="/images/destinations/middle-east.jpg" alt="Vedic Journey destination" />
      </div>
    </section>

    <section class="about-final">
      <p class="about-final__eyebrow eyebrow">Need Help?</p>
      <h2>LET’S<br />MAKE IT<br /><em>MEMORABLE.</em></h2>
      <NuxtLink to="/contact" class="about-final__link">
        <span>Contact Us</span>
        <span><Icon name="lucide:arrow-right" /></span>
      </NuxtLink>
    </section>
  </main>
</template>


<script setup lang="ts">

import {
  onMounted,
  onUnmounted
} from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SiteHeader from '~/components/layout/SiteHeader.vue'

gsap.registerPlugin(ScrollTrigger)

let ctx: gsap.Context | null = null

onMounted(() => {

  ctx = gsap.context(() => {

    /* ---------------------------------------------------------
       HERO
    --------------------------------------------------------- */

    gsap.from(
      '.about-hero__eyebrow',
      {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: 'power3.out'
      }
    )

    gsap.from(
      '.about-hero__title',
      {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.15,
        ease: 'power3.out'
      }
    )

    gsap.from(
      '.about-hero__intro',
      {
        opacity: 0,
        y: 25,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      }
    )


    /* ---------------------------------------------------------
       STORY
    --------------------------------------------------------- */

    gsap.from(
      '.about-story__image',
      {
        opacity: 0,
        x: -60,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-story',
          start: 'top 75%'
        }
      }
    )

    gsap.from(
      '.about-story__content',
      {
        opacity: 0,
        x: 60,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-story',
          start: 'top 75%'
        }
      }
    )


    /* ---------------------------------------------------------
       BELIEFS
    --------------------------------------------------------- */

    gsap.from(
      '.about-belief',
      {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-beliefs',
          start: 'top 75%'
        }
      }
    )


    /* ---------------------------------------------------------
       DIFFERENCE
    --------------------------------------------------------- */

    gsap.from(
      '.about-difference__image',
      {
        opacity: 0,
        x: -60,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-difference',
          start: 'top 75%'
        }
      }
    )

    gsap.from(
      '.about-difference__content',
      {
        opacity: 0,
        x: 60,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-difference',
          start: 'top 75%'
        }
      }
    )


    /* ---------------------------------------------------------
       PHILOSOPHY
    --------------------------------------------------------- */

    gsap.from(
      '.about-philosophy blockquote',
      {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-philosophy',
          start: 'top 75%'
        }
      }
    )


    /* ---------------------------------------------------------
       FINAL CTA
    --------------------------------------------------------- */

    gsap.from(
      '.about-final h2',
      {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-final',
          start: 'top 75%'
        }
      }
    )

  })

})


onUnmounted(() => {

  ctx?.revert()

})

</script>


<style lang="scss" scoped>

@use '~/assets/scss/variables' as *;


/* ============================================================
   PAGE
============================================================ */

.about-page {
  background: $color-ivory;
  color: $color-charcoal;
  min-height: 100svh;
  padding-top: 120px;
}


/* ============================================================
   HERO
============================================================ */

.about-hero {
  padding:
    clamp(70px, 9vw, 140px)
    var(--page-padding)
    clamp(80px, 10vw, 150px);

  &__content {
    max-width: 1100px;
    margin-inline: auto;
    text-align: center;
  }

  &__eyebrow {
    margin-bottom: 28px;
  }

  &__title {
    margin: 0;

    font-family:
      'Bebas Neue',
      sans-serif;

    font-size:
      clamp(4.5rem, 9vw, 9.5rem);

    font-weight: 400;

    line-height: 0.82;

    letter-spacing: 0.02em;

    color: $color-charcoal;

    em {
      color: $color-charcoal;
      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: 0.75em;
      font-style: italic;
      letter-spacing: -0.02em;
    }
  }

  &__intro {
    max-width: 650px;

    margin:
      45px
      auto
      0;

    color: $color-text-muted;

    line-height: 1.7;
  }

  &__image {
    width: 100%;
    max-width: 1500px;

    margin:
      clamp(70px, 9vw, 130px)
      auto
      0;

    aspect-ratio: 16 / 7;

    overflow: hidden;

    img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
}


/* ============================================================
   STORY
============================================================ */

.about-story {
  padding:
    clamp(100px, 12vw, 180px)
    var(--page-padding);

  &__label {
    display: flex;
    align-items: center;

    gap: 18px;

    margin-bottom: 55px;

    font-family:
      'Manrope',
      sans-serif;

    font-size: 10px;

    letter-spacing: 0.16em;

    text-transform: uppercase;

    color: $color-text-muted;

    span:first-child {
      color: $color-sand;
    }
  }

  &__grid {
    width: 100%;
    max-width: $container-max;

    margin-inline: auto;

    display: grid;

    grid-template-columns:
      minmax(0, 1.05fr)
      minmax(0, 0.95fr);

    gap:
      clamp(50px, 8vw, 130px);

    align-items: center;
  }

  &__image {
    aspect-ratio: 4 / 5;

    overflow: hidden;

    img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  &__content {
    max-width: 600px;
  }

  &__eyebrow {
    margin-bottom: 25px;
  }

  &__title {
    margin: 0;

    font-family:
      'Bebas Neue',
      sans-serif;

    font-size:
      clamp(4rem, 7vw, 7rem);

    font-weight: 400;

    line-height: 0.88;

    letter-spacing: 0.02em;
  }

  &__line {
    width: 100%;
    height: 1px;

    margin:
      42px
      0
      35px;

    background:
      rgba($color-charcoal, 0.18);
  }

  &__text {
    max-width: 500px;

    p {
      margin: 0 0 22px;

      color: $color-text-muted;

      line-height: 1.75;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}


/* ============================================================
   BELIEFS
============================================================ */

.about-beliefs {
  padding:
    clamp(100px, 12vw, 180px)
    var(--page-padding);

  background:
    $color-charcoal;

  color:
    $color-ivory;

  &__header {
    width: 100%;
    max-width: $container-max;

    margin-inline: auto;

    margin-bottom:
      clamp(60px, 8vw, 110px);

    .eyebrow {
      color:
        rgba($color-ivory, 0.55);
    }

    h2 {
      margin: 25px 0 0;

      font-family:
        'Bebas Neue',
        sans-serif;

      font-size:
        clamp(5rem, 10vw, 10rem);

      font-weight: 400;

      line-height: 0.85;

      letter-spacing: 0.02em;

      em {
        font-family:
          'Cormorant Garamond',
          Georgia,
          serif;

        font-size: 0.75em;

        font-style: italic;

        letter-spacing: -0.02em;

        color:
          $color-sand;
      }
    }
  }

  &__list {
    width: 100%;
    max-width: $container-max;

    margin-inline: auto;
  }
}


.about-belief {
  display: grid;

  grid-template-columns:
    100px
    minmax(0, 650px);

  gap: 40px;

  padding:
    40px
    0;

  border-top:
    1px solid
    rgba($color-ivory, 0.18);

  &:last-child {
    border-bottom:
      1px solid
      rgba($color-ivory, 0.18);
  }

  &__number {
    font-family:
      'Manrope',
      sans-serif;

    font-size: 11px;

    letter-spacing:
      0.12em;

    color:
      $color-sand;
  }

  &__content {
    h3 {
      margin: 0 0 18px;

      font-family:
        'Bebas Neue',
        sans-serif;

      font-size:
        clamp(2.5rem, 4vw, 4rem);

      font-weight: 400;

      line-height: 0.95;

      letter-spacing: 0.02em;
    }

    p {
      max-width: 550px;

      margin: 0;

      color:
        rgba($color-ivory, 0.62);

      line-height: 1.7;
    }
  }
}


/* ============================================================
   DIFFERENCE
============================================================ */

.about-difference {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  min-height: 800px;

  &__image {
    min-height: 600px;

    img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  &__content {
    display: flex;

    flex-direction: column;

    justify-content: center;

    padding:
      clamp(60px, 8vw, 120px);

    background:
      $color-ivory-light;
  }

  &__eyebrow {
    margin-bottom: 25px;
  }

  h2 {
    margin: 0;

    font-family:
      'Bebas Neue',
      sans-serif;

    font-size:
      clamp(5rem, 8vw, 9rem);

    font-weight: 400;

    line-height: 0.84;

    letter-spacing: 0.02em;

    em {
      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: 0.78em;

      font-style: italic;

      letter-spacing: -0.02em;

      color:
        $color-sand;
    }
  }

  &__line {
    width: 100%;
    height: 1px;

    margin:
      45px
      0
      35px;

    background:
      rgba($color-charcoal, 0.18);
  }

  &__description {
    max-width: 520px;

    margin: 0;

    color:
      $color-text-muted;

    line-height: 1.7;
  }

  &__features {
    display: grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap:
      0 30px;

    max-width: 560px;

    margin-top: 45px;
  }

  &__feature {
    display: flex;

    align-items: center;

    gap: 14px;

    padding:
      18px
      0;

    border-top:
      1px solid
      rgba($color-charcoal, 0.15);

    span {
      font-family:
        'Manrope',
        sans-serif;

      font-size: 9px;

      letter-spacing:
        0.1em;

      color:
        $color-sand;
    }

    strong {
      font-family:
        'Manrope',
        sans-serif;

      font-size: 11px;

      font-weight: 500;

      letter-spacing:
        0.05em;

      text-transform:
        uppercase;
    }
  }
}


/* ============================================================
   PHILOSOPHY
============================================================ */

.about-philosophy {
  padding:
    clamp(130px, 16vw, 230px)
    var(--page-padding);

  text-align: center;

  &__inner {
    max-width: 1100px;

    margin-inline: auto;
  }

  &__eyebrow {
    margin-bottom: 40px;
  }

  blockquote {
    margin: 0;

    font-family:
      'Cormorant Garamond',
      Georgia,
      serif;

    font-size:
      clamp(3.2rem, 6vw, 6.5rem);

    font-weight: 400;

    line-height: 0.95;

    letter-spacing:
      -0.025em;

    color:
      $color-charcoal;
  }

  &__text {
    max-width: 500px;

    margin:
      45px
      auto
      0;

    color:
      $color-text-muted;

    line-height: 1.7;
  }
}


/* ============================================================
   DESTINATIONS
============================================================ */

.about-destinations {
  display: grid;

  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(0, 1.1fr);

  min-height: 650px;

  background:
    $color-charcoal;

  color:
    $color-ivory;

  &__content {
    display: flex;

    flex-direction: column;

    justify-content: center;

    padding:
      clamp(60px, 8vw, 120px);
  }

  .eyebrow {
    color:
      rgba($color-ivory, 0.55);
  }

  h2 {
    margin:
      25px
      0
      35px;

    font-family:
      'Bebas Neue',
      sans-serif;

    font-size:
      clamp(5rem, 8vw, 9rem);

    font-weight: 400;

    line-height: 0.84;

    letter-spacing:
      0.02em;

    em {
      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: 0.78em;

      font-style: italic;

      color:
        $color-sand;
    }
  }

  &__content > p {
    max-width: 500px;

    color:
      rgba($color-ivory, 0.65);

    line-height: 1.7;
  }

  &__link {
    display: inline-flex;

    align-items: center;

    gap: 18px;

    width: fit-content;

    margin-top: 45px;

    padding-bottom: 10px;

    border-bottom:
      1px solid
      rgba($color-ivory, 0.4);

    color:
      $color-ivory;

    text-decoration: none;

    font-family:
      'Manrope',
      sans-serif;

    font-size: 11px;

    letter-spacing:
      0.12em;

    text-transform:
      uppercase;

    transition:
      border-color $transition-fast;

    &:hover {
      border-color:
        $color-ivory;

      .about-destinations__arrow {
        transform:
          translateX(5px);
      }
    }
  }

  &__arrow {
    display: flex;

    transition:
      transform $transition-fast;

    :deep(svg) {
      width: 17px;
      height: 17px;
    }
  }

  &__image {
    min-height: 500px;

    overflow: hidden;

    img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
}


/* ============================================================
   FINAL CTA
============================================================ */

.about-final {
  padding:
    clamp(120px, 15vw, 220px)
    var(--page-padding);

  text-align: center;

  &__eyebrow {
    margin-bottom: 30px;
  }

  h2 {
    margin: 0;

    font-family:
      'Bebas Neue',
      sans-serif;

    font-size:
      clamp(6rem, 13vw, 14rem);

    font-weight: 400;

    line-height: 0.8;

    letter-spacing:
      0.02em;

    em {
      font-family:
        'Cormorant Garamond',
        Georgia,
        serif;

      font-size: 0.78em;

      font-style: italic;

      letter-spacing:
        -0.02em;

      color:
        $color-sand;
    }
  }

  &__link {
    display: inline-flex;

    align-items: center;

    gap: 18px;

    margin-top: 55px;

    padding-bottom: 10px;

    border-bottom:
      1px solid
      rgba($color-charcoal, 0.35);

    color:
      $color-charcoal;

    text-decoration: none;

    font-family:
      'Manrope',
      sans-serif;

    font-size: 11px;

    letter-spacing:
      0.12em;

    text-transform:
      uppercase;

    transition:
      border-color $transition-fast;

    &:hover {
      border-color:
        $color-charcoal;

      span:last-child {
        transform:
          translateX(5px);
      }
    }

    span:last-child {
      display: flex;

      transition:
        transform $transition-fast;

      :deep(svg) {
        width: 17px;
        height: 17px;
      }
    }
  }
}


/* ============================================================
   TABLET
============================================================ */

@media (max-width: 991px) {

  .about-story__grid {
    grid-template-columns: 1fr;
  }

  .about-story__image {
    max-width: 650px;
  }

  .about-difference {
    grid-template-columns: 1fr;
  }

  .about-difference__image {
    min-height: 500px;
  }

  .about-destinations {
    grid-template-columns: 1fr;
  }

  .about-destinations__image {
    min-height: 500px;
  }
}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 600px) {

  .about-page {
    padding-top: 90px;
  }

  .about-hero {
    padding:
      55px
      var(--page-padding)
      80px;
  }

  .about-hero__title {
    font-size:
      clamp(5rem, 20vw, 7rem);
  }

  .about-hero__image {
    aspect-ratio: 4 / 5;
  }


  .about-story {
    padding:
      90px
      var(--page-padding);
  }

  .about-story__title {
    font-size:
      clamp(4rem, 18vw, 6rem);
  }


  .about-beliefs {
    padding:
      90px
      var(--page-padding);
  }

  .about-beliefs__header h2 {
    font-size:
      clamp(5rem, 20vw, 7rem);
  }

  .about-belief {
    grid-template-columns:
      45px
      minmax(0, 1fr);

    gap: 15px;

    padding: 30px 0;
  }

  .about-belief__content h3 {
    font-size:
      clamp(2.4rem, 10vw, 3.5rem);
  }


  .about-difference__content {
    padding:
      70px
      var(--page-padding);
  }

  .about-difference h2 {
    font-size:
      clamp(5rem, 19vw, 7rem);
  }

  .about-difference__features {
    grid-template-columns: 1fr;
  }


  .about-philosophy {
    padding:
      110px
      var(--page-padding);
  }

  .about-philosophy blockquote {
    font-size:
      clamp(3rem, 13vw, 4.5rem);
  }


  .about-destinations__content {
    padding:
      80px
      var(--page-padding);
  }

  .about-destinations h2 {
    font-size:
      clamp(5rem, 19vw, 7rem);
  }

  .about-destinations__image {
    min-height: 400px;
  }


  .about-final {
    padding:
      120px
      var(--page-padding);
  }

  .about-final h2 {
    font-size:
      clamp(5.5rem, 21vw, 8rem);
  }

}

</style>