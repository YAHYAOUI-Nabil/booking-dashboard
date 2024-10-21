/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      colors: {
        bgFrom: "#2581AF",
        bgTo: "#16A7A0",
      },
    },
  },
  plugins: [],
};
