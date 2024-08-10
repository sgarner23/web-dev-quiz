import React from "react";

interface QuizPageProps {
  params: {
    slug: string;
  };
}

const QuizPage: React.FC<QuizPageProps> = ({ params }) => {
  const { slug } = params;
  return <div>{`QuizPage ${slug}`} </div>;
};

export default QuizPage;
