import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTiktok, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../../assets/svg/LOGO A COLOR.svg'
function portada() {
  return (
    <div>

      <div className='flex flex-1 '>

        <img  style={{width: "200px"}} src={Logo} alt="Logo" />

        <div className='flex flex-col'>
          <p className='text-[#563030] text-9xl font-bold'>Kanon</p>
          <p className='text-[#FB8A70]'>"Neque porro quisquam est qui dolorem 
          ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>

      </div>

      <div className='flex text-center '>

        <div className='flex flex-col mx-8'>
          <p className='text-[#563030] text-3xl font-bold'>Projecto 1</p>
          <div className='w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>

        <div className='flex flex-col mx-8'>
          <div className='w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
          <p className='text-[#563030] text-3xl font-bold'>Projecto 2</p>
        </div>
        
        <div className='flex flex-col mx-8'>
          <p className='text-[#563030] text-3xl font-bold'>Projecto 3</p>
          <div className='w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>

      </div>

      <div className='flex'>
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
      </div>

    </div>
  )
}

export default portada
