/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
		colors: {
			green: '#1B5B31',
			black: '#111111',
			gray: '#F5F0EC',
			beige: '#DCC1AB',
			white: '#FFFFFF',
		},
		fontFamily: {
			montserrat: 'Montserrat',
			inter: 'Inter',
		},
		borderRadius: {
			'custom-28': '28px',
			'custom-200': '200px',
		},
	},
	plugins: [],
};
