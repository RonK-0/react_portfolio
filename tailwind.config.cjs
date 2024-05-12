/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
        '3xl': '1700px',
      },
      colors:{
        darkBlue: "#001427",
        blueGray: "#81A2BD",
        light: "#F6F6F6",
        dark: "#202020",
        darkGray: "#343434",
        lightGray: "#828282",
        termGreen: '#00C514',
      },
      backgroundImage:{
        // transparent_bg: "url('../dist/img/transparent.png')",
        up_arrow: `url('data:image/svg+xml,<svg fill="%23000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs/><polygon style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(171, 171, 171); transform-origin: 12px 12.001px;" points="1.066 4.956 22.934 4.956 12.001 19.048" transform="matrix(-1, 0, 0, -1, 0.000001, -0.000002)"/></svg>')`,
        down_arrow: `url('data:image/svg+xml,<svg fill="%23000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs/><polygon style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(171, 171, 171); transform-origin: 12px 11.999px;" points="1.066 4.954 22.934 4.954 12.001 19.046"/></svg>')`,

        up_arrow_alt: `url('data:image/svg+xml,<svg fill="%23000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs/><polygon style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(220, 220, 220); transform-origin: 12px 12.001px;" points="1.066 4.956 22.934 4.956 12.001 19.048" transform="matrix(-1, 0, 0, -1, 0.000001, -0.000002)"/></svg>')`,
        down_arrow_alt: `url('data:image/svg+xml,<svg fill="%23000000" height="800px" width="800px" version="1.1" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><defs/><polygon style="fill-rule: evenodd; clip-rule: evenodd; fill: rgb(220, 220, 220); transform-origin: 12px 11.999px;" points="1.066 4.954 22.934 4.954 12.001 19.046"/></svg>')`,
      },
      backgroundSize: {
        // auto: 'auto',
        // cover: 'cover',
        // contain: 'contain',
        // '400%': '400% 400%'
      },
      aspectRatio: {
        // auto: 'auto',
        // square: '1 / 1',
        // video: '16 / 9',
      },
      gridTemplateColumns: {
        // 'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily: {
        // 'text-inter': ["Inter", "sans-serif"],
        'text-lato': ["Lato", "Open Sans", "Helvetica", "Arial", "Verdana", "sans-serif"],
        'text-lato_b': ["Lato-Bold", "Open Sans", "Helvetica", "Arial", "Verdana", "sans-serif"],
        'text-firasans': ["Fira Sans", "Open Sans", "Helvetica", "Arial", "Verdana", "sans-serif"],
        'text-firacode': ["Fira Code", "Cousine", "Consolas", "monospace"],
      },
      fontSize: {
        // 'button' : 'clamp(16px, 1vw, 24px) !important',
        'h1' : 'clamp(48px,6vw,70px)',
        'h1_5' : 'clamp(48px,6vw,50px)',
        'h2' : 'clamp(33px,5vw,48px)',
        'h3' : 'clamp(20px,4.5vw,33px)',
        'h4' : 'clamp(16px,3vw,20px)',
        'h4_5' : 'clamp(16px,3vw,18px)',
        'h5' : 'clamp(14px,3vw,16px)',
        'h6' : 'clamp(12px,3vw,14px)',
        'p'  : 'clamp(12px,3vw,16px)',
      },
      lineHeight:{
        'h1' : 'clamp(48px,6vw,70px)',
        'h1_5' : 'clamp(48px,6vw,50px)',
        'h2' : 'clamp(33px,5vw,48px)',
        'h3' : 'clamp(20px,4.5vw,33px)',
        'h4' : 'clamp(16px,3vw,20px)',
        'h4_5' : 'clamp(16px,3vw,18px)',
        'h5' : 'clamp(14px,3vw,16px)',
        'h6' : 'clamp(12px,3vw,14px)',
        'p'  : 'clamp(12px,3vw,16px)',
      },
      listStyleType: {
      //   none: 'none',
      //   circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
      animation: {
        // 'bannerSlide': 'bannerSlide 15s ease forwards',
        'blinking_cursor': 'blinking_cursor 1s linear infinite',
      },
      keyframes: {
        // this borked
        // using direct CSS keyframes on input file base works
      },
      boxShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(15, 15, 15, 0.2)',
      },
      dropShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      },
      padding:{
        // 'container_p' : 'calc(1.5rem * 0.5)',
        // 'propertySolution_p' : 'clamp(40px, 3.3vw, 90px) clamp(24px, 1.66vw, 48px)',
        'py100' : 'clamp(64px, 5.208vw, 200px)',
        'container_desktop': 'clamp(25px, 13vw, 14%)',
        'container_mobile': 'clamp(20px, 8vw, 50px)',
      },
      margin:{
        // 'heading_margin_bottom' : 'clamp(32px, 2.5vw, 64px)',
        'container_desktop': 'clamp(25px, 13vw, 250px)',
        'container_mobile': 'clamp(20px, 8vw, 50px)',
      },
      width:{
        // 'bannerSlider_card_bg' : 'calc(100% + calc(1.5 * calc(1.5rem * 0.5)))',
        // 'tel_icon' : 'clamp(24px, 10vw, 38px)',
      },
      maxWidth:{
        // 'bannerSlider_card_bg' : 'calc(85% + calc(1.5rem * 0.5))',
      },
      height:{
        // 'insidePageBanner' : 'clamp(350px, 26.042vw, 600px)',
      },
      size: {
        'h3_outer' : 'clamp(20px,5vw,48px)',
      },
      transitionProperty: {
        'height' : 'height',
        'spacing': 'margin, padding',
        'font-size' : 'font-size',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
