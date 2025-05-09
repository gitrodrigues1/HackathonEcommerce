import CategoryCard from '../CategoryCard'

import { Container } from './styles'

import combos from '../../assets/images/categories/combos.png'
import drinks from '../../assets/images/categories/drinks.jpg'
import temakis from '../../assets/images/categories/temakis.jpg'

const CardsContainer = () => {
  return (
    <Container>
      <CategoryCard backgroundImage={combos}>Combinados</CategoryCard>
      <CategoryCard backgroundImage={drinks}>Bebidas</CategoryCard>
      <CategoryCard backgroundImage={temakis}>Temakis</CategoryCard>
      <CategoryCard backgroundImage={combos}>Combinados</CategoryCard>
      <CategoryCard backgroundImage={drinks}>Bebidas</CategoryCard>
      <CategoryCard backgroundImage={temakis}>Temakis</CategoryCard>
    </Container>
  )
}

export default CardsContainer
