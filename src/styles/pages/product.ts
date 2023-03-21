import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '.imageLoading': {
    minHeight: 500,
    borderRadius: 8,
  },

  '@media(max-width: 769px)': {
    display: 'block',
    width: '100%',
    padding: '0 1.5rem 1.5rem',

    '.imageLoading': {
      minHeight: 200,
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 500,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@media(max-width: 769px)': {
    maxWidth: '100vw',
    height: 200,

    img: {
      objectFit: 'contain',
      width: '100%',
      height: '120%',
    }
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',   
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300', 
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  },

  '@media(max-width: 769px)': {
    h1: {
      fontSize: '$md',
      marginTop: '1rem',
    },

    span: {
      fontSize: '$md',
      marginTop: '0.5rem',
    },

    p: {
      margin: '1rem 0',
      fontSize: '0.9rem',
    },

    button: {
      padding: '1rem',
      fontSize: '1rem',
    }
  }
})

export const ProductDetailsLoading = styled('div', {
  minWidth: '600px',
  display: 'flex',
  flexDirection: 'column',

  '.titleLoading': {
    height: '2rem',
    width: '75%',
    borderRadius: '0',
  },

  '.priceLoading': {
    marginTop: '1rem',
    width: '20%',
    height: '2rem',
    borderRadius: '0',
  },

  '.descriptionLoading': {
    marginTop: '2.5rem',
    lineHeight: 1.6,
  
    span: {
      borderRadius: '0',
    }
  },

  '.buttonLoading': {
    marginTop: 'auto',

    span: {
      height: 69,
      borderRadius: 8
    }
  },

  '@media(max-width: 769px)': {
    minWidth: '100%',
    
    '.titleLoading': {
      marginTop: '0.5rem',
    },

    '.priceLoading': {
      marginTop: '0.5rem',
    },

    '.descriptionLoading': {
      margin: '1rem 0',
      fontSize: '0.9rem',
     
      span: {
        borderRadius: '0',
      }
    },

    '.buttonLoading': {
      marginTop: 'auto',

      span: {
        height: 52,
        borderRadius: 8
      }
    },
  }
})
