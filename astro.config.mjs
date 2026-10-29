import { defineConfig } from 'astro/config';

export default defineConfig({
  // OneDrive qovluğunda fayl dəyişiklikləri yalnız bu yolla görünür
  vite: { server: { watch: { usePolling: true } } },
});
