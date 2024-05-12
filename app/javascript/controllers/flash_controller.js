import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="flash"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element);
    const node = this.element;

    this.animateCSS("rubberBand").then(() => {
      this.animateCSS("zoomOut").then(() => {
        node.style.visibility = "hidden";

        // Aplica a visibilidade novamente após 30 segundos
        setTimeout(() => {
          node.style.visibility = "visible";
        }, 30000);
      });
    });
  }

  animateCSS(animation) {
    return new Promise((resolve, _reject) => {
      const animationName = `animate__${animation}`;
      const node = this.element;
      node.classList.add("animate__animated", animationName);

      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove("animate__animated", animationName);
        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd);
    });
  }
}
