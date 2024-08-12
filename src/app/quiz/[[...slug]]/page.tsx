"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import QuizLayout from "@/components/QuizLayout";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import IconWithLabel from "@/components/IconWithLabel";
import quizContent from "../../../../public/data/data.json";
import AnswerOption from "@/components/AnswerOption";
import ProgressBar from "@/components/ProgressBar";
import QuizNotFound from "@/components/QuizNotFound";
import NoOptionSelectedError from "@/components/NoOptionSelectedError";
import ErrorIcon from "@/components/Icons/ErrorIcon";
import CorrectIcon from "@/components/Icons/CorrectIcon";

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
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [correctAnswerSelected, setCorrectAnswerSelected] =
    useState<boolean>(false);
  const [incorrectAnswerSelected, setIncorrectAnswerSelected] =
    useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showNoSelectionError, setShowNoSelectionError] =
    useState<boolean>(false);
  const [lockOptions, setLockOptions] = useState<boolean>(false);
  const [nextQuestionPrompt, setNextQuestionPrompt] = useState<boolean>(false);
  const [answersCorrectTally, setAnswersCorrectTally] = useState<number>(0);

  useEffect(() => {
    if (selectedOption !== null) {
      setShowNoSelectionError(false);
    }
  }, [selectedOption]);

  if (!slug || !slugToIconMap[slug]) {
    return <QuizNotFound />;
  }
  const quiz: any = quizContent.quizzes.find(
    (quiz) => quiz.title.toLowerCase() === slug[0]
  );
  const quizData: QuizAttributes = slugToIconMap[slug];
  const question = quiz.questions[currentQuestion - 1].question;
  const answer = quiz.questions[currentQuestion - 1].answer;

  const handleSubmit = () => {
    if (selectedOption === null) {
      setShowNoSelectionError(true);
      return;
    }
    if (
      quiz.questions[currentQuestion - 1].options[selectedOption] === answer
    ) {
      setCorrectAnswerSelected(true);
    } else {
      setIncorrectAnswerSelected(true);
    }

    setNextQuestionPrompt(true);
    setLockOptions(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === quiz.questions.length) {
      router.push(
        `/quiz/results?quiz-title=${quiz.title}&correct=${answersCorrectTally}`
      );
      return;
    }
    if (correctAnswerSelected) {
      setAnswersCorrectTally(answersCorrectTally + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
    setCorrectAnswerSelected(false);
    setIncorrectAnswerSelected(false);
    setLockOptions(false);
    setNextQuestionPrompt(false);
  };

  const handleSelectOption = (index: number) => {
    if (lockOptions) {
      return;
    }
    setSelectedOption(index);
  };

  const renderAnswerOptionsList = quiz.questions[
    currentQuestion - 1
  ].options.map((option: string, index: number) => {
    const optionLetter = String.fromCharCode(65 + index); // Convert index to A, B, C, D
    const correctOptionSelected = correctAnswerSelected && answer === option;
    const incorrectOptionSelected =
      incorrectAnswerSelected && selectedOption === index && answer !== option;

    return (
      <AnswerOption
        key={index}
        isSelected={selectedOption === index}
        onClick={() => handleSelectOption(index)}
        correctOptionSelected={correctOptionSelected}
        incorrectOptionSelected={incorrectOptionSelected}
      >
        <div className="flex items-center w-full relative">
          <div
            className={`h-14 w-14 rounded-md flex items-center justify-center ${
              selectedOption === index
                ? "bg-[#a729f5] text-white"
                : "bg-[#f4f6fa] text-[#3B4D66] group-hover:bg-[#f6e7ff] group-hover:text-[#a729f5]"
            } ${
              correctAnswerSelected && answer === option ? "bg-green-500" : ""
            } ${incorrectOptionSelected ? "bg-red-500" : ""}`}
          >
            <p
              className={`text-2xl ${
                selectedOption === index
                  ? "text-white"
                  : "text-[#3B4D66] group-hover:text-[#a729f5]"
              }`}
            >
              {optionLetter}
            </p>
          </div>
          <p className="ml-4 text-white text-xl tracking-wide max-w-[76%]">
            {option}
          </p>

          <div className="absolute right-3 flex items-center justify-center w-8 h-8">
            {incorrectOptionSelected && <ErrorIcon />}
            {incorrectAnswerSelected && answer === option && <CorrectIcon />}
          </div>
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
              {question}
            </p>
          </div>
          <div className="mt-48">
            <ProgressBar
              progress={(currentQuestion / quiz.questions.length) * 100}
            />
          </div>
        </div>
        <div className="mt-40 w-[44%] space-y-5">
          {renderAnswerOptionsList}

          <button
            onClick={nextQuestionPrompt ? handleNextQuestion : handleSubmit}
            className="w-[100%] h-24 mt-5 bg-[#a729f5] hover:bg-[#d394fa] text-white text-xl rounded-3xl tracking-wide"
          >
            {nextQuestionPrompt ? "Next Question" : "Submit Answer"}
          </button>
          {showNoSelectionError && <NoOptionSelectedError />}
        </div>
      </div>
    </QuizLayout>
  );
};

export default QuizPage;
