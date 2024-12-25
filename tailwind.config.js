/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {

    extend: {
      screens: {
        '4k': {'max': '1500px'}, // Custom breakpoint for extra small devices mainly for right side
        'Lmiddle1440':{'max':'1440px'},
        'Lmiddle1330':{'max':'1300px'},
        'Lmiddle1092':{'max':'1092px'},
        'logo': {'max': '1295px'}, // Custom breakpoint for extra small devices
        'rs': {'max': '1003px'}, // Custom breakpoint for extra small devices mainly for right side
        'R800': {'max': '800px'}, // Custom breakpoint for extra small devices mainly for right side
        'hide':{'max':'500px'},
        'show':{'min':'499px'},
        'tsmall':{'max':'370px'},
        
        //  'H-Logo768': { raw: '(max-height: 769px)' },

      },
      colors: {
        thumb: '#686868',
        track: '#424242',
      },
      height: {
        46.5: "46.5px",
        post: "51px",
        53: "53px",
        120: "120px",
      },
      textColor: {
        color: "#e7e2ea",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      width: {
        svg: "26px",
        x: "30px",
        post: "230px",
        border: "0.5px",
      },
      inset: {
        leftsvg: "72px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
