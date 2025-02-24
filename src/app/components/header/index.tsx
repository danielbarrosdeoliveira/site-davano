import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center bg-stone-900">
      <div className="mx-auto flex w-full max-w-[1024px] items-center justify-between px-8">
        <div className="relative h-16 w-16 object-contain">
          <Image src="/images/logo-davano.svg" fill alt="Logo Davano" />
        </div>
        <nav>
          <ul className="flex gap-4 text-sm uppercase">
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">Quem somos</Link>
            </li>
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">Serviços</Link>
            </li>
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">Assinaturas</Link>
            </li>
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">Depoimentos</Link>
            </li>
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">FAQ</Link>
            </li>
            <li className="transition-colors duration-300 hover:text-davano-secondary">
              <Link href="#">Contato</Link>
            </li>
          </ul>
        </nav>
        <button className="h-11 w-32 rounded-sm bg-davano-secondary text-xs font-bold uppercase transition-colors duration-300 hover:bg-davano-secondary-light">
          Agendar
        </button>
      </div>
    </header>
  )
}

export default Header
