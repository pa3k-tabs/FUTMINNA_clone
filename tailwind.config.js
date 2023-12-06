/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        stakeholders: "#050714",
        futminna: "#800e80",
        bgemp: "#4c2849",
      },
      textColor: {
        cpess: "#2d4167",
        futminna: "#800e80",
      },
      borderColor: {
        futminna: "#800e80",
      },
    },
  },
  plugins: [],
};
