<template>
  <AppHeader/>
  <main class="site-main">
  <SiteBanner/>
  <AboutSection/>
  <SkillSection/>
  <ExperienceSection/>
  <EducationSection/>
  <ContactSection/>
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import SiteBanner from './components/SiteBanner.vue'
import AboutSection from './components/AboutSection.vue'
import SkillSection from './components/SkillSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import EducationSection from './components/EducationSection.vue';
import ContactSection from './components/ContactSection.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    SiteBanner,
    AboutSection,
    SkillSection,
    ExperienceSection,
    EducationSection,
    ContactSection
  }
}
</script>

<style>
</style>
