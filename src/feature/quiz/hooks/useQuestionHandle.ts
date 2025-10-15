import { secureStorage } from "@/utils/secureStorage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { IQuestionResult } from "../types";

export interface IQuestionHandle {
  duration: number;
  startTime: number | null;
  setMetadata: (duration: number, startTime: number) => void;

  score: number;
  setScore: (score: number) => void;

  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;

  countCorrectAnswers: number;
  setCorrectAnswers: (count: number) => void;

  countIncorrectAnswers: number;
  setIncorrectAnswers: (count: number) => void;

  countQuestions: number;

  questions: IQuestionResult[];
  setQuestions: (questions: IQuestionResult[]) => void;

  resetForm: () => void;
  endQuiz: () => void;

  accessResult: boolean;
}

export const useQuestionHandle = create<IQuestionHandle>()(
  persist(
    (set) => ({
      duration: 1,
      startTime: null,
      setMetadata: (duration: number, startTime: number) =>
        set({ duration, startTime }),

      score: 0,
      currentQuestionIndex: 0,
      setScore: (score: number) => set({ score }),
      setCurrentQuestionIndex: (index: number) =>
        set({ currentQuestionIndex: index }),

      countCorrectAnswers: 0,
      countIncorrectAnswers: 0,
      setCorrectAnswers: (count: number) => set({ countCorrectAnswers: count }),
      setIncorrectAnswers: (count: number) =>
        set({ countIncorrectAnswers: count }),

      countQuestions: 0,
      questions: [],
      setQuestions: (questions: IQuestionResult[]) =>
        set({
          countQuestions: questions.length,
          questions,
        }),

      resetForm: () =>
        set({
          duration: 1,
          startTime: null,
          score: 0,
          currentQuestionIndex: 0,
          countCorrectAnswers: 0,
          countIncorrectAnswers: 0,
          countQuestions: 0,
          questions: [],
          accessResult: false,
        }),

      accessResult: false,
      endQuiz: () =>
        set({
          startTime: null,
          currentQuestionIndex: 0,
          questions: [],
          accessResult: true,
        }),
    }),
    {
      name: "question-handle",
      storage: createJSONStorage(() => secureStorage),
    }
  )
);
