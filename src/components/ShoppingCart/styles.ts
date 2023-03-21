import { styled } from '../../styles'

export const CartContainer = styled('div', {
  background: '$gray800',
  width: 480,
  maxWidth: 480,
  position: 'absolute',
  zIndex: 999,
  top: 0,
  right: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 3rem 3rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)', 

  transform: 'translateX(100%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  header: {
    h2: {
      fontWeight: 700,
      color: '$gray100',
      fontSize: '$lg',
      marginBottom: '2rem',
    },

    button: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: '$gray400',
      top: 24,
      right: 24,

      border: 0,
      borderRadius: 6,
      padding: 5,
      cursor: 'pointer',
      transition: 'background 0.2s',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        background: '$gray800',
        color: '$white',
      }
    }
  },

  footer: {
    marginTop: 'auto',

    '.itemsAmount': {
      color: '$gray300',
      fontSize: '$md',
    },

    strong: {
      fontSize: '$md',

      '&.price': {
        fontSize: '$xl',
      }
    },

    '> div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '$gray100', 
      lineHeight: 1.6,
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      border: 0, 
      borderRadius: 8,
      background: '$green500',
      color: '$white',
      fontWeight: 700,
      fontSize: '$md',
      cursor: 'pointer',
      padding: '1.25rem 1rem',
      transition: 'background 0.2s',
      marginTop: 30,

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      }
    }
  },

  '@media (max-width: 769px)': {
    width: '100%',
    padding: '1.5rem',
    transform: 'translateX(-100%)',
  },

  variants: {
    open: {
      true: {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    }
  },
})

export const ProductList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  height: 375,
  overflowY: 'scroll',
})

export const CartItem = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  
  '> div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: '$md',
    lineHeight: 1.6,

    a: {
      color: '$gray300',
      cursor: 'pointer',
      transition: 'all 0.2s',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
      }
    },

    strong: {
      color: '$gray100',
    },

    button: {
      background: 'transparent',
      color: '$green500',
      border: 0,
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'color 0.2s',
      fontSize: '1rem',
      marginTop: 'auto',

      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&:not(:disabled):hover': {
        color: '$green300',
      }
    },
  },

  '@media(max-width: 769px)': {
    '> div + div': {
      width: '100%',
      overflow: 'hidden',

      a: {
        whiteSpace: 'nowrap',
        width: '95%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    },

  }
})

export const ContainerImage = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  }
})

export const EmptyBag = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: '$gray300',
  gap: '0.5rem',
})