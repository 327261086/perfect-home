<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-links">
        <a href="https://github.com/327261086/perfect-home" target="_blank">⬛ GitHub</a>
        <span class="dot">·</span>
        <span>Powered by Vue 3 + Vite + Pinia</span>
      </div>
      <div class="footer-copyright">
        <span>Copyright © {{ year }} 清风如水. All Rights Reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.site-footer {
  width: 100%;
  padding: 12px 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #00d4ff;
    }
  }

  .dot {
    opacity: 0.3;
  }
}

.footer-copyright {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
}
</style>
