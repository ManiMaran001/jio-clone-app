module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0c5273",
        "brand-primary":"#0f3cc9",
        "brand-amber": "#FF8656",
        "brand-red": "#FF5656",
        "brand-gray": "#7E7E7E",
        "brand-light":"#e7ebf8",
        "brand-thick":"#0f3cc9",
        "brand-blu":"#1144e4",
        "brand-white":"#fff",
        "brand-gr":"rgba(255, 255, 255, 0.31)",
        "brand-light":"#e7ebf8"
      },
      textColor: {
                'primary-blue':'#0a2885',
               'secondary': '#ffed4a',
               'danger': '#e3342f',
               "primary-grey":"rgba(255, 255, 255, 0.78)",
               "primary-80-grey":"rgba(0, 0, 0, 0.65)"
      },
      borderRadius: {
        'none': '0',
     'sm': '0.125rem',
       default: '1rem',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
      }
    },
  },
  plugins: [],
}