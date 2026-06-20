@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  outline: 2px solid theme('colors.violet.DEFAULT');
  outline-offset: 2px;
  border-radius: 4px;
}

.skip-link:not(:focus) {
  position: absolute;
  left: -9999px;
}
