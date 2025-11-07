/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🌊 Brand Colors
        primary: {
          DEFAULT: '#003366', // Deep Ocean Blue
          light: '#00509E',   // Accent Blue
          dark: '#001F4D',    // Navy Tone
        },
        secondary: {
          DEFAULT: '#FFC107', // Logistics Yellow
          dark: '#E0A800',    // Darker shade for hover
        },
        accent: {
          blue: '#007BFF',    // Sky Blue highlight
          green: '#28A745',   // CTA success
        },
        background: {
          light: '#F5F7FA',   // General background
          dark: '#0D1117',    // Footer or dark section
        },
        text: {
          primary: '#1E1E1E',
          secondary: '#6B7280',
          light: '#FFFFFF',
        },
      },

      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },

      boxShadow: {
        smooth: '0 4px 20px rgba(0, 0, 0, 0.08)',
        heavy: '0 6px 30px rgba(0, 0, 0, 0.15)',
      },

      backgroundImage: {
        'hero-logistics': "url('/cargo-ship-sea.jpg')",
        'global-map': "url('/world-map-bg.svg')",
      },

      transitionDuration: {
        '250': '250ms',
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};
