import { defineConfig } from 'astro/config';

export default defineConfig({
  // /politica-de-privacidade.html (sin carpeta), igual que antes de usar Astro
  build: { format: 'file' },
  compressHTML: true
});
