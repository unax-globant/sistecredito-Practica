import { useState } from 'react';
import Hero from './components/templates/hero/hero';
import Fundador from './components/templates/Fundador/fundador.tsx';
import Values from './components/templates/values/values.tsx';
import Testimonial from './components/templates/testimonial/Testimonial.tsx';
import Team from './components/templates/team/team.tsx';

import bannerImg from './images/Banner.png';
import fundadorImg from './images/fundadorSistecredito.png';
import valuesImg from './images/valuesPhone.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';

import alvaroImg from './images/alvaro.png';
import emilioImg from './images/emilio.png';
import anaImg from './images/ana.png';
import julietImg from './images/juliet.png';
import doraImg from './images/dora.png';
import isabelImg from './images/isabel.png';
import ricardoImg from './images/ricardo.png';
import Sueño from "./components/Sueño";
import ninosImg from "./images/ninos.jpg";
import ciclistasImg from "./images/ciclistas.jpg";

import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
          imageSrc={bannerImg}
        />

        <Fundador
          founderImage={fundadorImg}
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
          sectionDetails="Nos caracterizamos por ser innovadores"
          imageSrc={valuesImg}
          values={[
            {
              icon: icon1,
              title: "Aprobamos",
              highlight: "créditos en segundos",
              description:
                "Desarrollamos un software propio que nos ha permitido ajustarnos a las necesidades del mercado de una forma personalizada y eficiente.",
            },
            {
              icon: icon2,
              title: "Retos que nos",
              highlight: "ayudan a crecer",
              description:
                "Evolucionamos nuestros productos y servicios, desde el desarrollo de una nueva red de recaudos, nuevos canales y medios de pago, la App para la gestión del crédito, hasta luegopago.com el primer e-commerce en Colombia con el modelo “Buy now, pay later”. ",
            },
            {
              icon: icon3,
              title: "El liderazgo de nuestro gerente",
              highlight: "se basa en la sensibilidad humana, la sencillez y la cercanía",
              description:
                "Su altruismo ha permitido generar un ambiente de trabajo donde prima cada colaborador. Se interesa por el desarrollo de las capacidades de su equipo y de cada familia, brindándole la oportunidad de empleo a personas sin experiencia laboral, permitiéndoles crecer dentro de la empresa con auxilios estudiantiles.",
            },
          ]}
        />

        <Testimonial
          quote="Yo tengo que ser capaz de sistematizar el crédito y de paso liberar al comerciante de esa administración porque para ellos no es el core del negocio..."
          author="Álvaro Villegas Londoño"
          role="Gerente General de Sistecrédito."
        />

        <Team
          text={{
            titulo: "Así es",
            highlight: "nuestro equipo",
            subtitle: "Más de 800 personas con un propósito en común:",
            subtitleHighlight: "Hacerlo posible.",
          }}
          members={[
            {
              id: "1",
              name: "Álvaro Villegas Londoño",
              role: "Gerente General",
              photoUrl: alvaroImg,
            },
            {
              id: "2",
              name: "Emilio Villegas",
              role: "Vicepresidente de Estrategia",
              photoUrl: emilioImg,
            },
            {
              id: "3",
              name: "Ana María Pérez Bustamante",
              role: "Vicepresidente Administrativa",
              photoUrl: anaImg,
            },
            {
              id: "4",
              name: "Juliet Natalia Flórez",
              role: "Vicepresidente de Operaciones",
              photoUrl: julietImg,
            },
            {
              id: "5",
              name: "Dora Luz Mejía",
              role: "Vicepresidente de Servicios Corporativos",
              photoUrl: doraImg,
            },
            {
              id: "6",
              name: "Isabel Cristina Mejía",
              role: "Vicepresidente Comercial",
              photoUrl: isabelImg,
            },
            {
              id: "7",
              name: "Ricardo Villegas",
              role: "Consultor permanente",
              photoUrl: ricardoImg,
            },
          ]}
        />

<Sueño
      text={{
        titulo: "Nuestro compromiso:",
        highlight: "cumplir sueños",
        subtitle:
          "También trabajamos por la primera infancia y las promesas del deporte en Colombia.",
      }}
      bloques={[
        {
          id: "1",
          imageUrl: ninosImg,
          heading: "Una casualidad que se traduce en",
          highlight: "cientos de sonrisas.",
          description:
            "Nos encontramos por casualidad con la Fundación Carla Cristina cuando quisieron ser nuestros clientes para vender a crédito...",
        },
        {
          id: "2",
          imageUrl: ciclistasImg,
          heading: "conectar a las personas con sus sueños.",
          highlight:
            "El ciclismo llegó a la familia Sistecrédito desde el 2019",
          description:
            "cuando vimos coincidir los valores y la filosofía de un grupo de deportistas con los nuestros...",
          boldText:
            "El ciclismo llegó a la familia Sistecrédito desde el 2019",
          reverse: true,
        },
      ]}
    />
      </div>
    </>
  );
}

export default App;
