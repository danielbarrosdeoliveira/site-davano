const Presentation = () => {
  return (
    <section
      id="presentation"
      className="h-72 bg-[url('/images/presentation.webp')] bg-cover bg-center bg-no-repeat sm:h-80"
    >
      <div className="container mx-auto flex w-full max-w-5xl flex-col">
        <h3 className="pt-16 font-playfair text-2xl md:w-3/6 md:text-4xl">
          Mais que um corte, uma experiência de cuidado e estilo.
        </h3>
        <button className="mt-8 w-36 rounded-md bg-davano-primary-darken py-4 text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-davano-primary-dark">
          Agendar agora
        </button>
      </div>
    </section>
  )
}

export default Presentation
