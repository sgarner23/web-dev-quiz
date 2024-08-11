import React from "react";
import MenuOption from "@/components/MenuOptionWithIcon";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";

const MenuOptionsQuizList = () => {
  return (
    <div className="w-[50%] space-y-6">
      <MenuOption
        icon={<HtmlIcon />}
        text="HTML"
        route="/quiz/html"
        iconBackgroundColor="#fff1e9"
      />
      <MenuOption
        icon={<CssIcon />}
        text="CSS"
        route="/quiz/css"
        iconBackgroundColor="#e0fdef"
      />
      <MenuOption
        icon={<JavascriptIcon />}
        text="Javascript"
        route="/quiz/javascript"
        iconBackgroundColor="#ebf0ff"
      />
      <MenuOption
        icon={<ReactIcon />}
        text="React"
        route="/quiz/react"
        iconBackgroundColor="#f6e7ff"
      />
      <MenuOption
        icon={<MysqlIcon />}
        text="MySQL"
        route="/quiz/mysql"
        iconBackgroundColor="#e0f7ff"
      />
    </div>
  );
};

export default MenuOptionsQuizList;
