import React from "react";

function DataContent(props) {
  return (
    <div className={props.item.class}>
      {props.item.src}
      <div id="text00">
        <h2 id="p6">{props.item.text1}</h2>
        <p id="p4">{props.item.text2}</p>

        <div id="butbois1">
          <a href="https://newz-c60cc.web.app/news">
            <button id="bat" className="buta" type="button">
              <small className="bute"> View App </small>
            </button>
          </a>
          <a
            href="https://github.com/YAOfficial/Newzy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="bat" className="buta" type="button">
              <small className="bute">View Code</small>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default DataContent;
