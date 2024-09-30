import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

import Segunda from '../pages/Segunda'
import Terca from '../pages/Terca'
import Quarta from '../pages/Quarta'
import Quinta from '../pages/Quinta'
import Sexta from '../pages/Sexta'
import Sabado from '../pages/Sabado'

export default function RoutesApp(){
  return(
    <Routes>
      <Route path='/' element={ <Home/> } />

      <Route path='/segunda-feira' element={ <Segunda/> } />
      <Route path='/terca-feira' element={ <Terca/> } />
      <Route path='/quarta-feira' element={ <Quarta/> } />
      <Route path='/quinta-feira' element={ <Quinta/> } />
      <Route path='/sexta-feira' element={ <Sexta/> } />
      <Route path='/sabado' element={ <Sabado/> } />
    </Routes>
  )
}