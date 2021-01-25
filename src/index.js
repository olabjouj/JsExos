"use strict";

import * as greeting from "./components/greeting";

function render(globalObj) {
  const element = greeting.getElement(globalObj.document);
  const mutateEl = greeting.component(element, html);
  greeting.default(mutateEl, globalObj.document);
}