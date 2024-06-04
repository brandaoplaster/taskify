import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["dropdown"];
  static values = { isOpen: { type: Boolean, default: false } };

  connect() {
    console.log("Dropdown controller connected");
  }

  toggle() {
    this.isOpenValue ? this.hide() : this.show();
    this.isOpenValue = !this.isOpenValue;
  }

  show() {
    console.log(this.dropdownTarget.classList);
    this.dropdownTarget.classList.remove("hidden");
  }

  hide() {
    this.dropdownTarget.classList.add("hidden");
  }
}
