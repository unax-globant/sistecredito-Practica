import { useState } from 'react'
import Hero from './components/templates/hero/hero'
import Fundador from './components/templates/Fundador/fundador.tsx'
import Values from './components/templates/values/values.tsx'
import Testimonial from './components/templates/testimonial/Testimonial.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-content">
        <Hero
          title="Más de 26 años haciéndolo posible"
          heroText="Somos el puente que te conecta al mundo crediticio, para que logres todo lo que quieres."
          button={{
            label: "Ver video",
            onClick: () => alert("video link"),
          }}
          imageSrc="./src/images/Banner.png"
        />
        <Fundador
        founderImage="./src/images/fundadorSistecredito.png"
        title="Un mundo de oportunidades"
        subtitle="para todos"
        paragraphs={[
          "Te abrimos las puertas a todo lo que quieres",
          "<strong>Álvaro Villegas Londoño</strong> fundó <strong>Sistecrédito</strong> en 1996 con el objetivo de sistematizar el crédito, viendo la oportunidad de ofrecer una nueva alternativa a los comercios que ya vendían de esa forma, liberándolos de asumir la cartera.",
          "<strong>El respeto y la confianza</strong> son pilares fundamentales para nosotros, logramos hasta el 80% de aprobaciones de crédito, dándole la oportunidad a clientes que no cuentan con historial crediticio y aportando a la inclusión financiera.",
          "<strong>El comercio confía en Sistecrédito.</strong> La empresa que comenzó en Medellín pronto se expandió gracias a marcas nacionales que demandaban nuestros servicios en otras ciudades."
        ]}
        />
        <Values
          sectionTitle="Lo que nos hace"
          sectionSubtitle="diferentes"
          sectionDetails='Nos caracterizamos por ser innovadores'
          imageSrc="./src/images/valuesPhone.png"
          values={[
            {
              icon: "./src/images/icon1.png",
              title: "Aprobamos",
              highlight: "créditos en segundos",
              description:
                "Desarrollamos un software propio que nos ha permitido ajustarnos a las necesidades del mercado de una forma personalizada y eficiente.",
            },
            {
              icon: "./src/images/icon2.png",
              title: "Retos que nos",
              highlight: "ayudan a crecer",
              description:
                "Evolucionamos nuestros productos y servicios, desde el desarrollo de una nueva red de recaudos, nuevos canales y medios de pago, la App para la gestión del crédito, hasta luegopago.com el primer e-commerce en Colombia con el modelo “Buy now, pay later”. ",
            },
            {
              icon: "./src/images/icon3.png",
              title: "El liderazgo de nuestro gerente",
              highlight: "se basa en la sensibilidad humana, la sencillez y la cercanía",
              description:
                "Su altruismo ha permitido generar un ambiente de trabajo donde prima cada colaborador. Se interesa por el desarrollo de las capacidades de su equipo y de cada familia, brindándole la oportunidad de empleo a personas sin experiencia laboral, permitiéndoles crecer dentro de la empresa con auxilios estudiantiles.  ",
            },
          ]}
        />
        <Testimonial
          videoSrc="./src/videos/videoTest.mp4"
          quote="Yo tengo que ser capaz de sistematizar el crédito y de paso liberar al comerciante de esa administración porque para ellos no es el core del negocio..."
          author="Álvaro Villegas Londoño"
          role="Gerente General de Sistecrédito."
        />











      </div>
    </>
  )
}

export default App
