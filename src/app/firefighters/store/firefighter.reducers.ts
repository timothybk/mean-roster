import { Firefighter } from './../firefighter.model';

export interface State {
  firefighters: Firefighter[],
  editedFirefighter: Firefighter,
  editedIngredientIndex: number
}

const initialState: State = {
  firefighters: [
    new Firefighter('id1',
      9204556,
      'Senior FF',
      'person',
      []),
      new Firefighter('id2',
      7204557,
      'QFF',
      'Another person',
      [])
  ]
}

export function firefigtersReducer(state = initialState, action: Fir) {

}
