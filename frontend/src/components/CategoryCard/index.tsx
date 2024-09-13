import * as S from './styles'

import { CategoryCardProps } from './interface'


const CategoryCard = ({ backgroundImage }: CategoryCardProps) => {
  return (
    <S.Container backgroundImage={backgroundImage}>
    </S.Container>
  )
}

export default CategoryCard
