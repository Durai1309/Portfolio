<template>
  <footer class="footer-area bg-white">
    <div class="container py-5">
      <div class="footer-content">
        <div class="social-links text-center mb-4">
          <h5 class="social-title mb-4 text-dark">Connect With Me</h5>
          <div class="d-flex justify-content-center gap-4">
            <a href="#" aria-label="Instagram" class="social-icon">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" aria-label="LinkedIn" class="social-icon">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="#" aria-label="GitHub" class="social-icon">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
        <div class="copyright text-center mt-4">
          <p class="text-secondary mb-0">
            <a href="#" class="text-decoration-none fw-semibold" style="color: var(--primary-color);">M. Durai Raj</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-area {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.social-title {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  font-family: var(--roboto);
}

.social-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: var(--primary-color);
}

.social-icon {
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-icon:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.2);
}

@media (max-width: 576px) {
  .footer-area {
    padding: 3rem 0;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .social-links {
    gap: 0.75rem !important;
  }
}
</style>