import { styled } from '..'

export const Container = styled('div', {
  display:' grid',
  gridTemplateColumns:' 1fr 1fr',
  alignItems:' center',
  justifyContent: 'center',
  width: '100%',
  minHeight:' calc(100vh - 10rem)',
  maxWidth:' 1120px',
  margin:' 0 auto',

  h1: {
    fontWeight:' 500',
    fontSize:' 2.5rem',
    lineHeight:' 3rem',
  },

  '@media(max-width:768px)': {
    display:' block',
    marginTop:' 10%',

    h1: {
      fontSize:' 1.9rem',
      lineHeight:' 2.5rem',
      textAlign:' center',
      marginTop:' 2rem',
      padding:' 1rem',
    }
  }
})

export const ImageWrapper = styled('img', {
  width: '80%',

  '@media(max-width:768px)': {
    width:' 100%',
    transform:' translate(0%, 0%)',
  }
})