import { Link } from 'react-router-dom'
import { RiArrowLeftDoubleFill } from 'react-icons/ri'

import {
  Container,
  Day
} from './styles'

export default function Header({ value }){
  return(
    <Container>
      <Link to='/' >
        <RiArrowLeftDoubleFill size={40} color='#000' />
      </Link>
      <Day>{ value }</Day>
    </Container>
  )
}