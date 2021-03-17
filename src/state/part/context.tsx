import React, { FC, createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer'
import { Part, PartState } from './types'
import { useActions } from './actions'
import { useSelectors } from './selectors'

type ContextType = {
  state: PartState
  actions: ReturnType<typeof useActions>
  selectors: ReturnType<typeof useSelectors>
}
const initialContext: ContextType = {
  state: { ...initialState },
  actions: {
    createPart: (part: Part) => part
  },
  selectors: {
    allParts: () => []
  }
}
const PartContext = createContext<ContextType>(initialContext)

const PartProvider: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useActions(state, dispatch)
  const selectors = useSelectors(state)
  const contextValue = {
    state: { ...state },
    actions: { ...actions },
    selectors: { ...selectors }
  }
  return (
    <PartContext.Provider value={contextValue}>{children}</PartContext.Provider>
  )
}

/**
 * Context API: 
 * to share state to a specific part of an application
 * We can also share state to all levels of the application, if we expose the context provider at a very high level
 */
export { PartContext, PartProvider }
