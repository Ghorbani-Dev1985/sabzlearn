import { GetMe } from "../../assets/scripts/Funcs/Auth.js";
import { isLogin } from "../../assets/scripts/Funcs/Utils.js";
const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="./assets/styles/app.css">
<!-- desktop menu -->
<header class="hidden md:block">
    <!-- top header -->
    <section class="bg-gray-100">      
        <div class="container">
            <!-- top nav container -->
         <div class="flex justify-between items-center py-4 text-sm">
            <!-- right side -->
            <div>
               <nav>
                 <ul class="flex items-center gap-x-3">
                   <div class="flex items-center gap-x-3" id="TopBarMenu">
                   
                   </div>
                    <li class="flex-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                          </svg>
                           2000 تومان                          
                    </li>
                 </ul>
               </nav> 
            </div>
             <!-- left side -->
            <div class="flex-center gap-4 dir-ltr">
                <div class="flex-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                   <a href="mailto:sabzlearn@gmail.com">sabzlearn@gmail.com</a>   
                </div>
                <div class="flex-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-sabzlearnGreen">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    <a href="to:09334008385">09334008385</a>                      
                </div>
            </div>
         </div>
        </div>
    </section>
    <!-- main header -->
    <section class="bg-white">    
    <div class="container">
        <div class="flex-between gap-4 py-6 relative">
            <div class="flex-center gap-2">
               <!-- right side -->
               <a href="./index.html"><img src="./assets/images/logo/Logo.png" alt="logo" /></a>
               <nav>
                <ul id="DesktopNavBody" class="flex-center gap-3">
                   
                </ul>
               </nav>
            </div>
            <!-- left side -->
            <div class="flex-center gap-2">
              
                <a href="#" class="bg-sabzlearnGreen block w-9 h-9 rounded-md flex-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                </a>
                <a href="#" class="bg-gray-200 block w-9 h-9 rounded-md flex-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      <span class="absolute right-1 top-1 flex-center bg-blue-600 text-white w-4 h-4 rounded-full">0</span>
                </a>
              <!-- Login & Register -->
              <div class="LoginRegisterBody relative flex-center text-base xl:text-lg text-white hover:text-white md:h-12 md:w-[155px] xl:w-[180px]">
             
            </div>
        </div>
    </section>
    </div>
</header>
<!-- mobile menu -->
<header class="block md:hidden">
    <section class="bg-gray-100">
        <div class="container">
            <div class="flex-between py-3">
               <!-- drawer init and show -->         
               <div id="MobileNavToggler">
               <button class="text-sabzlearnGreen border border-sabzlearnGreen focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                     </svg> 
                   </button>
                                    
           </div>
                <!-- logo -->
                <div>
                    <img src="./assets/images/logo/Logo.png" alt="logo" class="object-cover" />
                </div>
                <!-- profile icon -->
                <div  class="LoginRegisterBody relative flex-center text-base xl:text-lg text-white hover:text-white md:h-12 md:w-[155px] xl:w-[180px]">
                </div>
                
            </div>

        </div>
    </section>
    <!-- mobile nav -->
<!-- drawer component -->
<div id="drawer-navigation" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-all translate-x-full duration-500 shadow-6 bg-white w-64 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
<button id="CloseDrawer" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
  </svg>
</button>
<div class="py-4 overflow-y-auto">
<div class="flex-center my-3"> <img src="./assets/images/logo/Logo.png" alt="logo" class="object-cover" /></div>
  
<p class="line"></p>
  <ul id="MobileNavBody" class="menu space-y-2 font-medium">
 
  </ul
