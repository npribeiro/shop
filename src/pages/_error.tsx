import { Container, ImageWrapper } from '../styles/pages/404'

export default function Custom404() {
  return (
    <Container>
      <ImageWrapper src="/astronaut-404.svg" />
      <h1>Ops! Parece que a página que você está procurando não foi encontrada ou nunca existiu.</h1>
    </Container>
  )
}