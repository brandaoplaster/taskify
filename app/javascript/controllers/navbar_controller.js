import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu"];
  static values = { isOpen: { type: Boolean, default: false } };

  connect() {
    console.log("Navbar controller connected");
  }

  menu() {
    this.isOpenValue ? this.hide() : this.show();
    this.isOpenValue = !this.isOpenValue;
  }

  show() {
    this.menuTarget.classList.remove("hidden");
  }

  hide() {
    this.menuTarget.classList.add("hidden");
  }
}
