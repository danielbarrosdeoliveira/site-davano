import Image from 'next/image'

const Services = () => {
  return (
    <section
      id="servicos"
      className="bg-davano-primary-darken pt-12 text-slate-50 sm:pt-16"
    >
      <h2 className="text-center font-playfair text-3xl font-bold tracking-wide sm:text-4xl">
        Serviços
      </h2>

      <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex w-64 flex-col items-center justify-center">
            <Image
              src="/icons/cutter.svg"
              width={32}
              height={32}
              alt="icone de uma tesoura"
            />
            <h4 className="mt-2 font-playfair font-bold tracking-widest">
              Corte Masculino
            </h4>
            <p className="mt-4 text-center">
              Corte moderno e personalizado para o seu estilo.
            </p>
          </div>
          <div className="flex w-64 flex-col items-center justify-center">
            <Image
              src="/icons/mask.svg"
              width={32}
              height={32}
              alt="icone de uma máscara"
            />
            <h4 className="mt-2 font-playfair font-bold tracking-widest">
              Barba e Aparo
            </h4>
            <p className="mt-4 text-center">
              Cuidados e aparo para deixar sua barba impecável.
            </p>
          </div>
          <div className="flex w-64 flex-col items-center justify-center">
            <Image
              src="/icons/coloration.svg"
              width={32}
              height={32}
              alt="icone de uma gota lado esquerdo sem preenchimento e lado direito com linhas horizontais"
            />
            <h4 className="mt-2 font-playfair font-bold tracking-widest">
              Coloração
            </h4>
            <p className="mt-4 text-center">
              Coloração personalizada para cabelo e barba.
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/5511999627786?text=Ol%C3%A1!%0ATenho%20interesse%20em%20agendar%20horário"
          className="mt-16 w-36 rounded-md bg-davano-secondary py-4 text-center text-xs font-bold uppercase transition-colors duration-300 hover:bg-davano-secondary-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar agora
        </a>
      </div>
      <div className="mx-auto mt-16 w-full max-w-screen-md border border-b-slate-50" />
    </section>
  )
}

export default Services
