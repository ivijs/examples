import { setupScheduler, invalidateHandler, render, statelessComponent } from "ivi";
import { div } from "ivi-html";

const Hello = statelessComponent<string>((text) => (
  div().c(`Hello ${text}!`)
));

setupScheduler(invalidateHandler);

render(Hello("World"), document.getElementById("app")!);
