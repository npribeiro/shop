import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',

  img: {
    cursor: 'pointer',
  },

  '@media(max-width: 769px)': {
    padding: '2rem 1.5rem',
  },

  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      }
    }
  },
})

export const CartButton = styled('button', {
  width: 48,
  height: 48,
  background: '$gray800',
  borderRadius: 8,
  cursor: 'pointer',
  color: '$gray400',
  border: 0,
  transition: 'color 0.2s',
  position: 'relative',

  '&:hover': {
    color: '$white',
  },

  span: {
    width: 24,
    height: 24,
    fontSize: '$sm',
    background: '$green500',
    color: '$white',
    fontWeight: 'bold',
    border: '3pxx solid $gray900',
    borderRadius: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    position: 'absolute',
    top: '-7px',
    right: '-7px',
  }
})