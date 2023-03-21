import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  '::-webkit-scrollbar': {
    width: '3px',
    height: 0,
  },

  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#a8a8a8',
    borderRadius: '10px',
  }
})