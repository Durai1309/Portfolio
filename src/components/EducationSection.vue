<template>
  <section class="education py-5 bg-white" aria-labelledby="education-heading">
    <div class="container">
      <h2 class="education-heading">My Education</h2>
      <div class="row g-4">
        <div class="col-md-6 col-lg-4">
          <div class="education-card" tabindex="0" aria-describedby="bachelor-desc">
            <div class="card-body">
              <h5>Bachelor of Engineering</h5>
              <p class="institution">St. Xavier's Catholic College of Engineering</p>
              <h6 class="duration">
                <time datetime="2018-08">Aug 2018</time> - <time datetime="2022-06">Jun 2022</time>
              </h6>
              <p id="bachelor-desc" class="field">Computer Science Engineering</p>
              <div class="grade">
                <i class="fas fa-star"></i> CGPA: 8.0
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="education-card" tabindex="0" aria-describedby="twelfth-desc">
            <div class="card-body">
              <h5>Higher Secondary (12th)</h5>
              <p class="institution">Shalom Matriculation Hr. Sec. School</p>
              <h6 class="duration">
                <time datetime="2017-06">Jun 2017</time> - <time datetime="2018-04">Apr 2018</time>
              </h6>
              <div class="grade" id="twelfth-desc">
                <i class="fas fa-percentage"></i> Grade: 70%
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="education-card" tabindex="0" aria-describedby="tenth-desc">
            <div class="card-body">
              <h5>Secondary School (10th)</h5>
              <p class="institution">St. Assisi Matriculation Hr. Sec. School</p>
              <h6 class="duration">
                <time datetime="2015-06">Jun 2015</time> - <time datetime="2016-05">May 2016</time>
              </h6>
              <div class="grade" id="tenth-desc">
                <i class="fas fa-percentage"></i> Grade: 88%
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
  background-color: #fff;
  font-family: var(--roboto);
}

.education-heading {
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0 3rem;
  font-family: var(--roboto);
  font-weight: 600;
  color: #2c3e50;
}

.education-card {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  cursor: pointer;
  height: 100%;
  box-shadow:
    0 6px 10px rgba(0, 0, 0, 0.08),
    0 12px 30px rgba(0, 0, 0, 0.08);
  background: white;
  font-family: var(--roboto);
}

.education-card:hover {
  transform: translateY(-8px);
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow:
    0 12px 20px rgba(0, 0, 0, 0.15),
    0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.card-body h5 {
  font-size: 1.25rem;
  color: #2c3e50;
  font-weight: 600;
  margin: 0;
  font-family: var(--roboto);
}

.institution {
  color: #7f8c8d;
  font-size: 0.95rem;
  margin: 0.5rem 0 0;
  font-family: var(--roboto);
}

.duration {
  color: #7f8c8d;
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0;
  font-family: var(--roboto);
}

.field {
  color: #34495e;
  font-size: 0.95rem;
  margin: 0.3rem 0;
  font-family: var(--roboto);
}

.grade {
  color: #7f8c8d;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-family: var(--roboto);
}

.fa-star {
  color: #f39c12;
}

.fa-percentage {
  color: #e74c3c;
}

.grade:last-child .fa-percentage {
  color: #2ecc71;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.4rem;
    gap: 0.7rem;
  }

  .education-heading {
    font-size: 1.8rem;
    margin: 1.5rem 0 2.5rem;
  }
}

@media (max-width: 576px) {
  .card-body {
    padding: 1.2rem;
    gap: 0.6rem;
  }

  .card-body h5 {
    font-size: 1.1rem;
  }

  .institution {
    font-size: 0.85rem;
  }

  .education-card {
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.08),
      0 8px 20px rgba(0, 0, 0, 0.08);
  }

  .education-card:hover {
    box-shadow:
      0 8px 15px rgba(0, 0, 0, 0.12),
      0 15px 35px rgba(0, 0, 0, 0.12);
  }
}
</style>