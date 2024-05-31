import { Controller } from "@hotwired/stimulus";
// Minimalistic dropdown toggle controller.
// Click to open/close dropdown.
// When clicked, dropdown icon can be changed.
// Dropdown can be open by default, if you set data-mini-dropdown-open-value="true" (closed by default if not set)

export default class extends Controller {
  static targets = ["dropdownContent", "openButton", "closeButton"];
  static values = { open: Boolean };

  connect() {
    console.log("Connected");
    if (this.openValue) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.openButtonTarget.hidden = true;
    this.closeButtonTarget.hidden = false;
    this.dropdownContentTarget.hidden = false;
  }

  closeDropdown() {
    this.openButtonTarget.hidden = false;
    this.closeButtonTarget.hidden = true;
    this.dropdownContentTarget.hidden = true;
  }
}
