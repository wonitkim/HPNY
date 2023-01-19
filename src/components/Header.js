import { routeChange } from "../router.js";

export default function Header({ $target, type }) {
  const $header = document.createElement("header");
  $target.appendChild($header);
  this.state = type;

  $target.addEventListener("click", (e) => {
    if (e.target.id === "back_btn") {
      routeChange("/");
    }

    if (e.target.tagName === "H1") {
      routeChange("/");
    }
  });

  this.render = () => {
    if (!this.state) {
      console.log("no_state");
      return;
    }

    if (this.state === "main") {
      $header.style.justifyContent = "flex-end";
      $header.innerHTML = `<h1>HPNY</h1>`;
    } else if (this.state === "detail") {
      $header.style.justifyContent = "space-between";
      $header.innerHTML = `<span id='back_btn'></span><h1>HPNY</h1>`;
    }
  };

  this.render();
}
