import { useState, useEffect } from 'react'

import * as S from './styles'

import combo1 from '../../assets/images/carousel/combo1.png'
import combo2 from '../../assets/images/carousel/combo2.jpg'
import combo3 from '../../assets/images/carousel/combo3.jpeg'

const Carousel = () => {
  const slides = [combo1, combo2, combo3]

  const [counter, setCounter] = useState(0)


  const handlePrev = () => {
    if (counter <= 0) {
      setCounter(slides.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }

  const handleNext = () => {
    if (counter >= slides.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [counter])

  return (
      <S.Container>
        {slides.map((slide, index) => (
          <S.Image src={slide} key={index} $isActive={index === counter} />
        ))}
        <S.Arrow $variant='prev' onClick={handlePrev}><i className='bx bxs-left-arrow'></i></S.Arrow>
        <S.Arrow $variant='next' onClick={handleNext}><i className='bx bxs-right-arrow'></i></S.Arrow>
        <S.DotContainer>
          {slides.map((_, index) => (
            <S.Dot
            $isActive={index === counter}
            key={index}
            onClick={() => setCounter(index)}
            />
          ))}
        </S.DotContainer>
      </S.Container>
  )
}

export default Carousel
