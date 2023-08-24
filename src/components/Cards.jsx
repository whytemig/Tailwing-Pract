import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Keywest from '../assets/keywest.jpg'
import SelectCard from './SelectCard'

const Cards = () => {
  return (
      <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SelectCard bg={BoraBora } text='Borabora'/> 
          <SelectCard bg={BoraBora2 } text='Borabora II'/> 
          <SelectCard bg={Maldives } text='Maldives'/> 
          <SelectCard bg={Maldives2} text='Maldives II'/> 
          <SelectCard bg={Keywest} text='Keywest' /> 
          <SelectCard bg={BoraBora } text='Jamaica'/> 
        
    </div>
  )
}

export default Cards