import React from "react";

function DataContent(props) {
  return (
    <div className={props.item.class}>
      {props.item.src}
      <div id="text00">
        <h2 id="p6">{props.item.text1}</h2>
        <p id="p4">{props.item.text2}</p>

        <div id="butbois1">
          <button
            id="bat"
            onclick="window.location.href='https://newz-c60cc.web.app/news'"
            className="buta"
            type="button"
          >
            <small className="bute"> View App </small>
          </button>
          <button
            id="bat"
            className="buta"
            onclick="window.open(https://github.com/YAOfficial/Newzy,'popUpWindow','height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'); return false;"
            type="button"
          >
            <small className="bute">View Code</small>
          </button>
        </div>
      </div>
    </div>
  );
}
export default DataContent;
