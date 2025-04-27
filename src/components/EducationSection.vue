<template>
  <section class="education py-5 bg-white" aria-labelledby="education-heading">
    <div class="container">
      <h2 id="education-heading" class="text-center mb-5 font-weight-bold">My Education</h2>
      
      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-lg border-light" tabindex="0" aria-describedby="bachelor-desc">
            <div class="card-body">
              <h5 class="mb-0 font-weight-bold">Bachelor of Engineering</h5>
              <p class="text-muted mb-2">St. Xavier's Catholic College of Engineering</p>
              <h6 class="card-subtitle mb-2 text-muted">
                <time datetime="2018-08">Aug 2018</time> - <time datetime="2022-06">Jun 2022</time>
              </h6>
              <p id="bachelor-desc" class="card-text">Computer Science</p>
              <div class="d-flex small text-muted">
                <div>
                  <i class="fas fa-star me-1 text-warning" aria-hidden="true"></i> CGPA: 8.0
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-lg border-light" tabindex="0" aria-describedby="twelfth-desc">
            <div class="card-body">
              <h5 class="mb-0 font-weight-bold">Higher Secondary (12th)</h5>
              <p class="text-muted mb-2">Shalom Matriculation Hr. Sec. School</p>
              <h6 class="card-subtitle mb-2 text-muted">
                <time datetime="2017-06">Jun 2017</time> - <time datetime="2018-04">Apr 2018</time>
              </h6>
              <div class="d-flex small text-muted" id="twelfth-desc">
                <div>
                  <i class="fas fa-percentage me-1 text-danger" aria-hidden="true"></i> Grade: 70%
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 10th Grade -->
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-lg border-light" tabindex="0" aria-describedby="tenth-desc">
            <div class="card-body">
              <h5 class="mb-0 font-weight-bold">Secondary School (10th)</h5>
              <p class="text-muted mb-2">St. Assisi Matriculation Hr. Sec. School</p>
              <h6 class="card-subtitle mb-2 text-muted">
                <time datetime="2015-06">Jun 2015</time> - <time datetime="2016-05">May 2016</time>
              </h6>
              <div class="d-flex small text-muted" id="tenth-desc">
                <div>
                  <i class="fas fa-percentage me-1 text-success" aria-hidden="true"></i> Grade: 88%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  background-color: #fff !important;
}

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.card:hover,
.card:focus {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  outline: none;
}

.text-primary {
  color: #007bff !important;
}

.bg-primary {
  background-color: #007bff !important;
}

.text-info {
  color: #17a2b8 !important;
}

.bg-info {
  background-color: #17a2b8 !important;
}

.text-success {
  color: #28a745 !important;
}

.bg-success {
  background-color: #28a745 !important;
}

.font-weight-bold {
  font-weight: 600;
}

.card-body {
  padding: 1.5rem;
}

.card-body h5 {
  font-size: 1.2rem;
  color: #333;
}

.card-body p {
  font-size: 0.9rem;
}

.card-body h6 {
  font-size: 0.85rem;
}

.card-body .small {
  font-size: 0.8rem;
}

.card-subtitle {
  font-weight: 500;
  font-size: 0.85rem;
}

@media (max-width: 576px) {
  .card-body h5 {
    font-size: 1rem;
  }

  .card-body p {
    font-size: 0.85rem;
  }

  .card-body h6 {
    font-size: 0.75rem;
  }
}
</style>