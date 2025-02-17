/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        praimary: "#5429D6",
      },
      spacing: {
        "9/10" : "90%",
        "8/10" : "80%"
      },
      fontFamily:  {
        "dana-light" : "dana-light"
      }
    },
  },
  plugins: [],
};
