<template>
    <section id="experience" class="experience-section py-5">
      <div class="container">
        <h2 class="section-title text-center mb-5">Professional Journey</h2>
        <div class="timeline-wrapper">
          <!-- Software Developer Experience -->
          <div class="position-card mb-5">
            <div class="position-header">
              <div class="d-flex justify-content-between align-items-start">
                <div>
                  <div class="position-info">
                    <h3 class="position-title">Software Developer</h3>
                    <div class="company-name">Digital Logiciel Solutions Pvt Ltd</div>
                    <div class="company-location">Chennai</div>
                  </div>
                </div>
                <span class="badge bg-primary rounded-pill px-3">Current</span>
              </div>
              <div class="duration text-muted mb-3">
                <i class="fas fa-calendar-alt me-2"></i>
                Aug 2023 - Present
              </div>
            </div>
            
            <div class="position-body">
              <div class="achievement-paragraph mb-4">
                <p>Proficient in .NET Core, ASP.NET Core MVC, Web API, Entity Framework, Vue.js, and SQL Server, applying SOLID principles to craft innovative and robust solutions customized to project requirements. Advocated for the adoption of Clean Architecture principles to enhance code maintainability and scalability, fostering a modular and extensible design approach that aligns with Agile methodologies. Directed CI/CD workflows with Bamboo and Bitbucket, ensuring rapid and reliable software delivery through continuous integration and deployment practices. Actively practiced Agile methodologies, participating in sprint planning, backlog refinement, and sprint reviews to prioritize tasks and adapt quickly to changing project needs while maintaining a customer-centric focus on client requirements.</p>
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
          
          <!-- Associate Software Developer Experience -->
          <div class="position-card">
            <div class="position-header">
              <div class="position-info">
                <h3 class="position-title">Associate Software Developer</h3>
                <div class="company-name">Digital Logiciel Solutions Pvt Ltd</div>
                <div class="company-location">Chennai</div>
              </div>
              <div class="duration text-muted mb-3">
                <i class="fas fa-calendar-alt me-2"></i>
                Jan 2023 - Aug 2023
              </div>
            </div>
            
            <div class="position-body">
              <div class="achievement-paragraph mb-4">
                <p>Specializing in .NET Core development within an Agile environment, with a focus on Web API, ASP.NET Core MVC, Entity Framework, and SQL Server to deliver iterative and customer-centric solutions. Actively contributing to Agile ceremonies such as sprint planning, backlog refinement, and sprint reviews to prioritize tasks and align with project objectives. Collaborating on the design and implementation of Microservices Architecture, utilizing Agile principles to ensure adaptability, flexibility, and scalability of the system.</p>
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
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  
  .experience-section {
    background-color: #f8fafc;
    font-family: 'Roboto', sans-serif;
  }
  
  .section-title {
    font-weight: 700;
    color: #1e293b;
    position: relative;
    padding-bottom: 15px;
    font-family: 'Roboto', sans-serif;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  
  .position-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-family: 'Roboto', sans-serif;
  }
  
  .position-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .position-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }
  
  .position-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .position-title, .company-name, .company-location {
    font-weight: 600;
    color: #1e293b;
    font-size: 1.1rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  .position-title {
    font-weight: 700;
  }
  
  .company-name {
    font-weight: 600;
  }
  
  .company-location {
    font-weight: 500;
    color: #64748b;
  }
  
  .duration {
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 0.5rem;
  }
  
  .achievement-paragraph p {
    color: #334155;
    line-height: 1.8;
    margin-bottom: 0;
    text-align: justify;
  }
  
  .tech-stack {
    margin-top: 1.5rem;
  }
  
  .stack-title {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: 'Roboto', sans-serif;
  }
  
  .tech-badge {
    background-color: #f1f5f9;
    color: #1e293b;
    padding: 0.35rem 0.75rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid #e2e8f0;
    font-family: 'Roboto', sans-serif;
  }
  
  @media (max-width: 768px) {
    .position-card {
      padding: 1.5rem;
    }
    
    .position-title, .company-name, .company-location {
      font-size: 1rem;
    }
    
    .achievement-paragraph p {
      font-size: 0.9rem;
    }
    
    .tech-badge {
      padding: 0.25rem 0.6rem;
      font-size: 0.75rem;
    }
  }
  </style>