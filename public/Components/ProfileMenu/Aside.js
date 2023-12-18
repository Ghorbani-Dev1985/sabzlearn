
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
      <a href="./sessions.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
            </svg>
            
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">جلسه های دوره</p>
      </a>
    </li>
    <li>
    <a href="./categories.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
                 
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">  دسته بندی ها</p>
    </a>
  </li>
    <li>
      <a href="./menus.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">منو ها</p>
      </a>
    </li>
    <li>
      <a href="./users.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">   
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>          
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> کاربران</p>
      </a>
    </li>
    <li>
    <a href="./blogs.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">   
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>                 
        <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> مقاله ها</p>
    </a>
  </li>
  <li>
  <a href="./draftBlogs.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">   
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>               
      <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> پیش نویس ها</p>
  </a>
</li>
    <li>
      <a href="./comments.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>                   
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize"> کامنت ها</p>
      </a>
    </li>
    <li>
      <a href="./discount.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>             
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">کدهای تخفیف</p>
      </a>
    </li>
    <li>
      <a href="./campaign.html" class="NavLinks focus:bg-emerald-300 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/10 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>                      
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">  برگزاری کمپین </p>
      </a>
    </li>
    <li>
      <a href="./contacts.html" class="NavLinks focus:bg-emerald-100 middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-white/30 text-zinc-700 active:bg-gradient-to-tr active:from-emerald-600 active:to-emerald-400 active:shadow-md w-full flex items-center gap-4 px-4 capitalize">     
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-inherit">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>             
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">  پیغام ها</p>
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

