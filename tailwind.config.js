// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#1DA1F2',
        'twitter-dark': '#15202b',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        twitterlight: {
          primary: "#1DA1F2",
          "base-100": "#ffffff",
          "text-color": "#0f1419",
          "secondary": "#e8f5fd",
          "accent": "#1a91da",
          "neutral": "#657786",
        },
      },
      {
        twitterdark: {
          primary: "#1DA1F2",
          "base-100": "#15202b",
          "text-color": "#ffffff",
          "secondary": "#192734",
          "accent": "#1a91da",
          "neutral": "#8899a6",
        },
      },
    ],
  },
};
