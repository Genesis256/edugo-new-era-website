// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Covers all relevant files in src
  ],
  // For v4, most theme customizations go into src/index.css @theme block.
  // However, theme.extend can still be used for one-off overrides or complex scenarios.
  theme: {
    extend: {
      // Example: if you need to reference theme vars here or for plugins
      // colors: {
      //   brand: {
      //     primary: 'var(--color-brand-primary)', // Needs postcss-custom-properties plugin
      //     secondary: 'var(--color-brand-secondary)'
      //   }
      // }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Potentially other plugins like @tailwindcss/forms if HeadlessUI forms are not enough
  ],
};
