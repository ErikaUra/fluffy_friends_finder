import { Controller } from "@hotwired/stimulus";

//conects to data-cpontroller="bs-modal"
export default class extends Controller {
  connect() {
    this.modal = new bootstrap.Modal(this.element);
    this.modal.show();
  }

  disconnect() {
    this.modal.hide();
  }

  subtmitEnd(event) {
    this.modal.hide();
  }
}
