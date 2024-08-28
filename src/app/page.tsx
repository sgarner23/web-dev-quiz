import LightDarkToggle from "@/components/LightDarkToggle";
import QuizLayout from "@/components/QuizLayout";
import MenuOptionsQuizList from "@/components/MenuOptionsQuizList";

export default function StartMenu() {
  return (
    <QuizLayout>
      <div className="flex mt-16 justify-between">
        <div className="w-[50%] ml-4">
          <h1 className="text-5xl font-extralight mb-3 tracking-wide text-white">
            Welcome to the
          </h1>
          <h1 className="text-5xl font-bold tracking-wide text-white">
            Web Dev Quiz!
          </h1>
          <p className="italic mt-20 text-[#ABC1E1]">
            Pick a subject to get started.
          </p>
        </div>
        <MenuOptionsQuizList />
      </div>
    </QuizLayout>
  );
}
