import React from "react";
const toData = [
  {
    class: "content0",

    src: <img id="imglogo" src={require("./sw.png")} />,
    text1: "Forum/News app",
    text2: (
      <a
        href="https://www.solidsail.com/courses/hacker-news"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built a news app following the
        https://www.solidsail.com/courses/hacker-news tutorial
      </a>
    ),
  },

  {
    class: "content0",
    src: <img src={require("./react-seeklogo.com.svg")} />,
    text1: "Lorem Ipsum",
    text2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nes",
  },
];

export default toData;
