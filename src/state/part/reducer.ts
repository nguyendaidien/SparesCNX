import { PartState } from './types'

const initialState: PartState = {
  parts: []
}

const ACTION_TYPES = {
  CREATE_PART: 'part/CREATE_PART'
}
/**
 * listening to actions and modifying the state
 * @param state 
 * @param action 
 */
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_PART:
      return {
        ...state,
        parts: [...state.parts, action.payload]
      }
    default:
      return state
  }
}

export { initialState, reducer, ACTION_TYPES }
