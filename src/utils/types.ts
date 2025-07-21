import { quizzes } from '../../data.json';

type  GetSingle<T> = T extends Array<infer K> ? K : null;
export type Quiz = GetSingle<typeof quizzes>;
export type Question = GetSingle<Quiz['questions']>;