/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        oleo: ['"Oleo Script"', 'cursive'],
        outfit: ['Outfit', 'sans-serif'],
        parkinsans: ['Parkinsans', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      },
		},
	},
	plugins: [],
}
