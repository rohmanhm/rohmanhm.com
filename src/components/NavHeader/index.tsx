import Link from 'next/link'
import React from 'react'
import 'twin.macro'

const NavHeader = () => {
  return (
    <header tw="text-gray-600 z-10 relative">
      <div tw="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref={true}>
          <a tw="flex font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <span tw="ml-3 text-xl">ROHMANHM.COM</span>
          </a>
        </Link>
        <nav tw="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a tw="mr-5 hover:text-gray-900">First Link</a>
          <a tw="mr-5 hover:text-gray-900">Second Link</a>
          <a tw="mr-5 hover:text-gray-900">Third Link</a>
          <a tw="mr-5 hover:text-gray-900">Fourth Link</a> */}
        </nav>
        {/* <button tw="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            tw="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  )
}

export default NavHeader
