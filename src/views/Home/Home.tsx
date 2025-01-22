import Contactos from './Contactos/contactos'
import Portada from './Portada/portada'
import Projectos from './Projectos/projectos'

function Home() {
  return (
    <div>
      <Portada />
      <Contactos />
      <Projectos />
    </div>
  )
}

export default Home
