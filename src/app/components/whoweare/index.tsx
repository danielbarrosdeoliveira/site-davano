import Binoculars from '../icons/Binoculars'
import Handshake from '../icons/Handshake'
import Target from '../icons/Target'

const WhoWeAre = () => {
  return (
    <section
      id="quem-somos"
      className="mx-auto flex w-full justify-center bg-davano-brown-darkest text-slate-50"
    >
      <div className="container mx-auto max-w-5xl py-12 sm:py-16">
        <h2 className="text-center font-playfair text-2xl font-bold tracking-wide sm:text-3xl">
          Quem Somos?
        </h2>
        <p className="mx-auto justify-center pt-8 text-center">
          Na nossa barbearia, cada corte e cada atendimento são realizados com
          excelência. Com anos de experiência, nos dedicamos a oferecer um
          serviço de alta qualidade, focado em cuidar de cada detalhe para
          garantir que você se sinta único. Nosso compromisso é proporcionar uma
          experiência premium em cada visita, com um ambiente acolhedor e
          profissionais especializados, prontos para atender suas necessidades e
          realçar seu estilo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-evenly gap-8 sm:flex-row">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <Target />
              <h4 className="mb-4 font-playfair text-xl font-bold">Missão</h4>
            </div>
            <p className="text-center">
              Oferecer uma experiência única e premium em cuidados masculinos,
              proporcionando cortes de cabelo e serviços de barba com
              excelência, atenção aos detalhes e dedicação, garantindo a
              satisfação total dos nossos clientes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Binoculars />
                <h4 className="mb-4 font-playfair text-xl font-bold">Visão</h4>
              </div>
              <p className="text-center">
                Oferecer uma experiência única e premium em cuidados masculinos,
                proporcionando cortes de cabelo e serviços de barba com
                excelência, atenção aos detalhes e dedicação, garantindo a
                satisfação total dos nossos clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-2">
          <div className="flex flex-col items-center">
            <Handshake />
            <h4 className="mb-4 font-playfair text-xl font-bold">Valores</h4>
          </div>
          <div className="flex justify-center text-center">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="font-bold">Profissionalismo: </span>
                <p className="inline-block">
                  Comprometimento com a qualidade e atenção aos detalhes em cada
                  serviço.
                </p>
              </li>
              <li className="flex flex-col">
                <span className="font-bold">Excelência no Atendimento: </span>
                <p className="inline-block">
                  Priorizar a satisfação do cliente, criando uma experiência
                  única e agradável.
                </p>
              </li>
              <li className="flex flex-col">
                <span className="font-bold">Inovação e Estilo: </span>
                <p className="inline-block">
                  Acompanhamos as tendências para oferecer sempre o melhor em
                  cortes e cuidados masculinos.
                </p>
              </li>
              <li className="flex flex-col">
                <span className="font-bold">Ambiente Aconchegante: </span>
                <p className="inline-block">
                  Proporcionar um espaço que combine sofisticação e acolhimento,
                  onde cada cliente se sinta em casa.
                </p>
              </li>
              <li className="flex flex-col">
                <span className="font-bold">Compromisso com o Cliente: </span>
                <p className="inline-block">
                  Acreditamos em um atendimento personalizado que atenda às
                  necessidades individuais de cada cliente.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
