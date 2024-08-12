import IconWithLabel from "@/components/IconWithLabel";
import React from "react";
import { slugToIconMap } from "@/utils/slugToIconMap";
interface ResultsPageContentProps {
  quizTitle: string;
  correctAnswers: number;
}

const ResultsPageContent: React.FC<ResultsPageContentProps> = ({
  quizTitle,
  correctAnswers,
}) => {
  const quizData = slugToIconMap[quizTitle.toLowerCase()]; // Get the relevant icon and other data

  return (
    <div>
      {quizData && (
        <IconWithLabel
          icon={quizData.icon}
          text={quizData.text}
          iconBackgroundColor={quizData.iconBackgroundColor}
        />
      )}
    </div>
  );
};

export default ResultsPageContent;
