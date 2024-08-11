import LightDarkToggle from "@/components/LightDarkToggle";
import MenuOption from "@/components/MenuOptionWithIcon";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";
import QuizLayout from "@/components/Icons/QuizLayout";
import MenuOptionsQuizList from "@/components/MenuOptionsQuizList";

export default function StartMenu() {
  return (
    <QuizLayout>
      <div className="flex justify-end">
        <LightDarkToggle />
      </div>
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
