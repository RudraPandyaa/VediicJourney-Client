<script setup lang="ts">
import CustomCursor from '~/components/ui/CustomCursor.vue'
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
</script>

<template>
  <div class="app-wrapper">

    <!-- ONE GLOBAL HEADER -->
    <SiteHeader />

    <NuxtPage />

    <SiteFooter />

    <!-- WhatsApp -->
    <a
      class="whatsapp-float"
      href="https://wa.me/918178632701"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vedic Journey on WhatsApp"
    >
      <Icon name="logos:whatsapp-icon" />
    </a>

    <CustomCursor />
  </div>
</template>

<style lang="scss">
.whatsapp-float {
  position: fixed;
  right: clamp(18px, 2.2vw, 34px);
  bottom: clamp(18px, 2.2vw, 34px);
  z-index: 9999;

  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  border-radius: 50%;
  font-size: 35px;

  background: #25d366;

  box-shadow:
    0 8px 30px rgba(0, 0, 0, 0.18);

  text-decoration: none;

  transition:
    transform 220ms ease,
    box-shadow 220ms ease;

  &:hover {
    transform: translateY(-4px) scale(1.04);

    box-shadow:
      0 12px 36px rgba(0, 0, 0, 0.24);
  }
}

@media (max-width: 600px) {
  .whatsapp-float {
    right: 16px;
    bottom: 16px;

    width: 52px;
    height: 52px;

    svg {
      width: 27px;
      height: 27px;
    }
  }
}
</style>