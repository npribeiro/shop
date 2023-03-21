import { CaretRight } from 'phosphor-react'

import { Arrow } from './styles'

interface ArrowSlideProps {
  disabled?: boolean
  left?: boolean
  onClick: (event: any) => void
}

export function ArrowSlide({ disabled, left, onClick }: ArrowSlideProps) {
  return !disabled && ( 
    <Arrow
      onClick={onClick}
      direction={left ? 'left' : 'right'}
      className={disabled ? 'disabled' : ''}
    >
      <CaretRight size={48} />
    </Arrow>
  )
}