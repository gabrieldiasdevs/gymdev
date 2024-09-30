import {
  Container,
  SectionLogo,
  Logo,
  SectionDays,
  Day
} from './styles'

import logo from '../../assets/logo-gymdev.png'

export default function Home() {
  return(
    <Container>
      <SectionLogo>
        <Logo src={logo} />
      </SectionLogo>

      <SectionDays>
        <Day>Segunda-feira</Day>
        <Day>Terça-feira</Day>
        <Day>Quarta-feira</Day>
        <Day>Quinta-feira</Day>
        <Day>Sexta-feira</Day>
        <Day>Sábado</Day>
      </SectionDays>
    </Container>
  )
}