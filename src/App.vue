<template>
  <AppHeader />
  <main class="site-main">
    <SiteBanner id="home" />
    <AboutSection id="about" />
    <SkillSection id="skills" />
    <ExperienceSection id="experience" />
    <EducationSection id="education" />
    <ProjectSection id="projects" />
    <ContactSection id="contact" />
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
import ProjectSection from './components/ProjectSection.vue';



export default {
  name: 'App',
  components: {
    AppHeader,
    SiteBanner,
    AboutSection,
    SkillSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    ProjectSection
  }
}
</script>

<style></style>
