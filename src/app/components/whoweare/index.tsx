import Image from 'next/image'

const WhoWeAre = () => {
  return (
    <section className="mx-auto flex w-full justify-center bg-stone-50 text-stone-900">
      <div className="mx-auto max-w-[1024px] py-16">
        <h3 className="text-center font-playfair text-3xl font-bold">
          Quem Somos?
        </h3>
        <p className="mx-auto w-8/12 justify-center pt-8 text-center text-base">
          Na nossa barbearia, cada corte e cada atendimento são realizados com
          excelência. Com anos de experiência, nos dedicamos a oferecer um
          serviço de alta qualidade, focado em cuidar de cada detalhe para
          garantir que você se sinta único. Nosso compromisso é proporcionar uma
          experiência premium em cada visita, com um ambiente acolhedor e
          profissionais especializados, prontos para atender suas necessidades e
          realçar seu estilo.
        </p>

        <div className="mt-8 flex items-center justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="icons/target.svg"
                width={32}
                height={32}
                alt="Missão da Davano"
              />
              <h4 className="font-playfair text-xl font-bold">Missão</h4>
            </div>
            <p className="w-64 text-center">
              Oferecer uma experiência única e premium em cuidados masculinos,
              proporcionando cortes de cabelo e serviços de barba com
              excelência, atenção aos detalhes e dedicação, garantindo a
              satisfação total dos nossos clientes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto flex flex-col items-center">
              <div className="flex flex-col items-center">
                <Image
                  src="icons/binoculars.svg"
                  width={32}
                  height={32}
                  alt="icone para visão da Davano"
                />
                <h4 className="font-playfair text-xl font-bold">Visão</h4>
              </div>
              <p className="w-64 text-center">
                Oferecer uma experiência única e premium em cuidados masculinos,
                proporcionando cortes de cabelo e serviços de barba com
                excelência, atenção aos detalhes e dedicação, garantindo a
                satisfação total dos nossos clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <div className="flex flex-col items-center text-stone-900">
            <Image
              src="icons/handshake.svg"
              width={32}
              height={32}
              alt="Missão da Davano"
              className="currentColor"
            />
            <h4 className="font-playfair text-xl font-bold">Valores</h4>
          </div>
          <div className="flex justify-center text-center">
            <ul className="flex flex-col">
              <li className="self-start">
                <span className="font-bold">Profissionalismo: </span>
                <p className="inline-block">
                  Comprometimento com a qualidade e atenção aos detalhes em cada
                  serviço.
                </p>
              </li>
              <li className="self-start">
                <span className="font-bold">Excelência no Atendimento: </span>
                <p className="inline-block">
                  Priorizar a satisfação do cliente, criando uma experiência
                  única e agradável.
                </p>
              </li>
              <li className="self-start">
                <span className="font-bold">Inovação e Estilo: </span>
                <p className="inline-block">
                  Acompanhamos as tendências para oferecer sempre o melhor em
                  cortes e cuidados masculinos.
                </p>
              </li>
              <li className="self-start">
                <span className="font-bold">Ambiente Aconchegante: </span>
                <p className="inline-block">
                  Proporcionar um espaço que combine sofisticação e acolhimento,
                  onde cada cliente se sinta em casa.
                </p>
              </li>
              <li className="self-start">
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
