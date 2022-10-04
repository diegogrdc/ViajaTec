import React from "react";
import "./404.css";

const FourOhFour = () => {
  return (
    <div class="mainbox">
      <div class="err">404</div>
      <div class="msg">
        Oh no! Looks like this page does not exist or has been moved somewhere else.
        <p>
          Let's go <a class="backBtn" href="/">home</a> and try from there.
        </p>
      </div>
    </div>
  );
};

export default FourOhFour;
