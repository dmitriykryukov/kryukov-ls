import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";


// window.onscroll = function() {
//   var wScroll = window.pageYOffset;

//   console.log(wScroll);
  
// }