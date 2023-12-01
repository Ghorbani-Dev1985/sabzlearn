const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<div class="overflow-hidden rounded-2xl h-40">
<a id="RoadmapLink" class="w-full h-full flex justify-center items-center relative bg-gradient-to-r group" title="فرانت اند">
    <div class="flex flex-col items-center text-white text-center">
      <img id="RoadmapImg" alt="ghorbani-dev.ir" />
            <span id="RoadmapTitle" class="font-danaDemiBold text-2xl mt-2.5 block"> </span>
    </div>
    <span id="RoadmapCount" class="absolute top-2.5 left-2.5 w-6 h-6 rounded-full text-center leading-[26px] text-zinc-700 dark:text-white font-danaMedium bg-white dark:bg-gray-800"></span>
</a>
</div>
`;


class Roadmap extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector('#RoadmapLink').setAttribute( 'href' , this.getAttribute('RoadmapLink'))
   this.shadowRoot.querySelector('#RoadmapLink').classList.add(this.getAttribute('RoadmapLinkFromClass'))
   this.shadowRoot.querySelector('#RoadmapLink').classList.add(this.getAttribute('RoadmapLinkToClass'))
   this.shadowRoot.querySelector('#RoadmapImg').setAttribute( 'src' , this.getAttribute('RoadmapImg'))
    this.shadowRoot.querySelector('#RoadmapTitle').innerHTML = this.getAttribute('RoadmapTitle')
    this.shadowRoot.querySelector('#RoadmapCount').innerHTML = this.getAttribute('RoadmapCount')

  }

  static observedAttributes() {
    return ['RoadmapLink' ,'RoadmapLinkFromClass' , 'RoadmapLinkToClass' , 'RoadmapImg' , 'RoadmapTitle' , 'RoadmapCount']
  }
}

export { Roadmap };
