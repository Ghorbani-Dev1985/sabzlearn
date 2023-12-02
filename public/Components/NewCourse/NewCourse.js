const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<div class="flex flex-col overflow-hidden bg-white shadow-light rounded-xl">
<div class="relative">
  <a id="NewCourseLink" class="w-full h-full block">
    <img id="NewCourseImg" alt="ghorbani-dev.ir" />
    <span class="absolute right-2.5 top-2.5 flex-center w-12 h-6 bg-sabzlearnGreen text-white rounded-xl font-DanaBold text-sm">100%</span>
    <div class="px-5 pt-3.5 pb-2.5">
      <h4 id="NewCourseTitle" class="font-DanaBold h-12 line-clamp-2 text-zinc-700"></h4>
      <p id="NewCourseSubtitle"></p>
      <div class="flex-between gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs my-3">
          <div class="flex-center gap-1">
            <div class="flex-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
                <span id="NewCourseTeacher"> </span>         
            </div>
            <div class="flex-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span id="NewCourseTotalTime"></span>
            </div>
          </div>
          <div class="flex-center gap-1 text-amber-500 dir-ltr">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fill-amber-500 w-4 h-4">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
            <span>5.0</span>
          </div>
          <!-- line -->
          <p class="w-full h-px bg-gray-200 my-2"></p>
          <div class="w-full flex-between">
                <div class="flex-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                  <span id="NewCourseTotalStudents" class="font-DanaMd text-lg"></span>
                </div>
                <div class="flex flex-col items-center">
                 <span id="NewCoursePrice" class="line-through"></span>
                 <span class="text-sabzlearnGreen font-DanaMd text-xl space-x-1.5">رایگان!</span>
                </div>
          </div>
      </div>
    </div>
  </a>
</div>
</div>
`;


class NewCourse extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    this.shadowRoot.querySelector('#NewCourseLink').setAttribute( 'href' , this.getAttribute('NewCourseLink'))
    this.shadowRoot.querySelector('#NewCourseImg').setAttribute( 'src' , this.getAttribute('NewCourseImg'))
    this.shadowRoot.querySelector('#NewCourseTitle').innerHTML = this.getAttribute('NewCourseTitle')
    this.shadowRoot.querySelector('#NewCourseTeacher').innerHTML = this.getAttribute('NewCourseTeacher')
    this.shadowRoot.querySelector('#NewCourseTotalTime').innerHTML = this.getAttribute('NewCourseTotalTime')
    this.shadowRoot.querySelector('#NewCourseTotalStudents').innerHTML = this.getAttribute('NewCourseTotalStudents')
this.shadowRoot.querySelector('#NewCoursePrice').innerHTML = this.getAttribute('NewCoursePrice')
  }

  static observedAttributes() {
    return ['NewCourseLink' ,'NewCourseImg' , 'NewCourseTitle' , 'NewCourseTeacher' , 'NewCourseTotalTime' , 'NewCourseTotalStudents' , 'NewCoursePrice']
  }
}

export { NewCourse };
