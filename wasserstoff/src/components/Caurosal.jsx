
import courosal1 from './images/caurosal1.png'
import courosal2 from './images/caurosal2.png'
import courosal3 from './images/caurosal3.png'
import courosal4 from './images/caurosal4.png'

export default function Caurosal() {
  return (
    
    <div className='absolute ml-[30%] flex gap-3 overflow-auto no-scrollbar '>

      <img src={courosal1} alt="" />
      <img src={courosal2} alt="" />
      <img src={courosal3} alt="" />
      <img src={courosal4} alt="" />
     
    </div>
  )
}
