import { INC } from "../types/counterTypes";

export const counterINC = (points) => ({
  type: INC,
  payload: points
})
