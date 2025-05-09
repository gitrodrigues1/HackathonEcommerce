import * as S from './styles'

import { CategoryCardProps } from './interface'


const CategoryCard = ({ backgroundImage, children }: CategoryCardProps) => {
  return (
    <S.Container backgroundImage={backgroundImage}>
      <S.Content>
        {children && (
          <S.TitleContainer>
            <h1>{children}</h1>
          </S.TitleContainer>
        )}
      </S.Content>
    </S.Container>
  )
}

export default CategoryCard
