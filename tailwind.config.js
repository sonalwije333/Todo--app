module.exports = {
    theme: {
      extend: {
        fontFamily: {
          caveat: ['Caveat', 'cursive'],
        },
        boxShadow: {
            'text-shadow-custom': '1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000',
          },
      },
    },
    plugins: [
        function({ addUtilities }) {
          addUtilities({
            '.text-shadow-custom': {
              'text-shadow': '1px 1px 0px #000, -1px -1px 0px #000, -1px 1px 0px #000, 1px -1px 0px #000',
            },
          });
        },
      ],
    };