</div>
</div>
</header>
<section class="Overlay hidden fixed w-full h-full top-0 left-0 bg-black/40 z-30 md:backdrop-blur transition-all cursor-pointer"></section>
`;

class Header extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback() {
    const MobileNavToggler = this.shadowRoot.querySelector("#MobileNavToggler");
    const DrawerNavigation =
      this.shadowRoot.querySelector("#drawer-navigation");
    const CloseDrawer = this.shadowRoot.querySelector("#CloseDrawer");
    const frontEnd = this.shadowRoot.querySelector("#frontEnd");
    const frontEndSubmenu = this.shadowRoot.querySelector("#frontEndSubmenu");
    const Security = this.shadowRoot.querySelector("#Security");
    const SecuritySubmenu = this.shadowRoot.querySelector("#SecuritySubmenu");
    const Blogs = this.shadowRoot.querySelector("#Blogs");
    const BlogsSubmenu = this.shadowRoot.querySelector("#BlogsSubmenu");
    const Python = this.shadowRoot.querySelector("#Python");
    const PythonSubmenu = this.shadowRoot.querySelector("#PythonSubmenu");
    const Overlay = this.shadowRoot.querySelector('.Overlay'); 
    const LoginRegisterBody = this.shadowRoot.querySelectorAll(".LoginRegisterBody"); 
    const DesktopNavBody = this.shadowRoot.querySelector("#DesktopNavBody");
    const MobileNavBody = this.shadowRoot.querySelector("#MobileNavBody");
    
    const GetAndShowAllDesktopMenus = async () => {
      const res = await fetch(`http://localhost:4000/v1/menus`)
      const menus = await res.json()
      menus.forEach((menu) => {
        DesktopNavBody.insertAdjacentHTML('beforeend' , `
        <li class="group relative"><a href="category.html?cat=${menu.href}" class="flex-center gap-1">${menu.title}
          ${menu.submenus.length !== 0 ? `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg> 
        <ul class="w-64 p-5 space-y-4 bg-slate-100 dark:bg-zinc-700 rounded-2xl border-b-4 border-sabzlearnGreen opacity-0 invisible absolute z-10 top-full shadow-6 dark:shadow-none group-hover:opacity-100 group-hover:visible transition-all delay-75 child:line-clamp-1">
         ${
          menu.submenus.map(submenu => ( `<li><a href=''>${submenu.title}</a></li>`)).join('')}       
        </ul>` : ""
          }
            </a>
          </li>`
        )
      })

    }
    GetAndShowAllDesktopMenus()

    const GetAndShowAllMobileMenus = async () => {
      const res = await fetch(`http://localhost:4000/v1/menus`)
      const menus = await res.json()
      menus.forEach((menu) => {
        MobileNavBody.insertAdjacentHTML('beforeend' , `
      
        
        ${menu.submenus.length !== 0 ? `
        <ul>
        <li>
    <details close>
      <summary>${menu.title}</summary>
         
       ${
         menu.submenus.map(submenu => ( `<li><a href=''> ${submenu.title}  </li> `)).join('')}  ` : `  <li><a href="category.html?cat=${menu.href}">${menu.title}</a></li>`      
          } </ul>
          </details>
          </li>
          
        </ul>
         `
        )
      })

    }
    GetAndShowAllMobileMenus()

    // Profile Info
    const isUserLogin = isLogin();
    if (isUserLogin) {
      const userInfos = GetMe().then(data => {
      LoginRegisterBody.forEach((node) => {
          node.innerHTML = `<button class="ShowProfileDropDown flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-slate-500 dark:bg-gray-800 dark:text-gray-500">
       <img src="./assets/images/user.png" alt="Ghorbani-dev.ir" class="object-cover w-16 h-12 rounded-full inline-block" loading="lazy" />
      </button>  
      <section id="Overlay" class="hidden fixed w-full h-full top-0 left-0 bg-black/40 z-40 md:backdrop-blur transition-all cursor-pointer"></section>
      <!-- After Login  -->
      <div class="UserProfileDropdown hidden absolute left-0 top-full pt-4 z-50  transition-all show">
         <div class="w-[278px] bg-white shadow-2xl dark:bg-gray-700 py-5 px-6 rounded-2xl border-b-4 border-sabzlearnGreen">
             <!-- User Info -->
             <div class="flex items-center border-b border-b-gray-200 dark:border-b-slate pb-5 mb-2">
                 <a href="https://sabzlearn.ir/my-account" class="shrink-0">
                     <img src="./assets/images/user.png" alt=${data.username} class="object-cover w-14 h-14 rounded-full inline-block" loading="lazy">
                 </a>
                 <div class="mr-2.5 flex flex-col gap-y-1 overflow-hidden">
                     <span class="text-lg text-zinc-700 dark:text-white inline-block font-DanaBold truncate">${data.name} </span>
                     <span class="text-sm text-sky-500 dark:text-secondary inline-block font-DanaMd">موجودی: 0 تومان</span>
                 </div>
             </div>
             <!-- Dashboard Links -->
                                       <a href="https://sabzlearn.ir/my-account" class="flex items-center justify-between text-zinc-700 dark:text-white px-2.5 h-[46px] rounded-xl hover:bg-gray-100 dark:hover:bg-slate transition-colors">
                     <span class="flex items-center gap-x-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                   </svg>
                         پیشخوان                                </span>
                                           </a>
                                       <a href="https://sabzlearn.ir/my-account/courses" class="flex items-center justify-between text-zinc-700 dark:text-white px-2.5 h-[46px] rounded-xl hover:bg-gray-100 dark:hover:bg-slate transition-colors">
                     <span class="flex items-center gap-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
</svg>
                
                         دوره های من                                </span>
                                           </a>
                                       <a href="https://sabzlearn.ir/my-account/tickets" class="flex items-center justify-between text-zinc-700 dark:text-white px-2.5 h-[46px] rounded-xl hover:bg-gray-100 dark:hover:bg-slate transition-colors">
                     <span class="flex items-center gap-x-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                   </svg>
                   
                   

                   
                         تیکت های پشتیبانی                                </span>
                                           </a>
                                       <a href="https://sabzlearn.ir/my-account/edit-account" class="flex items-center justify-between text-zinc-700 dark:text-white px-2.5 h-[46px] rounded-xl hover:bg-gray-100 dark:hover:bg-slate transition-colors">
                     <span class="flex items-center gap-x-3">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                   </svg>
                   
                         جزئیات حساب                                </span>
                                           </a>
                                   <!-- Logout Link -->
             <div class="mt-2 pt-2 border-t border-t-gray-200 dark:border-t-slate">
               </div>
            <button id="LogoutBtn" class="flex items-center justify-between text-zinc-700 dark:text-white px-2.5 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate transition-colors">
                 <span class="flex items-center gap-x-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
               </svg>
               
                     خروج
                 </span>
                 </button>
             </div>
         </div>
         </div>
      `;
      })  
    
      const ShowProfileDropDown = this.shadowRoot.querySelectorAll('.ShowProfileDropDown')
      const UserProfileDropdown = this.shadowRoot.querySelectorAll('.UserProfileDropdown')
      const Overlay = this.shadowRoot.querySelectorAll(".Overlay");
      const LogoutBtn = this.shadowRoot.querySelector("#LogoutBtn");

          // Logout

    LogoutBtn.addEventListener('click' , () => {
      localStorage.clear('user');
      location.href = './index.html';
    })
    
      ShowProfileDropDown.forEach((drop) => {
        drop.addEventListener('click' , ()=> {
        UserProfileDropdown[0].classList.toggle('hidden')
        UserProfileDropdown[1].classList.toggle('hidden')
        console.log(Overlay);
       Overlay[0].classList.remove('hidden')
       Overlay[1].classList.remove('hidden')
      })
      })
      Overlay.forEach((over) => {
        over.addEventListener('click' , () => {
        UserProfileDropdown[0].classList.add('hidden')
        UserProfileDropdown[1].classList.add('hidden')
        Overlay[0].classList.add('hidden')
       Overlay[1].classList.add('hidden')
      })
      })
    })
    } else {
      LoginRegisterBody.forEach((node) => {
  node.innerHTML = `<a href="./login.html" class="absolute right-0 w-25 xl:w-28 hidden md:flex items-center justify-start h-full bg-sky-500/50 hover:bg-sky-400 hover:text-white rounded-full pr-5 transition-colors">ورود</a>
       <a href="./signUp.html" class="absolute left-0 w-25 xl:w-28 hidden md:flex items-center justify-center h-full bg-sky-500 hover:bg-sky-600 hover:text-white dark:bg-secondary dark:hover:bg-[#3F6CD8] rounded-full z-10 transition-colors">عضویت</a>
       <!-- When Screen Smaller Than 475px, Its Display -->
       <a href="./login.html" class="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-slate-500 dark:bg-gray-800 dark:text-gray-500">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
       <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
     </svg> 
       </a>`;
        
      })

    
    }

    // TopBarMenu
    const RenderTopBarMenus = async () => {
      const TopBarMenu = this.shadowRoot.querySelector("#TopBarMenu"); 
      const res = await fetch(`http://localhost:4000/v1/menus/topbar`)
    const TopBarMenus = await res.json();
    const ShuffledArray = TopBarMenus.sort((a , b) => 0.5 - Math.random());
    ShuffledArray.splice(0 , 5).map((menu) => {
      TopBarMenu.innerHTML += `<li><a href=${menu.href}>${menu.title}</a></li>`
    })
    }
    RenderTopBarMenus();
    


    MobileNavToggler.addEventListener("click", () => {
      DrawerNavigation.classList.toggle("right-64");
      Overlay.classList.remove('hidden')
    });
    CloseDrawer.addEventListener("click", () => {
      DrawerNavigation.classList.remove("right-64");
      Overlay.classList.add('hidden')
    });
    Overlay.addEventListener('click' , () => {
      DrawerNavigation.classList.remove("right-64");
      Overlay.classList.add('hidden')
    })
    // frontEnd.addEventListener("click", () => {
    //   frontEndSubmenu.classList.toggle("hidden");
    //   SecuritySubmenu.classList.add("hidden");
    //   BlogsSubmenu.classList.add("hidden");
    //   PythonSubmenu.classList.add("hidden");
    // });
    // Security.addEventListener("click", () => {
    //   SecuritySubmenu.classList.toggle("hidden");
    //   frontEndSubmenu.classList.add("hidden");
    //   BlogsSubmenu.classList.add("hidden");
    //   PythonSubmenu.classList.add("hidden");
    // });
    // Blogs.addEventListener("click", () => {
    //   BlogsSubmenu.classList.toggle("hidden");
    //   frontEndSubmenu.classList.add("hidden");
    //   SecuritySubmenu.classList.add("hidden");
    //   PythonSubmenu.classList.add("hidden");
    // });
    // Python.addEventListener("click", () => {
    //   PythonSubmenu.classList.toggle("hidden");
    //   frontEndSubmenu.classList.add("hidden");
    //   SecuritySubmenu.classList.add("hidden");
    //   BlogsSubmenu.classList.add("hidden");
    // });
  }

  static observedAttributes() {}
}

export { Header };

