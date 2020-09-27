import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import app from "./App";
import * as serviceWorker from "./serviceWorker";
const logo = document.querySelectorAll("#logo  path");

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

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

document.getElementById("css1").addEventListener("click", () => {
  document.getElementById("cssbg").classList.toggle("blue");
  document.getElementById("cssbg1").classList.toggle("blue");
  document.getElementById("cssnum1").classList.toggle("white");
  document.getElementById("cssnum2").classList.toggle("white");
  document.getElementById("cssnum3").classList.toggle("white");
  document.getElementById("cssnum4").classList.toggle("white");

  //opens box on click

  let element = document.getElementById("box2");
  document.getElementsByClassName("box3");
  document.getElementById("myDiv2").classList.toggle("show2");
  document.getElementById("box3").classList.remove("box3");
  document.getElementById("box1").classList.remove("box2");
  document.getElementById("myDiv3").classList.remove("show3");
  document.getElementById("myDiv").classList.remove("show");
  element.classList.toggle("box3");

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
});

document.getElementById("js1").addEventListener("click", () => {
  document.getElementById("jsbg").classList.toggle("yellow");
  document.getElementById("jstext").classList.toggle("black");
  document.getElementById("jstext1").classList.toggle("black");

  // opens box on click
  let element = document.getElementById("box3");
  document.getElementsByClassName("box3");
  document.getElementById("myDiv3").classList.toggle("show3");
  document.getElementById("box1").classList.remove("box1");
  document.getElementById("myDiv2").classList.remove("show2");
  document.getElementById("box2").classList.remove("box2");
  document.getElementById("myDiv").classList.remove("show");
  element.classList.toggle("box3");

  // removes html active color on click

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

function html4() {
  let element = document.getElementById("box1");

  document.getElementsByClassName("box2");
  document.getElementById("myDiv").classList.toggle("show");

  element.classList.toggle("box2");
  document.getElementById("myDiv3").classList.remove("show3");
  document.getElementById("box3").classList.remove("box3");
  document.getElementById("box2").classList.remove("box3");
  document.getElementById("myDiv2").classList.remove("show2");
}

function css4() {
  let element = document.getElementById("box2");
  document.getElementsByClassName("box3");
  document.getElementById("myDiv2").classList.toggle("show2");
  document.getElementById("box3").classList.remove("box3");
  document.getElementById("box1").classList.remove("box2");
  document.getElementById("myDiv3").classList.remove("show3");
  document.getElementById("myDiv").classList.remove("show");
  element.classList.toggle("box3");
}

function git() {
  document.getElementById("github").style.fill = "rgb(17, 16, 16)";
}

function got() {
  document.getElementById("github").style.fill = "white";
}

function lin() {
  document.getElementById("linkedin").style.fill = "rgb(31, 143, 248)";
}

function lik() {
  document.getElementById("linkedin").style.fill = "white";
}

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
