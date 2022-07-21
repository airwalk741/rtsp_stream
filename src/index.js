import React from "react";
import { render } from "react-dom";
import StreamedianPlayer from "./StreamedianPlayer";
import "./index.css";

const App = () => (
  <div>
    <StreamedianPlayer id="test_video">
      <source
        src="rtsp://admin:1234@106.245.94.78:10010/profile0"
        type="application/x-rtsp"
      />
    </StreamedianPlayer>
  </div>
);

render(<App />, document.getElementById("root"));
