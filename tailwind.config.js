/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        background: "oklch(0.985 0.003 286)",

        surface: "rgba(255,255,255,.55)",

        glass: "rgba(255,255,255,.35)",

        primary: "oklch(0.58 0.23 262)",

        secondary: "oklch(0.72 0.16 245)",

        accent: "oklch(0.82 0.13 290)",

        ink: "oklch(0.19 0.01 280)",

        muted: "oklch(0.56 0.02 280)",

      },

      fontFamily: {

        sans: ["Inter","sans-serif"],

        display: ["Sora","sans-serif"],

        mono: ["JetBrains Mono","monospace"],

      },

      boxShadow: {

        floating:
          "0 12px 45px rgba(15,23,42,.10)",

        glass:
          "0 8px 32px rgba(31,38,135,.12)",

        glow:
          "0 0 80px rgba(92,95,239,.30)",

      },

      backdropBlur: {

        xs: "2px",

      },

      borderRadius: {

        "4xl":"2rem",

      },

      transitionTimingFunction: {

        smooth:"cubic-bezier(.22,1,.36,1)",

      },

      animation: {

        float:"float 8s ease-in-out infinite",

        pulseGlow:"pulseGlow 4s ease infinite",

      },

      keyframes:{

        float:{
          "0%,100%":{transform:"translateY(0px)"},
          "50%":{transform:"translateY(-12px)"}
        },

        pulseGlow:{
          "0%,100%":{
            opacity:.45
          },
          "50%":{
            opacity:.8
          }
        }

      }

    },
  },

  plugins: [],
};