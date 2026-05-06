import { CafeteriaSection } from './components/cafeteria-section';

export const CafeteriasPage = () => {
  const cafeterias = [
    {
      id: 1,
      title: 'Rock Café Barranco',
      text: `Ubicado en el corazón de Barranco, el distrito más artístico y
            bohemio de la ciudad, Rock Cafe Barranco es mucho más que una
            cafetería: es un espacio donde el café de especialidad se convierte
            en una experiencia cultural.

            El aroma a café recién molido se mezcla con la esencia del entorno
            barranquino, creando un ambiente perfecto tanto para relajarse como
            para inspirarse. Nuestro compromiso con la calidad comienza desde el
            origen, seleccionando granos provenientes de distintas regiones del
            Perú, cultivados por productores apasionados que cuidan cada etapa
            del proceso. En Rock Cafe Barranco, cada taza cuenta una historia:
            desde perfiles dulces y balanceados hasta notas más complejas e
            intensas, siempre respetando las características únicas de cada
            origen.

            Rock Cafe Barranco no solo busca servir café, sino crear conexiones.
            Es un punto de encuentro para creativos, amantes del café y quienes
            buscan un espacio con identidad. Aquí, cada visita se transforma en
            una pausa significativa dentro del ritmo cotidiano, un momento para
            disfrutar, descubrir y dejarse llevar por el carácter único del café
            de especialidad.`,
      imgUrl: '/img/cafeteria1.jpg',
      imgAlt: 'Imagen de cafeteria sede Barranco',
    },
    {
      id: 2,
      title: 'Rock Café Miraflores',
      text: ` En el dinámico y cosmopolita distrito de Miraflores, Rock Cafe se
              posiciona como un punto de encuentro donde el café de especialidad
              se une con un estilo de vida moderno y vibrante. Este espacio ha
              sido diseñado para quienes valoran tanto la calidad como la
              experiencia, ofreciendo un entorno que combina elegancia,
              comodidad y una energía urbana única.

              Desde temprano, Rock Cafe Miraflores se llena de vida con personas
              que buscan comenzar su día con una excelente taza de café.
              Nuestros baristas, altamente capacitados, trabajan con precisión y
              dedicación para resaltar lo mejor de cada grano, utilizando
              métodos que permiten apreciar las distintas notas y perfiles de
              sabor. Cada bebida es el resultado de un proceso cuidado, donde la
              técnica y la pasión se reflejan en cada detalle.

              La ubicación estratégica en Miraflores hace de este local un punto
              clave para locales y visitantes, convirtiéndolo en una parada
              obligatoria para quienes buscan calidad y estilo en un solo lugar.
              Rock Cafe Miraflores es más que una cafetería: es un espacio donde
              el ritmo de la ciudad se encuentra con la pausa perfecta que solo
              un buen café puede ofrecer.`,
      imgUrl: '/img/cafeteria2.jpg',
      imgAlt: 'Imagen de cafeteria sede Miraflores',
    },
    {
      id: 3,
      title: 'Rock Café San Miguel',
      text: `Rock Cafe San Miguel nace con la idea de ofrecer un espacio
              cercano, acogedor y auténtico, donde el café de especialidad pueda
              disfrutarse en un ambiente cómodo y accesible. Ubicado en una zona
              estratégica y en constante crecimiento, este local se convierte en
              el punto ideal para quienes buscan calidad sin alejarse de su
              rutina diaria.

              El café es el protagonista, y por eso cuidamos cada detalle de su
              preparación. Trabajamos con granos seleccionados de distintas
              regiones del Perú, resaltando la riqueza y diversidad de nuestro
              origen. Nuestros baristas se encargan de preparar cada bebida con
              dedicación, asegurando una experiencia consistente y de alta
              calidad en cada taza.

              Más que una cafetería, Rock Cafe San Miguel es una extensión de la
              comunidad: un lugar donde las personas se reúnen, comparten y
              disfrutan del café en su mejor expresión, en un entorno que
              prioriza la cercanía, la calidad y la autenticidad.`,
      imgUrl: '/img/cafeteria3.jpg',
      imgAlt: 'Imagen de cafeteria sede San Miguel',
    },
  ];

  return (
    <>
      <section className="w-[90%] mx-auto flex flex-col mt-30 gap-12 mb-15">
        {cafeterias.map((cafeteria) => (
          <CafeteriaSection
            key={cafeteria.id}
            id={cafeteria.id}
            title={cafeteria.title}
            text={cafeteria.text}
            imgUrl={cafeteria.imgUrl}
            imgAlt={cafeteria.imgAlt}
          />
        ))}
      </section>
      <section className="w-[80%] mx-auto mb-15">
        <div>
          <h3 className="text-[#dc793a] text-sm tracking-[4px] text-center uppercase">
            Visítanos
          </h3>
          <h2 className="font-grotesque-mono text-5xl font-bold text-center mb-10">
            Contacto
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center w-[60%] mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 py-5 px-8">
            <div className="w-12 h-12 bg-[#9A4061]/40 rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin text-primary"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p className="text-sm uppercase tracking-wider">Dirección</p>
            <p className="font-medium">Calle Principal 123, Barranco</p>
            <p className="font-medium">Calle Secundaria 123, Miraflores</p>
            <p className="font-medium">Calle Diagonal 123, San Miguel</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 py-5 px-8">
            <div className="w-12 h-12 bg-[#9A4061]/40 rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin text-primary"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <p className="text-sm uppercase tracking-wider">Teléfono</p>
            <p className="font-medium">+51 955 123 4567</p>
            <p className="font-medium">+51 955 123 4543</p>
            <p className="font-medium">+51 955 123 4584</p>
          </div>

          <div className="flex flex-col h-60 items-center justify-start gap-4 py-5 px-8">
            <div className="w-12 h-12 bg-[#9A4061]/40 rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail text-primary"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <p className="text-sm uppercase tracking-wider">Email</p>
            <p className="font-medium">hola@origencafe.com</p>
          </div>
        </div>
      </section>
    </>
  );
};
