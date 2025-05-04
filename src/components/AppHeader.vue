<template>
    <header class="header_area">
        <div class="main-menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home" @click.prevent="scrollTo('home')"
                                    style="font-size: 1.03rem;">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#home" @click.prevent="scrollTo('home')">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about" @click.prevent="scrollTo('about')">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#experience"
                                    @click.prevent="scrollTo('experience')">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#education"
                                    @click.prevent="scrollTo('education')">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects" @click.prevent="scrollTo('projects')">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const header = document.querySelector('.header_area');
            header.classList.toggle('fixed-header', window.scrollY > 0);
        },

        scrollTo(id) {
            const navbarCollapse = document.getElementById('navbarNav');
            const isMobileMenuOpen = navbarCollapse.classList.contains('show');

            if (isMobileMenuOpen) {
                const bsCollapse = new Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }

            setTimeout(() => {
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
            }, isMobileMenuOpen ? 300 : 0);
        }
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
    }

    section {
        scroll-margin-top: 70px;
    }
}

html {
    scroll-behavior: smooth;
}
</style>