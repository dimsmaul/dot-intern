import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";
import React from "react";
import { useQuizz } from "../hooks/useQuizz";
import { cn } from "@/lib/utils";
import CountDown from "@/components/countdown";

const QuizOverview: React.FC = () => {
  const { duration, countQuestions, startTime, handleStartQuiz, handleTimeUp } =
    useQuizz();
  const quizzes = [
    {
      label: "Duration",
      value: cn(duration || 1, "minutes"),
    },
    {
      label: "Number of Questions",
      value: cn(countQuestions || 0, "questions"),
    },
    {
      label: "Type",
      value: "Multiple Choice, True or False",
    },
    ...(startTime !== null
      ? [
          {
            label: "Remaining Time",
            value: (
              <CountDown
                duration={duration}
                startTime={startTime || 0}
                onTimeUp={handleTimeUp}
                className="border-none p-0"
              />
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="bg-background h-screen w-screen overflow-hidden p-4 flex justify-center items-center">
      <div className="">
        <Meteors />
      </div>
      <Card className="z-10">
        <CardContent>
          <h1 className="text-3xl font-bold">Quizzz</h1>
          <div className="grid grid-cols-2 gap-5 my-5">
            {quizzes.map((quiz) => (
              <div key={quiz.label} className="">
                <h2 className="text-lg font-semibold">{quiz.label}</h2>
                <div>{quiz.value}</div>
              </div>
            ))}
          </div>
          <Button onClick={handleStartQuiz}>
            {startTime ? "Resume Quiz" : "Start Quiz"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizOverview;
