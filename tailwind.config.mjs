/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "ui-sans-serif", "system-ui"],
        serif: ['"Red Hat Display"', "ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Plus Jakarta Sans"'],
        button: "Inter",
      },
      colors: {
        primaryorange: "#FF601F",
        primaryblue: "#101828",
        tealbrown: "rgba(255, 77, 0, 0.17)",
        primarygrey: "rgba(255, 255, 255, 0.21)",
      },
      screens: {
        "-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        "-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        "-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        "-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
    plugins: [],
  },
});
