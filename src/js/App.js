export class App {
  #appContainer;

  constructor(appContainer) {
    this.#appContainer = appContainer;
  }

  render() {
    this.#appContainer.innerHTML = "<h1>Hello Vanilla JS APP</h1>";
  }
}
