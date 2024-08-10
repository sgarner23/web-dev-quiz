import CssIcon from "@/components/Icons/CssIcon";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import LightDarkToggle from "@/components/LightDarkToggle";
import MenuOption from "@/components/MenuOption";

export default function StartMenu() {
  return (
    <div className="min-h-screen bg-[#313E51] relative overflow-hidden">
      <div className="absolute top-[-389px] left-[-315px] w-[815px] h-[815px] bg-[#313E51] border-[95px] border-[#2E3A48] rounded-full opacity-75 z-0"></div>

      <div className="absolute bottom-[-389px] right-[-315px] w-[815px] h-[815px] bg-[#313E51] border-[95px] border-[#2E3A48] rounded-full opacity-75 z-0"></div>

      <div className="z-50 relative pt-24 pr-32 pl-32">
        <div className="flex justify-end">
          <LightDarkToggle />
        </div>
        <div className="flex mt-24 justify-between">
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
          <div className="w-[50%] space-y-6">
            <MenuOption icon={<HtmlIcon />} text="HTML" route="/quiz/html" />
            <MenuOption icon={<CssIcon />} text="CSS" route="/quiz/css" />
            <MenuOption
              icon={<JavascriptIcon />}
              text="Javascript"
              route="/quiz/javascript"
            />
            <MenuOption icon={<ReactIcon />} text="React" route="/quiz/react" />
            <MenuOption icon={<MysqlIcon />} text="MySQL" route="/quiz/mysql" />
          </div>
        </div>
      </div>
    </div>
  );
}
