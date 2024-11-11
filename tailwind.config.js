import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        accent:'#d9534f', // Couleur de fond du bouton principal
        accentHover: '#c9302c', // Couleur de fond du bouton principal au survol
        buttonSecondary: '#28a745', // Couleur de fond du bouton secondaire
        buttonSecondaryHover: '#218838', // Couleur de fond du bouton secondaire au survol
        background: '#ffffff',   // Couleur de fond principale
        footerColor: '#ffffff',
        secondaryBackground: '#f2f2f2',    // Couleur de fond secondaire
        textDefault: '#37373f',       // Couleur du texte général
        headingTitle: '#212529',       // Couleur pour les titres
        footerBG: '#212529',
        surface: '#ffffff',       // Couleur de surface pour les éléments séparés
        context: '#ffc107',       // Couleur pour les promotions spéciales
        link: '#8e74d5', // Couleur principale des liens
        linkHover: '#a435d0',// Couleur des liens (violet)
        muted: '#5f656e',         // Couleur pour le texte secondaire ou moins important
      },
      fontFamily: {
        defaultFont: ['Roboto', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Liberation Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        headingFont: ['Amatic SC', 'sans-serif'],
        nav: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
};
