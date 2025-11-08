<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="section-heading">My Recent Quality Work</h2>
      <p class="section-subheading">
        Professionally crafted projects demonstrating modern development practices and clean design
      </p>
    </div>

    <div class="row g-4">
      <div class="col-md-6" v-for="(project, index) in projects" :key="index">
        <div class="quality-project-card card h-100 border-0 overflow-hidden">
          <div class="position-relative">
            <div class="project-image-wrapper">
              <img :src="project.image" class="project-image" :alt="project.title">
            </div>
          </div>

          <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <h3 class="project-title mb-0">{{ project.title }}</h3>
              <div class="tech-stack">
              </div>
            </div>

            <p class="project-description mb-4">{{ project.description }}</p>

            <div class="d-flex align-items-center justify-content-between mt-auto">
              <a :href="project.codeLink" class="btn btn-primary btn-pill px-4">
                <i class="bi bi-eye me-2"></i>Code Link
              </a>
              <div class="project-meta">
                <span class="text-muted me-3"><i class="bi bi-calendar me-1"></i>{{ project.date }}</span>
                <span class="text-muted"><i class="bi bi-clock me-1"></i>{{ project.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    title: "E-Commerce",
    description: "E-commerce project using .NET Core, Web API, REST API, MVC, microservices architecture, SQL Server, Entity Framework Core, Dependency Injection, Swagger, and implementing SOLID principles for maintainable and scalable code.",
    image: require('@/assets/ecommerce-banner.jpg'),
    liveLink: "#",
    codeLink: "https://github.com/Durai1309/E-commerce",
  },
  {
    title: "BookSeries",
    description: "BookSeries project using .NET Core, MVC, Clean Architecture, SQL Server, Entity Framework Core, Repository Design Pattern, Dependency Injection, and implementing SOLID principles for maintainable and scalable code.",
    image: require('@/assets/book-banner.jpg'),
    liveLink: "#",
    codeLink: "https://github.com/Durai1309/BookSeries",
  }
];
</script>

<style scoped>
.section-heading {
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  margin: 1.5rem 0;
  font-family: var(--roboto);
  font-weight: 700;
  color: #2d3748;
}

.section-subheading {
  color: #4a5568;
  font-family: var(--roboto);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.quality-project-card {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: var(--roboto);
}

.quality-project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.project-image-wrapper {
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.quality-project-card:hover .project-image {
  transform: scale(1.05);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  font-family: var(--roboto);
}

.project-description {
  color: #4a5568;
  line-height: 1.6;
  font-family: var(--roboto);
}

.btn-pill {
  border-radius: 50px;
  font-weight: 500;
  padding: 8px 20px;
  font-family: var(--roboto);
}

.project-meta {
  font-size: 0.85rem;
  font-family: var(--roboto);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-pill {
  background-color: #f0f4f8;
  color: #4a5568;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 500;
  font-family: var(--roboto);
}

@media (max-width: 767.98px) {
  .project-image-wrapper {
    height: 180px;
  }

  .card-body {
    padding: 1.5rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }
}
</style>