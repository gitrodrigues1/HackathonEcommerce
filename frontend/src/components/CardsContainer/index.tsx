import CategoryCard from '../CategoryCard'

import { Container } from './styles'

import combos from '../../assets/images/categories/combos.png'
import drinks from '../../assets/images/categories/drinks.jpg'
import temakis from '../../assets/images/categories/temakis.jpg'

const CardsContainer = () => {
  return (
    <Container>
      <CategoryCard backgroundImage={combos}/>
      <CategoryCard backgroundImage={drinks}/>
      <CategoryCard backgroundImage={temakis}/>
      <CategoryCard backgroundImage={combos}/>
      <CategoryCard backgroundImage={drinks}/>
      <CategoryCard backgroundImage={temakis}/>
    </Container>
  )
}

export default CardsContainer
