import React from "react";
import HtmlIcon from "@/components/Icons/HtmlIcon";
import CssIcon from "@/components/Icons/CssIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import MysqlIcon from "@/components/Icons/MysqlIcon";
import ReactIcon from "@/components/Icons/ReactIcon";

export interface QuizAttributes {
  icon: JSX.Element;
  text: string;
  iconBackgroundColor: string;
}

export type SlugToIconMap = {
  [key: string]: QuizAttributes;
};

export const slugToIconMap: SlugToIconMap = {
  html: {
    icon: React.createElement(HtmlIcon, {}),
    text: "HTML",
    iconBackgroundColor: "#fff1e9",
  },
  css: {
    icon: React.createElement(CssIcon, {}),
    text: "CSS",
    iconBackgroundColor: "#e0fdef",
  },
  javascript: {
    icon: React.createElement(JavascriptIcon, {}),
    text: "Javascript",
    iconBackgroundColor: "#ebf0ff",
  },
  react: {
    icon: React.createElement(ReactIcon, {}),
    text: "React",
    iconBackgroundColor: "#f6e7ff",
  },
  mysql: {
    icon: React.createElement(MysqlIcon, {}),
    text: "MySQL",
    iconBackgroundColor: "#e0f7ff",
  },
};
