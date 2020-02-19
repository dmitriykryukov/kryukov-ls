import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

var Flickity = require('flickity');

import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/reviews";
import "./scripts/feedback";


