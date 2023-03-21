import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Handbag } from 'phosphor-react'

import { ShoppingCart } from '../ShoppingCart'

import { HeaderContainer, CartButton } from './styles'

import { useCart } from '../../hooks/useCart'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const router = useRouter()
  const { cart } = useCart()

  const [cartIsOpen, setCartIsOpen] = useState(false)

  function closeCart() {
    setCartIsOpen(false)
  }

  return (
    <>
    <HeaderContainer justify={router.pathname === '/success' ? 'center' : 'between'}>
        <Link href="/">
          <Image src={logoImg} alt="" width={logoImg.width} height={logoImg.height} />
        </Link>

        {router.pathname !== '/success' && (
          <CartButton onClick={() => setCartIsOpen(true)}>
            <Handbag size={24} weight="bold" />
            {cart.length > 0 && <span>{cart.length}</span>}
          </CartButton>
        )}
      </HeaderContainer>

      <ShoppingCart 
        cartIsOpen={cartIsOpen}
        closeCart={closeCart}
      />
    </>
  )
}