import { Signature } from './carousel'

type SignatureCarouselCardProps = {
  signature: Signature
}

const SignatureCarouselCard = ({ signature }: SignatureCarouselCardProps) => {
  return (
    <div className="flex h-96 w-72 flex-col items-center justify-center gap-6 rounded-md bg-stone-50 px-6 text-center shadow-sm">
      <h3 className="font-playfair text-xl font-bold tracking-wider">
        {signature.title}
      </h3>
      <ul className="flex flex-col justify-start gap-2 text-left">
        {signature.description.map((item) => {
          return (
            <li className="text-sm" key={item}>
              {item}
            </li>
          )
        })}
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
      <a href={``}>
        <button className="w-32 rounded-lg bg-davano-secondary py-3 text-xs font-bold uppercase text-stone-50 transition-colors duration-300 hover:bg-davano-secondary-light">
          Assinar
        </button>
      </a>
    </div>
  )
}

export default SignatureCarouselCard
