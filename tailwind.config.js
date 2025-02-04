/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        color: "var(--text-color)",
        btn: "var(--text-btn)",
        "btn-hover": "var(--text-btn-hover)",
      },
      backgroundColor: {
        btn: "var(--bg-btn)",
        color: "var(--bg-color)",
        "btn-hover": "var(--bg-btn-hover)",
      },
      screens: {
        xs: "486px",
      },
    },
  },
  plugins: [],
};
