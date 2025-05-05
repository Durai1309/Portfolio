<template>
  <header class="header_area">
    <div class="main-menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="d-flex">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#home" @click.prevent="handleNavClick('home')"
                  style="font-size: 1.03rem;">Portfolio</a>
              </li>
            </ul>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ref="navbarToggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home" @click.prevent="handleNavClick('home')">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about" @click.prevent="handleNavClick('about')">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills" @click.prevent="handleNavClick('skills')">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#experience" @click.prevent="handleNavClick('experience')">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education" @click.prevent="handleNavClick('education')">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects" @click.prevent="handleNavClick('projects')">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact" @click.prevent="handleNavClick('contact')">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      const header = document.querySelector('.header_area');
      header.classList.toggle('fixed-header', window.scrollY > 0);
    },

    handleNavClick(id) {
      const navbarCollapse = this.$refs.navbarCollapse;
      const isMenuOpen = navbarCollapse.classList.contains('show');

      if (isMenuOpen) {
        navbarCollapse.classList.remove('show');
        document.body.style.overflow = '';
        this.$refs.navbarToggler.setAttribute('aria-expanded', 'false');
      }

      this.scrollToSection(id);
    },

    scrollToSection(id) {
      const element = document.getElementById(id);
      if (element) {
        const header = document.querySelector('.header_area');
        const headerHeight = header.offsetHeight;
        const extraOffset = window.innerWidth < 992 ? 15 : 30;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - extraOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.header_area {
  transition: all 0.3s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
}

.fixed-header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-link {
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  font-weight: 500;
}

.navbar-nav .nav-link:hover {
  color: #007bff;
}

/* Smoother collapse transition */
.navbar-collapse.collapsing {
  transition: height 0.15s ease;
}

@media (min-width: 992px) {
  body {
    padding-top: 60px;
  }

  section {
    scroll-margin-top: 80px;
  }
}

@media (max-width: 991.98px) {
  body {
    padding-top: 56px;
  }

  .navbar-collapse {
    background-color: white;
    padding: 1rem;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  section {
    scroll-margin-top: 70px;
  }
}

html {
  scroll-behavior: smooth;
}
</style>