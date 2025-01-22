
import Logo from '../../../assets/svg/LOGO A COLOR.svg'
function portada() {
  return (
    <div >

      <div className='md:flex md:flex-1 mt-20'>

        <img style={{width: "18em", margin:"auto"}} src={Logo} alt="Logo" />

        <div className='flex flex-col text-center md:text-left m-5 '>
          <p className='text-[#563030] text-8xl md:text-9xl font-bold mt-7 md:mt-9'>KANON</p>
          <p className='text-[#FB8A70] text-2xl'>"Neque porro quisquam est qui dolorem 
          ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>

      </div>

      <div className='md:flex text-center mt-10'>

        <div className='flex flex-col md:mx-8'>
          <p className='text-[#563030] text-3xl font-bold'>Projecto 1</p>
          <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>

        <div className='flex flex-col md:mx-8 mt-10'>
        <p className='text-[#563030] text-3xl font-bold'>Projecto 2</p>
          <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>
        
        <div className='flex flex-col md:mx-8 mt-10'>
          <p className='text-[#563030] text-3xl font-bold'>Projecto 3</p>
          <div className='m-auto w-64 h-48 bg-[#FFD4A6] rounded-3xl'>Contenido</div>
        </div>
      </div>

    </div>
  )
}

export default portada
