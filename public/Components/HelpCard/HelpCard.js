const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<div class="flex items-center flex-wrap xs:flex-nowrap justify-center xs:justify-start text-center xs:text-right gap-6 shadow-light dark:shadow-none bg-white dark:bg-gray-800 dark:border border-gray-700 rounded-2xl p-5">
<div id="HelpCardCircle" class="w-20 h-20 rounded-full bg-conic-gradient shrink-0"></div>
<div class="space-y-2.5">
  <span id="HelpCardTitle" class="text-zinc-700 dark:text-white font-DanaBold text-xl">  </span>
  <p id="HelpCardSubTitle" class="text-slate-500 dark:text-slate-400 font-Dana lg:pl-5 tracking-tight"></p>
</div>
</div>
`;


class HelpCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
   this.shadowRoot.querySelector('#HelpCardCircle').classList.add(this.getAttribute('HelpCardCircleFromClass'))
   this.shadowRoot.querySelector('#HelpCardCircle').classList.add(this.getAttribute('HelpCardCircleToClass'))
   this.shadowRoot.querySelector('#HelpCardCircle').classList.add(this.getAttribute('HelpCardCircleRotate'))
    this.shadowRoot.querySelector('#HelpCardTitle').innerHTML = this.getAttribute('HelpCardTitle')
    this.shadowRoot.querySelector('#HelpCardSubTitle').innerHTML = this.getAttribute('HelpCardSubTitle')

  }

  static observedAttributes() {
    return ['HelpCardCircleFromClass' , 'HelpCardCircleToClass' , 'HelpCardCircleRotate' , 'HelpCardTitle' , 'HelpCardSubTitle']
  }
}

export { HelpCard };
