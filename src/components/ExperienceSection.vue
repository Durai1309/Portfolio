<template>
  <section id="experience" class="experience-section py-5">
    <div class="container px-3 px-md-5">
      <h2 class="section-title text-center mb-5">Professional Journey</h2>
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
              <p>Proficient in .NET Core, ASP.NET Core MVC, Web API, Entity Framework, Vue.js, and SQL Server, applying SOLID principles to craft innovative and robust solutions. Advocated Clean Architecture for maintainability and scalability. Managed CI/CD using Bamboo and Bitbucket. Collaborated in Agile ceremonies to prioritize work and maintain client-focused delivery.</p>
            </div>

            <div class="tech-stack mt-4 pt-3 border-top">
              <h6 class="stack-title mb-3">Tech Stack:</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="tech-badge">.NET Core</span>
                <span class="tech-badge">ASP.NET Core</span>
                <span class="tech-badge">Vue.js</span>
                <span class="tech-badge">SQL Server</span>
                <span class="tech-badge">Entity Framework</span>
                <span class="tech-badge">REST API</span>
                <span class="tech-badge">Microservices</span>
                <span class="tech-badge">IIS</span>
                <span class="tech-badge">Bamboo</span>
                <span class="tech-badge">Bitbucket</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Associate Software Developer -->
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
              <p>Specialized in .NET Core within an Agile team, focusing on Web API, MVC, Entity Framework, and SQL Server. Contributed to Microservices design. Participated in daily stand-ups, sprint planning, and retrospectives to deliver value in each iteration.</p>
            </div>

            <div class="tech-stack mt-4 pt-3 border-top">
              <h6 class="stack-title mb-3">Tech Stack:</h6>
              <div class="d-flex flex-wrap gap-2">
                <span class="tech-badge">.NET Core</span>
                <span class="tech-badge">ASP.NET Core</span>
                <span class="tech-badge">Entity Framework</span>
                <span class="tech-badge">SQL Server</span>
                <span class="tech-badge">REST API</span>
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
