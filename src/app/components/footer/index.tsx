import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="container flex items-center justify-between py-16">
        {/* LADO ESQUERDO */}
        <div className="flex w-1/3 justify-start">
          <a href="">
            <Image
              src="/icons/instagram.svg"
              width={32}
              height={32}
              alt="Logo instagram"
            />
          </a>
        </div>

        {/* CENTRO: Alinhado com flex */}
        <div className="flex w-1/3 justify-center">
          <Image
            src="/images/logo-davano.svg"
            width={64}
            height={64}
            alt="Logo Davano"
          />
        </div>

        {/* LADO DIREITO */}
        <div className="flex w-1/3 flex-col items-end text-right font-playfair text-lg">
          <p>&copy; 2025 Barbearia Davano</p>
          <p>Desenvolvido por DCF Soluções de TI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
