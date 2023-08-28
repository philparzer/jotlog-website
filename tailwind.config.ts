import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grape: "#E27FE4"
      },
      boxShadow: {
        nav: "0px 4px 4px 0px rgba(248, 228, 255, 0.25)",
      }
    },
  },
  plugins: [],
}
export default config
