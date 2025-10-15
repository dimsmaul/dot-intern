
export interface IQuestionResponse {
  response_code: number;
  results: IQuestionResult[];
}

export interface IQuestionResult {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];

  answer?: string[];
}
