const Presentation = () => {
  return (
    <section
      id="presentation"
      className="h-72 bg-[url('/images/presentation.webp')] bg-cover bg-center bg-no-repeat text-slate-50 sm:h-80"
    >
      <div className="container mx-auto flex w-full max-w-5xl flex-col">
        <h3 className="pt-12 font-playfair text-3xl tracking-wide sm:pt-16 md:w-3/6 md:text-5xl">
          Mais que um corte, uma experiência de cuidado e estilo.
        </h3>
        <a
          href="https://wa.me/5511999627786?text=Ol%C3%A1!%0ATenho%20interesse%20em%20agendar%20horário"
          className="mt-8 w-36 rounded-md bg-davano-primary-darken py-4 text-center text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-davano-primary-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar agora
        </a>
      </div>
    </section>
  )
}

export default Presentation
