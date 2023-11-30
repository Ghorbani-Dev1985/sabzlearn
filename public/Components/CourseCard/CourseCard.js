const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">


`;


class CourseCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
   

  }

  static observedAttributes() {

  }
}

export { CourseCard };
