import React, { useState, createContext } from 'react'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const [isNavClick, setIsNavClick] = useState(false);
  
  const handleNavClick = () => {
    setIsNavClick(prevIsNavClick => !prevIsNavClick);
  }

  return (
    <NavContext.Provider value={{ isNavClick, setIsNavClick, handleNavClick }}>
      {children}
    </NavContext.Provider>
  )
}