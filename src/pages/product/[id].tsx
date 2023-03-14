import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/router";
import Stripe from "stripe";

import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  /*const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }*/

  // const router = useRouter() *se fosse uma pagina dentro da aplicação

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState (false)

  async function handleBuyButton(){
    try {
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data;

      // router.push('checkout')

      window.location.href = checkoutUrl

    } catch (err) {
      // conectar com uma ferramente de observabilidade (datadog / sentry )
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
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
        <span>{product.price}</span>

        <p>{product.description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
          Comprar agora
        </button>
        
        </ProductDetails>
      </ProductContainer>
      </>
    )
  }

  export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [
        { params: { id: 'prod_MIwMNZU8sIbVfI'}} // colocar os produtos mais acessados
      ],
      //fallback: true,
      fallback: 'blocking',
    }
  }


  export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;
  
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    });
  
    const price = product.default_price as Stripe.Price;
  
    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt', {
            style: 'currency',
            currency: 'EUR'
          }).format(price.unit_amount as number / 100),
          description: product.description,
          defaultPriceId: price.id,
        }
      },
      revalidate: 60 * 60 * 1 // 1 hours
    }
  }