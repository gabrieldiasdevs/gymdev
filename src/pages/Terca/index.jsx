import {
  Container
} from './styles'

import Header from '../../components/Header'

export default function Terca(){
  return(
    <Container>
      <Header value='Terça-feira' />

      <AreaExercise>
        <Title></Title>
        <Exercise/>
      </AreaExercise>

    </Container>
  )
}