import { Formulario } from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

const HomeContainer = ({ saludo, saludar, children }) => {
    //contenedor

  return (
    <div>
        <h2>{ saludo }</h2>
        <Titulo titulo={'Soy titulo de Home'} subtitulo={'soy subtitulo de home'} />
        <Formulario />
        {children}
        <button onClick={saludar}>saludar</button>
    </div>
  )
}

export default HomeContainer
