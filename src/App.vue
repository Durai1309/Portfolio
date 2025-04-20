<template>
  <AppHeader/>
  <main class="site-main">
  <SiteBanner/>
  <AboutSection/>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import SiteBanner from './components/SiteBanner.vue'
import AboutSection from './components/AboutSection.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    SiteBanner,
    AboutSection
  }
}
</script>

<style>
</style>
