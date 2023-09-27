import React from 'react'
import {UserButton} from '@clerk/nextjs'

export const Header = () => {
  return (
    <header className="bg-blue-400 h-14 flex items-center">
      <nav className="container mx-auto ">
        <ul className="flex justify-between">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
