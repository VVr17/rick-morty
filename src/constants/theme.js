export const breakpoints = ['360', '1440'];

export const theme = {
  colors: {
    accent: '#0ea175',
    mainText: 'rgba(0, 0, 0, 0.87)', //black
    secondaryText: 'rgba(0, 0, 0, 0.6)', // grey
    detailsMainText: '#081F32', // black
    detailsSecondary: '#6E798C', // grey
    placeholder: 'rgba(0, 0, 0, 0.5)',
    black: '#000000',
    information: '#8E8E93',
    imageBorder: '#f2f2f7',
    cardBorder: 'rgba(0, 0, 0, 0.1)',
    mainBackground: '#FFFFFF', //white
  },

  fontFamily: {
    karla: "'Karla', sans-serif",
    roboto: "'Roboto', sans-serif",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '20px',
    xl: '32px',
    xxl: '48px',
  },

  transitionTiming: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[1]}px)`,
  },

  boxShadow:
    '0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
};
