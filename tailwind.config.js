/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2D3748',          // Slate oscuro, el color base para el fondo
        'primary': '#4A5568',       // Gris oscuro para los botones principales
        'secondary': '#718096',     // Gris más claro para los elementos secundarios
        'input-background': '#1A202C', // Fondo oscuro para inputs, casi negro para un buen contraste
        'border-gray': '#4A5568',    // Gris sutil para bordes
        'focus-ring': '#38B2AC',     // Verde menta para los anillos de enfoque (para resaltar sin ser demasiado fuerte)
        'btn-hover': '#2D3748',      // Gris oscuro para el hover en botones (mismo tono base, pero algo más oscuro)
        'btn-active': '#1A202C',     // Gris más oscuro cuando el botón está activo
        'text-primary': '#E2E8F0',   // Texto primario en un blanco suave para alto contraste
        'text-secondary': '#CBD5E0', // Texto secundario en un gris claro para un contraste menos fuerte
        'background': '#1A202C',     // Fondo oscuro general, muy similar al input-background
        'accent': '#F6AD55',         // Un toque de naranja suave como acento (para resaltar botones de acción)
      }

    },
  },
  plugins: [],
}
