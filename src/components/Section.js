export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._items = items;
  }

  renderItems() {
    this._items.forEach((element) => {
      this.addItem(this._renderer(element));
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
