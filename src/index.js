import "./index.css";
import React from "react";
import ReactDom from "react-dom";
import * as serviceWorker from "./serviceWorker";
import DataContent from "./dataContent";
import toData from "./Data";

class Appo extends React.Component {
  constructor() {
    // eslint-disable-next-line
    super();
    this.state = {
      dato: toData,
    };
  }
  render() {
    const DataContento = this.state.dato.map(
      (item) => <DataContent key={item.id} item={item} />
      // eslint-disable-next-line
    );
    return DataContento;
  }
}
ReactDom.render(<Appo />, document.getElementById("container1"));

document.getElementById("html1").addEventListener("click", () => {
  document.getElementById("bgfill").classList.toggle("orange");
  document.getElementById("bgfill1").classList.toggle("orange");
  document.getElementById("numberfill").classList.toggle("white");
  document.getElementById("numberfill1").classList.toggle("white");
  document.getElementById("numberfill3").classList.toggle("white");
  document.getElementById("numberfill4").classList.toggle("white");

  //opens box on click
  document.getElementById("box1").classList.toggle("tbox1");
  // eslint-disable-next-line
  document.getElementById("myDiv").classList.toggle("shows");
  //removes css active color on click
  //opens box on click
  document.getElementById("box2").classList.remove("tbox2");
  // eslint-disable-next-line
  document.getElementById("myDiv2").classList.remove("shows");
  //opens box on click
  document.getElementById("box3").classList.remove("tbox3");
  // eslint-disable-next-line
  document.getElementById("myDiv3").classList.remove("shows");

  // removes react box on click
  document.getElementById("box4").classList.remove("tbox4");
  // eslint-disable-next-line
  document.getElementById("myDiv4").classList.remove("shows");

  document.getElementById("cssbg").classList.remove("blue");
  document.getElementById("cssbg1").classList.remove("blue");
  document.getElementById("cssnum1").classList.remove("white");
  document.getElementById("cssnum2").classList.remove("white");
  document.getElementById("cssnum3").classList.remove("white");
  document.getElementById("cssnum4").classList.remove("white");

  // removes javascript active color on click

  document.getElementById("jsbg").classList.remove("yellow");
  document.getElementById("jstext").classList.remove("black");
  document.getElementById("jstext1").classList.remove("black");

  // removes  react active color on click
  // removes react box on click

  document.getElementById("rbg1").classList.remove("white");
  document.getElementById("rbg3").classList.remove("white");
  document.getElementById("rbg4").classList.remove("white");
});

document.getElementById("react1").addEventListener("click", () => {
  document.getElementById("rbg1").classList.toggle("white");
  document.getElementById("rbg3").classList.toggle("white");
  document.getElementById("rbg4").classList.toggle("white");
  //opens box on click
  document.getElementById("box4").classList.toggle("tbox4");
  // eslint-disable-next-line
  document.getElementById("myDiv4").classList.toggle("shows");
  //removes css active color on click
  //opens box on click
  document.getElementById("box2").classList.remove("tbox2");
  // eslint-disable-next-line
  document.getElementById("myDiv2").classList.remove("shows");
  //opens box on click
  document.getElementById("box3").classList.remove("tbox3");
  // eslint-disable-next-line
  document.getElementById("myDiv3").classList.remove("shows");

  document.getElementById("box1").classList.remove("tbox1");
  // eslint-disable-next-line
  document.getElementById("myDiv").classList.remove("shows");

  document.getElementById("cssbg").classList.remove("blue");
  document.getElementById("cssbg1").classList.remove("blue");
  document.getElementById("cssnum1").classList.remove("white");
  document.getElementById("cssnum2").classList.remove("white");
  document.getElementById("cssnum3").classList.remove("white");
  document.getElementById("cssnum4").classList.remove("white");

  // removes javascript active color on click

  document.getElementById("jsbg").classList.remove("yellow");
  document.getElementById("jstext").classList.remove("black");
  document.getElementById("jstext1").classList.remove("black");
});

