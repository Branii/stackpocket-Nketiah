"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";


const StateData = {
  gameNamesData: [],
  setGameNamesData: () => {},
  gameCategory: [],
  setGameCategory: () => {},
  gameDraws: [],
  setGameDraws: () => {},
  isLoading: true,
  setIsLoading: () => {},
  hidePage: true,
  setHidePage: () => {},
}


const GameContext = createContext<GameContextType>(StateData)


export const GameProvider = ({ children }: {children: ReactNode }) => {

  const [gameNamesData, setGameNamesData] = useState<GameName[]>([])
  const [gameCategory, setGameCategory] = useState<CategoryData[]>([])
  const [gameDraws, setGameDraws] = useState<GameDraw[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hidePage, setHidePage] = useState(false)


  return (
    <GameContext.Provider
      value={{
        hidePage,
        setHidePage,
        gameNamesData,
        setGameNamesData,
        gameCategory,
        setGameCategory,
        gameDraws,
        setGameDraws,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = (): GameContextType => useContext(GameContext)
