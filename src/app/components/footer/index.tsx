import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-slate-50">
      <div className="container flex flex-col flex-wrap items-center justify-center gap-4 py-16 md:flex-row md:justify-between md:gap-0">
        <div className="flex md:w-1/3 md:justify-start">
          <a href="">
            <Image
              src="/icons/instagram.svg"
              width={32}
              height={32}
              alt="Logo instagram"
            />
          </a>
        </div>

        <div className="flex justify-center sm:w-1/3">
          <Image
            src="/images/logo-davano.svg"
            width={64}
            height={64}
            alt="Logo Davano"
          />
        </div>

        <div className="flex flex-col items-center text-center font-playfair text-lg md:w-1/3 md:items-end md:text-right">
          <p className="">&copy; 2025 Barbearia Davano</p>
          <p>
            Desenvolvido por{' '}
            <a
              className="transition-colors duration-300 hover:text-davano-secondary"
              href="https://dcfsolucoesdeti.com.br"
            >
              DCF Soluções de TI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
