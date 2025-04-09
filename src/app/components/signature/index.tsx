'use client'

type Signature = {
  id: number
  title: string
  description: string[]
  price: number
  recommended?: boolean
}

const signatures: Signature[] = [
  {
    id: 2,
    title: 'Premier Corte/Barba',
    description: [
      '✅ Cuidados com Barba e Cabelo',
      '✅ Visitas ilimitadas de Segunda a Quarta',
      '✅ Desconto de 20% em todos os serviços adicionais',
    ],
    price: 99.9,
    recommended: true,
  },
  {
    id: 1,
    title: 'Premier Corte',
    description: [
      '✅ Corte de Cabelo',
      '✅ Visitas ilimitadas de Segunda a Quarta',
      '✅ Desconto de 20% em todos os serviços adicionais',
    ],
    price: 54.9,
  },
  {
    id: 3,
    title: 'Premier Barba',
    description: [
      '✅ Cuidados com Barba',
      '✅ Visitas ilimitadas de Segunda a Quarta',
      '✅ Desconto de 20% em todos os serviços adicionais',
    ],
    price: 59.9,
  },
  {
    id: 4,
    title: 'One Cabelo/Barba',
    description: [
      '✅ Corte Cabelo + Barba',
      '✅ 1 visita por mês',
      '✅ Desconto de 20% em todos os serviços adicionais',
      '❌ Apenas de Segunda a Quarta',
    ],
    price: 59.9,
  },
  {
    id: 5,
    title: 'One Cabelo',
    description: [
      '✅ Corte Cabelo',
      '✅ 1 visita por mês',
      '✅ Desconto de 20% em todos os serviços adicionais',
      '❌ Apenas de Segunda a Quarta',
    ],
    price: 29.9,
  },
  {
    id: 6,
    title: 'One Barba',
    description: [
      '✅ Cuidados com Barba',
      '✅ 1 visita por mês',
      '✅ Desconto de 20% em todos os serviços adicionais',
      '❌ Apenas de Segunda a Quarta',
    ],
    price: 29.9,
  },
]

const Signature = () => {
  return (
    <section
      id="assinaturas"
      className="bg-davano-primary-darken py-12 text-stone-50 sm:py-16"
    >
      <h2 className="text-center font-playfair text-2xl font-bold tracking-wide sm:text-3xl">
        Assinaturas
      </h2>

      <div className="mx-auto mt-8 max-w-6xl overflow-hidden px-4">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4">
          {signatures.map((signature) => (
            <div
              key={signature.id}
              className="relative flex h-96 w-72 shrink-0 snap-start flex-col items-center justify-center gap-6 rounded-md bg-davano-brown-darkest px-6 text-center shadow-sm"
            >
              <h3 className="font-playfair text-xl font-bold tracking-wider">
                {signature.title}
              </h3>

              <ul className="flex flex-col justify-start gap-2 text-left">
                {signature.description.map((item) => (
                  <li className="text-sm" key={item}>
                    {item}
                  </li>
                ))}
              </ul>

              <span className="relative font-poppins text-3xl font-bold">
                <span className="absolute -left-4 top-[5px] text-xs text-davano-secondary">
                  R$
                </span>
                {signature.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
                <span className="block text-sm font-light">por mês</span>
              </span>

              <a
                href={`https://wa.me/5511999627786?text=${encodeURIComponent(
                  `Olá!\nTenho interesse na assinatura mensal: ${signature.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-32 rounded-lg bg-davano-secondary py-3 text-xs font-bold uppercase text-stone-50 transition-colors duration-300 hover:bg-davano-secondary-light">
                  Assinar
                </button>
              </a>

              {signature.recommended && (
                <span className="absolute left-0 top-0 rounded-br-md rounded-tl-md bg-davano-secondary px-2 py-1 text-xs font-bold uppercase text-white">
                  Recomendado
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Signature
