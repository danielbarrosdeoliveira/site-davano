'use client'

import Image from 'next/image'
import { useRef } from 'react'

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
    text: '“Atendimento excelente e resultados incríveis! Super recomendo.”',
    image: '/images/hiram.png',
  },
  {
    name: 'João Pedro',
    since: 'Cliente desde 2019',
    text: '“Equipe muito profissional, entregam sempre no prazo.”',
    image: '/images/hiram.png',
  },
  {
    name: 'Ana Souza',
    since: 'Cliente desde 2022',
    text: '“A melhor experiência que já tive com esse tipo de serviço!”',
    image: '/images/hiram.png',
  },
  {
    name: 'Ana Souza',
    since: 'Cliente desde 2022',
    text: '“A melhor experiência que já tive com esse tipo de serviço!”',
    image: '/images/hiram.png',
  },
  {
    name: 'Ana Souza',
    since: 'Cliente desde 2022',
    text: '“A melhor experiência que já tive com esse tipo de serviço!”',
    image: '/images/hiram.png',
  },
]

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current!.offsetLeft
    scrollLeft.current = scrollRef.current!.scrollLeft
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current!.offsetLeft
    const walk = (x - startX.current) * 1.5 // velocidade do drag
    scrollRef.current!.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return (
    <section className="bg-slate-50 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-stone-900">
        O que nossos clientes dizem?
      </h2>

      <div
        ref={scrollRef}
        className="hide-scrollbar cursor-grab snap-x snap-mandatory overflow-x-auto scroll-smooth text-center active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex w-max gap-6 px-4 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-sm flex-shrink-0 snap-center rounded-lg bg-davano-primary-darken px-2 py-4 text-white shadow-md"
            >
              <p className="text-md mb-6 leading-relaxed">{item.text}</p>
              <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs">{item.since}</p>
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
