import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        accent: '#d9534f', // Couleur de fond du bouton principal
        accentHover: '#c9302c', // Couleur de fond du bouton principal au survol
        buttonSecondary: '#28a745', // Couleur de fond du bouton secondaire
        buttonSecondaryHover: '#218838', // Couleur de fond du bouton secondaire au survol
        background: '#ffffff',   // Couleur de fond principale
        secondaryBackground: '#f2f2f2',    // Couleur de fond secondaire
        default: '#212529',       // Couleur du texte général
        heading: '#37373f',       // Couleur pour les titres
        surface: '#ffffff',       // Couleur de surface pour les éléments séparés
        context: '#ffc107',       // Couleur pour les promotions spéciales
        link: '#6f42c1',          // Couleur des liens (violet)
        button: '#28a745',        // Couleur des boutons de confirmation
        muted: '#6c757d',         // Couleur pour le texte secondaire      // Pour le texte secondaire ou moins important
      },
    },
  },
  plugins: [daisyui],
};
