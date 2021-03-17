import { ACTION_TYPES } from './reducer'
import { Part, PartState } from './types'

/*
  actions we might use to modify the state
*/
export const useActions = (state: PartState, dispatch: Function) => ({
  createPart: (part: Part) =>
    dispatch({ type: ACTION_TYPES.CREATE_PART, payload: part })
})
