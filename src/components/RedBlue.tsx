import { shuffleArray } from "./utils";

export type Question = {
  correct_answer: string;
  incorrect_answer: string;
  question: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuestions = async (
  amount: number
): Promise<QuestionState[]> => {
  // eslint-disable-next-line no-template-curly-in-string
  const endpoint = "/public/game-data.json?amount=${amount}";
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([question.incorrect_answer, question.correct_answer]),
  }));
};
