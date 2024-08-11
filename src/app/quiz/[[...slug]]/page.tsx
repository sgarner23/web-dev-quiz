"use client";
import React from "react";
import QuizLayout from "@/components/Icons/QuizLayout";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import IconWithLabel from "@/components/IconWithLabel";
import quizContent from "../../../../public/data/data.json";
import AnswerOption from "@/components/AnswerOption";
import ProgressBar from "@/components/ProgressBar";

interface QuizPageProps {
  params: {
    slug: string;
  };
}

interface QuizAttributes {
  icon: React.ReactNode;
  text: string;
  iconBackgroundColor: string;
}

type SlugToIconMap = {
  [key: string]: QuizAttributes;
};

const slugToIconMap: SlugToIconMap = {
  html: {
    icon: <HtmlIcon />,
    text: "HTML",
    iconBackgroundColor: "#fff1e9",
  },
  css: {
    icon: <CssIcon />,
    text: "CSS",
    iconBackgroundColor: "#e0fdef",
  },
  javascript: {
    icon: <JavascriptIcon />,
    text: "Javascript",
    iconBackgroundColor: "#ebf0ff",
  },
  react: {
    icon: <ReactIcon />,
    text: "React",
    iconBackgroundColor: "#f6e7ff",
  },
  mysql: {
    icon: <MysqlIcon />,
    text: "MySQL",
    iconBackgroundColor: "#e0f7ff",
  },
};

const QuizPage: React.FC<QuizPageProps> = ({ params }) => {
  const { slug } = params;
  const [currentQuestion, setCurrentQuestion] = React.useState(10);
  const quiz: any = quizContent.quizzes.find(
    (quiz) => quiz.title.toLowerCase() === slug[0]
  );

  const quizData: QuizAttributes = slugToIconMap[slug] || {
    icon: null,
    text: "Unknown",
    iconBackgroundColor: "#ffffff",
  };

  const renderAnswerOptionsList = quiz.questions[
    currentQuestion - 1
  ].options.map((option: string, index: number) => {
    const optionLetter = String.fromCharCode(65 + index); // Convert index to A, B, C, D...

    return (
      <AnswerOption key={index}>
        <div className="flex items-center w-full">
          <div className="h-14 w-14 rounded-md bg-[#f4f6fa] flex items-center justify-center">
            <p className="text-2xl text-[#3B4D66]">{optionLetter}</p>
          </div>
          <p className="ml-4 text-white text-xl max-w-[85%] tracking-wide">
            {option}
          </p>
        </div>
      </AnswerOption>
    );
  });

  return (
    <QuizLayout>
      <div className=" flex justify-between">
        <div className="w-[44%]">
          {quizData.icon && (
            <IconWithLabel
              icon={quizData.icon}
              text={quizData.text}
              iconBackgroundColor={quizData.iconBackgroundColor}
            />
          )}
          <p className="italic tracking-wide mt-20 text-[#ABC1E1]">{`Question ${currentQuestion} of ${quiz.questions.length}`}</p>
          <div className="h-52">
            <p className="mt-4 text-2xl text-white font-normal tracking-wide">
              {quiz.questions[currentQuestion - 1].question}
            </p>
          </div>
          <div className="mt-48">
            <ProgressBar
              progress={(currentQuestion / quiz.questions.length) * 100}
            />
          </div>
        </div>
        <div className="mt-40 w-[44%] space-y-5">{renderAnswerOptionsList}</div>
      </div>
    </QuizLayout>
  );
};

export default QuizPage;
