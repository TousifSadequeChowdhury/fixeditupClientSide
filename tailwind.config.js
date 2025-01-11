import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveAcross: 'moveAcross 100s linear infinite', // Slow move animation for cards
      },
      keyframes: {
        moveAcross: {
          '0%': { transform: 'translateX(-100%)' },    // Start off-screen on the left
          '50%': { transform: 'translateX(100%)' },    // Move to the right off-screen
          '100%': { transform: 'translateX(-100%)' },  // Reset position to start from left again
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
