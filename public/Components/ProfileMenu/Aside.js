
const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<aside class="bg-gray-100 shadow-xl ml-4 rounded-xl transition-transform duration-300 xl:translate-x-0 py-4">
<div class="m-4">
  <ul class="mb-4 flex flex-col gap-1">
    <li>
      <a href="./index.html" class="NavLinks middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-inherit">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
          </svg>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">نمای کلی</p>
      </a>
    </li>
    <li>
      <a href="./profile_orders.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>            
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">سفارش ها</p>
      </a>
    </li>
    <li>
      <a href="./profile_UserDetails.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>    
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> جزئیات حساب </p>
      </a>
    </li>
    <li>
    <a href="./profile_RegisterCourse.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>        
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">    دوره های من</p>
    </a>
  </li>
    <li>
      <a href="./menus.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
    </svg>        
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">تیکت ها</p>
      </a>
    </li>
    <li id="LogoutBtn" class="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-rose-500 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 cursor-pointer capitalize">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
                             
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> خروج</p>
    </li>
  </ul>
</div>
</aside>
`;

class Aside extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const activePage = window.location.pathname;
    const NavLinks = this.shadowRoot.querySelectorAll(".NavLinks");
    const LogoutBtn = this.shadowRoot.querySelector("#LogoutBtn");
    window.addEventListener('load' , () => {
      NavLinks.forEach(link => {
        if(link.href.includes(`${activePage}`)){
          link.classList.add('active')
        }
      })
    })
    LogoutBtn.addEventListener('click' , () => {
      Swal.fire({
        icon: "warning",
        title: " آیا برای خروج مطمعن هستید؟",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#27272a",
        confirmButtonText: "  خروج ",
        cancelButtonText: "انصراف"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: " خروج با موفقیت انجام شد",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500
          }).then(result => {
            localStorage.removeItem('user')
            location.href = './index.html';
            return true;
          })
        }
      });
     
    })
  }

  static observedAttributes() {}
}

export { Aside };

