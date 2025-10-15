import React, { useEffect } from "react";
import { useQuizz } from "../hooks/useQuizz";
import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { useNavigate } from "react-router-dom";

const Result: React.FC = () => {
  const {
    countCorrectAnswers,
    countIncorrectAnswers,
    countQuestions,
    handleResetQuiz,
    accessResult,
  } = useQuizz();
  const navigate = useNavigate();

  const result = [
    {
      label: "Correct Answers",
      value: countCorrectAnswers,
      color: "#22c55e",
    },
    {
      label: "Incorrect Answers",
      value: countIncorrectAnswers,
      color: "#ef4444",
    },
    {
      label: "Total Answered",
      value: countCorrectAnswers + countIncorrectAnswers,
      color: "#3b82f6",
    },
  ];

  const scorePercentage =
    countQuestions > 0 ? (countCorrectAnswers / countQuestions) * 100 : 0;

  let grade = "Poor";
  if (scorePercentage === 100) grade = "Perfect";
  else if (scorePercentage >= 70) grade = "Good";

  useEffect(() => {
    if (!accessResult) {
      navigate("/quiz");
      return;
    }
  }, []);

  if (!accessResult) return null;

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Meteors />
      <div className="border border-border rounded-md bg-card w-[50vw] z-10">
        <div className="flex justify-center items-center flex-row">
          <div className="w-1/2 border-r h-full border-border p-4 flex flex-col justify-center items-center gap-4">
            <h4>Result</h4>

            <div className="h-36 w-36 rounded-full border flex justify-center items-center">
              <span className="text-2xl font-bold">
                {countCorrectAnswers} / {countQuestions}
              </span>
            </div>

            <div className="text-xl font-medium">{grade}</div>
          </div>
          <div className="w-1/2 p-4 rounded-md flex flex-col justify-center items-center gap-4 ">
            <h1 className="text-xl font-bold text-start">Summary</h1>
            {result.map((result) => (
              <div
                key={result.label}
                className="flex flex-row justify-between items-center border border-border p-2 rounded-md w-full"
                style={{
                  borderColor: `${result.color}40`,
                  backgroundColor: `${result.color}20`,
                }}
              >
                <h2 className="text-base ">{result.label}</h2>
                <p className="text-base font-semibold">{result.value}</p>
              </div>
            ))}
            <Button className="w-full" onClick={handleResetQuiz}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
