
export type Part = {
  name: string
  id: number
  status: string
}

/**
 *  state we expect to handle on reducer
 */
export interface PartState {
  parts: Part[]
}
