import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  maxWidth: '100%',
  marginLeft: 'auto',
  minHeight: 500,
  
  '@media(max-width: 769px)': {
    paddingLeft: '1rem',
    marginTop: '1rem',
  },

  variants: {
    maxWidth: {
      'calc': {
        maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
      },
      'auto': {
        maxWidth: 'auto',
      }
    }
  }
})

export const AddToCartButton = styled('button', {
  width: 56,
  height: 56,
  backgroundColor: '$green500',
  color: '$white',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'background 0.2s',

  '&:hover': {
    background: '$green300',
  }
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',


  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem 1.5rem',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0,0,0,0.6)',
    
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '> div': {
      display: 'flex',
      flexDirection: 'column',
      width: 'calc(100% - 60px)',
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
      whiteSpace: 'nowrap',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  },

  '@media(max-width: 769px)': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,

      '> div': {
        width: 'calc(100% - 65px)',
      },

      strong: {
        fontSize: '1rem',
        fontWeight: 'normal',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },

      span: {
        fontSize: '$md',
      }
    }
  }
})

export const LoadingProduct = styled('div', {
  '> div': {
    width: '100%',
    display: 'inline-flex',
    marginTop: '10px',
   justifyContent: 'space-between',
  }
})
