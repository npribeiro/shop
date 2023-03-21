import { createContext, useState, ReactNode } from 'react'
import produce from 'immer'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  priceFormatted: string
  defaultPriceId: string
  amount: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextData {
  cart: Product[];
  addProductToCart: (data: Product) => void
  removeItemCart: (productId: string) => void
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  function addProductToCart(data: Product) {
    const productAlreadyExistsInCart  = cart.findIndex(
      (product) => product.id === data.id,
    )

    const newCart = produce(cart, (draft) => {
      if(productAlreadyExistsInCart < 0) {
        draft.push(data)
      }
    })

    setCart(newCart)
  }

  function removeItemCart(cartItemId: string) {
    const productExistsInCart = cart.findIndex(
      (product) => product.id === cartItemId,
    )

    const updateCart = produce(cart, (draft) => {
      if(productExistsInCart >= 0) {
        draft.splice(productExistsInCart, 1)
      }
    })

    setCart(updateCart)
  }

  return (
    <CartContext.Provider value={{ cart, addProductToCart, removeItemCart }}>
      {children}
    </CartContext.Provider>
  )
}
