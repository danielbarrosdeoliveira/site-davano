'use client'

import { useState } from 'react'

const faqData = [
  {
    question: '1. O que é assinatura?',
    answer:
      'É um plano mensal com valor fixo e acessível, pensado para você manter cabelo e barba sempre em dia, sem preocupação.',
  },
  {
    question: '2. Como funciona a assinatura?',
    answer:
      'Funciona como um serviço de streaming, como a Netflix ou Amazon. A cobrança é recorrente, ou seja, automática todo mês, então você só precisa aproveitar o serviço.',
  },
  {
    question: '3. Nossas assinaturas têm fidelidade?',
    answer:
      'Não! No momento, nossas assinaturas não têm fidelidade. Queremos que você experimente com liberdade, sem compromisso.',
  },
  {
    question: '4. Tenho que cortar somente com um barbeiro',
    answer:
      'Não! Com a assinatura, você tem liberdade para escolher: pode ser atendido por ordem de chegada ou com agendamento, dependendo da sua preferência e da disponibilidade do time.',
  },
  {
    question: '5. Outra pessoa pode utilizar minha assinatura?',
    answer:
      'Não. A assinatura é pessoal e intransferível, válida apenas para quem contratou o plano.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-davano-brown-darkest">
      <div className="container mx-auto max-w-3xl py-12 sm:py-16">
        <h2 className="mb-16 text-center font-playfair text-3xl font-bold tracking-wide text-slate-50">
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
      <div className="mx-auto w-full max-w-screen-md border border-b-slate-50" />
    </section>
  )
}

export default FAQ
