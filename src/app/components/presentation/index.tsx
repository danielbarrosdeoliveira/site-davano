const Presentation = () => {
  return (
    <section
      id="presentation"
      className="h-80 bg-[url('/images/presentation.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mx-auto flex w-full max-w-[1024px] flex-col pl-24">
        <h3 className="font-playfair w-96 pt-16 text-3xl">
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
