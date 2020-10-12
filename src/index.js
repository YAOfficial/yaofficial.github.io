import "./index.css";
import React from "react";
import ReactDom from "react-dom";
import * as serviceWorker from "./serviceWorker";
import DataContent from "./dataContent";
import toData from "./Data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getAllByDisplayValue } from "@testing-library/react";

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

// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
gsap.registerPlugin(ScrollTrigger);

let mn = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: "#MainContent",
    pin: false, // pin the trigger element while active
    start: "top bottom", // when the top of the trigger hits the top of the viewport
    end: "+=400", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});
mn.addLabel("start", { scale: 1 })

  // eslint-disable-next-line no-restricted-globals
  .from("#info", { y: innerWidth * 1 });

let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: "#MainContent",
    pin: false, // pin the trigger element while active
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "+=300", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

tl.addLabel("start", { scale: 0 })
  // eslint-disable-next-line no-restricted-globals
  .from(".css", { x: innerWidth * -1 })

  .addLabel("color")
  // eslint-disable-next-line no-restricted-globals
  .from(".react", { x: innerWidth * -1 })
  .addLabel("ao")
  // eslint-disable-next-line no-restricted-globals
  .from(".html", { x: innerWidth * -1 })
  // eslint-disable-next-line no-restricted-globals
  .from(".javascript", { x: innerWidth * -1 });

let ol = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: ".content0",
    pin: false, // pin the trigger element while active
    start: "top center", // when the top of the trigger hits the top of the viewport
    end: "+=350", // end after scrolling 500px beyond the start
    markers: true,
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },
});

ol.addLabel("great", { scale: 0 })
  // eslint-disable-next-line no-restricted-globals
  .from(".content0", { x: innerWidth * -1 })
  // eslint-disable-next-line no-restricted-globals
  .from("#text00", { x: innerWidth * -1 }, "-=1");
