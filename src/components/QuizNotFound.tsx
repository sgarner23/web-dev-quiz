"use client";
import React from "react";
import { useRouter } from "next/navigation";
import QuizLayout from "@/components/QuizLayout";

const QuizNotFound: React.FC = () => {
  const router = useRouter();

  return (
    <QuizLayout>
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ marginTop: "-96px" }}
      >
        <h1 className="text-3xl text-white">Quiz not found</h1>
        <button
          onClick={() => router.push("/")}
          className="mt-4 bg-[#a729f5] hover:bg-[#d394fa] text-white text-xl px-4 py-2 rounded-lg"
        >
          Go to Quizzes
        </button>
      </div>
    </QuizLayout>
  );
};

export default QuizNotFound;
