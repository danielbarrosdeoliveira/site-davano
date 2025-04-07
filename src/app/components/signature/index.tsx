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
    id: 1,
    title: 'Essencial',
    description: ['Corte de cabelo', 'Barba simples', '1 visita por mês'],
    price: 59.9,
  },
  {
    id: 2,
    title: 'Premium',
    description: ['Corte + Barba completa', 'Massagem facial', '2 visitas/mês'],
    price: 109.9,
    recommended: true,
  },
  {
    id: 3,
    title: 'VIP',
    description: ['Tudo do Premium', 'Produtos exclusivos', 'Visita ilimitada'],
    price: 199.9,
  },
]

const Signature = () => {
  return (
    <section id="assinaturas" className="bg-davano-primary-darken pb-16 pt-10">
      <h3 className="text-center font-playfair text-3xl font-bold tracking-wide text-stone-50">
        Assinaturas
      </h3>

      <div className="scrollbar-hide mx-auto mt-8 max-w-6xl overflow-x-auto px-4">
        <div className="flex w-max gap-6 pb-4">
          {signatures.map((signature) => (
            <div
              key={signature.id}
              className="flex h-96 w-72 min-w-[18rem] flex-col items-center justify-center gap-6 rounded-md bg-stone-50 px-6 text-center shadow-sm"
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

              <a href="#">
                <button className="w-32 rounded-lg bg-davano-secondary py-3 text-xs font-bold uppercase text-stone-50 transition-colors duration-300 hover:bg-davano-secondary-light">
                  Assinar
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Signature
