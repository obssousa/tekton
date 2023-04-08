import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        tekton: {
          "primary": "#661AE6",
          "secondary": "#D926AA",
          "accent": "#1FB2A5",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      'sans': ['Outfit']
    },
    extend: {
      colors: {
        primary: {
          0: "#000000",
          5: "#22002f",
          10: "#330044",
          20: "#54006d",
          25: "#650083",
          30: "#750f94",
          35: "#8222a1",
          40: "#9032ae",
          50: "#ac4eca",
          60: "#c969e6",
          70: "#e486ff",
          80: "#f0b0ff",
          90: "#fbd7ff",
          95: "#ffebff",
          98: "#fff7fb",
          99: "#fffbff",
          100: "#ffffff",
        },
      },
    },
  },
};
