import type { Question as TQuestion } from '@app/utils/types';

type State = {
  index: number;
  currentQuestion: TQuestion;
}

type Action = {
  type: 'inc',
  questions: TQuestion[];
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