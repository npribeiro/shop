import type { GetStaticProps } from 'next'
import { useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/formatPrice'

import { useKeenSlider } from 'keen-slider/react'
import { ArrowSlide } from '../components/ArrowSlider'
import 'keen-slider/keen-slider.min.css'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Handbag } from 'phosphor-react'

import { 
  HomeContainer, 
  Product,
  AddToCartButton,
  LoadingProduct
} from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    defaultPriceId: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { addProductToCart } = useCart()

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 769px)': {
        slides: {
          perView: 1.1,
          spacing: 16,
        }
      },
    }
  })

  async function handleAddToCart(product) {
    const productToAdd = { ...product, amount: 1 }
    addProductToCart(productToAdd)
  }

  return (
    <HomeContainer ref={sliderRef} className="keen-slider" maxWidth={(currentSlide === 0) ? 'calc' : 'auto'}>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      {(products) ?
        products.map(product => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`product/${product.id}`} prefetch={false}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={520}
                height={480}
                priority={true}
              />
            </Link>
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.priceFormatted}</span>
              </div>
              <AddToCartButton
                onClick={() => handleAddToCart(product)}
              >
                <Handbag size={32} weight="bold" />
              </AddToCartButton>
            </footer>
          </Product>
        ))
      : (
          <SkeletonTheme baseColor="#202024" highlightColor="#25252F">
         {
          Array.from({ length: 3 }).map((_, index) => (
            <LoadingProduct key={index} className="keen-slider__slide">
              <Skeleton height="calc(100% - 56px)" borderRadius={8} />
              <div>
                <Skeleton height={32} borderRadius={8} width={250}/>
                <Skeleton height={32} borderRadius={8} width={50}/>
              </div>
            </LoadingProduct>
          ))
         }
        </SkeletonTheme>
      ) }

      <ArrowSlide
        left
        onClick={(event: any) => event.stopPropagation() || instanceRef.current?.prev()}
        disabled={currentSlide === 0}
      />

      <ArrowSlide
        onClick={(event: any) => event.stopPropagation() || instanceRef.current?.next()}
        disabled={
          currentSlide ===
          instanceRef.current?.track.details.slides.length - 3
        }
      />
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  if (!response.data) {
    return {
     props: {
      product: {},
     },
    }
  }

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount! / 100),   
      priceFormatted: formatPrice(price.unit_amount! / 100),
      defaultPriceId: price.id,  
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 8, // 8 hours
  }
}

