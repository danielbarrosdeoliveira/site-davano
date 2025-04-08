'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'Qual é o prazo de entrega?',
    answer: 'O prazo médio é de 3 a 5 dias úteis.',
  },
  {
    question: 'Vocês oferecem reembolsos?',
    answer: 'Sim, aceitamos devoluções em até 7 dias após o recebimento.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos cartões de crédito, débito e Pix.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-davano-brown-darkest">
      <div className="container mx-auto max-w-3xl py-16">
        <h2 className="mb-16 text-center font-playfair text-3xl font-bold text-slate-50">
          Perguntas Frequentes
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-md bg-davano-primary-darken p-4 transition-colors duration-300"
            >
              <button
                className="flex w-full items-center justify-between text-left text-lg font-medium text-white"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="text-2xl transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'mt-2 max-h-40 opacity-100' : 'max-h-0 opacity-0'} `}
              >
                <p className="text-stone-50">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
