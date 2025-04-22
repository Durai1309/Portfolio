<template>
  <AppHeader/>
  <main class="site-main">
  <SiteBanner/>
  <AboutSection/>
  <SkillSection/>
  <ExperienceSection/>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import SiteBanner from './components/SiteBanner.vue'
import AboutSection from './components/AboutSection.vue'
import SkillSection from './components/SkillSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    SiteBanner,
    AboutSection,
    SkillSection,
    ExperienceSection
  }
}
</script>

<style>
</style>
