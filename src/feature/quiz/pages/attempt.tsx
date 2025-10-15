import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect } from "react";
import CountDown from "@/components/countdown";
import { useQuizz } from "../hooks/useQuizz";
import { decodeHtml } from "@/utils/decodeHtml";
import { shuffleArray } from "@/utils/shuffleArray";
import { useNavigate } from "react-router-dom";

const Attempt: React.FC = () => {
  const {
    duration,
    currentQuestionIndex,
    questions,
    startTime,
    handleNextQuestion,
    handleTimeUp,
  } = useQuizz();
  const navigate = useNavigate();

  useEffect(() => {
    if (startTime === null) {
      navigate("/quiz");
      return;
    }
  }, []);

  if (!startTime) return null;

  return (
    <div className="h-screen w-screen flex justify-center items-start overflow-hidden p-16">
      <Card className="w-dvw">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>
              {decodeHtml(questions[currentQuestionIndex]?.question)}
            </CardTitle>
            <CardDescription>
              Question {currentQuestionIndex + 1}
            </CardDescription>
          </div>
          {startTime && (
            <CountDown
              duration={duration}
              startTime={startTime}
              onTimeUp={handleTimeUp}
            />
          )}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {questions[currentQuestionIndex]?.answer &&
              shuffleArray(questions[currentQuestionIndex]?.answer)?.map(
                (answer) => (
                  <div
                    className="border borderborder rounded-md p-3"
                    onClick={() => {
                      const val =
                        answer ===
                        questions[currentQuestionIndex]?.correct_answer;
                      handleNextQuestion(val);
                    }}
                    key={answer}
                  >
                    <div>{decodeHtml(answer)}</div>
                  </div>
                )
              )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Attempt;
