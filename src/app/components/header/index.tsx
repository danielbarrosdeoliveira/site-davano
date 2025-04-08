'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const links = ['Quem somos', 'Serviços', 'Assinaturas', 'FAQ', 'Depoimentos']

  const [navOpen, setNavOpen] = useState(false)

  const handleOnClick = () => {
    setNavOpen((prev) => !prev)
  }

  return (
    <>
      <header className="flex h-20 items-center justify-center bg-stone-900 text-slate-50">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-8">
          <div className="relative h-12 w-12 object-contain sm:h-16 sm:w-16">
            <Image src="/images/logo-davano.svg" fill alt="Logo Davano" />
          </div>

          {/* NAV DESKTOP */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 text-sm uppercase">
              {links.map((item) => {
                const sectionId = item
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .replace(/ç/g, 'c')
                  .replace(/\s+/g, '-')

                return (
                  <li
                    key={item}
                    className="transition-colors duration-300 hover:text-davano-secondary"
                  >
                    {/* Sem onClick aqui */}
                    <Link href={`#${sectionId}`}>{item}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* BOTÃO AGENDAR DESKTOP */}
          <div className="hidden md:block">
            <button className="w-32 rounded-sm bg-davano-secondary py-4 text-xs font-bold uppercase transition-colors duration-300 hover:bg-davano-secondary-light">
              Agendar
            </button>
          </div>

          {/* BOTÃO MENU MOBILE */}
          <button
            className="block text-white md:hidden"
            onClick={handleOnClick}
          >
            <Image
              src="/icons/menu.svg"
              alt="Ícone de menu"
              width={32}
              height={40}
            />
          </button>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-white transition-all duration-500 ease-in-out ${
          navOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        }`}
      >
        <button
          className="absolute right-6 top-6 text-2xl"
          onClick={handleOnClick}
        >
          ✕
        </button>

        <ul className="flex flex-col gap-6 text-center text-xl uppercase">
          {links.map((item) => {
            const sectionId = item
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/ç/g, 'c')
              .replace(/\s+/g, '-')

            return (
              <li
                key={item}
                className="transition-colors duration-300 hover:text-davano-secondary"
              >
                {/* Aqui sim usamos onClick para fechar o menu */}
                <Link href={`#${sectionId}`} onClick={handleOnClick}>
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>

        <button className="mt-10 w-48 rounded-sm bg-davano-secondary py-4 text-xs font-bold uppercase transition-colors duration-300 hover:bg-davano-secondary-light">
          Agendar
        </button>
      </div>
    </>
  )
}

export default Header
