"use client";
import QuizLayout from "@/components/QuizLayout";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import ResultsPageContent from "./ResultsPageContent";
import { useSearchParams } from "next/navigation";

const ResultsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quizTitle, setQuizTitle] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const searchParams = useSearchParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const title = searchParams.get("quiz-title");
    const correct = searchParams.get("correct");
    console.log("title", title);
    console.log("correct", correct);

    if (title) {
      setQuizTitle(title);
    }

    if (correct) {
      setCorrectAnswers(parseInt(correct, 10));
    }
  }, [searchParams]);

  return (
    <QuizLayout>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ResultsPageContent
          quizTitle={quizTitle}
          correctAnswers={correctAnswers}
        />
      )}
    </QuizLayout>
  );
};

export default ResultsPage;