document.getElementById("bat").addEventListener("click", () => {
  window.open("https://newz-c60cc.web.app/news", "_blank");
});
document.getElementById("css1").addEventListener("click", () => {
  document.getElementById("cssbg").classList.toggle("blue");
  document.getElementById("cssbg1").classList.toggle("blue");
  document.getElementById("cssnum1").classList.toggle("white");
  document.getElementById("cssnum2").classList.toggle("white");
  document.getElementById("cssnum3").classList.toggle("white");
  document.getElementById("cssnum4").classList.toggle("white");

  //opens box on click
  document.getElementById("box2").classList.toggle("tbox2");
  // eslint-disable-next-line
  document.getElementById("myDiv2").classList.toggle("shows");
  //opens box on click
  document.getElementById("box1").classList.remove("tbox1");
  // eslint-disable-next-line
  document.getElementById("myDiv").classList.remove("shows");
  //opens box on click
  //opens box on click
  document.getElementById("box3").classList.remove("tbox3");
  // eslint-disable-next-line
  document.getElementById("myDiv3").classList.remove("shows");

  // removes html active color on click
  document.getElementById("bgfill").classList.remove("orange");
  document.getElementById("bgfill1").classList.remove("orange");
  document.getElementById("numberfill").classList.remove("white");
  document.getElementById("numberfill1").classList.remove("white");
  document.getElementById("numberfill3").classList.remove("white");
  document.getElementById("numberfill4").classList.remove("white");

  // removes javascript active color on click
  document.getElementById("jsbg").classList.remove("yellow");
  document.getElementById("jstext").classList.remove("black");
  document.getElementById("jstext1").classList.remove("black");
  document.getElementById("box4").classList.remove("tbox4");
  // eslint-disable-next-line
  document.getElementById("myDiv4").classList.remove("shows");
  document.getElementById("rbg1").classList.remove("white");
  document.getElementById("rbg3").classList.remove("white");
  document.getElementById("rbg4").classList.remove("white");
});

document.getElementById("js1").addEventListener("click", () => {
  document.getElementById("jsbg").classList.toggle("yellow");
  document.getElementById("jstext").classList.toggle("black");
  document.getElementById("jstext1").classList.toggle("black");

  //opens box on click
  document.getElementById("box3").classList.toggle("tbox3");
  // eslint-disable-next-line
  document.getElementById("myDiv3").classList.toggle("shows");
  //opens box on click
  document.getElementById("box2").classList.remove("tbox2");
  // eslint-disable-next-line
  document.getElementById("myDiv2").classList.remove("shows");
  //opens box on click
  document.getElementById("box1").classList.remove("tbox1");
  // eslint-disable-next-line
  document.getElementById("myDiv").classList.remove("shows");
  document.getElementById("box4").classList.remove("tbox4");
  // eslint-disable-next-line
  document.getElementById("myDiv4").classList.remove("shows");
  document.getElementById("rbg1").classList.remove("white");
  document.getElementById("rbg3").classList.remove("white");
  document.getElementById("rbg4").classList.remove("white");

  document.getElementById("bgfill").classList.remove("orange");
  document.getElementById("bgfill1").classList.remove("orange");
  document.getElementById("numberfill").classList.remove("white");
  document.getElementById("numberfill1").classList.remove("white");
  document.getElementById("numberfill3").classList.remove("white");
  document.getElementById("numberfill4").classList.remove("white");

  //removes css active color on click

  document.getElementById("cssbg").classList.remove("blue");
  document.getElementById("cssbg1").classList.remove("blue");
  document.getElementById("cssnum1").classList.remove("white");
  document.getElementById("cssnum2").classList.remove("white");
  document.getElementById("cssnum3").classList.remove("white");
  document.getElementById("cssnum4").classList.remove("white");
});

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
