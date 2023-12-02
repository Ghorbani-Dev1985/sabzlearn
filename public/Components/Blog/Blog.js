const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<div class="bg-white rounded-lg shadow-light p-3">
<div class="before:bg-blog-banner after:bg-blog-banner before:content-[''] before:absolute before:-bottom-3 before:left-0 before:w-full before:h-full after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-full relative h-[217px] overflow-hidden">
  <img id="BlogImg" alt="ghorbani-dev.ir" class="block w-full h-full object-cover"/>
</div>
<h4 id="BlogTitle" class="font-danaMedium max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
</h4>
<p id="BlogSummery" class="font-danaLight text-sm h-20 line-clamp-4 text-slate-500 dark:text-slate-400">  </p>
<div class="flex gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs my-2">
  <div class="flex-center gap-x-1 hover:text-primary transition-colors cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>            
   <span id="BlogAuthorName"></span> 
  </div>
  <div class="flex items-center gap-x-1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>            
    <span id="BlogDate"></span>
  </div>
</div>
<!-- line -->
<p class="w-full h-px bg-gray-200 my-2"></p>
<div class="flex-center py-3.5">
  <a id="BlogLink" class="flex-center gap-1 text-zinc-700 dark:text-white hover:text-sabzlearnGreen dark:hover:text-sabzlearnGreen space-x-2.5 font-DanaMd transition-colors">
    مطالعه مقاله
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clip-rule="evenodd" />
    </svg>            
  </a>
</div>
</div>
`;


class Blog extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector('#BlogImg').setAttribute( 'src' , this.getAttribute('BlogImg'))
    this.shadowRoot.querySelector('#BlogTitle').innerHTML = this.getAttribute('BlogTitle')
    this.shadowRoot.querySelector('#BlogSummery').innerHTML = this.getAttribute('BlogSummery')
    this.shadowRoot.querySelector('#BlogAuthorName').innerHTML = this.getAttribute('BlogAuthorName')
    this.shadowRoot.querySelector('#BlogDate').innerHTML = this.getAttribute('BlogDate')
    this.shadowRoot.querySelector('#BlogLink').setAttribute( 'href' , this.getAttribute('BlogLink'))

  }

  static observedAttributes() {
    return ['BlogImg' , 'BlogTitle' ,'BlogSummery' ,'BlogAuthorName' , 'BlogDate' ,   'BlogLink']
  }
}

export { Blog };
