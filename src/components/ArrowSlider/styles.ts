import { styled } from "../../styles";

export const Arrow = styled('div', {
  position: 'absolute',
  top: '0%',
  width: 100,
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '1',

  cursor: 'pointer',
  color: '$gray300',
  transition: 'all 0.3s',
  
  '&:not(.disabled)': {
    background: 'linear-gradient(90deg, rgba(18, 18, 20, 0) 0%, rgba(18, 18, 20, 0.75) 100%)',
  },
  
  '&:not(.disabled):hover': {
    color: '$white',
  },

  '.slick-disabled': {
    display: 'none'
  },

  '@media (max-width: 769px)': {
    display: 'none',
  },

  variants: {
    direction: {
      left: {
        left: 0,
        transform: 'matrix(-1, 0, 0, 1, 0, 0)',
      },
      right: {
        left: 'auto',
        right: 0,
      }
    }
  }
})