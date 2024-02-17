/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		colors: {
			brown: "#B99470",
			beige: "#FEFAE0",
			sage: "#A9B388",
			darkgreen: "#5F6F52",
		},
		extend: {},
	},
	plugins: [require("flowbite/plugin")],
}
