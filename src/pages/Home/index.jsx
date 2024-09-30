import { Link } from 'react-router-dom'

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
        <Day><Link to='/segunda-feira' >Segunda-feira</Link></Day>
        <Day><Link to='/terca-feira' >Terça-feira</Link></Day>
        <Day><Link to='/quarta-feira' >Quarta-feira</Link></Day>
        <Day><Link to='/quinta-feira' >Quinta-feira</Link></Day>
        <Day><Link to='/sexta-feira' >Sexta-feira</Link></Day>
        <Day><Link to='/sabado' >Sábado</Link></Day>
      </SectionDays>
    </Container>
  )
}