import type { Question } from '@app/utils/types';

type State = {
  index: number;
  currentQuestion: Question;
}

type Action = {
  type: 'inc',
  questions: Question[];
}

export function reducer(state: State, action: Action) {

  if (action.type === 'inc') {
    const newIndex = state.index + 1;
    return {
      index: newIndex,
      currentQuestion:  action.questions[newIndex]
    }
  }

  throw Error(`Unknown action: ${action.type}`);
}