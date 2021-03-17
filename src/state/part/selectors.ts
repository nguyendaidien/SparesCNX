import { Part, PartState } from './types'

/**
 * To select data as needed.
 * @param state 
 */
export const useSelectors = (state: PartState) => ({
  allParts: (): Part[] => {
    return state.parts
  }
})
