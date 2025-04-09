/* eslint-disable @next/next/no-img-element */
'use client'

const testimonials = [
  {
    name: 'Daniel Oliveira',
    since: 'Cliente desde 2020',
    text: 'Excelente como sempre, agora tem ar condicionado, tv para todas as cadeiras e recepção, além do corte ser excelente, vale a pena.',
    image: '/images/testimonials/daniel.jpg',
  },
  {
    name: 'Maria Silva',
    since: 'Cliente desde 2021',
    text: 'Atendimento excelente e resultados incríveis! Super recomendo.',
    image: '/images/hiram.png',
  },
  {
    name: 'João Pedro',
    since: 'Cliente desde 2019',
    text: 'Equipe muito profissional, entregam sempre no prazo.',
    image: '/images/hiram.png',
  },
  {
    name: 'Ana Souza',
    since: 'Cliente desde 2022',
    text: 'A melhor experiência que já tive com esse tipo de serviço!',
    image: '/images/hiram.png',
  },
  {
    name: 'Maria Silva',
    since: 'Cliente desde 2021',
    text: 'Atendimento excelente e resultados incríveis! Super recomendo.',
    image: '/images/hiram.png',
  },
  {
    name: 'João Pedro',
    since: 'Cliente desde 2019',
    text: 'Equipe muito profissional, entregam sempre no prazo.',
    image: '/images/hiram.png',
  },
  {
    name: 'Ana Souza',
    since: 'Cliente desde 2022',
    text: 'A melhor experiência que já tive com esse tipo de serviço!',
    image: '/images/hiram.png',
  },
]

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-davano-brown-darkest py-8 sm:py-10">
      <h2 className="container mb-16 text-center font-playfair text-3xl font-bold tracking-wide text-slate-50">
        O que nossos clientes dizem?
      </h2>

      <div className="scrollbar-hide mx-auto snap-x snap-mandatory overflow-x-auto sm:ml-0">
        <div className="flex w-max gap-6 px-8 pb-4 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-72 flex-shrink-0 snap-center rounded-xl bg-davano-primary-darken px-6 py-6 text-white shadow-lg transition-transform duration-300"
            >
              <p className="mb-6 text-sm leading-relaxed">{item.text}</p>
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-davano-secondary-light">
                    {item.since}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
