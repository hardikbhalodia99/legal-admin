/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
 
    extend: {
      colors: {
        "primary": "#131315",
        "primary-black": "#131315",
        "secondary" : "#38a832",
        "warning" : "#e3d217",
        "caution" : "#e31717",
        "davy-grey": "#626257",
        "bright-gray": "#EEEEF4",
      },
      fontFamily: {
        "sfpro-bold": ["SFPro-Bold", "sans-serif"],
        "sfpro-medium": ["SFPro-Medium", "sans-serif"],
        "sfpro-regular": ["SFPro-Regular", "sans-serif"],
        "mabry-black": ["MabryPro-Black", "sans-serif"],
        "mabry-bold": ["MabryPro-Bold", "sans-serif"],
        "mabry-medium": ["MabryPro-Medium", "sans-serif"],
        "mabry-regular": ["MabryPro-Regular", "sans-serif"],
        "mabry-light": ["MabryPro-Light", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1400px",
      },
      boxShadow: {
        btn: " 0px 3px 8px rgba(18, 12, 58, 0.25)",
        card: "0px 3px 8px rgba(137, 64, 201, 0.15)",
        subtle: "0px 4px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
});
