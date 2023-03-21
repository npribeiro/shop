import { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  CartContainer,
  ProductList,
  CartItem,
  ContainerImage,
  EmptyBag
} from './styles'

import { X, ShoppingBag} from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'
import { formatPrice } from '../../utils/formatprice'
import axios from 'axios'

interface ShoppingCartProps {
  cartIsOpen: boolean,
  closeCart: () => void,
}

export function ShoppingCart({ cartIsOpen, closeCart }: ShoppingCartProps ) {
  const { cart, removeItemCart } = useContext(CartContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const calculateTotalItems = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.amount
  }, 0)

  const totalItemsFormatted = formatPrice(calculateTotalItems)

  function handleRemoveProductCartById(productId: string) {
    removeItemCart(productId)
  }

  async function handleBuyManyProducts() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        line_items: cart.map((product) => {
          return {
            price: product.defaultPriceId,
            quantity: product.amount,
          }
        }),
      })

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <CartContainer open={cartIsOpen}>
      <header>
        <h2>Sacola de compras</h2>
        <button onClick={closeCart}>
          <X size={24} weight="bold"/>
        </button>
      </header>

      {(cart.length >= 1) ? (
        <>
          <ProductList>
            {cart.map((product) => (
              <CartItem key={product.id}>
                <ContainerImage>
                  <Image src={product.imageUrl} alt="" width={95} height={95} />
                </ContainerImage>

                <div>
                  <Link href={`/product/${product.id}`}>
                    {product.name}
                  </Link>
                  <strong>{product.priceFormatted}</strong>

                  <button
                    disabled={isCreatingCheckoutSession}
                    onClick={() => handleRemoveProductCartById(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </CartItem>
            ))}
          </ProductList>

         <footer>
          <div>
            <span>Quantidade</span>
            <span className="itemsAmount">
              {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}
            </span>
          </div>

          <div>
            <strong>Valor total</strong>
            <strong className="price">{totalItemsFormatted}</strong>
          </div>

          <button 
            disabled={(cart.length < 1) || isCreatingCheckoutSession}
            onClick={handleBuyManyProducts}
          >
            Finalizar compra
          </button>
        </footer>
      </>
      ) : (
        <EmptyBag>
          <ShoppingBag size={36} />
          <span>Sua sacola está vazia!</span>
        </EmptyBag>
      )}  
    </CartContainer>
  )
}