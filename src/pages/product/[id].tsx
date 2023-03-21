import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails, ProductDetailsLoading } from "../../styles/pages/product"

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useCart } from '../../hooks/useCart'
import { useRouter } from "next/router";

import { formatPrice } from '../../utils/formatPrice'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    priceFormatted: string;
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useCart()
  const { isFallback } = useRouter()

  if(isFallback || !product) {
    return (
      <SkeletonTheme baseColor="#202024" highlightColor="#25252F">
        <ProductContainer>
          <Skeleton className="imageLoading"/>  
          <ProductDetailsLoading>
            <Skeleton className="titleLoading"/>
            <Skeleton className="priceLoading" />
            <div className="descriptionLoading">
              <Skeleton count={5} />
            </div>  
            <div className="buttonLoading">
              <Skeleton />
            </div>
          </ProductDetailsLoading>
        </ProductContainer>
      </SkeletonTheme>
    )
  }

  async function handleAddToCart(product : any) {
    const productToAdd = { ...product, amount: 1 }
    
    addProductToCart(productToAdd)
  }
  
  return (
      <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.priceFormatted}</span>

        <p>{product.description}</p>
          
        <button 
          onClick={() => handleAddToCart(product)}
        >
          Colocar na sacola
        </button>
        
        </ProductDetails>
      </ProductContainer>
      </>
    )
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await stripe.products.list({
      limit: 5
    })
  
    const paths = data.map(product => ({
      params: { id: product.id },
    }))
  
    return {
      paths,
      fallback: true
    }
  }
  
  export const getStaticProps: GetStaticProps<any, { id: string}> = async ({ params }) => {
    const productId = params.id;
    
    try {
      const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
      })
  
      const price = product.default_price as Stripe.Price
  
      return {
        props: {
          product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: (price.unit_amount! / 100),
            priceFormatted: formatPrice(price.unit_amount! / 100),
            description: product.description,
            defaultPriceId: price.id,
          }
        },
        revalidate: 60 * 60 * 2 // 2 hours
      }
    } catch (error) {
      return {
        notFound: true
      }  
    }
  }