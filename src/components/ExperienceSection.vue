<template>
  <section id="experience" class="experience-section py-5">
    <div class="container px-3 px-md-5">
      <h2 class="section-heading">Work Experience</h2>
      <div class="timeline-wrapper">
        <div class="position-card shadow-lg mb-5">
          <div class="position-header">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
              <div>
                <h3 class="position-title mb-1">Software Developer</h3>
                <div class="company-details">Digital Logiciel Solutions Pvt Ltd, Chennai</div>
              </div>
              <div class="text-md-end mt-3 mt-md-0">
                <span class="badge bg-primary rounded-pill px-3 mb-1">Current</span>
                <div class="duration">
                  <i class="fas fa-calendar-alt me-2"></i> Aug 2023 – Present
                </div>
              </div>
            </div>
          </div>

          <div class="position-body">
            <div class="achievement-paragraph mb-4">
              <p>I am proficient in .NET Core, ASP.NET Core MVC, Web API, Entity Framework Core, Vue.js, and SQL Server,
                applying SOLID principles to develop innovative and robust solutions tailored to project needs. I
                advocate for Clean Architecture to improve code maintainability and scalability, ensuring a modular and
                extensible design that aligns with Agile methodologies. I manage CI/CD pipelines using Bamboo and
                Bitbucket, enabling rapid and reliable software delivery through continuous integration and deployment.
                Actively practicing Agile, I participate in sprint planning, backlog refinement, and reviews to
                prioritize tasks, adapt to evolving requirements, and maintain a strong focus on client needs.</p>
            </div>

            <div class="tech-stack mt-4 pt-3 border-top">
              <h6 class="stack-title mb-3">Tech Stack:</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="tech-badge">.NET Core</span>
                <span class="tech-badge">ASP.NET Core MVC</span>
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">SQL Server</span>
                <span class="tech-badge">Entity Framework Core</span>
                <span class="tech-badge">REST API</span>
                <span class="tech-badge">Clean Architecture</span>
                <span class="tech-badge">IIS</span>
                <span class="tech-badge">Bamboo</span>
                <span class="tech-badge">Bitbucket</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Previous Position -->
        <div class="position-card shadow mb-5">
          <div class="position-header">
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-2">
              <div>
                <h3 class="position-title mb-1">Associate Software Developer</h3>
                <div class="company-details">Digital Logiciel Solutions Pvt Ltd, Chennai</div>
              </div>
              <div class="text-md-end mt-3 mt-md-0">
                <div class="duration">
                  <i class="fas fa-calendar-alt me-2"></i> Jan 2023 – Aug 2023
                </div>
              </div>
            </div>
          </div>

          <div class="position-body">
            <div class="achievement-paragraph mb-4">
              <p>Specialized in .NET Core development within an Agile environment, with a focus on Web API, ASP.NET Core
                MVC, Entity Framework Core, and SQL Server to deliver iterative and customer-centric solutions. Actively
                contributed to Agile ceremonies such as sprint planning, backlog refinement, and sprint reviews to
                prioritize tasks and align with project objectives. Collaborated on the design and implementation of
                Microservices Architecture, utilizing Agile principles to ensure adaptability, flexibility, and
                scalability of the system.</p>
            </div>

            <div class="tech-stack mt-4 pt-3 border-top">
              <h6 class="stack-title mb-3">Tech Stack:</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="tech-badge">.NET Core</span>
                <span class="tech-badge">ASP.NET Core MVC</span>
                <span class="tech-badge">Entity Framework Core</span>
                <span class="tech-badge">SQL Server</span>
                <span class="tech-badge">REST API</span>
                <span class="tech-badge">Microservices Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection'
}
</script>

<style scoped>
.experience-section {
  background-color: white;
  font-family: var(--roboto);
}

.section-heading {
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0 3rem;
  font-family: var(--roboto);
  font-weight: 700;
  color: #2c3e50;
}

.position-card {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: var(--roboto);
}

.position-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.position-header {
  padding: 1.5rem 1.5rem 0.5rem;
}

.position-body {
  padding: 0 1.5rem 1.5rem;
}

.position-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d3748;
  font-family: var(--roboto);
}

.company-details {
  color: #4a5568;
  font-size: 0.95rem;
  font-family: var(--roboto);
}

.duration {
  color: #718096;
  font-size: 0.9rem;
  font-family: var(--roboto);
}

.achievement-paragraph p {
  color: #4a5568;
  line-height: 1.7;
  font-size: 0.95rem;
  font-family: var(--roboto);
}

.tech-stack {
  font-family: var(--roboto);
}

.stack-title {
  color: #2d3748;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: var(--roboto);
}

.tech-badge {
  background-color: #f0f4f8;
  color: #2d3748;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: var(--roboto);
}

@media (max-width: 768px) {
  .section-heading {
    font-size: 1.75rem;
    margin: 1.5rem 0 2rem;
  }

  .position-header,
  .position-body {
    padding: 1.25rem;
  }

  .position-title {
    font-size: 1.2rem;
  }
}
</style>