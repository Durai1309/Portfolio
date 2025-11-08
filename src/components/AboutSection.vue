<template>
    <section class="about-area" id="about">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img src="@/assets/about-us-banner.png" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 about-content">
                    <h1 class="text-uppercase title-text">About Me</h1>

                    <div class="paragraph py-4">
                        <p class="para">
                            Hi, I'm M. Durai Raj, a passionate Senior Software Developer with 3 years of experience
                            building scalable web applications using .NET Core, ASP.NET Core MVC/Web API, Vue.js, Entity
                            Framework Core and
                            SQL Server. I embrace SOLID principles, Clean Architecture, Microservices Architecture,
                            Microfrontend Architecture, and Agile methodologies to craft robust, maintainable solutions.
                        </p>
                        <p class="para">
                            I have expertise in CI/CD automation using Bamboo and Bitbucket, performance optimization,
                            and IIS configuration for seamless deployments from development to production.

                        </p>
                        <p class="para">
                            I thrive in collaborative Agile environments, transforming complex requirements into
                            efficient, future-ready systems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-area {
    padding: 80px 0;
}

.about-image {
    text-align: center;
    padding: 20px;
    display: none;
}

.about-image img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: block;
}

.about-content {
    padding: 0 40px;
}

.title-text {
    font-size: 2.5rem;
    font-family: var(--roboto);
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 15px;
    text-align: center;
    border: none !important;
    border-bottom: none !important;
}

.paragraph {
    margin-bottom: 30px;
}

.para {
    font-family: var(--roboto);
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 20px;
    text-align: justify;
}


@media (max-width: 767.98px) {
    .about-area {
        padding: 40px 0;
    }

    .about-content {
        padding: 0 15px;
        text-align: center;
    }

    .title-text {
        font-size: 2rem;
    }

    .para {
        text-align: justify;
    }
}


@media (min-width: 768px) and (max-width: 991.98px) {
    .about-content {
        padding: 0 20px;
    }
}

@media (min-width: 992px) {
    .about-image {
        display: block;
    }
}
</style>