import { useQuery } from "@tanstack/react-query";
import { useQuestionHandle } from "./useQuestionHandle";
import { useEffect } from "react";
import type { IQuestionResponse } from "../types";
import { useNavigate } from "react-router-dom";

export const useQuizz = () => {
  const {
    duration,
    startTime,
    setMetadata,

    currentQuestionIndex,
    setCurrentQuestionIndex,

    countCorrectAnswers,
    setCorrectAnswers,

    countIncorrectAnswers,
    setIncorrectAnswers,

    countQuestions,
    setQuestions,
    questions,

    resetForm,
    accessResult,
    endQuiz,
  } = useQuestionHandle();
  const navigate = useNavigate();

  const { data: questionData } = useQuery({
    queryKey: ["question"],
    queryFn: handleRequestQuestion,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled: questions.length === 0,
  });

  useEffect(() => {
    if (questionData) {
      console.log(questionData);
      const formatter = questionData.results?.map((item) => ({
        ...item,
        answer: [item.correct_answer, ...item.incorrect_answers],
      }));

      setQuestions(formatter);
    }
  }, [questionData, setQuestions]);

  const handleStartQuiz = () => {
    if (startTime) {
      navigate("/quiz/attempt");
      return;
    }

    const start = Date.now();
    setMetadata(10, start);
    navigate("/quiz/attempt");
  };

  const handleNextQuestion = (isCorrect: boolean) => {
    if (currentQuestionIndex + 1 >= countQuestions) {
      handleCorrectIncorrect(isCorrect);
      endQuiz();
      navigate("/quiz/result");
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    handleCorrectIncorrect(isCorrect);
  };
  const handleCorrectIncorrect = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(countCorrectAnswers + 1);
    } else {
      setIncorrectAnswers(countIncorrectAnswers + 1);
    }
  };

  const handleTimeUp = () => {
    endQuiz();
    navigate("/quiz/result");
  };

  const handleResetQuiz = () => {
    resetForm();
    navigate("/quiz");
  };

  return {
    duration,
    startTime,
    countQuestions,
    handleStartQuiz,
    handleNextQuestion,
    accessResult,
    questions,
    currentQuestionIndex,
    countCorrectAnswers,
    countIncorrectAnswers,
    handleTimeUp,
    handleResetQuiz,
  };
};

const handleRequestQuestion = async () => {
  const result = await fetch(import.meta.env.VITE_API_URL, {
    method: "GET",
  });

  if (!result.ok) {
    throw new Error("Failed to fetch question");
  }

  const data: IQuestionResponse = await result.json();
  return data;
};
