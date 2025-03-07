import Image from 'next/image'

const Services = () => {
  return (
    <section className="bg-davano-primary-darken py-16">
      <h3 className="text-center font-playfair text-3xl font-bold tracking-wide">
        Serviços
      </h3>

      <div className="mx-auto mt-8 flex max-w-[1024px] flex-col items-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex w-64 flex-col items-center justify-center">
            <Image
              src="/icons/cutter.svg"
              width={32}
              height={32}
              alt="icone de uma tesoura"
            />
            <h4 className="mt-2 font-playfair text-base font-bold tracking-widest">
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
            <h4 className="mt-2 font-playfair text-base font-bold tracking-widest">
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
            <h4 className="mt-2 font-playfair text-base font-bold tracking-widest">
              Coloração
            </h4>
            <p className="mt-4 text-center">
              Coloração personalizada para cabelo e barba.
            </p>
          </div>
        </div>

        <button className="mt-16 w-36 rounded-md bg-davano-secondary py-4 text-xs font-bold uppercase transition-colors duration-300 hover:bg-davano-secondary-light">
          Agendar agora
        </button>
        <div className="mt-12 w-full border border-b-slate-50" />
      </div>
    </section>
  )
}

export default Services
