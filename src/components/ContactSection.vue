<template>
  <footer class="footer-area">
    <div class="container py-5">
      <div class="footer-content">
        <div class="social-links text-center mb-4">
          <h5 class="social-title mb-4">Let’s Build Great Together</h5>
          <div class="d-flex justify-content-center gap-4">
            <a href="https://www.linkedin.com/in/durai-raj-m-3b666a238/" aria-label="LinkedIn"
              class="social-icon linkedin">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
            <a href="https://github.com/Durai1309" aria-label="GitHub" class="social-icon github">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="#" aria-label="Instagram" class="social-icon instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </div>
        </div>

        <p class="quote text-center mb-3">
          "I thrive in collaborative teams, transforming complex requirements into efficient, future-ready systems."
        </p>

        <div class="copyright text-center">
          <a href="#" class="footer-name">M.Durai Raj</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer-area {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 2rem 0;
}

.social-title {
  color: #2b2d42;
  font-size: 1.25rem;
  font-weight: 600;
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
  width: 40px;
  height: 3px;
  background: #e63946;
  border-radius: 3px;
}

.social-icon {
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1rem;
  transition: all 0.3s ease;
  color: white;
}

.social-icon.instagram {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.social-icon.linkedin {
  background: #0a66c2;
}

.social-icon.github {
  background: #333;
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.quote {
  color: #4a5568;
  font-style: italic;
  max-width: 600px;
  margin: 0 auto 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  font-family: var(--roboto);
}

.footer-name {
  color: #2b2d42;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
  font-family: var(--roboto);
}


@media (max-width: 576px) {
  .footer-area {
    padding: 1.5rem 0;
  }

  .social-icon {
    width: 38px;
    height: 38px;
  }

  .quote {
    padding: 0 1rem;
    font-size: 0.85rem;
  }
}
</style>